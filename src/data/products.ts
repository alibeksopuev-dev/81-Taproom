import type { Product, Category } from '@/types/menu';

export const CATEGORIES: Category[] = [
  {
    id: 'beers',
    name: 'craft beer (on tap)',
    nameVi: 'bia thủ công (tươi)',
    nameJa: 'クラフトビール（生）',
    icon: '🍺',
    order: 1,
  },
  {
    id: 'snacks',
    name: 'snacks',
    nameVi: 'đồ ăn nhẹ',
    nameJa: 'スナック',
    icon: '🍽️',
    order: 2,
  },
  {
    id: 'drinks',
    name: 'drinks',
    nameVi: 'đồ uống',
    nameJa: '飲み物',
    icon: '🍷',
    order: 3,
  },
  {
    id: 'wines',
    name: 'wines',
    nameVi: 'rượu vang',
    nameJa: 'ワイン',
    icon: '🍾',
    order: 4,
  },
  {
    id: 'bottles',
    name: 'bottles & cans',
    nameVi: 'chai & lon',
    nameJa: 'ボトル＆缶',
    icon: '🥫',
    order: 5,
  },
];

export const PRODUCTS: Product[] = [
  // CRAFT BEERS (ON TAP)
  {
    id: 'beer-blonde-ale',
    name: 'Blonde Ale',
    description: 'Light, crisp, refreshing',
    price: 58,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 18,
        abv: 5.0,
        size033ml: 58,
        size050ml: 80,
      },
    },
  },
  {
    id: 'beer-pale-ale',
    name: 'Pale Ale',
    description: 'Balanced, hoppy, citrus notes',
    price: 62,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 32,
        abv: 6.0,
        size033ml: 62,
        size050ml: 92,
      },
    },
  },
  {
    id: 'beer-ipa',
    name: 'IPA',
    description: 'Bold, hoppy, aromatic',
    price: 65,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 45,
        abv: 6.5,
        size033ml: 65,
        size050ml: 98,
      },
    },
  },
  {
    id: 'beer-stout',
    name: 'Stout',
    description: 'Dark, rich, roasted flavors',
    price: 68,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 20,
        abv: 5.8,
        size033ml: 68,
        size050ml: 100,
      },
    },
  },
  {
    id: 'beer-berry',
    name: 'Berry',
    description: 'Fruity, sweet, refreshing',
    price: 62,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 13,
        abv: 4.5,
        size033ml: 62,
        size050ml: 92,
      },
    },
  },
  {
    id: 'beer-oolong',
    name: 'Oolong',
    description: 'Tea-infused, unique, smooth',
    price: 60,
    category: 'beers',
    metadata: {
      beer: {
        ibu: 32,
        abv: 6.0,
        size033ml: 60,
        size050ml: 87,
      },
    },
  },

  // BEERTAILS
  {
    id: 'beertail-radler',
    name: 'Radler',
    description: 'A crisp mix of beer and homemade lemonade — light and refreshing. A classic low-alcohol beer drink originating in Germany.',
    price: 85,
    category: 'snacks',
    subcategory: 'BEERTAILS',
  },
  {
    id: 'beertail-sangria',
    name: 'Beer Sangria',
    description: 'White wine blended with citrus notes and berry beer — fresh, bright, and easy-drinking. Inspired by the Spanish sangria tradition, reimagined with beer.',
    price: 120,
    category: 'snacks',
    subcategory: 'BEERTAILS',
  },
  {
    id: 'beertail-michelada',
    name: 'Michelada',
    description: 'A spicy, zesty beer cocktail made with our house Clamato. A traditional Mexican beer cocktail with citrus, spice, and savoriness.',
    price: 110,
    category: 'snacks',
    subcategory: 'BEERTAILS',
  },

  // COLD-BREW TEA
  {
    id: 'tea-earl-grey',
    name: 'Earl Grey',
    description: 'Cold-brew Earl Grey infused with strawberry, lemon, and rosemary — delicate citrus, soft berry notes, and a herbal finish.',
    price: 60,
    category: 'snacks',
    subcategory: 'COLD-BREW TEA',
  },
  {
    id: 'tea-jasmine',
    name: 'Jasmine',
    description: 'Cold-brew Jasmine tea infused with mango, orange, and mint — ripe tropical fruit, gentle citrus, and a fresh herbal finish.',
    price: 65,
    category: 'snacks',
    subcategory: 'COLD-BREW TEA',
  },
  {
    id: 'tea-oolong',
    name: 'Oolong',
    description: 'Cold-brew Oolong tea infused with peach, lime, and lavender — soft stone fruit, bright acidity, and a subtle floral finish.',
    price: 70,
    category: 'snacks',
    subcategory: 'COLD-BREW TEA',
  },

  // EASY & FAST SNACKS
  {
    id: 'snack-popcorn',
    name: 'Salty Popcorn',
    description: 'Freshly popped local corn tossed in creamy butter and a pinch of sea salt — a warm, comforting beer snack.',
    price: 45,
    category: 'snacks',
    subcategory: 'EASY & FAST',
  },
  {
    id: 'snack-olives',
    name: 'Marinated olives',
    description: 'Bright citrus marinade highlighting the briny depth and natural simplicity of the olives — a fresh, vibrant burst of coastal flavor.',
    price: 75,
    category: 'snacks',
    subcategory: 'EASY & FAST',
  },

  // BEER CLASSICS
  {
    id: 'classic-cheese',
    name: 'Smoked cheese',
    description: 'Smoked cheese strings brightened with fresh lime juice and a hint of freshly cracked black pepper — a smoky, tangy classic choice.',
    price: 90,
    category: 'snacks',
    subcategory: 'BEER CLASSICS',
  },
  {
    id: 'classic-olives',
    name: 'Stuffed breaded olives',
    description: 'Shrimp-filled olives, golden-fried in a crisp coating, served with a smoky sweet pepper sauce — a savory bite bursting with Mediterranean charm.',
    price: 90,
    category: 'snacks',
    subcategory: 'BEER CLASSICS',
  },

  // SIGNATURE & SAVORY
  {
    id: 'signature-goose',
    name: 'Smoked goose breast',
    description: 'Pan-seared smoked goose breast with velvety sesame sauce and vibrant house pickles — inspired by a classic Vietnamese beer-side delicacy.',
    price: 145,
    category: 'snacks',
    subcategory: 'SIGNATURE & SAVORY',
  },
  {
    id: 'signature-basturma',
    name: 'Homemade basturma',
    description: 'Dry-aged beef served with a wedge of lemon and freshly cracked black pepper — Armenian style.',
    price: 180,
    category: 'snacks',
    subcategory: 'SIGNATURE & SAVORY',
  },

  // LONG TABLE
  {
    id: 'long-brie',
    name: 'Brie platter',
    description: 'Baked brie with rosemary, honey, garlic, and extra-virgin olive oil. Served warm with crusty baguette, smoked ham, and toasted almonds — inspired by the French countryside.',
    price: 280,
    category: 'snacks',
    subcategory: 'LONG TABLE',
  },

  // BY THE GLASS - WINES
  {
    id: 'wine-glass-prosecco',
    name: 'Prosecco Valdo',
    description: 'Light, fresh, fruity, soft bubbles. Easy and refreshing sparkling wine, perfect as an aperitif or to start the evening.',
    price: 120,
    category: 'drinks',
    subcategory: 'BY THE GLASS',
    metadata: {
      wine: {
        region: 'Treviso',
        country: 'Italy',
        grapeVariety: 'Glera',
      },
    },
  },
  {
    id: 'wine-glass-chardo',
    name: 'Chardo All Day',
    description: 'Fresh, clean, easy-drinking. A simple and friendly white wine with apple and citrus notes. Great on its own.',
    price: 130,
    category: 'drinks',
    subcategory: 'BY THE GLASS',
    metadata: {
      wine: {
        region: 'Vin de France',
        country: 'France',
        grapeVariety: 'Chardonnay',
      },
    },
  },
  {
    id: 'wine-glass-bordeaux-white',
    name: 'Les Fleurs du Mal',
    description: 'Dry, fresh, herbal, mineral. A classic white Bordeaux style — refreshing, balanced and very food-friendly.',
    price: 150,
    category: 'drinks',
    subcategory: 'BY THE GLASS',
    metadata: {
      wine: {
        region: 'Bordeaux',
        country: 'France',
        grapeVariety: 'Sauvignon Blanc & Sauvignon Gris',
      },
    },
  },
  {
    id: 'wine-glass-pinot-noir',
    name: 'Pinot Noir Fever',
    description: 'Light, juicy, red berries. An easy-going red wine with soft texture and fresh fruit. Perfect even without food.',
    price: 130,
    category: 'drinks',
    subcategory: 'BY THE GLASS',
    metadata: {
      wine: {
        region: 'Vin de France',
        country: 'France',
        grapeVariety: 'Pinot Noir',
      },
    },
  },
  {
    id: 'wine-glass-malartic',
    name: 'Château Bellevue Malartic',
    description: 'Balanced, smooth, dark fruits. A classic Bordeaux red with good structure and gentle tannins. Elegant and versatile.',
    price: 150,
    category: 'drinks',
    subcategory: 'BY THE GLASS',
    metadata: {
      wine: {
        region: 'Bordeaux',
        country: 'France',
        grapeVariety: 'Merlot, Cabernet Sauvignon, Cabernet Franc',
      },
    },
  },

  // BOTTLE SELECTION - SPARKLING & CHAMPAGNE
  {
    id: 'bottle-de-chanceny',
    name: 'De Chanceny – Excellence Brut',
    description: 'Fresh, crisp, traditional sparkling wine. Elegant and refreshing, with lively acidity. A great alternative to Champagne.',
    price: 1317.8,
    category: 'wines',
    subcategory: 'Sparkling & Champagne',
    metadata: {
      wine: {
        region: 'Vouvray, Loire Valley',
        country: 'France',
        style: 'Fresh, crisp, traditional sparkling wine',
      },
    },
  },
  {
    id: 'bottle-terrabianca',
    name: 'Terrabianca, Vignot – Moscato d\'Asti',
    description: 'Light, aromatic, gently sweet. Low alcohol, floral and fruity. Easy to drink and very approachable.',
    price: 1179.2,
    category: 'wines',
    subcategory: 'Sparkling & Champagne',
    metadata: {
      wine: {
        region: 'Piedmont',
        country: 'Italy',
        style: 'Light, aromatic, gently sweet',
      },
    },
  },
  {
    id: 'bottle-champagne-fays',
    name: 'Champagne Fays',
    description: 'Dry, precise, mineral. Classic Champagne style with clean structure and freshness.',
    price: 2530,
    category: 'wines',
    subcategory: 'Sparkling & Champagne',
    metadata: {
      wine: {
        region: 'Champagne',
        country: 'France',
        style: 'Dry, precise, mineral',
      },
    },
  },
  {
    id: 'bottle-champagne-pertois',
    name: 'Champagne Pertois Moriset – L\'Assemblage',
    description: 'Elegant, balanced, complex. Refined and expressive Champagne with depth and finesse.',
    price: 3520,
    category: 'wines',
    subcategory: 'Sparkling & Champagne',
    metadata: {
      wine: {
        region: 'Champagne',
        country: 'France',
        style: 'Elegant, balanced, complex',
      },
    },
  },
  {
    id: 'bottle-champagne-jacquesson',
    name: 'Champagne Jacquesson – Cuvée 746',
    description: 'Structured, deep, classic. Serious, layered Champagne with character and long finish.',
    price: 5500,
    category: 'wines',
    subcategory: 'Sparkling & Champagne',
    metadata: {
      wine: {
        region: 'Champagne',
        country: 'France',
        style: 'Structured, deep, classic',
      },
    },
  },

  // Continue with the rest of the products...
  // This is getting very long, so I'll create it in parts
];

// WHITE WINES
const whiteWines: Product[] = [
  {
    id: 'white-riesling',
    name: 'd.b. Schmitt – Riesling',
    description: 'Fresh, crisp, high acidity. Dry and vibrant Riesling with citrus notes and a clean, refreshing finish.',
    price: 1430,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Rheinhessen',
        country: 'Germany',
        style: 'Fresh, crisp, high acidity',
      },
    },
  },
  {
    id: 'white-sauvignon',
    name: 'Whale Watcher – Sauvignon Blanc',
    description: 'Zesty, aromatic, lively. Expressive and fresh, with citrus and herbal character.',
    price: 990,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Nelson',
        country: 'New Zealand',
        style: 'Zesty, aromatic, lively',
      },
    },
  },
  {
    id: 'white-chateau-haut',
    name: 'Château Haut Meyreau "L\'Éclat"',
    description: 'Fresh, herbal, balanced. Classic white Bordeaux style, easy to drink and very food-friendly.',
    price: 1350.8,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Entre-Deux-Mers, Bordeaux',
        country: 'France',
        style: 'Fresh, herbal, balanced',
      },
    },
  },
  {
    id: 'white-vacheron',
    name: 'Domaine Vacheron – Sancerre',
    description: 'Mineral, precise, refined. Elegant and mineral-driven Sauvignon Blanc with great purity.',
    price: 3872,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Loire Valley',
        country: 'France',
        style: 'Mineral, precise, refined',
      },
    },
  },
  {
    id: 'white-chardonnay',
    name: 'Laurent Chardigny – Bourgogne Chardonnay',
    description: 'Round, balanced, smooth. Classic Burgundy Chardonnay with soft texture and elegant structure.',
    price: 1309,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Burgundy',
        country: 'France',
        style: 'Round, balanced, smooth',
      },
    },
  },
  {
    id: 'white-fontanasanta',
    name: 'Foradori – Fontanasanta',
    description: 'Structured, mineral, complex. Textured and gastronomic white wine with depth and character.',
    price: 2178,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Trentino-Alto Adige',
        country: 'Italy',
        style: 'Structured, mineral, complex',
      },
    },
  },
  {
    id: 'white-godello',
    name: 'Raúl Pérez "La del Vivo" – Godello',
    description: 'Textured, complex, expressive. A distinctive white wine with body, minerality and long finish.',
    price: 3850,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Bierzo',
        country: 'Spain',
        style: 'Textured, complex, expressive',
      },
    },
  },
  {
    id: 'white-trebbiano',
    name: 'Valle Reale – Trebbiano d\'Abruzzo',
    description: 'Fresh, gastronomic white wine. Clean and vibrant white, perfect with food and sharing.',
    price: 2156,
    category: 'wines',
    subcategory: 'White',
    metadata: {
      wine: {
        region: 'Abruzzo',
        country: 'Italy',
        style: 'Fresh, gastronomic white wine',
      },
    },
  },
];

// ROSÉ WINES
const roseWines: Product[] = [
  {
    id: 'rose-la-huppe',
    name: 'Domaine de la Cadenière "La Huppe"',
    description: 'Dry, refreshing, elegant. Classic Provence rosé — light, crisp and easy to enjoy.',
    price: 902,
    category: 'wines',
    subcategory: 'Rosé',
    metadata: {
      wine: {
        region: 'Coteaux d\'Aix-en-Provence',
        country: 'France',
        style: 'Dry, refreshing, elegant',
      },
    },
  },
];

// RED WINES
const redWines: Product[] = [
  {
    id: 'red-pinot-noir-chile',
    name: 'El Viejo del Valle – Pinot Noir',
    description: 'Light, fresh, red berries. Easy-drinking Pinot Noir with soft texture and bright fruit.',
    price: 765.6,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Chile',
        country: 'Chile',
        style: 'Light, fresh, red berries',
      },
    },
  },
  {
    id: 'red-gamay',
    name: 'Domaine de Sérol "Éclat de Granite" – Gamay',
    description: 'Juicy, vibrant, fresh. Lively and expressive Gamay with great drinkability.',
    price: 1716,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Loire Valley',
        country: 'France',
        style: 'Juicy, vibrant, fresh',
      },
    },
  },
  {
    id: 'red-telmo-gazur',
    name: 'Telmo Rodriguez "Gazur"',
    description: 'Fruity, smooth, approachable. Modern, easy style with ripe fruit and gentle structure.',
    price: 1185.8,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Ribera del Duero',
        country: 'Spain',
        style: 'Fruity, smooth, approachable',
      },
    },
  },
  {
    id: 'red-malbec',
    name: 'Domaine Combel La Serre "Pur Fruit" – Malbec',
    description: 'Fresh, structured, dark fruit. A more serious Malbec style with freshness and grip.',
    price: 1698.4,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Cahors',
        country: 'France',
        style: 'Fresh, structured, dark fruit',
      },
    },
  },
  {
    id: 'red-garnacha',
    name: 'Mas de Mancuso – Garnacha',
    description: 'Ripe fruit, spice, medium-bodied. Warm and expressive Garnacha with ripe fruit and gentle spice.',
    price: 2178,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Cariñena',
        country: 'Spain',
        style: 'Ripe fruit, spice, medium-bodied',
      },
    },
  },
  {
    id: 'red-la-vieille-croix',
    name: 'Château La Vieille Croix',
    description: 'Classic, structured, balanced. Traditional Bordeaux with depth and firm structure.',
    price: 1478.4,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Fronsac, Bordeaux',
        country: 'France',
        style: 'Classic, structured, balanced',
      },
    },
  },
  {
    id: 'red-montepulciano',
    name: 'Valle Reale – Montepulciano d\'Abruzzo',
    description: 'Juicy, rustic, medium-bodied. Honest and expressive red wine with food-friendly character.',
    price: 2156,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Abruzzo',
        country: 'Italy',
        style: 'Juicy, rustic, medium-bodied',
      },
    },
  },
  {
    id: 'red-malbec-argentina',
    name: 'Boutinot "Pablo y Walter" – Malbec',
    description: 'Plum, smooth, soft tannins. Round and generous Malbec with ripe fruit and balance.',
    price: 924,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Mendoza',
        country: 'Argentina',
        style: 'Plum, smooth, soft tannins',
      },
    },
  },
  {
    id: 'red-touzinat',
    name: 'Château Touzinat Prieuré',
    description: 'Deep, complex, elegant. Rich and layered Grand Cru with refined tannins.',
    price: 2156,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Saint-Émilion Grand Cru',
        country: 'France',
        style: 'Deep, complex, elegant',
      },
    },
  },
  {
    id: 'red-le-conte',
    name: 'Château Le Conte',
    description: 'Rich, smooth, elegant. Polished and expressive Bordeaux with generous fruit.',
    price: 2640,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Saint-Émilion Grand Cru',
        country: 'France',
        style: 'Rich, smooth, elegant',
      },
    },
  },
  {
    id: 'red-pinot-noir-burgundy',
    name: 'Domaine Tollot-Beaut – Pinot Noir',
    description: 'Elegant, refined, classic. Pure Burgundy Pinot Noir with finesse and balance.',
    price: 3916,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Chorey-lès-Beaune, Burgundy',
        country: 'France',
        style: 'Elegant, refined, classic',
      },
    },
  },
  {
    id: 'red-telmo-lanzaga',
    name: 'Telmo Rodriguez, Bodega Lanzaga "LZ"',
    description: 'Fresh, modern, balanced. Contemporary Rioja style with fruit and freshness.',
    price: 1078,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Rioja',
        country: 'Spain',
        style: 'Fresh, modern, balanced',
      },
    },
  },
  {
    id: 'red-charlopin',
    name: 'Domaine Charlopin-Tissier – Pinot Noir',
    description: 'Structured, serious, complex. More intense Burgundy style with depth and character.',
    price: 3814.8,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Marsannay, Burgundy',
        country: 'France',
        style: 'Structured, serious, complex',
      },
    },
  },
  {
    id: 'red-cabernet-franc',
    name: 'Hugues Laborde "L\'Instant H" – Cabernet Franc',
    description: 'Herbal, elegant, structured. Classic Cabernet Franc with freshness and finesse.',
    price: 1078,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Bordeaux',
        country: 'France',
        style: 'Herbal, elegant, structured',
      },
    },
  },
  {
    id: 'red-crozes-hermitage',
    name: 'Domaine Alain Graillot – Crozes-Hermitage',
    description: 'Peppery, powerful, structured. Iconic Syrah with spice, dark fruit and strength.',
    price: 3458.4,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Rhône Valley',
        country: 'France',
        style: 'Peppery, powerful, structured',
      },
    },
  },
  {
    id: 'red-syrah-morocco',
    name: 'Domaine des Ouled Thaleb "Syrocco" – Syrah',
    description: 'Spicy, bold, expressive. Warm-climate Syrah with spice and personality.',
    price: 1870,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Zenata',
        country: 'Morocco',
        style: 'Spicy, bold, expressive',
      },
    },
  },
  {
    id: 'red-mencia',
    name: 'Raúl Pérez & Antoine Graillot "Encinas" – Mencía',
    description: 'Wild, mineral, expressive. Distinctive and vibrant red with minerality and energy.',
    price: 2530,
    category: 'wines',
    subcategory: 'Red',
    metadata: {
      wine: {
        region: 'Bierzo',
        country: 'Spain',
        style: 'Wild, mineral, expressive',
      },
    },
  },
];

// Combine all products
PRODUCTS.push(...whiteWines, ...roseWines, ...redWines);
