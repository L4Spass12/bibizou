/**
 * ════════════════════════════════════════════════════════════════════
 *  SITE CONFIG — Source de vérité pour chaque site dérivé du template
 * ════════════════════════════════════════════════════════════════════
 *
 *  CE FICHIER EST LE SEUL POINT D'ENTRÉE pour configurer un nouveau site.
 *  Si tu changes ces valeurs, le site entier reflète les changements
 *  (titre, SEO, légal, branding, contenu d'accueil, etc.).
 *
 *  Pour créer un nouveau site, suis la checklist AGENTS.md à la racine.
 *
 *  CONVENTION : tout ce qui est entre ⚠ et ⚠ est SITE-SPÉCIFIQUE.
 *  Le reste (logique i18n, structure i18n.locale, etc.) est générique.
 */
const config = {
  // ⚠ ─── Identité ──────────────────────────────────────────────────── ⚠
  name: 'Bibizou',
  url: 'https://bibizou.com',
  description: "Bibizou – Tapis de jeu et d'éveil pour bébé : doux, colorés, sécurisés. Tapis puzzle, tapis d'activité et accessoires pour l'éveil de votre enfant.",
  // Logo affiché dans le Header : <logoPrefix><logoSuffix in accent color>
  logoPrefix: 'Bibi',
  logoSuffix: 'zou',

  // ⚠ ─── Réseaux sociaux (laisser vide '' si pas de compte) ─────────── ⚠
  socials: {
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  // ─── Internationalisation (logique générique, à ne pas modifier sauf pour
  //     activer/désactiver une locale ou changer les devises par marché) ────
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de'],
    plannedLocales: [],
    locale: {
      fr: { label: 'Français', short: 'FR', htmlLang: 'fr-FR', ogLocale: 'fr_FR', currency: 'EUR' },
      en: { label: 'English',  short: 'EN', htmlLang: 'en',    ogLocale: 'en_US', currency: 'USD' },
      de: { label: 'Deutsch',  short: 'DE', htmlLang: 'de-DE', ogLocale: 'de_DE', currency: 'EUR' },
    },
    fxRates: { EUR: 1, USD: 1.1765 },
    fxUpdatedAt: '2026-05-12T13:04:59.002Z',
  },

  // ⚠ ─── Boutique (Atelier via Cloudflare Worker + Stripe) ─────────── ⚠
  shop: {
    enabled: true,
    provider: 'atelier',
    currency: 'EUR',
    // Slug URL de la page boutique : /<path>/ et /<lang>/<path>/.
    // Adapte selon ton site (ex: 'shop', 'produits-bebe', 'tapis-de-souris',
    // 'kitchen', etc.). Affecte automatiquement tous les liens internes.
    path: 'boutique',
    // ID unique du shop dans Supabase seamless-cart. Le worker l'utilise
    // pour récupérer ta clé Stripe, ton mode test/live, ta TVA, etc.
    // Crée le shop via l'admin du worker AVANT de déployer le site.
    atelierShopId: 'e8fcd5ff-5f44-4a17-89b2-90fe1f12874c',
    // Slug du produit "personnalisable" (CTA "Personnaliser mon X") — laisse
    // null si pas de produit personnalisé sur ce site.
    customProductSlug: null,
    // Préfixe stripé des labels de catégorie dans Header/breadcrumbs.
    categoryLabelPrefix: '',
    // Slugs de catégories utilisés comme "tailles" sur la fiche produit
    sizeCategorySlugs: ['tapis-jeu-xxl', 'tapis-jeu-large', 'tapis-jeu-standard'],
    // Catégories "features" transversales
    featureCategorySlugs: ['tapis-eveil-arche', 'tapis-jeu-pliable'],
  },

  // ⚠ ─── Formulaires (Web3Forms — gratuit, illimité) ─────────────────── ⚠
  // 1. Crée un compte sur https://web3forms.com avec ton email
  // 2. Colle ton "Access Key" dans web3formsKey
  // 3. Les soumissions contact + newsletter arrivent par email
  forms: {
    web3formsKey: 'A_REMPLIR',
    contactEmail: 'contact@bibizou.com',
    subjectPrefix: 'Bibizou',
  },

  // ⚠ ─── Catégories du BLOG (3 entrées max, conserver les keys utilisées
  //       par tes content/blog/*.md frontmatter `category`) ─────────────── ⚠
  categories: ["Tapis d'éveil & jeu", "Guide d'achat bébé", 'Éveil & développement'],
  categorySlugs: {
    "Tapis d'éveil & jeu": 'tapis-eveil-jeu',
    "Guide d'achat bébé": 'guide-achat-bebe',
    'Éveil & développement': 'eveil-developpement',
  },

  // ⚠ ─── Catégories PRODUITS ─────────────────────────────────────────── ⚠
  productCategories: [
    { slug: 'tapis-jeu-doux',      label: 'Tapis de jeu doux' },
    { slug: 'tapis-puzzle-mousse', label: 'Tapis puzzle mousse' },
    { slug: 'tapis-eveil-arche',   label: "Tapis d'éveil avec arche" },
    { slug: 'tapis-jeu-xxl',       label: 'Tapis de jeu XXL' },
    { slug: 'tapis-jeu-pliable',   label: 'Tapis de jeu pliable' },
    { slug: 'veilleuses',          label: 'Veilleuses' },
    { slug: 'parc-bebe-pliable',     label: 'Parc pour bébé pliable' },
    { slug: 'piscine-a-balles-bebe', label: 'Piscine à balles bébé' },
  ],

  // ⚠ ─── Génération d'articles IA (workflow Mon/Wed/Fri 8h UTC) ─────── ⚠
  article: {
    // Contexte court du site, injecté dans le prompt Claude
    context: "un site français spécialisé dans les tapis de jeu et d'éveil pour bébé, les tapis puzzle en mousse et les accessoires pour l'éveil du nourrisson et du jeune enfant",
    theme: "les tapis de jeu bébé (doux, puzzle, XXL, pliables), l'éveil sensoriel, le développement moteur du nourrisson, la décoration chambre bébé et les conseils pour jeunes parents",
    cta: "Découvrir la sélection Bibizou et trouver le tapis idéal pour l'éveil de votre bébé",
    author: "Équipe Bibizou",
    unsplashContext: "baby play mat infant nursery",
    coverFallbackKeyword: "tapis éveil bébé",
  },

  // ⚠ ─── Mentions légales (coordonnées de l'éditeur du site) ─────────── ⚠
  // Pour BuddyPad et tous les futurs sites de Quentin Amat (EI), ces
  // données restent identiques. Si un nouveau site est édité par une
  // autre entité (SAS, SARL, etc.), c'est ici qu'il faut adapter.
  legal: {
    // Format affiché dans les CGV / mentions / politique de confidentialité
    editor: {
      name: 'Quentin Amat',
      status: 'entrepreneur individuel',
      address: "123 rue d'Isly, 59100 Roubaix",
      phone: '06 27 29 34 43',
      email: 'contact@bibizou.com',
      vatStatus: 'Franchise en base de TVA - TVA non applicable, art. 293 B du CGI',
    },
    hosting: {
      name: 'Hostinger International Ltd',
      address: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
      contactUrl: 'https://www.hostinger.fr/contact',
    },
    // Domaine affiché dans les pages légales (sans http://). Auto-dérivé de
    // `url` ci-dessus si laissé vide.
    domain: '',
  },

  // ⚠ ─── Contenu de la HOMEPAGE (testimonials + FAQs + sections) ─────── ⚠
  // Pour chaque nouveau site, regénérer ces 3 blocs (4 témoignages, 5
  // questions FAQ, 5 sliders de catégories produits).
  home: {
    // Alt text de l'image hero (visible aux lecteurs d'écran + Google Images)
    heroImageAlt: "Bébé jouant sur un tapis d'éveil Bibizou coloré et doux",

    guideLinks: {
      gaming: 'tapis-jeu-doux',
      xxl: 'tapis-jeu-xxl',
    },

    categoryRows: [
      {
        slug: 'tapis-jeu-doux',
        labels: { fr: 'Tapis doux', en: 'Soft mats', de: 'Weiche Matten' },
        glow1: 'rgba(255, 180, 120, 0.18)', glow2: 'rgba(255, 220, 160, 0.12)',
      },
      {
        slug: 'tapis-puzzle-mousse',
        labels: { fr: 'Puzzle mousse', en: 'Foam puzzle', de: 'Schaumstoff-Puzzle' },
        glow1: 'rgba(120, 200, 255, 0.16)', glow2: 'rgba(80, 160, 255, 0.12)',
      },
      {
        slug: 'tapis-eveil-arche',
        labels: { fr: "Tapis d'éveil", en: 'Activity mats', de: 'Spielbögen' },
        glow1: 'rgba(180, 120, 255, 0.18)', glow2: 'rgba(220, 160, 255, 0.12)',
      },
      {
        slug: 'tapis-jeu-xxl',
        labels: { fr: 'Format XXL', en: 'XXL size', de: 'XXL-Format' },
        glow1: 'rgba(100, 220, 160, 0.16)', glow2: 'rgba(60, 180, 120, 0.12)',
      },
      {
        slug: 'veilleuses',
        labels: { fr: 'Veilleuses', en: 'Night lights', de: 'Nachtlichter' },
        glow1: 'rgba(255, 240, 120, 0.16)', glow2: 'rgba(255, 200, 80, 0.10)',
      },
    ],

    testimonials: {
      fr: [
        { name: 'Sophie M.',   text: "Ma fille adore son tapis d'éveil ! Les couleurs sont vives, les matières très douces et elle s'amuse dessus pendant des heures. Je recommande à 100%." },
        { name: 'Lucas D.',    text: "Très bonne qualité, le tapis est épais et confortable. Mon fils rampe dessus sans se faire mal aux genoux. Livraison rapide et emballage soigné." },
        { name: 'Emma R.',     text: "Les tapis puzzle sont parfaits pour la chambre de bébé. Faciles à assembler, faciles à nettoyer et les designs sont vraiment jolis. On est ravis !" },
        { name: 'Thomas B.',   text: "Acheté comme cadeau de naissance, la jeune maman était ravie. Le tapis est doux, coloré et sécurisé. Un vrai coup de cœur." },
      ],
      en: [
        { name: 'Sophie M.',   text: "My daughter loves her activity mat! The colors are vibrant, the materials very soft and she plays on it for hours. 100% recommended." },
        { name: 'Lucas D.',    text: "Great quality, the mat is thick and comfortable. My son crawls on it without hurting his knees. Fast delivery and careful packaging." },
        { name: 'Emma R.',     text: "The puzzle mats are perfect for the baby's room. Easy to assemble, easy to clean and the designs are really lovely. We're thrilled!" },
        { name: 'Thomas B.',   text: "Bought as a birth gift, the young mom was delighted. The mat is soft, colorful and safe. Truly love it." },
      ],
      de: [
        { name: 'Sophie M.',   text: "Meine Tochter liebt ihre Spielmatte! Die Farben sind leuchtend, die Materialien sehr weich und sie spielt stundenlang darauf. 100% empfehlenswert." },
        { name: 'Lucas D.',    text: "Sehr gute Qualität, die Matte ist dick und bequem. Mein Sohn krabbelt darauf ohne sich die Knie zu verletzen. Schnelle Lieferung und sorgfältige Verpackung." },
        { name: 'Emma R.',     text: "Die Puzzlematten sind perfekt fürs Babyzimmer. Einfach zusammenzubauen, leicht zu reinigen und die Designs sind wirklich schön. Wir sind begeistert!" },
        { name: 'Thomas B.',   text: "Als Geburtsgeschenk gekauft, die junge Mutter war begeistert. Die Matte ist weich, bunt und sicher. Absolut verliebt." },
      ],
    },

    faqs: {
      fr: [
        { q: "Comment choisir le bon tapis de jeu pour son bébé ?",
          a: "Le choix dépend de l'âge et des besoins de votre enfant. Pour les nouveau-nés (0-6 mois), optez pour un tapis d'éveil avec arche et jouets suspendus pour stimuler la vue et la motricité. Pour les bébés qui commencent à ramper (6-12 mois), un grand tapis doux ou un tapis puzzle XXL offre l'espace nécessaire. Privilégiez toujours des matières non toxiques, certifiées CE, lavables et sans BPA." },
        { q: "Les tapis puzzle en mousse sont-ils sans danger pour bébé ?",
          a: "Oui, à condition de choisir des tapis certifiés sans formamide, sans BPA et conformes aux normes européennes CE. Tous nos tapis puzzle sont testés et certifiés pour les bébés dès la naissance. Ils sont également résistants à l'eau et se nettoient facilement avec un chiffon humide." },
        { q: "Quelle taille de tapis choisir pour la chambre de bébé ?",
          a: "Pour une chambre standard, un tapis de 120×120 cm couvre une belle surface de jeu. Si vous souhaitez couvrir toute une zone du salon ou une grande chambre, optez pour un format XXL (150×200 cm ou plus). Les tapis puzzle ont l'avantage de s'adapter à n'importe quelle surface car vous pouvez ajouter ou retirer des dalles selon vos besoins." },
        { q: "Comment nettoyer un tapis de jeu bébé ?",
          a: "La plupart de nos tapis se nettoient très facilement avec un chiffon humide et un peu de savon doux. Les tapis en mousse EVA sont imperméables, donc un simple essuyage suffit. Pour les tapis tissu plus épais, vérifiez l'étiquette — certains passent en machine à 30°C. Évitez le sèche-linge et séchez à plat." },
        { q: "À partir de quel âge utiliser un tapis d'éveil ?",
          a: "Dès la naissance ! Les tapis d'éveil avec arche sont conçus pour les nouveau-nés : allongé sur le dos, bébé observe les jouets suspendus, ce qui stimule sa vision et sa coordination. Les tapis de jeu doux conviennent dès que bébé commence à se retourner (vers 3-4 mois). Les tapis puzzle restent utiles jusqu'à 5-6 ans pour jouer au sol." },
      ],
      en: [
        { q: "How to choose the right play mat for your baby?",
          a: "The choice depends on your child's age and needs. For newborns (0-6 months), opt for an activity mat with arch and hanging toys to stimulate sight and motor skills. For babies starting to crawl (6-12 months), a large soft mat or XXL puzzle mat provides the needed space. Always prioritize non-toxic, CE-certified, washable, BPA-free materials." },
        { q: "Are foam puzzle mats safe for babies?",
          a: "Yes, provided you choose mats certified free of formamide, BPA-free and compliant with European CE standards. All our puzzle mats are tested and certified for babies from birth. They are also water-resistant and easy to clean with a damp cloth." },
        { q: "What size play mat to choose for the baby's room?",
          a: "For a standard room, a 120×120 cm mat covers a great play area. If you want to cover an entire living room area or large bedroom, opt for an XXL format (150×200 cm or more). Puzzle mats have the advantage of adapting to any surface as you can add or remove tiles as needed." },
        { q: "How to clean a baby play mat?",
          a: "Most of our mats clean very easily with a damp cloth and a little mild soap. EVA foam mats are waterproof, so a simple wipe is enough. For thicker fabric mats, check the label — some are machine washable at 30°C. Avoid the dryer and dry flat." },
        { q: "From what age to use an activity mat?",
          a: "From birth! Activity mats with arches are designed for newborns: lying on their back, baby observes the hanging toys, stimulating vision and coordination. Soft play mats are suitable once baby starts rolling over (around 3-4 months). Puzzle mats remain useful up to 5-6 years for floor play." },
      ],
      de: [
        { q: "Wie wählt man die richtige Spielmatte für sein Baby?",
          a: "Die Wahl hängt vom Alter und den Bedürfnissen Ihres Kindes ab. Für Neugeborene (0-6 Monate) empfehlen sich Spielbögen mit hängenden Spielzeugen zur Stimulation von Sehvermögen und Motorik. Für Babys, die beginnen zu krabbeln (6-12 Monate), bietet eine große weiche Matte oder XXL-Puzzlematte den nötigen Platz. Bevorzugen Sie immer ungiftige, CE-zertifizierte, waschbare, BPA-freie Materialien." },
        { q: "Sind Schaumstoff-Puzzlematten sicher für Babys?",
          a: "Ja, sofern Sie Matten wählen, die formamid- und BPA-frei sowie konform mit europäischen CE-Normen sind. Alle unsere Puzzlematten sind für Babys ab Geburt getestet und zertifiziert. Sie sind auch wasserbeständig und leicht mit einem feuchten Tuch zu reinigen." },
        { q: "Welche Größe Spielmatte für das Babyzimmer wählen?",
          a: "Für ein Standardzimmer deckt eine 120×120 cm Matte eine schöne Spielfläche ab. Wenn Sie einen ganzen Wohnzimmerbereich oder ein großes Schlafzimmer abdecken möchten, wählen Sie ein XXL-Format (150×200 cm oder mehr). Puzzlematten haben den Vorteil, sich an jede Fläche anzupassen, da Sie Kacheln nach Bedarf hinzufügen oder entfernen können." },
        { q: "Wie reinigt man eine Baby-Spielmatte?",
          a: "Die meisten unserer Matten lassen sich sehr einfach mit einem feuchten Tuch und etwas milder Seife reinigen. EVA-Schaumstoffmatten sind wasserdicht, also reicht einfaches Abwischen. Bei dickeren Stoffmatten prüfen Sie das Etikett — manche sind bei 30°C maschinenwaschbar. Vermeiden Sie den Trockner und trocknen Sie flach." },
        { q: "Ab welchem Alter eine Spielmatte benutzen?",
          a: "Ab der Geburt! Spielbögen sind für Neugeborene konzipiert: auf dem Rücken liegend beobachtet das Baby die hängenden Spielzeuge, was Sehvermögen und Koordination stimuliert. Weiche Spielmatten eignen sich, sobald das Baby anfängt sich umzudrehen (etwa 3-4 Monate). Puzzlematten bleiben bis zum Alter von 5-6 Jahren zum Spielen auf dem Boden nützlich." },
      ],
    },
  },
};

// Auto-derive legal.domain from `url` if left empty (avoid double-source-of-truth)
if (!config.legal.domain) {
  config.legal.domain = config.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default config;
