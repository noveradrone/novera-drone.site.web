# Deploiement Vercel (etapes exactes)

## 1) Verifier le site en local
```bash
cd "/Users/ozturk/Documents/New project/novera-drone"
npm install
npm run dev
```
Ouvrir `http://localhost:3000` et verifier que tout est bon.

## 2) Pousser le projet sur GitHub
```bash
cd "/Users/ozturk/Documents/New project"
git add novera-drone
git commit -m "feat: launch Novera Drone premium website"
git push
```

## 3) Importer sur Vercel
- Aller sur https://vercel.com/new
- Choisir le repository qui contient `novera-drone`
- Root Directory: `novera-drone`
- Framework Preset: Next.js
- Cliquer Deploy

## 4) Ajouter le domaine (optionnel mais recommande)
- Dans Vercel: Project > Settings > Domains
- Ajouter votre domaine (ex: `noveradrone.fr`)
- Configurer les DNS demandes par Vercel

## 5) Mettre a jour l'URL SEO
Quand le domaine final est actif, modifier:
- `app/layout.tsx` -> `const siteUrl = "https://votre-domaine"`
- `app/robots.ts` -> sitemap avec votre domaine
- `app/sitemap.ts` -> `base` avec votre domaine

Puis redeployer:
```bash
cd "/Users/ozturk/Documents/New project"
git add novera-drone
git commit -m "chore: set production domain"
git push
```

## 6) Controle final
- Ouvrir le site en production
- Tester formulaire contact (mailto)
- Verifier mobile + desktop
- Lancer Lighthouse (Chrome DevTools) et viser > 90
