# FutsalProv-MVP

**Licence : Propriétaire – utilisation interdite sans autorisation**  
© 2025 NevCenter

Ce logiciel est destiné uniquement à des tests internes ou démonstrations auprès de partenaires autorisés (ex. comité provincial pilote).  
Toute copie, redistribution ou utilisation commerciale sans accord écrit est interdite.

## Description

FutsalProv-MVP est un logiciel minimal pour la gestion des compétitions de futsal au niveau provincial en Belgique. Il couvre :

- Calendriers et résultats
- Arbitrage
- Discipline (cartons et suspensions)

L'objectif est de simplifier le quotidien des comités provinciaux, clubs et arbitres en fournissant un outil plus accessible et moderne que les solutions existantes.

## Tech Stack

- Frontend : React, Redux, React Router
- Backend / BDD : Supabase (Postgres, Auth, fonctions SQL)
- Notifications : Email via Supabase ou service externe

## Installation

1. Cloner le repo :

   ```bash
   git clone https://github.com/FinishedNote/FutsalProv-MVP
   cd FutsalProv-MVP
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

# Roadmap

1. **Fonctionnalités à venir**

   - Gestion des utilisateurs et des rôles
   - Intégration d'un système de paiement pour les inscriptions
   - Amélioration de l'interface utilisateur

2. **Contributions**

   - Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

3. **Suivi des problèmes**
   - Utilisez le système de suivi des problèmes GitHub pour signaler des bogues ou demander des fonctionnalités.
