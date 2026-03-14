# NovaTech — Web Design Era Archive

An interactive time machine that shows how the same company's website would have looked and felt across 30 years of web history. Switch between six eras and watch everything transform — layout, typography, color, icons, interactions, and the company's entire identity.

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)

---

## What It Does

Every era is a full redesign — not just a colour swap. The company's products, language, pricing model, icons, and interaction patterns all change to reflect what the web actually looked and behaved like at that time.

| Era | Design Style | Company Identity |
|-----|-------------|-----------------|
| **1995** | HTML tables · Win95 chrome · system fonts · blinking text · hit counter | Shrink-wrap PC software, ordered by phone |
| **2000** | Dark dot-com · neon glow · stock ticker · Impact font · angled buttons | Internet portal & e-commerce platform |
| **2005** | Glossy pill buttons · rounded corners · gradients · RSS icons · "beta" badge | Ajax-powered Web 2.0 collaboration tools |
| **2010** | Facebook blue · social share buttons · App Store badges · avatar initials | Mobile-first productivity apps |
| **2015** | Material Design · flat hot-pink · card shadows · hamburger menu | Cloud infrastructure for developers |
| **2025** | Dark minimal · glassmorphism navbar · lime accent · thin SVG icons | AI-native developer platform |

---

## Era Reference Sites

Real websites that defined the aesthetic of each period.

**1995**
- [Space Jam (1996)](https://www.spacejam.com/1996/) — the original site, still live
- [Cameron's World](https://www.cameronsworld.net/) — a love letter to the 90s web
- [Web Design Museum · 1995](https://www.webdesignmuseum.org/gallery?era=1&year=1995)

**2000**
- [Yahoo via Wayback (2000)](https://web.archive.org/web/20000101002827/http://www.yahoo.com/)
- [Amazon via Wayback (1999)](https://web.archive.org/web/19991012022616/http://www.amazon.com/)
- [Web Design Museum · 2000](https://www.webdesignmuseum.org/gallery?era=2&year=2000)

**2005**
- [Basecamp via Wayback (2005)](https://web.archive.org/web/20051001000000*/basecamp.com)
- [Digg via Wayback (2006)](https://web.archive.org/web/20060101000000*/digg.com)
- [Web Design Museum · Web 2.0](https://www.webdesignmuseum.org/gallery?era=3)

**2010**
- [Dropbox via Wayback (2010)](https://web.archive.org/web/20101001000000*/dropbox.com)
- [Twitter via Wayback (2010)](https://web.archive.org/web/20100601000000*/twitter.com)

**2015**
- [Stripe via Wayback (2015)](https://web.archive.org/web/20150601000000*/stripe.com)
- [Material Design Spec](https://m2.material.io/design)
- [Flat UI Kit](https://designmodo.github.io/Flat-UI/)

**2025**
- [Vercel](https://vercel.com)
- [Linear](https://linear.app)
- [Resend](https://resend.com)

---

## Tech Stack

- **React 18** — component architecture
- **Vite 5** — build tool and dev server
- **Tailwind CSS** — utility classes
- **Framer Motion** — era transition animations
- **SVG icon sets** drawn per era — no external icon libraries

---

## Project Structure

```
src/
├── App.jsx          — era switching, timeline bar, loading overlay
├── components.jsx   — all page sections × 6 eras
├── eraConfig.js     — all per-era content and config
└── styles.css       — CSS system (.era-1995 … .era-2025)
```

---

```bash
npm install
npm run dev
```
