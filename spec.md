# KWTD - Know What To Do

## Current State
- Landing page with Footer showing 3 links: Privacy Policy, Terms of Service, Contact (mailto)
- Email throughout codebase uses `wishlist@kwtd.app`
- No policy modal components
- No cookie consent banner
- translations.ts has `footerContact`, `footerPrivacy`, `footerTerms` keys in all 24 languages
- No `footerGdpr`, `cookieBanner*` translation keys

## Requested Changes (Diff)

### Add
- `src/frontend/src/data/policies.ts` — standalone file with full text of 3 documents: Terms of Use, Privacy Policy, RODO/GDPR Policy. English only for now, structured for easy future editing. Organization: STOWARZYSZENIE SPLET, KRS 0001196062, NIP 7011278984, REGON 542802292, Aleje Jerozolimskie 123A/18 Piętro, 02-017 Warszawa, Polska. Effective date: 01.04.2026.
- `src/frontend/src/components/PolicyModal.tsx` — generic modal that accepts a title + content string, renders with scroll area
- `src/frontend/src/components/CookieBanner.tsx` — fixed bottom banner with Accept/Decline buttons. Persists choice in localStorage (`kwtd_cookie_consent`). Disappears after choice. Supports all 24 languages via translations.

### Modify
- `Footer.tsx` — remove Contact link/section entirely. Add RODO/GDPR link alongside Privacy Policy and Terms. All 3 links open PolicyModal. Replace `wishlist@kwtd.app` email with `contact@kwtd.eu`.
- `WishlistForm.tsx` — no functional changes (form still collects emails locally)
- `translations.ts` — add `footerGdpr` key to Translations interface + all 24 languages. Add `cookieBannerText`, `cookieAccept`, `cookieDecline` keys to all 24 languages. Replace email in footer brand section.
- `App.tsx` — import and render `<CookieBanner>` and `<PolicyModal>`. Add state: `policyModalOpen`, `policyModalTitle`, `policyModalContent`. Pass handlers to Footer.

### Remove
- `footerContact` key references in Footer.tsx (keep key in translations for backward compat)
- Contact mailto link from footer

## Implementation Plan
1. Write `policies.ts` with full English texts for all 3 documents
2. Create `PolicyModal.tsx` component
3. Create `CookieBanner.tsx` component
4. Update `translations.ts` — add 3 new keys to interface + all 24 language objects
5. Update `Footer.tsx` — remove contact, add GDPR link, wire modal handlers, fix email
6. Update `App.tsx` — add state, render CookieBanner + PolicyModal
7. Validate (lint + build)
