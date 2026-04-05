import type { Translations } from "@/i18n/translations";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  t: Translations;
  onGetStarted: () => void;
}

function CityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Capture non-nullable refs for closures
    const c: HTMLCanvasElement = canvas;
    const g: CanvasRenderingContext2D = ctx;

    let animId: number;
    let W = 0;
    let H = 0;

    // ---- Scene objects ----

    interface Star {
      x: number;
      y: number;
      r: number;
      phase: number;
      speed: number;
    }
    const stars: Star[] = [];
    function initStars() {
      stars.length = 0;
      for (let i = 0; i < 80; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H * 0.45,
          r: Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.8,
        });
      }
    }

    interface BuildingWindow {
      col: number;
      row: number;
      lit: boolean;
      flickerPhase: number;
      flickerSpeed: number;
    }
    interface Building {
      x: number;
      w: number;
      h: number;
      windows: BuildingWindow[];
    }
    const buildings: Building[] = [];
    function initBuildings() {
      buildings.length = 0;
      const groundY = H * 0.62;
      let x = 0;
      while (x < W + 60) {
        const w = 40 + Math.random() * 80;
        const h = 80 + Math.random() * (groundY * 0.75);
        const floors = Math.floor(h / 18);
        const cols = Math.floor(w / 14);
        const windows: BuildingWindow[] = [];
        for (let row = 0; row < floors; row++) {
          for (let col = 0; col < cols; col++) {
            if (Math.random() < 0.55) {
              windows.push({
                col,
                row,
                lit: Math.random() < 0.7,
                flickerPhase: Math.random() * Math.PI * 2,
                flickerSpeed: 0.3 + Math.random() * 1.2,
              });
            }
          }
        }
        buildings.push({ x, w, h, windows });
        x += w + 4 + Math.random() * 8;
      }
    }

    interface Drone {
      x: number;
      y: number;
      vx: number;
      vy: number;
      blinkPhase: number;
      size: number;
      altitude: number;
    }
    const drones: Drone[] = [];
    function initDrones() {
      drones.length = 0;
      for (let i = 0; i < 4; i++) {
        const dir = Math.random() < 0.5 ? 1 : -1;
        drones.push({
          x: dir > 0 ? -60 : W + 60,
          y: H * (0.1 + Math.random() * 0.35),
          vx: dir * (0.4 + Math.random() * 0.5),
          vy: (Math.random() - 0.5) * 0.15,
          blinkPhase: Math.random() * Math.PI * 2,
          size: 10 + Math.random() * 8,
          altitude: 0.1 + Math.random() * 0.35,
        });
      }
    }

    interface Searchlight {
      x: number;
      angle: number;
      speed: number;
      dir: number;
      range: number;
    }
    const searchlights: Searchlight[] = [];
    function initSearchlights() {
      searchlights.length = 0;
      searchlights.push({
        x: W * 0.15,
        angle: -0.5,
        speed: 0.003,
        dir: 1,
        range: 0.9,
      });
      searchlights.push({
        x: W * 0.82,
        angle: 0.4,
        speed: 0.0025,
        dir: -1,
        range: 0.7,
      });
    }

    interface Particle {
      x: number;
      y: number;
      vy: number;
      vx: number;
      r: number;
      life: number;
      maxLife: number;
      alpha: number;
    }
    const particles: Particle[] = [];
    const smokeEmitters: { x: number; y: number }[] = [];
    function initSmokeEmitters() {
      smokeEmitters.length = 0;
      const groundY = H * 0.62;
      for (let i = 0; i < 5; i++) {
        const bIdx = Math.floor(Math.random() * buildings.length);
        const b = buildings[bIdx];
        if (b) {
          smokeEmitters.push({
            x: b.x + b.w * 0.5 + (Math.random() - 0.5) * b.w * 0.3,
            y: groundY - b.h,
          });
        }
      }
    }

    interface Siren {
      x: number;
      phase: number;
      speed: number;
    }
    const sirens: Siren[] = [];
    function initSirens() {
      sirens.length = 0;
      for (let i = 0; i < 6; i++) {
        sirens.push({
          x: (W / 7) * (i + 0.5) + (Math.random() - 0.5) * 30,
          phase: Math.random() * Math.PI * 2,
          speed: 2 + Math.random() * 2,
        });
      }
    }

    // ---- Resize ----
    function resize() {
      const rect = c.getBoundingClientRect();
      W = c.width = rect.width * window.devicePixelRatio;
      H = c.height = rect.height * window.devicePixelRatio;
      initStars();
      initBuildings();
      initDrones();
      initSearchlights();
      particles.length = 0;
      initSmokeEmitters();
      initSirens();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(c);
    resize();

    // ---- Draw helpers ----
    function drawSky(t: number) {
      const sky = g.createLinearGradient(0, 0, 0, H * 0.65);
      sky.addColorStop(0, "#050a18");
      sky.addColorStop(0.5, "#0a1428");
      sky.addColorStop(1, "#0f1e3a");
      g.fillStyle = sky;
      g.fillRect(0, 0, W, H);

      const glow = g.createRadialGradient(
        W / 2,
        H * 0.65,
        0,
        W / 2,
        H * 0.65,
        W * 0.7,
      );
      glow.addColorStop(
        0,
        `rgba(200, 100, 20, ${0.22 + 0.04 * Math.sin(t * 0.0008)})`,
      );
      glow.addColorStop(
        0.4,
        `rgba(120, 50, 10, ${0.12 + 0.02 * Math.sin(t * 0.0008)})`,
      );
      glow.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = glow;
      g.fillRect(0, H * 0.2, W, H * 0.6);
    }

    function drawStars(t: number) {
      for (const s of stars) {
        const alpha = 0.5 + 0.5 * Math.sin(t * s.speed * 0.001 + s.phase);
        g.beginPath();
        g.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        g.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        g.fill();
      }
    }

    function drawSearchlights() {
      const groundY = H * 0.62;
      for (const sl of searchlights) {
        sl.angle += sl.speed * sl.dir;
        if (Math.abs(sl.angle) > sl.range) sl.dir *= -1;
        const len = H * 0.9;
        const ex = sl.x + Math.sin(sl.angle) * len;
        const ey = groundY - Math.cos(Math.abs(sl.angle)) * len;
        const beam = g.createLinearGradient(sl.x, groundY, ex, ey);
        beam.addColorStop(0, "rgba(200, 230, 255, 0.18)");
        beam.addColorStop(0.6, "rgba(180, 210, 255, 0.06)");
        beam.addColorStop(1, "rgba(180, 210, 255, 0)");
        g.beginPath();
        g.moveTo(sl.x - 6, groundY);
        g.lineTo(sl.x + 6, groundY);
        g.lineTo(ex + 18, ey);
        g.lineTo(ex - 18, ey);
        g.closePath();
        g.fillStyle = beam;
        g.fill();
        g.beginPath();
        g.arc(sl.x, groundY - 2, 4, 0, Math.PI * 2);
        g.fillStyle = "rgba(180,210,255,0.7)";
        g.fill();
      }
    }

    function drawBuildings(t: number) {
      const groundY = H * 0.62;
      for (const b of buildings) {
        g.fillStyle = "#060c1a";
        g.fillRect(b.x, groundY - b.h, b.w, b.h);
        g.fillStyle = "rgba(30,50,90,0.4)";
        g.fillRect(b.x, groundY - b.h, 2, b.h);

        const colW = b.w / Math.max(1, Math.floor(b.w / 14));
        const rowH = 18;
        for (const win of b.windows) {
          const flicker = Math.sin(
            t * win.flickerSpeed * 0.001 + win.flickerPhase,
          );
          if (!win.lit || flicker <= -0.95) continue;
          const wx = b.x + win.col * colW + colW * 0.2;
          const wy = groundY - b.h + win.row * rowH + 4;
          const ww = colW * 0.55;
          const wh = rowH * 0.6;
          const warmColor =
            Math.random() < 0.3 ? "rgba(255,220,120," : "rgba(255,200,80,";
          const winGlow = g.createRadialGradient(
            wx + ww / 2,
            wy + wh / 2,
            0,
            wx + ww / 2,
            wy + wh / 2,
            ww * 1.5,
          );
          winGlow.addColorStop(0, `${warmColor}0.6)`);
          winGlow.addColorStop(1, "rgba(255,180,50,0)");
          g.fillStyle = winGlow;
          g.fillRect(wx - ww, wy - wh, ww * 3, wh * 3);
          g.fillStyle = `rgba(255, ${160 + Math.floor(flicker * 30)}, 60, 0.85)`;
          g.fillRect(wx, wy, ww, wh);
        }

        if (b.h > 100) {
          g.strokeStyle = "rgba(60,80,120,0.8)";
          g.lineWidth = 1.5;
          g.beginPath();
          g.moveTo(b.x + b.w / 2, groundY - b.h);
          g.lineTo(b.x + b.w / 2, groundY - b.h - 20);
          g.stroke();
          const blink = Math.sin(t * 0.002 + b.x * 0.1);
          if (blink > 0) {
            g.beginPath();
            g.arc(b.x + b.w / 2, groundY - b.h - 20, 2.5, 0, Math.PI * 2);
            g.fillStyle = `rgba(255,50,50,${blink * 0.9})`;
            g.fill();
          }
        }
      }
    }

    function drawStreetLevel(t: number) {
      const groundY = H * 0.62;
      const street = g.createLinearGradient(0, groundY, 0, H);
      street.addColorStop(0, "#080d1a");
      street.addColorStop(0.3, "#0a1020");
      street.addColorStop(1, "#050910");
      g.fillStyle = street;
      g.fillRect(0, groundY, W, H - groundY);
      g.fillStyle = "rgba(20,40,80,0.3)";
      g.fillRect(0, groundY, W, 3);

      for (const s of sirens) {
        const phase = t * s.speed * 0.001 + s.phase;
        const isRed = Math.sin(phase) > 0;
        const intensity = Math.abs(Math.sin(phase * 2));
        const lightGrad = g.createRadialGradient(
          s.x,
          groundY + 2,
          0,
          s.x,
          groundY + 2,
          40,
        );
        const color = isRed
          ? `rgba(255,40,40,${intensity * 0.35})`
          : `rgba(50,100,255,${intensity * 0.35})`;
        lightGrad.addColorStop(0, color);
        lightGrad.addColorStop(1, "rgba(0,0,0,0)");
        g.fillStyle = lightGrad;
        g.fillRect(s.x - 40, groundY, 80, H * 0.15);
        g.beginPath();
        g.arc(s.x, groundY + 8, 4, 0, Math.PI * 2);
        g.fillStyle = isRed
          ? `rgba(255,60,60,${0.6 + intensity * 0.4})`
          : `rgba(80,120,255,${0.6 + intensity * 0.4})`;
        g.fill();
      }
    }

    function drawDrones(t: number) {
      for (const d of drones) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y < H * 0.05) d.vy = Math.abs(d.vy);
        if (d.y > H * d.altitude + H * 0.1) d.vy = -Math.abs(d.vy);
        if (d.x > W + 80) d.x = -80;
        if (d.x < -80) d.x = W + 80;

        const sz = d.size;
        const blink = Math.sin(t * 0.003 + d.blinkPhase) > 0;

        g.fillStyle = "rgba(40,60,100,0.9)";
        g.beginPath();
        g.roundRect(d.x - sz * 0.35, d.y - sz * 0.15, sz * 0.7, sz * 0.3, 3);
        g.fill();
        g.beginPath();
        g.roundRect(d.x - sz * 0.15, d.y - sz * 0.35, sz * 0.3, sz * 0.7, 3);
        g.fill();
        g.fillStyle = "rgba(60,90,150,0.95)";
        g.beginPath();
        g.arc(d.x, d.y, sz * 0.2, 0, Math.PI * 2);
        g.fill();

        const armAngle = t * 0.008;
        const armOffsets: [number, number][] = [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ];
        for (const [ax, ay] of armOffsets) {
          const rx = d.x + ax * sz * 0.42;
          const ry = d.y + ay * sz * 0.42;
          g.beginPath();
          g.arc(rx, ry, sz * 0.22, 0, Math.PI * 2);
          g.fillStyle = "rgba(80,110,160,0.18)";
          g.fill();
          g.save();
          g.translate(rx, ry);
          g.rotate(armAngle * (ax * ay > 0 ? 1 : -1));
          g.strokeStyle = "rgba(100,140,200,0.7)";
          g.lineWidth = 1.5;
          g.beginPath();
          g.moveTo(-sz * 0.2, 0);
          g.lineTo(sz * 0.2, 0);
          g.stroke();
          g.restore();
        }

        if (blink) {
          g.beginPath();
          g.arc(d.x, d.y - sz * 0.15, 3, 0, Math.PI * 2);
          g.fillStyle = "rgba(255,40,40,0.95)";
          g.fill();
          const droneGlow = g.createRadialGradient(
            d.x,
            d.y - sz * 0.15,
            0,
            d.x,
            d.y - sz * 0.15,
            12,
          );
          droneGlow.addColorStop(0, "rgba(255,40,40,0.4)");
          droneGlow.addColorStop(1, "rgba(255,40,40,0)");
          g.fillStyle = droneGlow;
          g.fillRect(d.x - 12, d.y - sz * 0.15 - 12, 24, 24);
        }

        const spotGrad = g.createRadialGradient(
          d.x,
          d.y + sz,
          0,
          d.x,
          d.y + sz * 2,
          sz * 3,
        );
        spotGrad.addColorStop(0, "rgba(180,200,255,0.12)");
        spotGrad.addColorStop(1, "rgba(0,0,0,0)");
        g.fillStyle = spotGrad;
        g.fillRect(d.x - sz * 3, d.y, sz * 6, sz * 6);
      }
    }

    function drawSmoke() {
      if (particles.length < 120) {
        for (const e of smokeEmitters) {
          if (Math.random() < 0.3) {
            particles.push({
              x: e.x + (Math.random() - 0.5) * 8,
              y: e.y,
              vx: (Math.random() - 0.5) * 0.4,
              vy: -(0.3 + Math.random() * 0.6),
              r: 4 + Math.random() * 10,
              life: 0,
              maxLife: 120 + Math.random() * 80,
              alpha: 0,
            });
          }
        }
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.r += 0.06;
        p.life++;
        p.alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.12;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        g.beginPath();
        g.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        g.fillStyle = `rgba(60,70,90,${p.alpha})`;
        g.fill();
      }
    }

    function drawVignette() {
      const vg = g.createRadialGradient(
        W / 2,
        H / 2,
        H * 0.3,
        W / 2,
        H / 2,
        W * 0.8,
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.55)");
      g.fillStyle = vg;
      g.fillRect(0, 0, W, H);
    }

    function render(t: number) {
      g.clearRect(0, 0, W, H);
      drawSky(t);
      drawSearchlights();
      drawStars(t);
      drawBuildings(t);
      drawStreetLevel(t);
      drawSmoke();
      drawDrones(t);
      drawVignette();
      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl"
      style={{ display: "block" }}
    />
  );
}

export function HeroSection({ t, onGetStarted }: HeroSectionProps) {
  return (
    <section className="bg-hero pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight font-display">
                <span className="text-brand-blue">{t.heroTitle1}</span>
                <br />
                <span className="text-foreground">{t.heroTitle2}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                type="button"
                onClick={onGetStarted}
                className="px-8 py-3.5 rounded-full bg-brand-amber text-white font-bold text-base hover:bg-brand-amber-hover active:scale-95 transition-all shadow-md"
                data-ocid="hero.primary_button"
              >
                {t.heroGetStarted}
              </button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-brand-blue" />
                </div>
                <span>
                  <strong className="text-foreground font-bold">
                    {t.heroPeopleJoined}
                  </strong>{" "}
                  {t.heroPeopleJoinedLabel}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Animated canvas city scene */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <CityCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
