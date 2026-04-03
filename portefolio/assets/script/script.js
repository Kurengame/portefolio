const logo = document.getElementById('fanlogo');
const satellites = document.querySelectorAll('.satellite');
const instruction = document.getElementById('Instruction');

logo.addEventListener('click', () => {

  logo.classList.remove('rotate-anticlockwise');
  void logo.offsetWidth; // force reflow
  logo.classList.add('rotate-anticlockwise');


  satellites.forEach(icon => icon.classList.remove('show'));

  
  setTimeout(() => {
    satellites.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add('show');
      }, i * 500); 
    });
  }, 2000);
  instruction.innerHTML = "<h2>Cliquez sur un des logos pour en lire son contenu</h2>";
});

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

const contents = {

  "icon-cv": `
    <div class="cv-card">
      <img src="assets/img/PhotoProfil.jpg" alt="Photo de profil" class="cv-photo">
      <h2>Prénom : Cyril</h2>
      <h2>Nom  : Thibault</h2>
      <p>Âge : 30 ans</p>
      <p>Permis B + Véhicule</p>
      <p>Adresse : 18 Route d'Offémont 60170 Saint Crépin aux bois</p>
      <br>
      <hr>
      <br>
    </div>
       <div class="cv-cols">
        <!-- Colonne gauche : compétences -->
        <section class="cv-col">
          <h3>🛠️ Compétences</h3></br>

          <h4>Front-end</h4>
          <ul class="cv-list">
            <li>HTML5, CSS3, JavaScript, Windev, Webdev</li>
            <li>React / Vite • UI state, composants</li>
            <li>Accessibilité, responsive</li>
          </ul>

          <h4>Back-end</h4>
          <ul class="cv-list">
            <li>PHP • WordPress (plugins)</li>
            <li>Node.js basique (API), MySQL/SQL</li>
            <li>Auth, CRUD, sécurité de base</li>
          </ul>

          <h4>Design</h4>
          <ul class="cv-list">
            <li>Figma/Adobe XD (maquettes)</li>
            <li>Design system, typographie, couleurs</li>
            <li>Intégration pixel-perfect</li>
          </ul>

          <h4>Gestion de projet</h4>
          <ul class="cv-list">
            <li>Git/GitHub (flow), issues/PR</li>
            <li>Scrum/Kanban (Trello/Jira)</li>
            <li>Specs, roadmap, suivi qualité</li>
          </ul>

          <h4>Langues</h4>
          <ul class="cv-list">
            <li>Anglais niveau B2 Confirmé</li>
          </ul>
        </section>

        <!-- Colonne droite : soft skills -->
        <section class="cv-col">
          <h3>🤝 Qualités humaines</h3></br>
          <ul class="cv-chips">
            <li>Sociable</li>
            <li>Empathique</li>
            <li>Sympathique</li>
            <li>Disponible</li>
            <li>Respectueux</li>
          </ul>

          <div class="cv-note">
            <p>Habitué au travail en équipe, communication claire avec les profils non techniques, autonomie et sens du service.</p>
            <p>Créatif et force de proposition, j’aime transformer une idée en produit concret.</p>
            <p>Persévérant face aux problèmes techniques et attentif à la qualité du code.</p>
            <p>Polyvalent, capable de travailler aussi bien sur le front-end que sur la logique applicative.</p>
            <p>Curieux des nouvelles technologies et toujours en veille pour progresser.</p>          </div>
        </section>
      </div>
    </div>
  `,




 "icon-entreprise": `
    <div class="entreprise-card">
      <img src="assets/img/logowebspot.png" alt="Logo Webspot" class="brand-logo" />

      <p class="tagline"><strong>Webspot</strong>, une entreprise jeune, dirigée par des vétérans de l’informatique.</p>

      <p>
        Fondée en 2024 par <strong>Olivier Franchaud</strong> et <strong>Jean-Noël Thibault</strong>,
        deux des meilleurs développeurs d’Electolux. Nous concevons des applications
        <strong>web</strong>, <strong>mobile</strong> et <strong>bureau</strong> : du prototype au déploiement,
        avec une exigence de performance, d’accessibilité et de sécurité.
      </p>

      <p>
        Notre équipe privilégie l’écoute, la proximité et des cycles courts pour livrer
        des produits utiles, élégants et maintenables.
      </p>

      <img src="assets/img/photoequipe.jpg" alt="Équipe Webspot" class="team-photo" />
      <p class="human">Un esprit <em>humain</em> et <em>convivial</em> au cœur de Webspot.</p>
    </div>
  `,


"icon-messites": `
<div class="sites-card">

  <h2>Mes sites</h2>

  <!-- Site 1 : GOA -->
  <div class="site">


    <img src="assets/img/projetperso/Goa.png" alt="Galaxia of Amarion" class="site-image">

    <p>
      <strong>Galaxia of Amarion</strong> est un projet né de mon amour du jeu de rôle papier.
      L'objectif est de proposer un outil permettant la création et la modification
      de fiches personnages afin de participer à une aventure dans un univers
      de <strong>médiéval fantasy futuriste aux enjeux cosmiques</strong>.
    </p>

    <p>
      Le projet n'en est encore qu'à ses balbutiements, mais l'objectif à terme
      est de permettre aux joueurs de créer leurs propres tables de jeu et de
      vivre l'aventure directement sur le site.
    </p>

    <div class="site-button-container">
      <a href="http://galaxia-of-amarion.local" target="_blank" class="site-button">
        Voir le site
      </a>
    </div>
  </div>

  <hr class="site-sep">

 
  <div class="site">
    <h3>JamTogether</h3>

    <img src="assets/img/projetperso/JT1.png" alt="JamTogether" class="site-image">

    <p>
      <strong>JamTogether</strong> est le site qui me tient le plus à cœur. Projet né d'une
      véritable problématique vécue par un proche et moi-même, JamTogether est un outil
      permettant aux musiciens de rechercher d'autres musiciens et de former un groupe de musique.
    </p>

    <p>
      Une fois réunis, l'utilisateur peut accéder au mur du groupe et partager des messages afin
      de transmettre des informations vitales dans un groupe : la liste des musiques, les besoins
      en personnel, ou simplement échanger avec ses camarades.
    </p>

    <p class="jt-slogan">
      <strong>JamTogether</strong>, Unis par la musique.<br>
      <span>Jam. Connect. Create.</span>
    </p>


    <div class="site-button-container">
      <a href="http://jamtogether.local" target="_blank" class="site-button">Voir le site</a>
    </div>
   
  </div>

</div>
`
  ,



"icon-projets": `
<div class="projets-card">

  <h2>Mes projets</h2>

  <h3>Critère</h3>

<p>
  Voici un tableur Excel réalisé dans le cadre de ma formation BTS SIO.
  Il permet de suivre et valider les compétences acquises lors de ma formation et de mon travail.
</p>
<img src="assets/img/projetperso/tableur1.png" alt="Critère Excel" class="projet-image">
<img src="assets/img/projetperso/tableur2.png" alt="Critère Excel" class="projet-image">




<div style="margin-top: 15px;">
  <a href="Critère.xlsx" target="_blank" class="btn btn--primary">
     Voir le tableur
  </a>
</div>

  <div class="projet">
    <h3>Ws Backup</h3>

    <img src="assets/img/projetperso/WSBackup1.png" alt="Ws Backup" class="projet-image">
    
     <p>
      <strong>Ws Backup</strong> est un projet interne développé pour l'entreprise Webspot.
      Son objectif est simple : automatiser la sauvegarde quotidienne de tous les sites
      web gérés par l'équipe.
    </p>

    <p>
      Le projet repose sur un script PHP exécuté automatiquement chaque jour. Celui-ci
      lit un fichier JSON contenant les informations nécessaires à la sauvegarde
      de chaque serveur.
    </p>
    <img src="assets/img/projetperso/WSBackup2.png" alt="Ws Backup" class="projet-image">
        <p>
      Ce fichier JSON centralise les données essentielles :
    </p>

    
      <p>Nom du serveur</p>
      <p>Emplacement du dossier à archiver</p>
      <p>Hôte du serveur</p>
      <p>Identifiants SSH ou FTP selon le protocole utilisé</p>
    

    <p>
      Une fois ces informations récupérées, le script se connecte au serveur concerné,
      archive les fichiers nécessaires et déclenche la sauvegarde automatisée.
      Cette approche permet de centraliser et sécuriser la gestion des sauvegardes
      pour l'ensemble des projets Webspot.
    </p>

  </div>
    </br></br>
    <img src="assets/img/projetperso/WSBackup3.png" alt="Ws Backup" class="projet-image">

    <p>
      Ce projet a été réalisé en s'appuyant principalement sur la documentation officielle de PHP
      et sur des connaissances fondamentales en développement. L'objectif était de démontrer
      qu'avec une bonne compréhension des bases et une utilisation rigoureuse de la documentation,
      il est possible de concevoir rapidement un outil fiable et fonctionnel.
    </p>
    <h3>Event Generator</h3>

    <img src="assets/img/projetperso/FC2.png" alt="Event Generator" class="projet-image">
    <img src="assets/img/projetperso/FC1.png" alt="Event Generator" class="projet-image">

    <p>
        <strong>Event Generator</strong> est un plugin WordPress développé pour répondre
        aux besoins spécifiques d'un client utilisant le plugin <strong>WP Event Manager</strong>.
    </p>

    <p>
        L'objectif du projet était de simplifier la gestion des événements pour les
        administrateurs du site. Le plugin permet de générer facilement un événement
        et de l'organiser automatiquement dans un tableau accessible directement
        depuis l'interface d'administration de WordPress.
    </p>

    <p>
        La problématique principale était l'accessibilité : <strong>WP Event Manager</strong>
        était uniquement disponible en anglais au moment du développement, et aucun
        patch français n'existait encore. Cela rendait son utilisation difficile pour
        les utilisateurs du client.
    </p>

    <p>
        J'ai donc développé <strong>Event Generator</strong> comme une interface
        simplifiée permettant de créer et gérer les événements plus facilement,
        tout en proposant une alternative au système d'inscription natif de
        WP Event Manager, jugé trop complexe pour les besoins réels du client.
    </p>

    <p>
        Ce plugin agit ainsi comme une couche supplémentaire entre l'utilisateur
        et WP Event Manager, rendant l'expérience plus intuitive et adaptée
        aux attentes du client.
    </p>
    `

  
  
  
};

document.querySelectorAll('.satellite').forEach(icon => {
  icon.addEventListener('click', () => {
    const cls = [...icon.classList].find(c => contents[c]); 
    if(cls){
      modalBody.innerHTML = contents[cls];
      modal.style.display = "flex";
    }
  });
});

closeBtn.addEventListener('click', () => modal.style.display = "none");

window.addEventListener('click', (e) => {
  if(e.target === modal) modal.style.display = "none";
});
