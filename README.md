# Elise Coiffure — Site Vitrine

Site vitrine pour le salon **Elise Coiffure**, situé à Soisy-sur-Seine. Il présente les prestations, les tarifs et permet aux clients de prendre rendez-vous en ligne.

---

## Présentation

Ce projet est une application web développée avec **Next.js**, **React** et **TypeScript**. Elle offre au salon une présence en ligne professionnelle avec une interface claire, responsive et moderne.

---

## Fonctionnalités

- **Accueil** — Section hero de présentation du salon avec photo et description
- **Tarifs** — Liste complète des prestations et de leurs prix (coupes, colorations, soins, coiffures événementielles)
- **Prise de rendez-vous** — Formulaire de réservation en ligne (nom, téléphone, service, date, message)
- **Navigation** — Barre de navigation avec liens rapides vers les tarifs et la réservation
- **Footer** — Coordonnées complètes du salon (adresse, téléphone, email)

---

## Technologies

| Technologie | Version | Rôle |
|-------------|---------|------|
| Next.js | 16.1.6 | Framework React (routing, rendu, optimisation images) |
| React | 19.2.3 | Construction des composants UI |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Mise en forme et responsive design |

---

## Structure du projet

```
Coiffeur_Site_Vitrine/
├── app/
│   ├── layout.tsx          # Layout global de l'application
│   ├── page.tsx            # Page principale
│   ├── globals.css         # Styles globaux
│   └── favicon.ico
├── components/
│   ├── Hero.tsx            # Section accueil, tarifs et formulaire de réservation
│   ├── Navbar.tsx          # Barre de navigation
│   ├── Header.tsx          # En-tête
│   └── Footer.tsx          # Pied de page avec coordonnées
├── public/
│   └── images/             # Photos du salon
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- npm (inclus avec Node.js)

### Étapes

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/nicolas234567/Coiffeur_Site_Vitrine.git
   cd Coiffeur_Site_Vitrine
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

   Le site est accessible sur `http://localhost:3000`.

### Autres commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm run start` | Lance le serveur en mode production |
| `npm run lint` | Analyse le code avec ESLint |

---

## Personnalisation

Pour modifier les informations du site :

1. **Nom et description** — Modifier les textes dans `components/Hero.tsx` et `components/Navbar.tsx`
2. **Tarifs** — Mettre à jour la liste des prestations dans `components/Hero.tsx`
3. **Coordonnées** — Modifier l'adresse, le téléphone et l'email dans `components/Footer.tsx`
4. **Images** — Remplacer les fichiers dans `public/images/`
5. **Styles** — Ajuster les classes Tailwind dans chaque composant


