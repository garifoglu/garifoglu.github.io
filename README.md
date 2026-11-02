# Gökhan Arifoglu – Portfolio

Personal portfolio website about my work in digital pedagogy, EdTech and AI, including my 2026 work at Humak University of Applied Sciences (Moodle to Canvas migration, H5P conversion, Canvas administration).

Built with Next.js, Tailwind CSS and Framer Motion. Light and dark mode included.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

| What | File |
| --- | --- |
| Menu links | `utils/AnchorsHeader.ts` |
| Work at Humak, stats, H5P workflow | `utils/ProjectInfo.ts` |
| Skills, education, earlier experience | `utils/SiteData.ts` |
| Email, phone, LinkedIn | `utils/ContactSocials.ts` |
| Hero and About texts | `components/organisms/Hero.tsx`, `About.tsx` |

## Deploy

Push to GitHub and import the repository in [Vercel](https://vercel.com). No environment variables are needed.

## Credits

Based on the MIT-licensed [Simple Dark Portfolio Template](https://github.com/sarahdewitt/portfolio-template) by Sarah De Witt. See `LICENSE.md`.
