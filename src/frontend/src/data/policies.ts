/**
 * KWTD Policy Documents
 * To update a policy, edit the corresponding string below.
 * Organization: STOWARZYSZENIE SPLET
 * Effective date: 01.04.2026
 */

export interface PolicyDocument {
  title: string;
  content: string;
}

export const ORGANIZATION = {
  name: "STOWARZYSZENIE SPLET",
  krs: "0001196062",
  nip: "7011278984",
  regon: "542802292",
  address: "Aleje Jerozolimskie 123A / 18 Pi\u0119tro, 02-017 Warszawa, Polska",
  email: "contact@kwtd.eu",
  website: "https://kwtd.eu",
  effectiveDate: "01.04.2026",
};

export const termsOfUse: PolicyDocument = {
  title: "Terms of Use",
  content: `Terms of Use
Effective Date: 01.04.2026

1. ACCEPTANCE OF TERMS
By accessing and using the KWTD website, operated by STOWARZYSZENIE SPLET (KRS: 0001196062, NIP: 7011278984, REGON: 542802292), Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska, you agree to be bound by these Terms of Use.

2. DESCRIPTION OF SERVICE
KWTD is an informational and educational platform focused on civil safety and emergency preparedness. The Service currently provides educational content on emergency scenarios, a self-assessment quiz, and a wishlist registration form. No premium content, paid subscriptions, or user accounts are currently offered.

3. ELIGIBILITY
By using the Service, you represent that you are at least 16 years of age.

4. INTELLECTUAL PROPERTY
All content, logos, images, text, and software on the Service are the property of STOWARZYSZENIE SPLET or its licensors. You may not reproduce, distribute, or create derivative works without prior written permission.

5. DISCLAIMER OF WARRANTIES
The Service and all content are provided "as is" without any warranties, express or implied. The educational content is for general informational purposes only and does not constitute professional emergency, medical, legal, or safety advice. Always follow instructions from official emergency services and authorities in your region.

6. LIMITATION OF LIABILITY
To the fullest extent permitted by applicable law, STOWARZYSZENIE SPLET shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the Service.

7. MODIFICATIONS TO TERMS
STOWARZYSZENIE SPLET reserves the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.

8. GOVERNING LAW
These Terms are governed by the laws of Poland. Any disputes shall be subject to the jurisdiction of the courts of Warsaw, Poland.

9. CONTACT
STOWARZYSZENIE SPLET
Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska
Email: contact@kwtd.eu`,
};

export const privacyPolicy: PolicyDocument = {
  title: "Privacy Policy",
  content: `Privacy Policy
Effective Date: 01.04.2026

This Privacy Policy describes how STOWARZYSZENIE SPLET (KRS: 0001196062, NIP: 7011278984, REGON: 542802292), Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska ("we", "us", "our"), collects, uses, and protects your personal data.

1. DATA CONTROLLER
STOWARZYSZENIE SPLET
Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska
Email: contact@kwtd.eu

2. PERSONAL DATA WE COLLECT
- Email address: when you voluntarily submit it via the wishlist registration form
- Technical data: IP address, browser type, device information collected automatically via server logs
- Cookie data: as described in our RODO/GDPR Policy

3. PURPOSE AND LEGAL BASIS
- Email address: to notify you about the launch of the KWTD application. Legal basis: your consent (Art. 6(1)(a) GDPR).
- Technical data: for security and functionality. Legal basis: legitimate interests (Art. 6(1)(f) GDPR).

4. DATA RETENTION
- Email addresses: retained until consent is withdrawn or up to 24 months after collection.
- Technical/log data: retained for up to 12 months.

5. YOUR RIGHTS UNDER GDPR
- Right of access (Art. 15)
- Right to rectification (Art. 16)
- Right to erasure / right to be forgotten (Art. 17)
- Right to restriction of processing (Art. 18)
- Right to data portability (Art. 20)
- Right to object (Art. 21)
- Right to withdraw consent at any time
- Right to lodge a complaint with UODO (www.uodo.gov.pl)

To exercise your rights: contact@kwtd.eu

6. DATA SHARING
We do not sell, rent, or trade your personal data. We may share data with hosting providers acting under data processing agreements, or with public authorities if required by law. All data is processed within the EEA.

7. DATA SECURITY
We implement appropriate technical and organizational measures to protect your personal data.

8. CONTACT
STOWARZYSZENIE SPLET
Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska
Email: contact@kwtd.eu`,
};

export const gdprRodoPolicy: PolicyDocument = {
  title: "RODO / GDPR Policy",
  content: `RODO / GDPR Cookie and Data Processing Policy
Effective Date: 01.04.2026

This document explains how STOWARZYSZENIE SPLET uses cookies and similar technologies on the KWTD website, in compliance with GDPR and Polish RODO law.

1. WHAT ARE COOKIES?
Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and provide information to website operators.

2. COOKIES WE USE

Necessary Cookies (always active)
These cookies are essential for the website to function and cannot be disabled:
- Session management
- Cookie consent preference storage (kwtd_cookie_consent)

Analytics Cookies (requires consent)
These cookies help us understand how visitors interact with the website:
- Page view statistics
- User session analytics
- Performance monitoring

Functional Cookies (requires consent)
These cookies enable enhanced functionality:
- Language preference
- UI preferences

3. YOUR COOKIE CHOICES
When you first visit the website, you will see a cookie consent banner. You may:
- Accept all cookies: enables analytics and functional cookies
- Decline: only necessary cookies will be used

You can change your preferences at any time by clearing your browser cookies and revisiting the site.

4. LEGAL BASIS
- Necessary cookies: legitimate interests (Art. 6(1)(f) GDPR)
- Analytics and functional cookies: your consent (Art. 6(1)(a) GDPR)

5. DATA RETENTION
Cookie consent preferences are stored for up to 12 months. Analytics data is retained in aggregated, anonymized form.

6. YOUR RIGHTS
You have the right to withdraw cookie consent at any time and to lodge a complaint with UODO (Urzad Ochrony Danych Osobowych): www.uodo.gov.pl

7. CONTACT
STOWARZYSZENIE SPLET
Aleje Jerozolimskie 123A / 18 Pietro, 02-017 Warszawa, Polska
Email: contact@kwtd.eu`,
};
