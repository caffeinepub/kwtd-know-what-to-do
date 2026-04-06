import type { Translations } from "@/i18n/translations";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  photo: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alesia Shcharbina",
    role: "co-founder & CEO",
    email: "a.shcharbina@kwtd.eu",
    linkedin: "https://www.linkedin.com/in/alesia-shcharbina-280636217",
    photo: "/assets/file-019d64ee-ee6f-71ad-91fd-e8c3c3833d5d.jpg",
  },
  {
    name: "Vera Gritsel",
    role: "co-founder & CPO",
    email: "v.gritsel@kwtd.eu",
    linkedin: "https://www.linkedin.com/in/vera-gritsel-21705a209",
    photo: "/assets/file-019d64ee-ec89-7514-a885-b35f4ae3fa4b.jpeg",
  },
  {
    name: "Dmytro Dokimchuk",
    role: "co-founder & COO",
    email: "d.dokimchuk@kwtd.eu",
    linkedin: "https://www.linkedin.com/in/dmytro-dokimchuk",
    photo: "/assets/file-019d64ee-ec06-7539-92e3-cca755338990.jpeg",
  },
];

interface TeamSectionProps {
  t: Translations;
}

export function TeamSection({ t }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
            {t.teamTitle}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              data-ocid={`team.item.${i + 1}`}
            >
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-5 ring-2 ring-border">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 capitalize">
                {member.role}
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  data-ocid={`team.link.${i + 1}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${member.name}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  data-ocid={`team.link.${i + 2}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
