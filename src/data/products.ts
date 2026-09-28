import { Product, ProductCategory } from "../types";

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  tagline: string;
}

export const CATEGORIES_CONFIG: CategoryInfo[] = [
  {
    id: "perfumes",
    label: "Perfumes",
    subtitle: "Parfumerie de Haute Élite",
    description: "Esencias sublimes, notas florales silvestres y extractos botánicos de Grasse orquestados para despertar una sensualidad envolvente e inolvidable.",
    bannerImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200",
    tagline: "La alquimia de la seducción olfativa"
  },
  {
    id: "glasses",
    label: "Gafas",
    subtitle: "Haute Lunetterie & Eyewear",
    description: "Monturas esculpidas en metales nobles y maderas preciosas con lentes polarizadas de máxima protección UV y siluetas atemporales.",
    bannerImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200",
    tagline: "El enigma y magnetismo de una mirada única"
  },
  {
    id: "cosmetics",
    label: "Cosmética",
    subtitle: "Cosmétique Précieuse & Soins",
    description: "Tratamientos botánicos con infusión de oro de 24 quilates, labiales aterciopelados y pigmentos de alta costura que subliman la juventud de la piel.",
    bannerImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
    tagline: "El ritual definitivo de belleza y resplandor"
  },
  {
    id: "clothing",
    label: "Ropa",
    subtitle: "Prêt-à-Porter Haute Couture",
    description: "Seda morera italiana, crepé de lana virgen y sastrería de corte magistral concebida para dotar a cada silueta de una elegancia soberana.",
    bannerImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200",
    tagline: "La distinción arquitectónica del vestir"
  },
  {
    id: "jewelry",
    label: "Bisutería",
    subtitle: "Bisutería Fina & Joyería de Autor",
    description: "Creaciones icónicas de tres oros entrelazados, diamantes talla brillante y motivos emblemáticos que custodian los juramentos eternos.",
    bannerImage: "/images/lv-enamel-hoops-multicolor.jpg",
    tagline: "Talismanes eternos de amor y sofisticación"
  },
  {
    id: "bags",
    label: "Bolsos",
    subtitle: "Maroquinerie d'Art & Clutches",
    description: "Pieles de becerro granuladas, cierres joya cincelados en metal dorado y acabados a mano por maestros marroquineros.",
    bannerImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200",
    tagline: "Obras maestras de marroquinería que acompañan cada paso"
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    "id": "perfume-vs-bombshell",
    "name": "Victoria's Secret Bombshell Eau de Parfum",
    "category": "perfumes",
    "description": "La fragancia icónica número uno de Victoria's Secret. Una mezcla chispeante y luminosa de maracuyá morada de Brasil, peonía paradisíaca Shangri-la de Shigatse y orquídea de vainilla de Madagascar.",
    "price": 95,
    "image": "/images/vs-bombshell-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Frutal Luminoso",
      "Notas de salida: Maracuyá morada de Brasil, Pomelo cítrico, Piña dulce",
      "Notas de corazón: Peonía Shangri-la del Tíbet, Lirio de los valles, Orquídea de vainilla",
      "Notas de fondo: Almizcle blanco sedoso, Maderas rubias, Musgo de roble",
      "Presentación: Frasco estriado en cristal rosa pastel con lazo de cinta negra de satén y placa dorada oficial"
    ],
    "history": "Un clásico eterno de la perfumería internacional que celebra la confianza radiante, la sensualidad desenfadada y la energía cautivadora."
  },
  {
    "id": "perfume-vs-bombshell-passion",
    "name": "Victoria's Secret Bombshell Passion Eau de Parfum",
    "category": "perfumes",
    "description": "Una interpretación floral audaz y envolvente de la familia Bombshell. Captura la exuberancia de la grosella negra jugosa, la peonía reina y la calidez de la rosa fucsia vibrante.",
    "price": 95,
    "image": "/images/vs-bombshell-passion.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Cálido Exuberante",
      "Notas de salida: Grosella negra jugosa silvestre, Néctar de ciruela",
      "Notas de corazón: Peonía reina imperial, Rosa fucsia brillante",
      "Notas de fondo: Maderas de cedro aterciopeladas, Almizcle cálido",
      "Presentación: Frasco facetado en púrpura ciruela intenso con placa metálica dorada grabada en relieve"
    ],
    "history": "Una declaración de pasión vibrante diseñada para una presencia cautivadora y magnética en ocasiones inolvidables."
  },
  {
    "id": "perfume-vs-bombshell-intense",
    "name": "Victoria's Secret Bombshell Intense Eau de Parfum",
    "category": "perfumes",
    "description": "Inspirada en el rojo perfecto de la alta costura. Una fragancia chipre afrutada provocativa con una explosión de cereza exuberante, peonía roja aterciopelada y vainilla sensual.",
    "price": 95,
    "image": "/images/vs-bombshell-intense.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Chipre Frutal Floral Seductor",
      "Notas de salida: Cereza roja exuberante y dulce",
      "Notas de corazón: Peonía roja aterciopelada",
      "Notas de fondo: Vainilla de Madagascar cremosa y sensual",
      "Presentación: Frasco lacado en rojo carmesí brillante con placa dorada de la Maison Victoria's Secret"
    ],
    "history": "La encarnación del magnetismo, el poder y la seducción en su estado más puro y voluptuoso."
  },
  {
    "id": "perfume-vs-very-sexy",
    "name": "Victoria's Secret Very Sexy Eau de Parfum",
    "category": "perfumes",
    "description": "Sensual, sofisticada e irresistible. Una embriagadora infusión de vainilla cálida, clementina jugosa y mora silvestre oscura con un fondo amaderado aterciopelado.",
    "price": 98,
    "image": "/images/vs-very-sexy-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Oriental Cálido Provocativo",
      "Notas de salida: Clementina bañada por el sol, Mora silvestre de medianoche",
      "Notas de corazón: Orquídea de vainilla dulce, Rosa silvestre",
      "Notas de fondo: Madera de sándalo aterciopelada, Ámbar dorado",
      "Presentación: Frasco de silueta arquitectónica en cristal color vino borgoña profundo con letras grabadas en bajorrelieve"
    ],
    "history": "Una leyenda de seducción que acompaña a la mujer con una estela cálida, íntima y sumamente magnética."
  },
  {
    "id": "perfume-vs-very-sexy-night",
    "name": "Victoria's Secret Very Sexy Night Eau de Parfum",
    "category": "perfumes",
    "description": "El misterio de la noche hecho perfume. Notas oscuras de ciruela negra madura, maderas aterciopeladas y manzana verde crujiente para un magnetismo irresistible.",
    "price": 98,
    "image": "/images/vs-very-sexy-night.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Amaderado Nocturno",
      "Notas de salida: Manzana verde crujiente, Ciruela negra madura",
      "Notas de corazón: Maderas aterciopeladas de noche, Jazmín nocturno",
      "Notas de fondo: Almizcle negro sensual, Ámbar oscuro",
      "Presentación: Frasco negro lacado ultra brillante con tipografía dorada brillante y estuche de lujo"
    ],
    "history": "Creada para cuando se pone el sol: las luces de la ciudad, el glamour de la noche y la intriga de lo inesperado."
  },
  {
    "id": "perfume-vs-tease",
    "name": "Victoria's Secret Tease Eau de Parfum",
    "category": "perfumes",
    "description": "Coqueta y femenina por excelencia. Una deliciosa sinfonía gourmand floral con pera Anjou blanca congelada, gardenia en flor y praliné negro fundido.",
    "price": 95,
    "image": "/images/vs-tease-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Gourmand Floral Dulce",
      "Notas de salida: Pera blanca Anjou glaseada, Mandarina jugosa",
      "Notas de corazón: Pétalos de gardenia en flor, Fresia blanca",
      "Notas de fondo: Praliné negro fundido, Vainilla suave, Ámbar dorado",
      "Presentación: Frasco joya biselado con motivos de encaje y estuche rosa empolvado con marco negro y oro"
    ],
    "history": "Inspirada en el arte del flirteo refinado: dulce, divertida, irresistible y siempre memorable."
  },
  {
    "id": "perfume-vs-tease-sugar-fleur",
    "name": "Victoria's Secret Tease Sugar Fleur Eau de Parfum",
    "category": "perfumes",
    "description": "Una reinterpretación luminosa y azucarada de Tease. Manzana rosa confitada cristalizada con pétalos de jazmín blanco y cálido caramelo esponjoso.",
    "price": 95,
    "image": "/images/vs-tease-sugar-fleur.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Gourmand Confitado",
      "Notas de salida: Manzana rosa dulce caramelizada",
      "Notas de corazón: Pétalos de jazmín rosa cristalizados, Chicle dulce",
      "Notas de fondo: Caramelo esponjoso dorado, Ámbar cristalino",
      "Presentación: Frasco de cristal fucsia alegre con ribetes dorados y estuche rosa satinado"
    ],
    "history": "Un ensueño dulce que evoca confiterías de lujo parisinas y la alegría despreocupada de la primavera."
  },
  {
    "id": "perfume-vs-tease-creme-cloud",
    "name": "Victoria's Secret Tease Crème Cloud Eau de Parfum",
    "category": "perfumes",
    "description": "Suave como una nube sobre la piel. Merengue de vainilla batido, flor de sándalo luminosa y ámbar blanco puro en una caricia etérea y reconfortante.",
    "price": 95,
    "image": "/images/vs-tease-creme-cloud.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Oriental Aéreo Gourmand",
      "Notas de salida: Merengue de vainilla aireado, Nube dulce",
      "Notas de corazón: Flor de sándalo celestial, Almizcle blanco",
      "Notas de fondo: Ámbar puro cálido, Vainilla ligera",
      "Presentación: Frasco perlado blanco traslúcido y estuche sobrio en blanco impoluto con ribete dorado"
    ],
    "history": "La sensación relajante de flotar en las nubes, envuelta en un abrazo cálido y aterciopelado."
  },
  {
    "id": "perfume-chanel-chance-edp",
    "name": "Chanel Chance Eau de Parfum",
    "category": "perfumes",
    "description": "La oportunidad inesperada embotellada por Chanel. Una constelación floral donde el jazmín exótico y la pimienta rosa se entrelazan con el ámbar pachulí y la vainilla sensual.",
    "price": 125,
    "image": "/images/chanel-chance-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 50 ml / 1.7 FL. OZ",
      "Familia olfativa: Floral Chipre Cálido",
      "Notas de salida: Pimienta rosa picante, Piña, Jacinto",
      "Notas de corazón: Absoluto de jazmín de Grasse, Iris noble",
      "Notas de fondo: Vainilla de Bourbon, Pachulí blanco, Almizcle blanco",
      "Presentación: Frasco circular icónico de cristal con aro perimetral plateado y estuche rosa con filete de oro"
    ],
    "history": "'La suerte es una forma de ser', decía Gabrielle Chanel. Chance simboliza la audacia de tomar la iniciativa."
  },
  {
    "id": "perfume-chanel-chance-fraiche-edt",
    "name": "Chanel Chance Eau Fraîche Eau de Toilette",
    "category": "perfumes",
    "description": "Un torbellino chispeante de frescura vibrante. Salida cítrica de cidra chispeante, corazón suave de jazmín acuático y un fondo vibrante de madera de teca.",
    "price": 110,
    "image": "/images/chanel-chance-fraiche-edt.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 50 ml / 1.7 FL. OZ",
      "Familia olfativa: Floral Chispeante Cítrico",
      "Notas de salida: Esencia de cidra verde, Jacinto de agua",
      "Notas de corazón: Jazmín transparente, Pimienta rosa",
      "Notas de fondo: Madera de teca, Vetiver, Ámbar ligero",
      "Presentación: Frasco circular con líquido verde pastel radiante y estuche rosa ribeteado en plata"
    ],
    "history": "Una oportunidad que surge espontáneamente como una brisa marina matinal llena de vitalidad."
  },
  {
    "id": "perfume-chanel-chance-fraiche-edp",
    "name": "Chanel Chance Eau Fraîche Eau de Parfum",
    "category": "perfumes",
    "description": "La nueva concentración intensa de Chance Eau Fraîche. Conserva la vivacidad de la cidra amplificándola con un corazón denso de jazmín y una profunda nota ambarina amaderada de teca.",
    "price": 125,
    "image": "/images/chanel-chance-fraiche-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 50 ml / 1.7 FL. OZ",
      "Familia olfativa: Floral Amaderado Intenso",
      "Notas de salida: Esencia pura de cidra chispeante",
      "Notas de corazón: Jazmín absoluto floral radiante",
      "Notas de fondo: Acorde de madera de teca profunda, Ámbar amaderado",
      "Presentación: Frasco redondo de cristal con líquido verde esmeralda y caja rosa con acabados dorados"
    ],
    "history": "La madurez elegante de la frescura: más duradera, rica y magnética sobre la piel."
  },
  {
    "id": "perfume-tom-ford-noir-extreme-coffret",
    "name": "Tom Ford Noir Extreme Coffret Eau de Parfum + Atomiseur",
    "category": "perfumes",
    "description": "Magnífico cofre de lujo dorado con el perfume Tom Ford Noir Extreme EDP 100ml y su vaporizador de viaje recargable atomizador a juego. Una creación amaderada oriental con acordes de cardamomo, postre indio kulfi y sándalo.",
    "price": 145,
    "image": "/images/tom-ford-noir-extreme-coffret.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Contenido: Eau de Parfum 100 ml + Atomizador de viaje recargable 10 ml",
      "Familia olfativa: Oriental Amaderado Especiado Opulento",
      "Notas de salida: Aceite de cardamomo, Nuez moscada, Mandarina, Azafrán",
      "Notas de corazón: Acorde Kulfi de la India, Flor de azahar, Rosa, Jazmín",
      "Notas de fondo: Madera de sándalo australiano, Ámbar dorado, Vainilla de Madagascar",
      "Presentación: Cofre estriado de oro con logotipo Tom Ford en negro y nido interior acolchado"
    ],
    "history": "Un homenaje al hombre que vive al límite de sus pasiones, donde la opulencia y el refinamiento no conocen límites."
  },
  {
    "id": "perfume-valentino-born-in-roma",
    "name": "Valentino Uomo Born in Roma Eau de Toilette",
    "category": "perfumes",
    "description": "Una celebración de la elegancia y la rebeldía de Roma. Salvia aromática con vetiver ahumado contrastado con la sal mineral picante y hojas de violeta fresca.",
    "price": 115,
    "image": "/images/valentino-born-in-roma.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Amaderado Aromático Mineral",
      "Notas de salida: Sal mineral, Hojas de violeta, Jengibre picante",
      "Notas de corazón: Salvia romana aromatizada, Salvia sclarea",
      "Notas de fondo: Vetiver ahumado de Java, Madera de guayaco",
      "Presentación: Frasco icónico esculpido con tachuelas Rockstud de Valentino y cuello en piel negra con letras fucsia"
    ],
    "history": "Diseñado para los hombres que reimaginan las tradiciones con una actitud contemporánea y vanguardista."
  },
  {
    "id": "perfume-versace-dylan-blue",
    "name": "Versace Dylan Blue Pour Homme Eau de Toilette",
    "category": "perfumes",
    "description": "El alma del hombre Versace: fuerza, pasión y carisma mediterráneo. Notas cítricas de bergamota de Calabria, hojas de higuera, pimienta negra, ambrox y pachulí.",
    "price": 105,
    "image": "/images/versace-dylan-blue.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Fougère Amaderado Acuático",
      "Notas de salida: Bergamota de Calabria, Pomelo, Notas acuáticas, Hojas de higuera",
      "Notas de corazón: Hojas de violeta, Papiro de Egipto, Pachulí orgánico, Pimienta negra",
      "Notas de fondo: Almizcle mineral, Haba tonka, Incienso místico, Azafrán",
      "Presentación: Frasco azul noche geométrico con el legendario emblema de la Medusa dorada y cenefa griega"
    ],
    "history": "Una fragancia que evoca la brisa del Mediterráneo y el poder imperecedero de la mitología de Versace."
  },
  {
    "id": "perfume-chanel-allure-superleggera",
    "name": "Chanel Allure Homme Sport Superleggera Eau de Parfum",
    "category": "perfumes",
    "description": "Edición exclusiva Superleggera de Chanel inspirada en el automovilismo de alta velocidad. Salida cítrica chispeante de mandarina y pomelo con maderas nobles de cedro y notas ambarinas potentes.",
    "price": 145,
    "image": "/images/chanel-allure-superleggera.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Amaderado Cítrico Fresco de Alta Gama",
      "Notas de salida: Mandarina de Italia, Pomelo fresco, Acorde Superleggera dinámico",
      "Notas de corazón: Notas ambarinas ligeras, Cedro blanco",
      "Notas de fondo: Almizcles blancos puros, Sándalo noble",
      "Presentación: Frasco ahumado en cristal gris antracita con caligrafía roja Superleggera y estuche plateado mate"
    ],
    "history": "El tributo definitivo de Chanel al rendimiento atlético y a la ligereza estructural de los superdeportivos."
  },
  {
    "id": "perfume-dior-homme-edt",
    "name": "Christian Dior Dior Homme Eau de Toilette",
    "category": "perfumes",
    "description": "La encarnación de la sensualidad masculina contemporánea de Dior. Un acorde amaderado poliédrico construido alrededor del cedro del Atlas, pachulí cálido y vetiver de Haití.",
    "price": 120,
    "image": "/images/dior-homme-edt.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Amaderado Especiado Pulido",
      "Notas de salida: Bergamota de Calabria, Pimienta rosa, Elemí",
      "Notas de corazón: Madera de cedro del Atlas, Pachulí dulce de corazón",
      "Notas de fondo: Vetiver de Haití, Almizcle blanco envolvente",
      "Presentación: Bloque arquitectónico de cristal macizo tallado con vástago negro lacado y tapón biselado"
    ],
    "history": "'Soy un hombre', proclama este icono de Dior, redefiniendo la masculinidad sin falsos artificios."
  },
  {
    "id": "perfume-lancome-idole-edp",
    "name": "Lancôme Idôle Le Parfum Eau de Parfum",
    "category": "perfumes",
    "description": "El perfume de las mujeres que se atreven a soñar a lo grande. Una rosa limpia y radiante orquestada con jazmín grandiflorum y un velo de chipre blanco impecable.",
    "price": 118,
    "image": "/images/lancome-idole-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Chipre Limpio",
      "Notas de salida: Bergamota jugosa, Pera fresca",
      "Notas de corazón: Rosa de Isparta sustentable, Rosa de mayo, Jazmín de la India",
      "Notas de fondo: Chipre blanco, Vainilla de Madagascar, Almizcles blancos puros",
      "Presentación: Frasco revolucionario de solo 15 mm de grosor con perfiles bañados en oro rosa"
    ],
    "history": "Un tótem a la nueva generación de líderes femeninas que iluminan su propio camino."
  },
  {
    "id": "perfume-lancome-idole-edt",
    "name": "Lancôme Idôle L'Eau de Toilette",
    "category": "perfumes",
    "description": "La brisa más fresca y luminosa del universo Idôle. Acordes de té verde Shincha y bergamota revitalizante envueltos en rosas recién cortadas al rocío de la mañana.",
    "price": 105,
    "image": "/images/lancome-idole-edt.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Verde Cítrico Energizante",
      "Notas de salida: Té verde Shincha japonés, Bergamota brillante",
      "Notas de corazón: Agua de rosas de Damasco, Esencia de jazmín",
      "Notas de fondo: Madera de cedro, Almizcle blanco limpio",
      "Presentación: Frasco ultra delgado recargable con cantos cromados y caja blanca con logo celeste"
    ],
    "history": "Una ola refrescante de energía pura que despierta los sentidos al iniciar cada jornada."
  },
  {
    "id": "perfume-gucci-bloom-edp",
    "name": "Gucci Bloom Eau de Parfum",
    "category": "perfumes",
    "description": "Creada para florecer como un jardín repleto de flores blancas. Combina el jazmín sambac natural, el nardo de la India y la exclusiva enredadera de Rangoon.",
    "price": 135,
    "image": "/images/gucci-bloom-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Blanco Rico y Opulento",
      "Notas de salida: Yemas de jazmín Sambac verde",
      "Notas de corazón: Nardo natural cosechado en la India",
      "Notas de fondo: Enredadera de Rangoon (flor que cambia de color al florecer)",
      "Presentación: Frasco de porcelana esmaltada rosa palo retro con etiqueta acanalada y estuche Toile de Jouy"
    ],
    "history": "La visión botánica surrealista de Gucci, capturando la autenticidad y la diversidad de la feminidad."
  },
  {
    "id": "perfume-gucci-flora-gardenia",
    "name": "Gucci Flora Gorgeous Gardenia Eau de Parfum",
    "category": "perfumes",
    "description": "Una poción floral de alegría y resplandor. Centrada en la mística gardenia blanca mezclada con absoluto de jazmín solar, pera jugosa y un sutil toque de azúcar moreno.",
    "price": 135,
    "image": "/images/gucci-flora-gardenia.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Dulce Solar Alegre",
      "Notas de salida: Flor de peral, Frutos rojos silvestres, Mandarina italiana",
      "Notas de corazón: Gardenia blanca de garden, Absoluto de jazmín grandiflorum, Frangipani",
      "Notas de fondo: Azúcar moreno tostado, Pachulí solar",
      "Presentación: Frasco esmaltado en turquesa vibrante con el icónico estampado floral de la Casa Gucci"
    ],
    "history": "Un canto al optimismo y a la magia del florecimiento interior, coronado por un diseño de ensueño."
  },
  {
    "id": "perfume-dg-pour-femme",
    "name": "Dolce & Gabbana Pour Femme Eau de Parfum",
    "category": "perfumes",
    "description": "La esencia de la mujer mediterránea apasionada y voluptuosa. Salida de neroli y frambuesa jugosa, corazón de jazmín aterciopelado y fondo goloso de malvavisco dulce y sándalo.",
    "price": 120,
    "image": "/images/dg-pour-femme.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Gourmand Cálido Mediterráneo",
      "Notas de salida: Neroli, Frambuesa dulce, Mandarina verde",
      "Notas de corazón: Azahar de flor de naranjo, Jazmín aterciopelado",
      "Notas de fondo: Acorde de malvavisco goloso, Vainilla, Madera de sándalo",
      "Presentación: Frasco de líneas arquitectónicas con tapón rojo carmesí y estuche de terciopelo burdeos"
    ],
    "history": "Un tributo a la belleza sensual de Sicilia, donde la ternura y la pasión coexisten en perfecta armonía."
  },
  {
    "id": "perfume-chanel-coco-mademoiselle-privee",
    "name": "Chanel Coco Mademoiselle L'Eau Privée Eau Pour la Nuit",
    "category": "perfumes",
    "description": "La fragancia nocturna más íntima y delicada de Chanel. Un velo de almizcle suave con jazmín y pétalos de rosa para vaporizar en la piel y el cabello antes de dormir.",
    "price": 130,
    "image": "/images/chanel-coco-mademoiselle-privee.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Oriental Fresco Floral Nocturno",
      "Notas de salida: Mandarina dulce suave",
      "Notas de corazón: Pétalos de rosa de mayo, Absoluto de jazmín de Grasse",
      "Notas de fondo: Velo de almizcles blancos delicados",
      "Presentación: Frasco de cristal satinado al ácido traslúcido con anillo de oro y estuche marfil satinado"
    ],
    "history": "Diseñado como un ritual privado y confidente para envolver las noches en una estela de sensualidad sutil."
  },
  {
    "id": "perfume-chanel-n5-leau",
    "name": "Chanel N°5 L'Eau Eau de Toilette",
    "category": "perfumes",
    "description": "La reinvención más fresca, moderna y cristalina del legendario N°5. Cítricos dinámicos de limón y mandarina con aldehídos transparentes, rosa de mayo, jazmín y cedro.",
    "price": 135,
    "image": "/images/chanel-n5-leau.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Aldehídico Puro Cristalino",
      "Notas de salida: Limón, Mandarina, Naranja dulce, Neroli, Aldehídos frescos",
      "Notas de corazón: Rosa de mayo de Grasse, Jazmín luminoso, Ylang-ylang",
      "Notas de fondo: Madera de cedro blanco, Almizcles blancos como algodón",
      "Presentación: Frasco rectangular transparente puro con tapón facetado y estuche blanco y negro de Chanel"
    ],
    "history": "Olivier Polge reinventó la fórmula mítica para revelar una ligereza y transparencia absolutamente contemporáneas."
  },
  {
    "id": "perfume-chanel-coco-edp",
    "name": "Chanel Coco Eau de Parfum",
    "category": "perfumes",
    "description": "La expresión barroca y fascinante del estilo oriental de Gabrielle Chanel. Una exuberante composición especiada con mandarina, rosa damascena, cilantro, haba tonka y benjuí.",
    "price": 140,
    "image": "/images/chanel-coco-edp-black.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Oriental Especiado Opulento",
      "Notas de salida: Cilantro, Mandarina siciliana, Melocotón, Azahar",
      "Notas de corazón: Rosa de Damasco, Clavel, Mimosa, Azahar",
      "Notas de fondo: Ámbar cálido, Sándalo, Haba tonka, Vainilla, Civeta, Benjuí",
      "Presentación: Frasco clásico de cristal pesado con tapón joya negro y estuche lacado en negro con ribetes de oro"
    ],
    "history": "Un viaje a la Venecia bizantina y al apartamento de Mademoiselle en la Rue Cambon, rodeado de biombos de Coromandel."
  },
  {
    "id": "perfume-chanel-chance-tendre",
    "name": "Chanel Chance Eau Tendre Eau de Toilette",
    "category": "perfumes",
    "description": "La ternura y poesía de una oportunidad dulce. Acorde afrutado de pomelo y membrillo entrelazado con la suavidad del jazmín y la calidez del almizcle blanco.",
    "price": 135,
    "image": "/images/chanel-chance-eau-tendre.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Afrutado Tierno y Radiante",
      "Notas de salida: Pomelo rosado chispeante, Membrillo fresco",
      "Notas de corazón: Absoluto de jazmín, Jacinto de agua",
      "Notas de fondo: Almizcle blanco algodonoso, Ámbar ligero, Cedro",
      "Presentación: Frasco circular de cristal con líquido rosa pastel, aro plateado y estuche rosa pastel"
    ],
    "history": "Una constelación de notas tiernas y envolventes para una mujer soñadora, delicada y optimista."
  },
  {
    "id": "perfume-miss-dior-edp",
    "name": "Christian Dior Miss Dior Eau de Parfum",
    "category": "perfumes",
    "description": "Un bouquet floral embriagador que celebra el amor. Rosa centifolia de mil mieles, lirio de los valles fresco, peonía noble y notas de madera cremosa de sándalo de Papúa.",
    "price": 140,
    "image": "/images/miss-dior-eau-de-parfum.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Ambarino Bouquet de Alta Costura",
      "Notas de salida: Lirio de los valles, Peonía viva, Iris empolvado",
      "Notas de corazón: Rosa Centifolia de Grasse aterciopelada y melosa",
      "Notas de fondo: Madera de sándalo de Papúa, Benjuí, Vainilla, Haba tonka",
      "Presentación: Frasco grabado con motivo pata de gallo de Dior y lazo 'poignard' bordado a mano en Jacquard"
    ],
    "history": "El primer perfume concebido por Christian Dior en 1947, renovado como una oda vibrante a la esperanza y al amor."
  },
  {
    "id": "perfume-prada-infusion-ylang",
    "name": "Prada Les Infusions de Prada Eau de Parfum",
    "category": "perfumes",
    "description": "La sofisticación y pureza de la alta perfumería de Milán. Notas solares de flor de ylang-ylang enriquecidas con bergamota, cardamomo y sándalo envolvente.",
    "price": 135,
    "image": "/images/prada-infusion-ylang.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Solar Saffiano Exclusivo",
      "Notas de salida: Bergamota de Calabria, Cardamomo verde",
      "Notas de corazón: Flor de Ylang-Ylang solar de Madagascar",
      "Notas de fondo: Madera de sándalo cremosa, Resina de benjuí",
      "Presentación: Frasco vintage de vidrio pesado con tapón en piel saffiano verde menta y escudo heráldico plateado de Prada"
    ],
    "history": "Una exploración poética de ingredientes botánicos puros formulada por Daniela Andrier para Prada."
  },
  {
    "id": "perfume-chloe-nomade-jasmin",
    "name": "Chloé Nomade Jasmin Naturel Eau de Parfum",
    "category": "perfumes",
    "description": "Una expedición olfativa femenina formulada con fragancia de origen 100% natural. Jazmín egipcio recolectado al amanecer sobre un lecho suave de dátiles y vainilla reconfortante.",
    "price": 110,
    "image": "/images/chloe-nomade-jasmin.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 75 ml / 2.5 FL. OZ",
      "Familia olfativa: Floral Solar Gourmand Natural",
      "Notas de salida: Ciruela mirabel, Néctar de bergamota",
      "Notas de corazón: Jazmín egipcio 100% natural de comercio justo, Acorde de dátil dulce",
      "Notas de fondo: Vainilla de Madagascar, Sándalo, Pachulí",
      "Presentación: Frasco curvado en forma de herradura de viaje con cordón trenzado de ante mostaza y caja ocre cálida"
    ],
    "history": "Un canto a los horizontes lejanos y a la belleza nómada libre de ataduras y en sintonía con la naturaleza."
  },
  {
    "id": "perfume-chloe-le-parfum",
    "name": "Chloé Le Parfum Rechargeable",
    "category": "perfumes",
    "description": "La intensidad más sublime de la clásica rosa Chloé. Rosa aterciopelada y madera de roble tostado con una estela dulce y refinada de miel de azahar en formato recargable.",
    "price": 125,
    "image": "/images/chloe-le-parfum-rechargeable.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Amaderado Sublime",
      "Notas de salida: Mandarina dulce, Grosella roja",
      "Notas de corazón: Rosa de Damasco orgánica concentrada, Azahar",
      "Notas de fondo: Madera de roble noble, Vainilla aterciopelada, Cedro",
      "Presentación: Frasco de cristal plisado artesanal con placa metálica bañada en plata y lazo burdeos atado a mano"
    ],
    "history": "La quintaesencia de la feminidad parisina, ahora en un formato respetuoso con el medio ambiente y recargable."
  },
  {
    "id": "perfume-givenchy-linterdit-rouge-ultime",
    "name": "Givenchy L'Interdit Rouge Ultime Eau de Parfum",
    "category": "perfumes",
    "description": "El tributo definitivo al color rojo icónico de Givenchy. Nardo hipnótico y flor de azahar cruzados con una tentación de cacao caliente ahumado y pachulí oscuro.",
    "price": 120,
    "image": "/images/givenchy-linterdit-rouge-ultime.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 80 ml / 2.7 FL. OZ",
      "Familia olfativa: Floral Amaderado Cálido con Cacao Sensual",
      "Notas de salida: Flor de azahar de Túnez, Jazmín Sambac",
      "Notas de corazón: Nardo carnal de la India, Vaina de cacao tostado",
      "Notas de fondo: Corazón de pachulí de Indonesia, Vetiver de Haití, Ambroxan",
      "Presentación: Frasco laqueado en rojo carmesí opaco con cinta de satén negro y sello 4G plateado en relieve"
    ],
    "history": "Un homenaje a Audrey Hepburn y a la transgresión de romper las normas con elegancia aristocrática."
  },
  {
    "id": "perfume-mugler-alien-edp",
    "name": "Mugler Alien Eau de Parfum Talisman Rechargeable",
    "category": "perfumes",
    "description": "El talismán sagrado de la diosa solar de Mugler. Tres revelaciones olfativas: la luminosidad del jazmín sambac, el misterio de la madera de cashmeran y la opulencia del ámbar blanco.",
    "price": 130,
    "image": "/images/mugler-alien-edp.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 90 ml / 3.0 FL. OZ",
      "Familia olfativa: Ambarino Amaderado Floral Solar",
      "Notas de salida: Jazmín Sambac grandiflorum recogido a mano en la India",
      "Notas de corazón: Madera de Cashmeran con cuerpo y densidad sensual",
      "Notas de fondo: Ámbar blanco sagrado envolvente",
      "Presentación: Frasco gema amatista esculpido como una piedra preciosa recargable con garras doradas"
    ],
    "history": "Un amuleto mágico que difunde paz, magnetismo y una energía sobrenatural sobre quien lo viste."
  },
  {
    "id": "perfume-zadig-really-her",
    "name": "Zadig & Voltaire This is Really Her! Eau de Parfum Intense",
    "category": "perfumes",
    "description": "La fragancia más rebelde y festiva de París. Acordes luminosos de bayas rosas, castaña glaseada de autor, pachulí embriagador y vainilla dorada metálica.",
    "price": 110,
    "image": "/images/zadig-this-is-really-her.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 100 ml / 3.4 FL. OZ",
      "Familia olfativa: Floral Ámbar Gourmand Intenso",
      "Notas de salida: Bayas rosas chispeantes, Albahaca dulce",
      "Notas de corazón: Castaña tostada de autor, Rosa metálica",
      "Notas de fondo: Vainilla dorada, Madera de sándalo, Pachulí",
      "Presentación: Frasco monolito con efecto de oro líquido craquelado y estuche dorado metálico brillante"
    ],
    "history": "La banda sonora olfativa de las noches parisinas más salvajes y sofisticadas."
  },
  {
    "id": "perfume-ysl-black-opium-le-parfum",
    "name": "Yves Saint Laurent Black Opium Le Parfum",
    "category": "perfumes",
    "description": "La interpretación más intensa y adictiva de Black Opium. Un cuarteto de vainillas excepcionales con el emblemático café negro tostado y flores blancas solares.",
    "price": 135,
    "image": "/images/ysl-black-opium-le-parfum.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Volumen: 90 ml / 3.0 FL. OZ",
      "Familia olfativa: Oriental Vainilla Café Floral Radiante",
      "Notas de salida: Mandarina verde, Pera crujiente, Esencia de canela",
      "Notas de corazón: Flor de azahar solar, Jazmín Sambac rico",
      "Notas de fondo: Cuarteto de vainillas nobles (Madagascar, Tahití, Bourbon), Café negro torrefacto, Pachulí",
      "Presentación: Frasco vinilo negro ultrabrillante con corazón destellante de purpurina líquida y aro dorado"
    ],
    "history": "La emoción de la noche en una dosis de adrenalina floral, dulce y radicalmente seductora."
  },
  {
    "id": "glasses-celine-triomphe",
    "name": "Celine Gafas de Sol Triomphe 01 en Acetato Negro",
    "category": "glasses",
    "description": "Diseño icónico ovalado de alta costura en acetato negro pulido. Destaca por el emblemático motivo Triomphe en relieve metálico dorado pulido en ambas varillas y lentes solares tintadas con máxima protección UV.",
    "price": 420,
    "image": "/images/celine-triomphe-oval.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Montura: Acetato de celulosa premium negro brillante biselado a mano",
      "Detalle emblemático: Logotipo de autor Celine Triomphe en metal dorado tridimensional",
      "Lentes: Tintadas en gris humo con protección 100% UVA/UVB Categoría 3",
      "Presentación: Incluye funda de piel rígida oficial Celine Paris y paño de seda"
    ],
    "history": "La máxima expresión de la elegancia parisina contemporánea, un homenaje a la Place de l'Étoile que corona la mirada con un aura de sofisticación absoluta."
  },
  {
    "id": "glasses-prada-symbole",
    "name": "Prada Gafas de Sol Symbole PR 17WS Rectangulares",
    "category": "glasses",
    "description": "Silueta geométrica audaz con audaces cortes biselados en acetato negro profundo. Varillas tridimensionales multifacetadas que integran el legendario triángulo de Prada con logotipo PRADA Milano.",
    "price": 390,
    "image": "/images/prada-symbole-geometric.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Prada Symbole PR 17WS 1AB-5S0 49-20",
      "Montura: Acetato geométrico esculpido en negro de alto brillo",
      "Varillas: Diseño facetado arquitectónico con placa triangular Prada Milano",
      "Lentes: Minerales gris oscuro uniforme con filtro solar Cat. 3 y protección UV400",
      "Accesorios: Estuche rígido texturizado Prada y gamuza de microfibra de alta densidad"
    ],
    "history": "Una obra de arte vanguardista que fusiona el brutalismo geométrico con el minimalismo de lujo milanés."
  },
  {
    "id": "glasses-ysl-mica",
    "name": "Saint Laurent Gafas de Sol SL 276 Mica Cat-Eye",
    "category": "glasses",
    "description": "Silueta felina cat-eye ultrafemenina y aristocrática en acetato negro pulido. Varillas estilizadas realzadas con el legendario monograma Cassandre YSL esculpido en metal dorado pulido.",
    "price": 375,
    "image": "/images/ysl-mica-cat-eye.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Saint Laurent SL 276 Mica / Monogram Edition",
      "Montura: Acetato lustrado en negro ébano con esquinas afiladas cat-eye",
      "Detalle de autor: Monograma joya Cassandre YSL entrelazado en relieve de oro",
      "Lentes: Polarizadas en gris humo con protección UV400 completa",
      "Presentación: Incluye funda flexible de piel acolchada Saint Laurent Paris"
    ],
    "history": "El magnetismo felino y la audacia andrógina de Yves Saint Laurent destilados en el accesorio fetiche de las pasarelas de París."
  },
  {
    "id": "glasses-dior-montaigne",
    "name": "Dior Gafas de Sol 30 Montaigne Cuadradas con Bisagra CD",
    "category": "glasses",
    "description": "Diseño arquitectónico cuadrado de gran presencia en acetato negro brillante. Su rasgo maestro es la majestuosa bisagra joya en metal dorado con las iniciales CD caladas que unen el frente con las varillas.",
    "price": 460,
    "image": "/images/dior-30-montaigne.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Christian Dior 30 Montaigne SU",
      "Montura: Acetato biselado negro opulento con frontal cuadrangular",
      "Herrajes: Bisagra funcional con logotipo CD bañado en oro claro de alta joyería",
      "Lentes: Filtro solar gris degradado con tratamiento antirreflejante y protección 100% UV",
      "Incluye: Estuche rígido Christian Dior Paris grabado en oro y paño de satén"
    ],
    "history": "Inspiradas en la mítica dirección histórica de Avenue Montaigne, rinden tributo al savoir-faire artesanal de la Maison Dior."
  },
  {
    "id": "glasses-miumiu-oval",
    "name": "Miu Miu Gafas de Sol Glimpse Ovaladas Carey Havana",
    "category": "glasses",
    "description": "Silueta ovalada retro de vanguardia en acetato carey havana de tonalidades ambarinas cálidas. Varillas gruesas con la exclusiva tipografía calada en relieve metálico dorado MIU MIU integrada en las sienes.",
    "price": 365,
    "image": "/images/miumiu-havana-oval.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Miu Miu Glimpse / Regard SMU04Z",
      "Montura: Acetato italiano carey havana con vetas doradas y ámbar",
      "Logo: Tipografía MIU MIU en altorrelieve de oro pulido brillante",
      "Lentes: Tintadas en marrón cálido con protección total UV400 Cat. 3",
      "Presentación: Estuche rígido en terciopelo rosa empolvado Miu Miu y paño de seda"
    ],
    "history": "La esencia del espíritu libre e intelectual de Miuccia Prada, combinando el glamour vintage de los 90 con el chic urbano actual."
  },
  {
    "id": "glasses-lv-cyclone",
    "name": "Louis Vuitton Gafas de Sol Cyclone con Flor Monogram",
    "category": "glasses",
    "description": "Gafas de sol cuadradas de impacto escultural en acetato negro azabache con biselado frontal profundo. Destaca una exquisita flor Monogram de cristal engastada en el puente superior y herrajes metálicos dorados con iniciales LV.",
    "price": 520,
    "image": "/images/lv-cyclone-square.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Louis Vuitton Cyclone Z1578E",
      "Montura: Acetato de alta densidad negro azabache con biselado profundo",
      "Detalle joya: Flor Monogram tallada con cristal engastado en el puente frontal",
      "Varillas: Herrajes y bisagras doradas grabadas con Louis Vuitton",
      "Presentación: Incluye estuche rígido Monogram Canvas y funda de microfibra de la Maison"
    ],
    "history": "Un hito del diseño audaz de Louis Vuitton, reinterpretando los códigos clásicos de la marroquinería en una pieza de óptica de culto."
  },
  {
    "id": "glasses-gucci-gg",
    "name": "Gucci Gafas de Sol Cuadradas con Doble G Entrelazada",
    "category": "glasses",
    "description": "Elegancia atemporal de proporciones cuadradas en acetato negro brillante pulido a mano. Las varillas de perfil ancho lucen el célebre emblema Doble G metálico dorado que evoca los archivos históricos de Florencia.",
    "price": 340,
    "image": "/images/gucci-interlocking-gg.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Gucci GG0036S / Square Heritage Edition",
      "Montura: Acetato refinado negro pulido con puente cómodo anatómico",
      "Detalle de autor: Doble G dorada tridimensional entrelazada en los laterales",
      "Lentes: Lentes gris oscuro con tratamiento antirrayas y 100% protección UVA/UVB",
      "Accesorios: Estuche aterciopelado rígido Gucci en tono joya con forro de satén"
    ],
    "history": "El esplendor de la dolce vita italiana capturado en una silueta que nunca pasa de moda, destilando carisma y distinción."
  },
  {
    "id": "glasses-balenciaga-dynasty",
    "name": "Balenciaga Gafas de Sol Dynasty Rectangulares con Logo BB",
    "category": "glasses",
    "description": "Diseño rectangular futurista y de líneas puras en acetato negro de acabado espejo. Las varillas anchas integran el emblemático logotipo joya calado BB en metal dorado tridimensional con acabado de alta orfebrería.",
    "price": 430,
    "image": "/images/balenciaga-dynasty-bb.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Balenciaga Dynasty BB0096S",
      "Montura: Acetato inyectado premium negro pulido de silueta rectangular baja",
      "Detalle joya: Emblema doble B calado en latón pulido con baño de oro amarillo",
      "Lentes: Lentes nylon tintadas en negro intenso con protección UV total",
      "Presentación: Estuche estuche rígido Balenciaga y toallita de limpieza técnica"
    ],
    "history": "La vanguardia radical de Cristóbal Balenciaga reinventada para el siglo XXI con proporciones arquitectónicas irresistibles."
  },
  {
    "id": "cosmetics-01",
    "name": "Dior Addict Lip Maximizer • Gloss Repulpant",
    "category": "cosmetics",
    "description": "El icónico brillo labial repulpante de Dior con efecto volumen instantáneo y de larga duración, enriquecido con esferas de ácido hialurónico y extracto de flor de cerezo para una hidratación máxima de 24 horas y un acabado espejo resplandeciente.",
    "price": 44,
    "image": "/images/dior-addict-lip-maximizer.jpg",
    "details": [
      "Producto: Dior Addict Lip Maximizer (Gloss Repulpant Maxi Hydratation & Effet Volume Instantané & Longue Durée)",
      "Capacidad: 6 ml / 0.20 FL.OZ",
      "Fórmula: 90% de ingredientes de origen natural con infusión de ácido hialurónico y aceite de cereza",
      "Acabado y Tonos: Acabado brillante espejo con microdestellos brillantes en tonos exclusivos (Turquesa Glacé y Bronce Rosa)",
      "Diseño: Estuche joya transparente con el icónico motivo Dior Oblique plateado en relieve y tapón joya cromado"
    ],
    "history": "Un imprescindible de los camerinos de pasarela de la Maison Dior: el cuidado labial embellecedor que combina hidratación profunda con volumen prodigioso.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-02",
    "name": "Bulgarian Rose Karlovo • Champú Rose Original",
    "category": "cosmetics",
    "description": "Champú capilar revitalizante enriquecido con aceite natural y agua destilada de rosas búlgaras. Limpia suavemente el cuero cabelludo, fortalece la fibra capilar y aporta vitalidad, suavidad sedosa y un distinguido aroma a rosas frescas.",
    "price": 8,
    "image": "/images/rose-original-shampoo.jpg",
    "details": [
      "Producto: Champú Capilar para Pelo Rose Original (Bulgarian Rose Karlovo)",
      "Origen y Tradición: Valle de las Rosas de Bulgaria (Since 1948)",
      "Ingredientes Activos: Aceite de rosa búlgaro 100% natural, agua de rosas pura y D-pantenol",
      "Propiedades: Hidrata en profundidad, estimula el brillo natural y facilita el desenredado",
      "Aplicación: Apto para todo tipo de cabello y uso diario o frecuente"
    ],
    "history": "Elaborado por la legendaria destilería Bulgarian Rose Karlovo, fundada en 1948, aunando la riqueza botánica de la rosa con la excelencia del cuidado capilar diario.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-03",
    "name": "Bulgarian Rose Karlovo • Agua Micelar Rose Original",
    "category": "cosmetics",
    "description": "Agua micelar limpiadora y calmante enriquecida con agua natural y aceite de rosas búlgaras. Desmaquilla con delicadeza, elimina impurezas y revitaliza la piel del rostro, ojos y labios en un solo gesto sin resecar.",
    "price": 9,
    "image": "/images/rose-original-micellar-water.jpg",
    "details": [
      "Producto: Agua Micelar Desmaquillante y Limpiadora Rose Original (Bulgarian Rose Karlovo)",
      "Origen y Tradición: Valle de las Rosas de Bulgaria (Since 1948)",
      "Ingredientes Activos: Agua pura de rosas búlgaras, microesferas micelares activas y extractos botánicos calmantes",
      "Propiedades: Desmaquilla rostro, ojos y labios; calma rojeces y tonifica con suavidad",
      "Aplicación: Apta para todo tipo de pieles, incluidas las más sensibles; sin aclarado posterior"
    ],
    "history": "Creada en el histórico Valle de las Rosas por Bulgarian Rose Karlovo (fundada en 1948), fusionando el poder dermopurificante del agua de rosas con la tecnología micelar más respetuosa.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-05",
    "name": "Bulgarian Rose Signature • Crema Antiedad Anti-Aging",
    "category": "cosmetics",
    "description": "Tratamiento facial antiedad sublime con 96% de ingredientes de origen natural. Combina aceite de rosa, absoluto de rosa damascena y yogur probiótico búlgaro para atenuar arrugas y restaurar la firmeza y juventud del rostro.",
    "price": 18,
    "image": "/images/rose-signature-anti-aging.jpg",
    "details": [
      "Producto: Crema Antiedad Facial Bulgarian Rose Signature Anti-Aging Cream",
      "Pureza: 96% ingredientes botánicos y bioactivos de origen natural",
      "Complejo Activo: Aceite de rosa, absoluto de rosa búlgara y fermentos de yogur",
      "Acción Dermocosmética: Estimula la renovación celular, combate líneas de expresión y mejora la elasticidad",
      "Dermatológicamente testado en tarro de cristal opalino con estuche protector"
    ],
    "history": "La joya de la línea Signature de Karlovo: combina el icónico elixir de rosas búlgaras con las virtudes rejuvenecedoras del yogur tradicional para una piel visiblemente más lisa y luminosa.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-06",
    "name": "Bulgarian Rose Karlovo • Crema Facial de Día Rose Original",
    "category": "cosmetics",
    "description": "Crema de día hidratante y protectora con 100% agua de rosas natural y aceite de rosa damascena. Hidrata en profundidad durante toda la jornada, defiende frente a agresiones ambientales y deja el cutis terso y aterciopelado.",
    "price": 12,
    "image": "/images/rose-original-day-cream.jpg",
    "details": [
      "Producto: Crema de Día Hidratante Rose Original Day Cream (Bulgarian Rose Karlovo)",
      "Envase: Tarro de cristal de 50 ml con estuche ilustrado oficial",
      "Ingredientes Clave: Aceite natural de rosas de Bulgaria, manteca botánica y glicerina vegetal",
      "Textura: Emulsión ligera de rápida absorción que prepara la piel para el maquillaje",
      "Sello de Calidad: 100% Rosa Búlgara Auténtica • Karlovo Since 1948"
    ],
    "history": "El ritual diurno por excelencia de las mujeres búlgaras, manteniendo la frescura y juventud de la piel gracias al microclima privilegiado del Valle de Karlovo.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-07",
    "name": "Bulgarian Rose Karlovo • Crema de Manos Rose Original",
    "category": "cosmetics",
    "description": "Bálsamo regenerador para manos con agua de rosas pura y aceite esencial de rosa. Nutre intensamente las manos secas o castigadas, suaviza cutículas y crea una película protectora invisible sin dejar residuo graso.",
    "price": 6,
    "image": "/images/rose-original-hand-cream.jpg",
    "details": [
      "Producto: Crema de Manos Nutritiva Rose Original Hand Cream",
      "Formato: Tubo ergonómico de precisión y estuche clásico con rosa botánica",
      "Composición: Agua de rosa damascena 100% natural, alantoína y lípidos protectores",
      "Efecto: Alivia la sequedad y tirantez al instante, proporcionando tacto de seda",
      "Fabricación: Bulgarian Rose Karlovo (Since 1948)"
    ],
    "history": "Famosa internacionalmente por su alta concentración de agua destilada de rosas búlgaras, es el cuidado de manos imprescindible para una hidratación elegante en cualquier ocasión.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-08",
    "name": "Bulgarian Rose Karlovo • Crema Suavizante de Pies Rose Joghurt",
    "category": "cosmetics",
    "description": "Crema suavizante y reparadora para pies con aceite de rosas natural, agua de rosas y yogur búlgaro. Hidrata durezas y talones agrietados, refresca la piel cansada y proporciona un confort duradero con agradable aroma.",
    "price": 7,
    "image": "/images/rose-joghurt-foot-cream.jpg",
    "details": [
      "Producto: Crema de Pies Rose Joghurt Gentle Care Softening Foot Cream",
      "Ingredientes Magistrales: Aceite natural de rosa, agua floral de rosas y extracto de yogur probiótico",
      "Acción: Suaviza asperezas, nutre zonas resecas y combate el cansancio de los pies",
      "Textura: Crema emoliente y no pegajosa de fácil absorción",
      "Presentación: Tubo de 75 ml con cierre de seguridad"
    ],
    "history": "La milenaria combinación búlgara de yogur con el exquisito aceite de rosas de Karlovo para crear un tratamiento de spa en casa que regenera la piel de los pies con total suavidad.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-09",
    "name": "Bulgarian Rose Karlovo • Crema Facial de Noche Rose Original",
    "category": "cosmetics",
    "description": "Crema nutritiva de noche enriquecida con aceite de rosas de Karlovo y vitaminas activas. Estimula la regeneración celular durante las horas de descanso, reparando la barrera cutánea para despertar con una piel descansada, elástica y radiante.",
    "price": 13,
    "image": "/images/rose-original-night-cream.jpg",
    "details": [
      "Producto: Crema Facial de Noche Nutritiva Rose Original Night Cream",
      "Envase: Tarro de vidrio de 50 ml con precinto de frescura",
      "Componentes Activos: 100% Aceite de rosas de Bulgaria, complejo vitamínico A y E, mantecas nutritivas",
      "Modo de Empleo: Aplicar cada noche sobre rostro y cuello limpios con un suave masaje ascendente",
      "Tradición: Elaborada ininterrumpidamente en Karlovo desde 1948"
    ],
    "history": "Aprovecha el ciclo circadiano de reparación nocturna para impregnar la piel con los antioxidantes naturales del aceite de rosas más preciado del mundo.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-10",
    "name": "Bulgarian Rose Karlovo • Crema Revitalizante Facial Q10 Rose Original",
    "category": "cosmetics",
    "description": "Emulsión facial revitalizante enriquecida con Coenzima Q10 y extracto natural de rosa búlgara. Previene y combate el envejecimiento prematuro, neutraliza radicales libres y aporta una dosis extra de energía y luminosidad a la tez.",
    "price": 14,
    "image": "/images/rose-original-q10-cream.jpg",
    "details": [
      "Producto: Crema Facial Revitalizante Q10 Rose Original Face Cream",
      "Acción Energizante: Coenzima Q10 liposomada para estimular la síntesis de colágeno natural",
      "Base Botánica: Agua pura de rosas y aceite de rosa damascena 100%",
      "Eficacia: Reduce líneas de fatiga y refuerza el tono cutáneo ante el estrés diario",
      "Contenido: 50 ml en tarro de cristal con tapa sellada"
    ],
    "history": "Fusión pionera de Karlovo entre la biotecnología celular de la Coenzima Q10 y el poder cosmético del agua de rosas damascenas cultivadas en el corazón de los Balcanes.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-11",
    "name": "Bulgarian Rose Signature Spa • Crema Hidratante Intensiva",
    "category": "cosmetics",
    "description": "Crema hidro-nutritiva intensiva de grado spa que asocia el aceite de rosa natural con un complejo marino de caviar y minerales. Restaura el equilibrio hídrico de pieles deshidratadas, devolviendo firmeza y un tacto aterciopelado inmediato.",
    "price": 16,
    "image": "/images/rose-signature-hydrating-cream.jpg",
    "details": [
      "Producto: Crema Facial Hidratante Intensiva Signature Spa Intensively Hydrating Cream",
      "Complejo Exclusivo: Aceite de rosa búlgara + Complejo Bio-Marino de Caviar y oligoelementos",
      "Propiedades: Hidratación multicapa prolongada, efecto barrera frente a la pérdida de agua y confort tensor",
      "Acabado: Piel satinada, fresca y visiblemente rellenada",
      "Gama: Bulgarian Rose Signature Spa Karlovo"
    ],
    "history": "Inspirada en los centros termales y de hidroterapia búlgaros, esta fórmula de alta gama funde el elixir floral del Valle de las Rosas con el poder revitalizante del caviar negro.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-12",
    "name": "Bulgarian Rose Karlovo • Gel de Ducha Rose Original",
    "category": "cosmetics",
    "description": "Gel de baño y ducha espumoso con agua natural de rosas y activos limpiadores dermo-respetuosos. Envuélvete en una espuma delicada que limpia e hidrata la piel de todo el cuerpo dejando un rastro perfumado a rosas frescas recién cortadas.",
    "price": 8,
    "image": "/images/rose-original-shower-gel.jpg",
    "details": [
      "Producto: Gel de Ducha Espumoso Rose Original Shower Gel (Bulgarian Rose Karlovo)",
      "Formato: Frasco ergonómico con dosificador dosificador de precisión",
      "Aroma: Fragancia floral natural a auténtica rosa damascena de Bulgaria",
      "Beneficios: Limpia sin alterar el manto lipídico natural de la piel, apto para uso diario de toda la familia",
      "Garantía: Bulgarian Rose Karlovo • Since 1948"
    ],
    "history": "Transforma la ducha en un baño de pétalos búlgaros con la autenticidad botánica certificada de la destilería de Karlovo.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-13",
    "name": "Bulgarian Rose Karlovo • Gel Higiene Íntima Rose Joghurt",
    "category": "cosmetics",
    "description": "Gel suave para la higiene íntima diaria formulado con agua y aceite natural de rosas búlgaras y yogur probiótico. Mantiene el equilibrio del pH fisiológico, calma rojeces y aporta una agradable sensación de frescor y pureza duradera.",
    "price": 8,
    "image": "/images/rose-intimate-gel.jpg",
    "details": [
      "Producto: Gel Íntimo Rose Joghurt Gentle Care for Intimate Hygiene (Bulgarian Rose Karlovo)",
      "Capacidad: Botella ergonómica de 200 ml con tapón de seguridad",
      "Fórmula Bioactiva: Aceite natural de rosa damascena, agua floral de rosas y fermento probiótico de yogur búlgaro",
      "Beneficios: Protección y confort íntimo, respeta la flora microbiana y alivia molestias o tirantez",
      "Seguridad: Testado ginecológicamente y dermatológicamente en pieles sensibles • Since 1948"
    ],
    "history": "La combinación magistral de la rosa de Karlovo y el probiótico de yogur búlgaro para un cuidado íntimo de máxima suavidad y confianza.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-14",
    "name": "Bulgarian Rose • Gel Desinfectante de Manos Dry Wash Rose (85 ml)",
    "category": "cosmetics",
    "description": "Gel hidroalcohólico purificante y limpiador de manos sin necesidad de aclarado con extracto y aroma a rosa damascena. Limpia y protege de inmediato dejando las manos suaves, frescas y delicadamente perfumadas sin resecarlas ni dejarlas pegajosas.",
    "price": 4,
    "image": "/images/rose-hand-sanitizer.jpg",
    "details": [
      "Producto: Hand Gel Dry Wash Rose • Gel Limpiador de Manos Sin Agua (85 ml e)",
      "Acción Inmediata: Limpieza higienizante instantánea estés donde estés sin necesidad de jabón ni toalla",
      "Composición: Alcohol cosmético de alta pureza purificante, extracto de rosa y glicerina vegetal hidratante",
      "Sensación: Secado en segundos, cero residuo pegajoso y aroma floral dulce reconfortante",
      "Formato: Frasco compacto transparente de bolsillo de 85 ml con tapón bisagra hermético"
    ],
    "history": "El aliado perfecto para llevar en el bolso o en el coche, aunando máxima higiene y la caricia aromática de las rosas búlgaras.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-15",
    "name": "Bulgarian Rose Karlovo • Gel Líquido de Manos Rose Original Soft Care",
    "category": "cosmetics",
    "description": "Jabón líquido cremoso para el lavado frecuente de manos con agua natural de rosas y agentes hidratantes dermo-respetuosos. Limpia con delicadeza cuidando la barrera cutánea y perfumando la piel con la fragancia inconfundible de Karlovo.",
    "price": 6,
    "image": "/images/rose-liquid-hand-wash.jpg",
    "details": [
      "Producto: Rose Original Soft Care Hand Wash con Dosificador (Bulgarian Rose Karlovo)",
      "Presentación: Envase con bomba dosificadora ergonómica de precisión",
      "Ingredientes Principales: 100% agua de rosas damascenas de Bulgaria, glicerina botánica y agentes limpiadores suaves",
      "Efecto: Espuma cremosa, hidratación prolongada y manos suaves incluso tras múltiples lavados al día",
      "Origen: Destilado en el Valle de las Rosas de Bulgaria • Calidad original desde 1948"
    ],
    "history": "Diseñado para enriquecer el ritual del aseo de manos con la pureza y el deleite aromático de la destilería de Karlovo.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-16",
    "name": "Bulgarian Rose Karlovo • Jabón en Pastilla Rose Original 100% Natural",
    "category": "cosmetics",
    "description": "Pastilla de jabón vegetal de tocador enriquecida con aceite puro 100% de rosa búlgara y agua floral. Genera una espuma densa y sedosa que limpia rostro y cuerpo respetando el pH cutáneo con un aroma noble y cautivador.",
    "price": 4,
    "image": "/images/rose-original-soap.jpg",
    "details": [
      "Producto: Rose Original Soap en Pastilla con Estuche Oficial Ilustrado (Bulgarian Rose Karlovo)",
      "Ingredientes: 100% puro aceite de rosa damascena, agua de rosas y base vegetal hidratante",
      "Formato: Pastilla blanca de 100 g grabada con el emblema de Karlovo en estuche protector",
      "Propiedades: Espuma aterciopelada, acción tonificante y aroma floral embriagador",
      "Compromiso: Libre de grasas animales, elaborado bajo método tradicional búlgaro"
    ],
    "history": "La pieza más emblemática y tradicional de los tocadores búlgaros, elaborada ininterrumpidamente desde 1948.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-17",
    "name": "Bulgarian Rose Karlovo • Manteca Corporal Rose Original Body Butter",
    "category": "cosmetics",
    "description": "Manteca corporal untuosa de nutrición ultra-rica con aceite 100% natural de rosas búlgaras y mantecas botánicas. Se funde al contacto con la piel para reparar zonas secas, aportar elasticidad y dejar un velo de satén perfumado durante 48 horas.",
    "price": 13,
    "image": "/images/rose-body-butter.jpg",
    "details": [
      "Producto: Rose Original Body Butter • Manteca Corporal Nutritiva (Bulgarian Rose Karlovo)",
      "Envase: Tarro circular con tapa de rosca ilustrada con rosas de Karlovo",
      "Riqueza Botánica: Aceite puro de rosa damascena 100%, manteca de karité, aceite de cacao y vitamina E",
      "Resultados: Nutrición intensiva, alivio de la tirantez y acabado sedoso no graso",
      "Garantía: Fórmula hipoalergénica sin aceites minerales pesados • Since 1948"
    ],
    "history": "Un deleite sensorial que envuelve el cuerpo con la caricia nutritiva de la rosa reina de los Balcanes.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-18",
    "name": "Bulgarian Rose Karlovo • Mascarilla Capilar Reparadora Ultimate Repair",
    "category": "cosmetics",
    "description": "Mascarilla capilar reconstructora intensiva con proteínas de seda, queratina vegetal y aceite 100% natural de rosa búlgara. Repara la fibra capilar desde el interior, sellando cutículas, aportando brillo espejo y suavidad extrema.",
    "price": 12,
    "image": "/images/rose-repair-hair-mask.jpg",
    "details": [
      "Producto: Rose Original Ultimate Repair Hair Mask Silk & Proteins",
      "Formato: Tarro de 250 ml para tratamiento capilar intensivo en ducha",
      "Complejo Activo: Aceite de rosa de Karlovo 100%, proteínas de seda hidrolizadas y provitamina B5",
      "Acción: Reconstruye puntas abiertas, combate el encrespamiento y devuelve elasticidad a cabellos secos o castigados",
      "Modo de Uso: Aplicar 5 a 8 minutos tras el champú y enjuagar con abundante agua tibia"
    ],
    "history": "El tratamiento capilar de salón más aclamado de Bulgaria para devolver la vitalidad y el aroma a rosas a la melena.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-19",
    "name": "Bulgarian Rose Karlovo • Mascarilla Exfoliante Facial 2 en 1",
    "category": "cosmetics",
    "description": "Tratamiento facial dual exfoliante y mascarilla renovadora con micro-partículas botánicas y agua 100% pura de rosas. Desprende con suavidad células muertas y toxinas mientras nutre y calma el rostro en un solo gesto.",
    "price": 10,
    "image": "/images/rose-exfoliating-mask.jpg",
    "details": [
      "Producto: Rose Original Exfoliating Face Mask 2 in 1 (Bulgarian Rose Karlovo)",
      "Presentación: Tubo de 100 ml con estuche oficial ilustrado con rosas de Karlovo",
      "Activos: Microesferas exfoliantes naturales biodegradables, 100% aceite de rosa damascena y arcilla blanca purificante",
      "Doble Efecto: Exfoliación suave no abrasiva + mascarilla iluminadora en 10 minutos",
      "Resultados: Cutis suave, poros limpios y afinados, y luminosidad radiante instantánea"
    ],
    "history": "La solución completa dos en uno para disfrutar de una sesión de spa botánico purificante en casa.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-20",
    "name": "Bulgarian Rose Karlovo • Sérum Iluminador Facial y Ojos Brightening Serum",
    "category": "cosmetics",
    "description": "Sérum iluminador y alisador avanzado para rostro y contorno de ojos con extracto concentrado de rosa damascena 100% puro. Difumina líneas de expresión, atenúa sombras oscuras bajo los ojos y devuelve una tez radiante y descansada.",
    "price": 16,
    "image": "/images/rose-brightening-serum.jpg",
    "details": [
      "Producto: Rose Original Brightening and Smoothing Serum for Face and Around Eyes",
      "Envase: Frasco de vidrio con dispensador dosificador dosificador y estuche floral oficial",
      "Ingredientes Clave: Aceite y agua natural de rosa búlgara 100%, ácido hialurónico y complejo botánico reafirmante",
      "Aplicación Específica: Apto para rostro completo y la delicada zona periocular",
      "Textura: Fluido sedoso ultraligero de absorción inmediata sin sensación grasa"
    ],
    "history": "Desarrollado en los laboratorios de Karlovo para concentrar el poder rejuvenecedor de la rosa en un elixir de luminosidad diaria.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-21",
    "name": "Bulgarian Rose Karlovo • Tónico Facial Rose Original Face Tonic",
    "category": "cosmetics",
    "description": "Loción tónica purificante y calmante con agua natural de rosas damascenas de Bulgaria. Remueve los últimos restos de impurezas, tonifica los poros, equilibra la hidratación y deja la tez fresca, radiante y preparada para el tratamiento diario.",
    "price": 8,
    "image": "/images/rose-face-tonic.jpg",
    "details": [
      "Producto: Rose Original Rose Face Tonic (Bulgarian Rose Karlovo)",
      "Volumen: Frasco de 200 ml con tapón dosificador fácil",
      "Pureza: 100% agua floral de rosa damascena y extracto de D-pantenol calmante",
      "Beneficios: Tonificante, descongestionante, reafirmante y equilibrador de pH",
      "Sin Alcohol: Fórmula ultrasuave adecuada para pieles secas, normales y reactivas"
    ],
    "history": "El secreto diario de belleza en los Balcanes para despertar la frescura del rostro cada mañana.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-22",
    "name": "Lady's Joy Luxury Skin Care • Crema Facial Antiedad Anti-Aging Face Cream",
    "category": "cosmetics",
    "description": "Crema facial antiedad de lujo de la exclusiva gama Lady's Joy Karlovo formulada con aceite y agua destilada de rosas orgánicas de Bulgaria y extracto de perla negra. Estimula la renovación celular profunda, suaviza arrugas de expresión y devuelve a la piel una firmeza y tersura sublimes.",
    "price": 26,
    "image": "/images/ladys-joy-anti-aging.jpg",
    "details": [
      "Producto: Lady's Joy LUXURY SKIN CARE Anti-Aging Face Cream (Bulgarian Rose Karlovo)",
      "Tarro de cristal de alta cosmética de 50 ml con estuche oficial en oro y ribetes nobles",
      "Ingredientes Activos: Aceite de rosa orgánico (Organic Rose Oil), Agua floral bio (Organic Rose Water) y Extracto de Perla Negra (Black Pearl Extract)",
      "Acción: Hidratación antienvejecimiento celular, regeneración de colágeno y luminosidad perlada",
      "Certificación: Organic Spa Oil - Karlovo • Elaboración bio-certificada"
    ],
    "history": "La cúspide de la alta cosmética balcánica: el maridaje entre los pétalos más puros de Karlovo y la perla negra marina.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-23",
    "name": "Bulgarian Rose For Men • Bálsamo After Shave Calmante (Rose, Bamboo & Prebiotic)",
    "category": "cosmetics",
    "description": "Bálsamo calmante e hidratante para después del afeitado diseñado específicamente para el cuidado de la piel masculina. Enriquecido con aceite de rosa de Karlovo, extracto de bambú y complejos prebióticos que calman de inmediato la irritación, rojeces y escozor del afeitado.",
    "price": 11,
    "image": "/images/men-after-shave-balm.jpg",
    "details": [
      "Producto: Bulgarian Rose For Men After Shave Balm (Bulgarian Rose Karlovo • Since 1948)",
      "Envase: Dosificador cilíndrico ergonómico verde bosque mate de 100 ml con bomba de precisión",
      "Fórmula Activa: Agua y aceite puro de rosa búlgara, extracto purificante de bambú y bio-prebióticos fortalecedores",
      "Efecto: Alivio instantáneo del ardor, nutrición no grasa, absorción ultrarrápida y acabado mate confortable",
      "Tolerancia: Dermatológicamente testado para pieles masculinas sensibles o propensas a foliculitis"
    ],
    "history": "La línea For Men traslada la herencia botánica de Karlovo a la rutina masculina moderna, aportando frescor amaderado y máxima protección dérmica.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-24",
    "name": "Lady's Joy Luxury Skin Care • Crema Antiarrugas 24K Gold Face Cream",
    "category": "cosmetics",
    "description": "Tratamiento de alta joyería cosmética formulado con partículas de Oro puro de 24 Quilates, rosa orgánica de Karlovo y extracto de Edelweiss alpino bio. Redensifica la piel, rellena líneas de expresión y otorga un resplandor dorado radiante inigualable.",
    "price": 32,
    "image": "/images/ladys-joy-24k-gold.jpg",
    "details": [
      "Producto: Lady's Joy LUXURY SKIN CARE - 24K GOLD - Anti-Wrinkle Face Cream (Bulgarian Rose Karlovo)",
      "Presentación: Tarro de cristal de lujo dorado de 50 ml con elegante estuche negro satinado y precintos en oro",
      "Trilogía Magistral: Oro coloidal 24K bioasimilable, Aceite de rosa orgánico (Organic Rose) y Flor de las Nieves (Organic Edelweiss)",
      "Propiedades: Potente acción antioxidante frente a radicales libres, tensado epidérmico y luminosidad instantánea"
    ],
    "history": "Inspirada en los rituales de oro y rosa de la realeza balcánica para revitalizar las pieles más exigentes.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-25",
    "name": "Bulgarian Rose For Men • Crema Facial Antiedad Reafirmante (Rose, Bamboo & Prebiotic)",
    "category": "cosmetics",
    "description": "Crema facial antiedad masculina de fórmula bioactiva con rosa damascena, bambú y prebióticos. Combate los signos de fatiga y envejecimiento celular en la piel del hombre, alisando líneas de expresión y reforzando la barrera protectora frente a la contaminación urbana.",
    "price": 14,
    "image": "/images/men-anti-aging-cream.jpg",
    "details": [
      "Producto: Bulgarian Rose For Men Anti-Aging Face Cream (Bulgarian Rose Karlovo)",
      "Envase: Frasco con dispensador hermético 'airless' verde bosque mate de 50 ml",
      "Trío Botánico: Aceite natural de rosa, extracto de tallo de bambú y complejos prebióticos de equilibrio dérmico",
      "Beneficios: Efecto tensor no graso, tonifica la tez fatigada y revitaliza el rostro tras jornadas intensas",
      "Modo de Uso: Aplicar mañana y/o noche tras la limpieza o el afeitado con un ligero masaje ascendente"
    ],
    "history": "Especialmente concebida para la densidad y necesidades energéticas de la piel masculina.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-26",
    "name": "Lady's Joy Luxury Skin Care • Crema Facial Hidratante 24 Horas (24 Hours Hydration)",
    "category": "cosmetics",
    "description": "Emulsión facial de hidratación profunda prolongada 24 horas con aceite bio de rosa de Karlovo, agua floral pura y extracto de perla negra. Retiene la humedad celular durante todo el día, aportando suavidad sedosa, flexibilidad y vitalidad duradera.",
    "price": 24,
    "image": "/images/ladys-joy-hydration-24h.jpg",
    "details": [
      "Producto: Lady's Joy LUXURY SKIN CARE Face Cream 24 Hours Hydration (Bulgarian Rose Karlovo)",
      "Formato: Tarro de cristal blanco satinado de 50 ml con estuche decorado con motivos dorados",
      "Complejo Activo: Aceite de rosa orgánico (Organic Rose Oil), Agua de rosa orgánica y Extracto de perla negra marina",
      "Efecto 24H: Hidratación continua demostrada clínicamente, previene la deshidratación y la sensación de tirantez",
      "Textura: Crema ligera aterciopelada de absorción rápida que deja la piel fresca, elástica y deliciosamente perfumada"
    ],
    "history": "Un oasis botánico que protege la piel femenina de los cambios bruscos de temperatura y la polución urbana.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-27",
    "name": "Bulgarian Rose For Men • Gel de Afeitado Precisión Shave Gel (Rose, Bamboo & Prebiotic)",
    "category": "cosmetics",
    "description": "Gel de afeitado de alta lubricación con textura transparente facilitadora del deslizamiento de la cuchilla. Formulado con agua de rosas de Bulgaria, extracto de bambú vigorizante y agentes prebióticos protectores que previenen cortes y micro-irritaciones.",
    "price": 8,
    "image": "/images/men-shave-gel.jpg",
    "details": [
      "Producto: Bulgarian Rose For Men Shave Gel • Gel de Afeitado Transparente de Precisión (Bulgarian Rose Karlovo)",
      "Presentación: Tubo de 150 ml verde bosque mate con tapón dosificador abatible",
      "Visibilidad Máxima: Fórmula gel no espumosa ideal para perfilar barba, bigote o afeitado integral apurado",
      "Ingredientes: Aceite esencial de rosa damascena, extracto de bambú y complejo prebiótico bio-dermoactivo",
      "Sensación: Deslizamiento suave, frescor tonificante inmediato y piel elástica sin rojeces"
    ],
    "history": "La evolución técnica del afeitado tradicional para lograr una definición impecable y máximo cuidado dérmico.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-28",
    "name": "Bulgarian Rose For Men • Gel de Ducha Revitalizante Shower Gel (Rose, Bamboo & Prebiotic)",
    "category": "cosmetics",
    "description": "Gel de ducha tonificante masculino formulado para limpiar eficazmente el cuerpo y el cabello respetando el equilibrio fisiológico. El agua de rosas de Karlovo y el extracto de bambú proporcionan un estallido energizante y una fragancia masculina fresca y duradera.",
    "price": 7,
    "image": "/images/men-shower-gel.jpg",
    "details": [
      "Producto: Bulgarian Rose For Men Shower Gel • Gel de Ducha Cuerpo & Cabello (Bulgarian Rose Karlovo)",
      "Formato: Botella cilíndrica de 250 ml en verde bosque mate con tapón dosificador ergonómico",
      "Fórmula 2 en 1: Limpieza tonificante integral de la piel corporal y el cuero cabelludo",
      "Activos: Rosa damascena de Bulgaria, extracto botánico de bambú y prebióticos protectores",
      "Aroma: Notas florales nobles combinadas con toques amaderados y verdes de bambú"
    ],
    "history": "Una ducha vigorizante que despeja la mente y recarga la piel de energía botánica pura.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-29",
    "name": "Bulgarian Rose For Men • Jabón Purificante Carbón Vegetal & Rosa (Purifying Soap)",
    "category": "cosmetics",
    "description": "Pastilla de jabón artesanal purificante formulada con carbón vegetal activo, aceite de rosa búlgara, extracto de bambú y prebióticos. Desintoxica los poros, regula el exceso de sebo y elimina impurezas con una espuma cremosa y un aroma aromático masculino refinado.",
    "price": 5,
    "image": "/images/men-purifying-soap.jpg",
    "details": [
      "Producto: Bulgarian Rose For Men Purifying Soap con Estuche Oficial (Bulgarian Rose Karlovo)",
      "Presentación: Pastilla negra de 100 g moldeada artesanalmente con estuche individual verde bosque",
      "Activos Détox: Carbón activo de origen vegetal (détox y control de brillos), aceite puro de rosa y bambú",
      "Efecto: Piel profundamente limpia, poros descongestionados y cutis libre de toxinas sin resecar",
      "Uso: Rostro y cuerpo, perfecto para la ducha matutina o tras la práctica deportiva"
    ],
    "history": "La fuerza purificante del carbón combinada con la delicadeza calmante de la rosa damascena de Karlovo.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-30",
    "name": "Bulgarian Rose Karlovo • Agua de Rosas Natural 100% Pura Spray",
    "category": "cosmetics",
    "description": "Agua floral pura de rosa damascena búlgara obtenida por destilación al vapor directa. Calma, refresca, hidrata y tonifica el rostro y cuerpo de forma instantánea.",
    "price": 9,
    "image": "/images/rose-water-spray.jpg",
    "details": [
      "Volumen: 200 ml con vaporizador microdifusor ergonómico",
      "Composición: 100% agua de flor de Rosa Damascena búlgara pura",
      "Efectos: Tónico facial calmante, fijador de maquillaje y bruma hidratante corporal",
      "Seguridad: Sin conservantes químicos, sin alcohol, apto para pieles ultrasensibles"
    ],
    "history": "El secreto de belleza más antiguo y universal de Bulgaria, destilado directamente de los pétalos frescos del Valle de las Rosas.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-31",
    "name": "Bulgarian Rose Karlovo • Bálsamo Labial Nutritivo Rose Original",
    "category": "cosmetics",
    "description": "Bálsamo labial ultra-nutritivo con aceite de rosas de Bulgaria, manteca de karité y vitamina E. Regenera los labios secos o agrietados, devolviendo flexibilidad y brillo natural.",
    "price": 5,
    "image": "/images/rose-lip-balm.jpg",
    "details": [
      "Formato: Stick labial de 5 g de deslizamiento suave",
      "Activos: Aceite puro de rosa damascena, manteca de karité, cera de abejas y vitamina E",
      "Acción: Hidratación profunda 24h, protege del frío, viento y radiación solar",
      "Sensación: Labios aterciopelados con un sutil y exquisito aroma a rosas frescas"
    ],
    "history": "Un imprescindible en cualquier bolso para mantener una sonrisa radiante y sedosa en todo momento.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-32",
    "name": "Bulgarian Rose Karlovo • Aceite de Masaje Corporal y Facial Rose Original",
    "category": "cosmetics",
    "description": "Aceite corporal sedoso de masaje enriquecido con aceite de rosa damascena búlgara, aceite de almendras dulces y vitamina E. Nutre intensamente, relaja los sentidos y perfuma la piel.",
    "price": 14,
    "image": "/images/rose-massage-oil.jpg",
    "details": [
      "Volumen: 100 ml con dosificador de precisión",
      "Base botánica: Aceite de almendras dulces, aceite de girasol orgánico y aceite esencial de rosa",
      "Propiedades: Tacto seco de absorción progresiva que no mancha los tejidos",
      "Ritual: Ideal para masajes relajantes tras el baño o como nutrición profunda de la piel"
    ],
    "history": "El ritual de spa privado de la Maison, elevando el masaje a una experiencia sensorial inolvidable.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "cosmetics-33",
    "name": "Bulgarian Rose Karlovo • Crema Contorno de Ojos Rose Original (Eye Contour Cream)",
    "category": "cosmetics",
    "description": "Crema delicada y sedosa para el contorno de ojos formulada con agua y aceite puro de rosa damascena de Karlovo, coenzima Q10 y D-pantenol. Hidrata intensamente, atenúa ojeras y bolsas, y alisa visiblemente las líneas de expresión perioculares devolviendo luminosidad a la mirada.",
    "price": 9,
    "image": "/images/rose-eye-cream.jpg",
    "details": [
      "Producto: Crema Contorno de Ojos Rose Original (Bulgarian Rose Karlovo • Since 1948)",
      "Formato: Tubo ergonómico de 15 ml con cánula aplicadora dosificadora de alta precisión",
      "Complejo Activo: Aceite de rosa búlgara 100% natural, Coenzima Q10 energizante, D-pantenol y vitamina E",
      "Acción Oftalmológica: Descongestiona bolsas, aclara el tono oscuro de las ojeras y previene líneas de expresión",
      "Tolerancia: Testado bajo estricto control dermatológico y oftalmológico, ideal para ojos sensibles"
    ],
    "history": "Un tratamiento botánico indispensable de Karlovo concebido para iluminar la mirada y mimar la piel más fina y exigente del rostro.",
    "availability": "available",
    "isAvailable": true
  },
  {
    "id": "clothing-01",
    "name": "Victoria's Secret Shine Strap • Tanga Joya Cristal",
    "category": "clothing",
    "description": "El icónico diseño de lencería de Victoria's Secret confeccionado en microfibra sedosa ultra suave con tirantes laterales decorados con cristales y pedrería brillante que capturan la luz, combinando glamour audaz con confort absoluto.",
    "price": 30,
    "image": "/images/victorias-secret-shine-strap.jpg",
    "details": [
      "Modelo: Victoria's Secret Shine Strap Crystal Rhinestone Thong",
      "Tonos disponibles: Azul Celeste Pastel con tirantes de strass brillante & Borgoña Ciruela Satinado con logo cristal 'VICTORIA'S SECRET'",
      "Talla: M / M (Tiro bajo/medio con corte ergonómico de alta elasticidad)",
      "Tejido: Microfibra sedosa premium con refuerzo higiénico de algodón 100%",
      "Detalles: Tirantes joya elásticos con cristales facetados de alto brillo y etiqueta original"
    ],
    "history": "El diseño de lencería más aclamado y viral de Victoria's Secret, creado para realzar la silueta con un toque inconfundible de brillo y sensualidad.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-02",
    "name": "Victoria's Secret Shine Strap • Tanga Multi-Tiras Negro",
    "category": "clothing",
    "description": "Seductora braguita tanga de tiro bajo con diseño de tiras dobles y multi-tiras laterales de Victoria's Secret, confeccionada en suave microfibra satinada negra azabache y decorada con cristales de strass brillantes que deletrean 'VICTORIA'S SECRET'.",
    "price": 30,
    "image": "/images/victorias-secret-black-shine-strap.jpg",
    "details": [
      "Modelo: Victoria's Secret Strappy Shine Strap Rhinestone Thong",
      "Talla: S / Small (Tiro bajo ergonómico con ajuste suave y elástico)",
      "Color: Negro Intenso Satinado & toques en Azul Glacé",
      "Detalles: Tiras dobles joya con incrustaciones de strass cristalino y tipografía brillante 'VICTORIA'S SECRET'",
      "Tejido: Microfibra sedosa de alta elasticidad con refuerzo de algodón 100%"
    ],
    "history": "El emblemático diseño Shine Strap de Victoria's Secret en su silueta más atrevida con tiras múltiples joya, pensado para aportar un brillo deslumbrante en cada movimiento.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-03",
    "name": "Victoria's Secret Very Sexy • Tanga de Encaje Shine Strap",
    "category": "clothing",
    "description": "Diseño premium de la colección Very Sexy de Victoria's Secret que combina exquisito encaje floral transparente con tirantes elásticos decorados con deslumbrantes cristales de strass con el logo de 'VICTORIA'S SECRET', logrando un equilibrio perfecto entre sofisticación y sensualidad.",
    "price": 30,
    "image": "/images/victorias-secret-lace-shine-strap.jpg",
    "details": [
      "Colección: Victoria's Secret Very Sexy Collection (Lace Shine Strap Thong)",
      "Talla: XS / Extra Small (Tiro bajo favorecedor y diseño anatómico adaptable)",
      "Colores: Azul Real Cobalto con Encaje Floral, Rosa Fucsia Neón Satinado & Negro Azabache",
      "Detalles: Tirantes anchos con cristales brillantes facetados y pedrería en tipografía 'VICTORIA'S SECRET'",
      "Material: Encaje floral delicado con paneles elásticos y puente higiénico de algodón puro"
    ],
    "history": "La emblemática línea Very Sexy de Victoria's Secret fusiona el encaje de alta lencería con tirantes brillantes de strass para un look audaz e irresistible.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-04",
    "name": "The North Face • Chaqueta Técnica DryVent Bicolor",
    "category": "clothing",
    "description": "Chaqueta técnica impermeable y cortavientos de The North Face con capucha ajustable y diseño colorblock bitonal en verde oliva y beige arena. Confeccionada con tecnología de membrana DryVent™ para máxima protección transpirable ante la lluvia y el viento.",
    "price": 270,
    "image": "/images/the-north-face-jacket.jpg",
    "details": [
      "Modelo: The North Face DryVent™ All-Weather Hooded Jacket",
      "PVP Oficial: 270,00 € (etiqueta original The North Face)",
      "Tecnología: Tejido técnico DryVent™ impermeable, transpirable y termosellado con acabado hidrófugo DWR",
      "Diseño: Colorblock bitonal en Verde Oliva / Caqui en zona superior y Beige Arena en cuerpo y mangas",
      "Detalles: Cierre frontal con cremallera completa, capucha ergonómica con cordones ajustables, puños regulables con velcro y logotipo blanco The North Face"
    ],
    "history": "Un icono del outdoor y la moda urbana técnica que combina la protección climática avanzada con la estética streetwear contemporánea.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-05",
    "name": "Nike Pro • Mallas de Entrenamiento Dri-FIT",
    "category": "clothing",
    "description": "Mallas deportivas de alto rendimiento Nike Pro diseñadas para ajustarse al cuerpo con soporte firme y sensación de segunda piel. Cuentan con cintura elástica ancha con logotipo 'NIKE PRO' y tecnología Dri-FIT para mantener la frescura y la transpirabilidad en cada entrenamiento.",
    "price": 48,
    "image": "/images/nike-pro-leggings.jpg",
    "details": [
      "Modelo: Nike Pro Women's Training Leggings (Nike Sra Mlla L Gym NP)",
      "PVP Oficial: 47,99 € (con etiquetas oficiales Nike)",
      "Tallas & Colores disponibles: Talla S en Azul Cielo / Blanco & Talla M en Negro Puro",
      "Tecnología: Tejido elástico en cuatro direcciones con tecnología Dri-FIT de capilarización del sudor",
      "Detalles: Banda elástica ancha en la cintura con grafismo 'NIKE PRO' de sujeción óptima y logotipo Swoosh reflectante en la pierna"
    ],
    "history": "La prenda esencial de alto rendimiento de Nike que une compresión ergonómica, soporte postural y máxima libertad de movimiento tanto para el gimnasio como para un estilo activewear diario.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-06",
    "name": "adidas • Mallas Deportivas de Cintura Alta Azul Cobalto",
    "category": "clothing",
    "description": "Mallas de entrenamiento de alto rendimiento adidas diseñadas con cintura alta anatómica que ofrece soporte firme y una silueta estilizada. Confeccionadas en tejido técnico transpirable AEROREADY con acabado suave y flexible para máxima comodidad.",
    "price": 50,
    "image": "/images/adidas-blue-leggings.jpg",
    "details": [
      "Modelo: adidas High-Waisted Training Leggings AEROREADY",
      "Disponibilidad & Tallas: 2 unidades en Talla M y 1 unidad en Talla L",
      "Color: Azul Cobalto Real Intenso / Royal Blue",
      "Tecnología: Tejido elástico en cuatro direcciones con tecnología AEROREADY para evaporación rápida del sudor",
      "Detalles: Logotipo blanco de tres barras adidas termoimpreso en el lateral de la cadera, cintura alta ancha reforzada y costuras planas suaves"
    ],
    "history": "El equilibrio ideal entre sujeción deportiva, elasticidad y estilo dinámico para sesiones de fitness, yoga o uso urbano diario.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-07",
    "name": "Lacoste • Polo Clásico de Piqué Blanco Regular Fit",
    "category": "clothing",
    "description": "El icónico polo de tenis de Lacoste en corte Regular Fit, confeccionado en 100% petit piqué de algodón transpirable y duradero. Presenta cuello y mangas de canalé, tapeta de dos botones de nácar y el legendario cocodrilo verde bordado en el pecho.",
    "price": 90,
    "image": "/images/lacoste-polo-white.jpg",
    "details": [
      "Modelo: Lacoste Classic Piqué Polo Shirt Regular Fit (FR 6 / US XL)",
      "PVP Oficial: 89,99 € (con etiqueta original Lacoste)",
      "Talla: FR 6 / US XL (Corte clásico regular de caída recta impecable)",
      "Color: Blanco Óptico Puro (POLO white)",
      "Material: 100% Algodón en punto petit piqué clásico de alta resistencia",
      "Detalles: Cuello y bordes de manga acanalados, tapeta con botones efecto nácar y cocodrilo verde bordado de 2,5 cm en el pecho"
    ],
    "history": "Creado originalmente por el campeón de tenis René Lacoste en 1933, este polo revolucionó la moda deportiva convirtiéndose en el símbolo imperecedero del estilo chic casual y la elegancia atemporal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-08",
    "name": "BOSS • Polo Paddy Clásico de Piqué Blanco Regular Fit",
    "category": "clothing",
    "description": "Elegante polo de corte regular BOSS confeccionado en piqué de puro algodón transpirable. Cuenta con un diseño contemporáneo realzado por rayas de contraste en negro y gris en el cuello y los puños, junto con el icónico logotipo 'BOSS' bordado en el pecho.",
    "price": 90,
    "image": "/images/boss-paddy-polo-white.jpg",
    "details": [
      "Modelo: BOSS Menswear Paddy Polo Shirt Regular Fit (HBG Paddy Polo Sn00)",
      "PVP Oficial: 90,00 € (con etiqueta original Hugo Boss)",
      "Talla: Medium / M (Corte regular con silueta moderna y cómoda)",
      "Color: Blanco Óptico con ribete en Negro y Gris (White 100)",
      "Material: 100% Algodón piqué de primera calidad transpirable",
      "Detalles: Cuello y ribetes de manga acanalados con vivos a contraste, tapeta de tres botones y logotipo BOSS engomado/bordado en el pecho"
    ],
    "history": "El polo Paddy es un pilar indiscutible de las colecciones de BOSS Menswear, combinando precisión sastre alemana, acabados deportivos dinámicos y un porte sofisticado para cualquier ocasión casual elegante.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-09",
    "name": "Lacoste • Polo Clásico de Piqué Azul Cielo Regular Fit",
    "category": "clothing",
    "description": "Polo de manga corta Lacoste en corte Regular Fit, elaborado en tejido petit piqué de tacto suave y alta transpirabilidad en un favorecedor tono azul cielo pastel. Incorpora cuello acanalado clásico, tapeta de dos botones y el inconfundible cocodrilo verde bordado en el pecho.",
    "price": 90,
    "image": "/images/lacoste-polo-sky-blue.jpg",
    "details": [
      "Modelo: Lacoste Sport / Classic Piqué Polo Shirt Regular Fit (DH5522 00 AEY)",
      "PVP Oficial: 90,00 € (con etiqueta original Lacoste)",
      "Talla: Large / L (FR 5 / US L - Corte Regular Fit de ajuste cómodo y elegante)",
      "Color: Azul Cielo Pastel / Bleu Ciel (Blue AEY)",
      "Material: Tejido piqué de algodón transpirable y resistente de máxima durabilidad",
      "Detalles: Cuello camisero y ribetes acanalados, tapeta con botones al tono y logotipo legendario del cocodrilo verde bordado en el pecho"
    ],
    "history": "Un diseño esencial del vestuario masculino que encarna el savoir-faire deportivo y el refinamiento relajado característico de la casa Lacoste.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-10",
    "name": "Style Edition • Camiseta Gráfica Rosa Roja & Tipografía Editorial",
    "category": "clothing",
    "description": "Camiseta artística de corte casual confeccionada en suave punto de algodón blanco óptico. Destaca por su impactante ilustración central de una rosa roja aterciopelada sobrepuesta a motivos caligráficos de prensa vintage y tipografía de moda editorial.",
    "price": 28,
    "image": "/images/rose-graphic-tshirt.jpg",
    "details": [
      "Modelo: Style Edition Rose Print Crewneck T-Shirt",
      "PVP Oficial: 39,95 € (Precio Outlet Especial: 27,96 € con etiqueta)",
      "Disponibilidad: ¡Última unidad disponible en Talla XS!",
      "Color: Blanco Óptico con Ilustración Artística Rosa Carmesí y Letras Negras",
      "Material: 100% Algodón de tacto suave y transpirable",
      "Detalles: Cuello redondo acanalado, corte cómodo, estampado frontal de alta definición y mangas con detalle gráfico continuo"
    ],
    "history": "Una pieza de autor con estética poética y urbana que fusiona la botánica clásica con el dinamismo del diseño gráfico contemporáneo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-11",
    "name": "New Era & Jordan • Colección Exclusiva de Gorras Streetwear",
    "category": "clothing",
    "description": "Colección exclusiva de gorras icónicas de corte urbano y deportivo premium. Incluye los modelos New Era 9FORTY New York Yankees en tonos pastel lila/lavanda y trucker beige con bordado 3D, y la gorra Jordan Jumpman en suave azul hielo con silueta curva ergonómica.",
    "price": 38,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    "details": [
      "Modelos: New Era 9FORTY NY Yankees & Nike Air Jordan Jumpman Curved Cap",
      "Estado de Stock: Modelos en Verde Bosque y Negro 'Vendidas / Agotadas'",
      "Disponibles: New Era NY Yankees 9FORTY (Lila Pastel), New Era NY Trucker A-Frame (Beige Piedra) y Jordan Jumpman (Azul Hielo)",
      "Detalles New Era: Corona estructurada de 6 paneles, visera curva con pegatina holográfica de autenticidad y bordado frontal en relieve 'NY'",
      "Detalles Jordan: Corona ligera transpirable, cierre posterior ajustable y logotipo metálico/tonal Jumpman",
      "Talla: Talla única ajustable para adulto (Strapback / Snapback universal)"
    ],
    "history": "Un elemento fundamental de la cultura urbana y el streetwear de lujo, combinando la herencia deportiva de las Grandes Ligas de Béisbol y la leyenda del baloncesto de Michael Jordan.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-12",
    "name": "Desigual • Top Sin Mangas Estampado Periódico 'Breaking News'",
    "category": "clothing",
    "description": "Top artístico sin mangas de la firma Desigual confeccionado en punto elástico suave con un innovador estampado integral de collage periodístico 'Breaking News' en blanco y negro, realzado con titulares y caligrafía vanguardista.",
    "price": 35,
    "image": "/images/desigual-newspaper-top.jpg",
    "details": [
      "Modelo: Desigual TS_BREAKING NEWS Sleeveless Top (Art: 25WWTK10/1000)",
      "PVP Oficial: 49,95 € (Precio Outlet Especial: 34,96 € con etiqueta original)",
      "Talla: Medium / M (Corte entallado fluido con excelente caída y elasticidad)",
      "Color: Blanco Óptico y Negro Gráfico (Collage Newspaper Print)",
      "Material: Tejido elástico ligero, suave y transpirable de fácil cuidado",
      "Detalles: Escote barco ancho, diseño sin mangas, bajo recto y motivo continuo de prensa vintage con frases tipográficas 'READ', 'NEWS', 'READY-MADE' y 'MYSELF'"
    ],
    "history": "Un diseño emblemático que refleja el espíritu transgresor y la creatividad mediterránea de Desigual, transformando la prensa escrita en una declaración de moda urbana contemporánea.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-13",
    "name": "Desigual • Top Sin Mangas Girasol Artístico 'TS Haze'",
    "category": "clothing",
    "description": "Top fluido sin mangas de Desigual con un sofisticado motivo floral artístico de girasol en efecto difuminado 'Haze' en tonos ocres y ámbar. Diseñado con costuras overlock vistas en hilo dorado a contraste que recorren el escote, el bajo y una costura asimétrica frontal, con drapeado lateral favorecedor.",
    "price": 49,
    "image": "/images/desigual-haze-top.jpg",
    "details": [
      "Modelo: Desigual REPRIS TS_HAZE Sleeveless Top (Art: 25WWTKXE/1001)",
      "PVP Oficial: 69,95 € (Precio Outlet Especial: 48,96 € con etiqueta original Desigual)",
      "Talla: Large / L (USA L / MEX G - Corte drapeado elástico con ajuste estilizado)",
      "Color: Blanco Óptico con Girasol en Tonos Ocre, Ámbar, Amarillo Mostaza y Oliva",
      "Material: Punto suave de alta calidad con elastano para máxima adaptabilidad y confort",
      "Detalles: Escote redondo, costuras vistas decorativas en hilo tostado/dorado, costura central asimétrica y fruncidos laterales que esculpen la silueta"
    ],
    "history": "Inspirado en la luz solar y la calidez del verano mediterráneo, el top TS Haze traslada la belleza orgánica de la naturaleza a una silueta contemporánea llena de personalidad.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-14",
    "name": "BOSS • Bañador Starfish Rosa Coral con Cintura Elástica",
    "category": "clothing",
    "description": "Bañador de corte medio BOSS para hombre confeccionado en tejido técnico de secado ultra-rápido en un vibrante y sofisticado tono rosa coral pastel. Presenta cinturilla elástica blanca en contraste con cordón ajustable bicolor y el emblemático logotipo 'BOSS' estampado en el muslo izquierdo.",
    "price": 90,
    "image": "/images/boss-starfish-swim-shorts.jpg",
    "details": [
      "Modelo: BOSS Menswear Starfish Swim Shorts (Ref: 50514429 / 10229588 01 685)",
      "PVP Oficial: 90,00 € (con etiqueta original Hugo Boss)",
      "Talla: Medium / M (Corte medio confortable con forro interior de malla suave)",
      "Color: Rosa Coral Pastel con Cinturilla Blanca (Bright Pink / Coral 685)",
      "Material: 100% Poliamida reciclada de secado rápido, resistente al cloro y al agua salada",
      "Detalles: Cintura elástica fruncida en blanco a contraste, cordón tubular con remates, bolsillos laterales en costura y logotipo BOSS engomado"
    ],
    "history": "Un icono del verano de BOSS que fusiona funcionalidad acuática, sostenibilidad y la elegancia deportiva inconfundible de la firma alemana.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-15",
    "name": "adidas Originals • Shorts de Felpa 'Floral Shorts' Blanco Nube & Rosa Pastel",
    "category": "clothing",
    "description": "Pantalón corto deportivo adidas Originals confeccionado en suave felpa francesa de algodón en color blanco nube (Cloud White). Diseñado con cintura elástica fruncida de tiro alto, delicados vivos y ribetes en rosa pastel y un exquisito bordado floral de flores rojas y hojas verdes sobre la pernera junto al legendario trébol de adidas.",
    "price": 38,
    "image": "/images/adidas-floral-shorts-white.jpg",
    "details": [
      "Modelo: adidas Originals Floral Shorts (Ref: IS3869 - CLOWHI/BLANUA)",
      "PVP Oficial: 55,00 € (Precio Outlet Especial: 38,00 € con etiqueta original adidas)",
      "Tallas Disponibles: XS, S y M (Tiro alto con cintura elástica adaptable)",
      "Color: Blanco Nube / Cloud White con vivos y perfiles en Rosa Pastel y bordado carmesí",
      "Material: Felpa francesa 100% Algodón de tacto afelpado ultra-suave y transpirable",
      "Detalles: Cintura ancha elástica fruncida, ribetes en contraste rosa pastel en costuras laterales y bajo redondeado, delicado bordado botánico floral y trébol bordado al tono"
    ],
    "history": "Una reinterpretación femenina y botánica de los clásicos shorts deportivos retro de adidas, fusionando la herencia atlética de los 70 con la frescura del diseño contemporáneo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-16",
    "name": "adidas • Shorts Deportivos 'W CB Sho' Rojo Rubí & Blanco",
    "category": "clothing",
    "description": "Pantalón corto deportivo de adidas en un vibrante tono rojo rubí / magenta 'Pure Ruby'. Confeccionado en tejido suave de algodón afelpado con cintura elástica con cordón de ajuste blanco, vivos laterales blancos a contraste y el logotipo oficial de adidas estampado en la pernera.",
    "price": 35,
    "image": "/images/adidas-ruby-red-shorts.jpg",
    "details": [
      "Modelo: adidas Women Colorblock Shorts (Ref: JG6216 W CB SHO)",
      "PVP Oficial: 35,00 € (con etiqueta original adidas)",
      "Talla Disponible: Talla S (USA S, D S, F S, UK S, I S, J M)",
      "Color: Rojo Rubí Intenso / Pure Ruby (PURRUB / RUBPUR) con ribetes blancos",
      "Material: Felpa suave de mezcla de algodón y poliéster transpirable",
      "Detalles: Cinturilla elástica fruncida con cordón blanco exterior, ribetes laterales blancos estilizadores, bolsillos laterales y logotipo moderno de 3 barras de adidas en blanco"
    ],
    "history": "Un diseño esencial del catálogo deportivo de adidas que fusiona máxima comodidad diaria, libertad de movimiento y el estilo athleisure más vibrante.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-17",
    "name": "Desigual • Bermudas Vaqueras 'Denim Plants' con Bordados Florales",
    "category": "clothing",
    "description": "Bermudas vaqueras cortas de tiro medio-alto de la firma Desigual confeccionadas en denim de algodón elástico en lavado azul claro vintage (Bleach Wash). Destacan por sus exquisitos bordados botánicos florales artesanales en tonos rosa, fucsia, verde y mostaza sobre ambos bolsillos delanteros, botón metálico grabado y detalle bordado del corazón invertido 'D' en el bolsillo relojero.",
    "price": 56,
    "image": "/images/desigual-denim-plants-shorts.jpg",
    "details": [
      "Modelo: Desigual DENIM_PLANTS Embroidered Denim Shorts (Art: 25SWDDXC/5053)",
      "PVP Oficial: 79,95 € (Precio Outlet Especial: 55,96 € con etiqueta original Desigual)",
      "Talla: Talla 36 (USA 8, MEX 26, UK 10, IT 40, D 34 - Corte recto ajustado)",
      "Lavado: Azul Claro Vintage / Light Bleached Denim con sutiles desgastes",
      "Material: Denim elástico suave y confortable (Algodón con elastano para libertad de movimiento)",
      "Detalles: Cierre de cremallera con botón metálico repujado Desigual, bordados florales multicolores en cadera y bolsillos, diseño clásico de 5 bolsillos y costuras reforzadas"
    ],
    "history": "La esencia bohemia y mediterránea de Desigual plasmada en un denim veraniego donde la artesanía floral se fusiona con el estilo casual chic.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-18",
    "name": "adidas Originals • Minifalda Vaquera Denim con Franjas Laterales",
    "category": "clothing",
    "description": "Minifalda vaquera de corte clásico de adidas Originals confeccionada en auténtico denim de algodón en lavado azul índigo vintage. Incorpora las icónicas franjas laterales de la marca curvadas a contraste sobre las costuras exteriores, botón metálico repujado con el trébol Trefoil y parche de piel negro grabado en la cinturilla trasera.",
    "price": 55,
    "image": "/images/adidas-denim-mini-skirt.jpg",
    "details": [
      "Modelo: adidas Originals 3-Stripes Heritage Denim Mini Skirt",
      "PVP Oficial: 65,00 € (Precio Especial Outlet: 55,00 €)",
      "Corte: Minifalda recta de tiro medio con sutil caída en línea A favorecedora",
      "Lavado: Azul Marino Índigo Vintage / Stonewash Denim con pespuntes en tabaco",
      "Material: 100% Algodón denim premium de tacto robusto, estructurado y confortable",
      "Detalles: Bandas laterales a contraste cosidas en los costados, botón metálico dorado envejecido con trébol Trefoil grabado, trabillas para cinturón, diseño de 5 bolsillos y etiqueta trasera jacron de piel en negro mate con el logo adidas Originals en relieve"
    ],
    "history": "Una fusión magistral entre el legado deportivo retro de adidas y la estética desenfadada del denim noventero, creando un básico urbano atemporal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-19",
    "name": "adidas Originals • Shorts 'Floral Shorts' Blanco Nube con Bordado Botánico Doble",
    "category": "clothing",
    "description": "Pantalón corto deportivo de silueta retro de adidas Originals confeccionado en suave felpa de algodón en color blanco nube (Cloud White). Luce exquisitos bordados botánicos florales multicolores en ambos laterales (flores carmesí, pétalos azul zafiro y follaje verde), icónicas 3 bandas en rosa pastel a lo largo de las costuras y ribetes en bajo redondeado.",
    "price": 38,
    "image": "/images/adidas-floral-shorts-double.jpg",
    "details": [
      "Modelo: adidas Originals Floral Shorts (Ref: IS3869 - CLOWHI/BLANUA)",
      "PVP Oficial: 55,00 € (Precio Outlet Especial: 38,00 € con etiqueta original adidas)",
      "Tallas Disponibles: XS, S y M (Tiro alto con cinturilla elástica fruncida)",
      "Color: Blanco Nube / Cloud White con vivos y 3 bandas laterales en Rosa Pastel",
      "Material: Felpa francesa 100% Algodón ultra suave, transpirable y de máxima comodidad",
      "Detalles: Bordado botánico artesanal simétrico en ambas perneras, ribete curvado estilo tulipán en contraste rosa pastel y trébol Trefoil bordado al tono en el bajo"
    ],
    "history": "Inspirado en el atletismo vintage de los años 70, este diseño de adidas Originals celebra la naturaleza y la feminidad combinando la estética deportiva con bordados florales de alta costura.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-20",
    "name": "Hackett London Heritage • Polo Piqué de Manga Corta Azul Marino & Celeste",
    "category": "clothing",
    "description": "Polo clásico de manga corta de la prestigiosa firma británica Hackett London Heritage confeccionado en piqué de puro algodón peinado en tono azul marino profundo. Destaca por el logotipo 'HACKETT LONDON' serigrafiado en contraste azul celeste en el pecho, tapeta frontal con botones y cinta interior del cuello en combinación celeste y blanco crudo.",
    "price": 70,
    "image": "/images/hackett-navy-polo-shirt.jpg",
    "details": [
      "Modelo: Hackett London Heritage Logo Piqué Polo (Ref: HA.LO / PL - 5515HU 30000000020975)",
      "PVP Oficial: 139,95 € (Precio Especial Outlet: 69,95 € con etiqueta original Hackett London)",
      "Talla Disponible: Talla L (Corte Regular Fit británico elegante)",
      "Color: Azul Marino Oscuro / Deep Navy con logo en contraste Azul Celeste y cinta interior bicolor",
      "Material: Piqué 100% Algodón peinado premium de textura transpirable, duradera y suave",
      "Detalles: Cuello camisero acanalado, tapeta con botones grabados, aberturas laterales en el bajo reforzadas y etiqueta interior de tela 'Hackett London Heritage'"
    ],
    "history": "Símbolo de la elegancia y tradición británica, la colección Heritage de Hackett London rinde homenaje al espíritu deportivo distinguido y la sastrería inglesa atemporal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-21",
    "name": "Calvin Klein Jeans • Camiseta 'New York' Tipografía Script Cursiva",
    "category": "clothing",
    "description": "Camiseta de manga corta de corte relajado de Calvin Klein Jeans confeccionada en puro algodón orgánico peinado de tacto extrasuave. Luce en el pecho la emblemática inscripción manuscrita 'calvin klein new york' en una armoniosa combinación cromática bicolor.",
    "price": 39,
    "image": "/images/calvin-klein-script-tee.jpg",
    "details": [
      "Modelo: Calvin Klein Jeans Script Logo Crew Neck Tee",
      "Precio / Modalidad: 39,00 € (A pedido / Disponible bajo reserva)",
      "Tallas Disponibles: XS, S, M, L y XL (Varias tallas disponibles)",
      "Colores Disponibles: Blanco Puro con tipografía Burdeos & Gris Ceniza / Verde Oliva Militar con tipografía Crema",
      "Material: 100% Algodón orgánico peinado de tacto sedoso y caída fluida",
      "Detalles: Cuello redondo acanalado con doble pespunte, mangas con dobladillo sutil, corte recto contemporáneo y bajo reforzado"
    ],
    "history": "Un diseño esencial del estilo minimalista de Nueva York, que reinterpreta el icónico nombre de Calvin Klein con una caligrafía cursiva orgánica y relajada.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-22",
    "name": "Michael Kors • Camisetas de Hombre 'New York Est. 1981' Blanco & Azul Marino",
    "category": "clothing",
    "description": "Camisetas de manga corta para hombre de Michael Kors confeccionadas en fino tejido de punto de puro algodón peinado transpirable y ultrasuave. Destacan por el emblemático logotipo de la firma serigrafiado en bloque vertical en el lateral del pecho 'MICHAEL KORS NEW YORK EST. 1981'.",
    "price": 45,
    "image": "/images/michael-kors-1981-tees.jpg",
    "details": [
      "Modelo: Michael Kors Men's New York Est. 1981 Graphic Crew Neck Tee",
      "PVP Recomendado: 85,00 € (Precio Especial Outlet: 45,00 € con etiquetas originales)",
      "Tallas Disponibles: Talla M y Talla L para Hombre (Corte Regular Fit confortable)",
      "Colores Disponibles: Blanco Puro / Bright White con logo en contraste Azul Marino & Azul Marino Oscuro / Deep Navy con logo en Blanco",
      "Material: 100% Algodón peinado de primera calidad de tacto suave, fresco y transpirable",
      "Detalles: Cuello redondo acanalado de punto elástico indeformable, costuras dobles reforzadas en hombros y dobladillo, serigrafía vertical de alta durabilidad y etiqueta tejida interior Michael Kors"
    ],
    "history": "El tributo definitivo al año de fundación de la casa de moda neoyorquina (1981), encapsulando el lujo deportivo y la sofisticación cosmopolita de Michael Kors en un básico esencial.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-23",
    "name": "Calvin Klein Jeans • Camiseta 'SS Boxy Graphic Logo Tee' Blanco Brillante",
    "category": "clothing",
    "description": "Camiseta corta de corte boxy contemporáneo de Calvin Klein Jeans confeccionada en puro punto de algodón peinado en tono blanco brillante (Bright White). Luce en el frontal un bordado artesanal en relieve con la firma 'calvin klein' en hilo color burdeos vino y 'new york' en caligrafía cursiva gris ceniza.",
    "price": 35,
    "image": "/images/calvin-klein-boxy-tee.jpg",
    "details": [
      "Modelo: Calvin Klein SS BOXY GRAPHIC LOGO TEE (Ref: OTL 4500648239 LZ047G893G YAF)",
      "PVP Oficial: 49,90 € (Precio Outlet Especial: 34,90 € con etiqueta original de tienda)",
      "Talla Disponible: Talla M (Corte Boxy Fit ligeramente cropped, cómodo y favorecedor)",
      "Color: Blanco Brillante / Bright White con bordado frontal en relieve Burdeos & Gris",
      "Material: 100% Algodón peinado de tacto ultra suave y fresco (Fabricado en India)",
      "Detalles: Cuello redondo acanalado reforzado, bordado en relieve 'calvin klein' en punto cadeneta color vino y tipografía manuscrita 'new york' en gris, con etiqueta original cosida y precintada"
    ],
    "history": "Un diseño contemporáneo de Calvin Klein que reinterpreta el legado neoyorquino con un corte boxy de inspiración noventera y bordados de alta definición.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "clothing-24",
    "name": "Polo Ralph Lauren • Polo Piqué 'Slim Fit' Azul Marino con 5 Botones de Nácar",
    "category": "clothing",
    "description": "Polo clásico femenino de manga corta de Polo Ralph Lauren en corte entallado Slim Fit, confeccionado en piqué de algodón peinado en tono azul marino profundo (Navy). Destaca por su elegante tapeta alargada de 5 botones de nácar nacarados y el icónico poni de Ralph Lauren bordado a contraste en hilo blanco sobre el pecho.",
    "price": 81,
    "image": "/images/ralph-lauren-navy-polo.jpg",
    "details": [
      "Modelo: Polo Ralph Lauren Slim Fit Stretch Piqué Polo (Ref: 211870237002 / 211818201005 SSL-KNT)",
      "PVP Oficial: 135,00 € - 145,00 € (Precio Especial Outlet: 81,00 € con etiquetas originales de tienda)",
      "Tallas Disponibles: Talla XL (y tallas seleccionadas de corte Slim Fit entallado femenino)",
      "Color: Azul Marino Clásico / Deep Navy con bordado del poni en Blanco Brillante",
      "Material: Piqué de 100% Algodón peinado de tacto suave, elástico y altamente transpirable",
      "Detalles: Cuello camisero acanalado indeformable, tapeta frontal alargada con 5 botones de nácar auténticos, bordado de alta precisión del jugador de polo en el pecho y aberturas laterales en el bajo"
    ],
    "history": "Un emblema indiscutible del estilo preppy americano desde 1972, famoso por su sofisticada botonadura alargada y su impecable corte estilizado.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "jewelry-01",
    "name": "Louis Vuitton • Pendientes de Aro 'Monogram Flower' Esmaltados Multicolor (3 cm)",
    "category": "jewelry",
    "description": "Exquisitos pendientes de aro de Louis Vuitton con una estructura de 3 cm de diámetro realzada por los motivos florales geométricos del emblemático monograma de la Maison, grabados y esmaltados artesanalmente en vibrantes tonos multicolor (azul, verde, burdeos y amarillo). Disponibles en acabado dorado y plateado brillante.",
    "price": 65,
    "image": "/images/lv-enamel-hoops-multicolor.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Flower Enamel Large Hoop Earrings (Ref: HI76900 / Size: 3cm)",
      "Dimensiones: 3,0 cm de diámetro exterior (Aro de perfil ancho y presencia escultórica)",
      "Acabados disponibles: Baño de Oro Amarillo 18K brillante & Baño de Rodio / Plata pulida efecto espejo",
      "Detalles & Esmalte: Flores del monograma clásico Louis Vuitton en esmalte vitrificado multicolor (azul cobalto, verde esmeralda, burdeos vino y amarillo mostaza)",
      "Cierre: Cierre articulado con pasador a presión de seguridad de alta comodidad",
      "Presentación: Incluye estuche y caja protectora oficial Louis Vuitton Maison Fondée en 1854 Paris con tirador azul"
    ],
    "history": "Una pieza de bisutería de alta gama que reinventa los motivos botánicos del histórico monograma creado en 1896 por Georges Vuitton con una paleta de colores alegre y contemporánea."
  },
  {
    "id": "jewelry-02",
    "name": "Louis Vuitton • Pulsera Rígida de Piel Monogram con Charms Esmaltados LV",
    "category": "jewelry",
    "description": "Elegante pulsera rígida abierta tipo brazalete de Louis Vuitton, elaborada con tira de piel suave y lona Monogram con interior grabado 'LOUIS VUITTON PARIS'. Los extremos están rematados con dos exclusivos dijes esmaltados circulares con montura dorada: el icónico monograma 'LV' y la clásica flor 'Monogram Flower'. Disponible en versión Monogram Marrón Clásico y Rosa Pastel.",
    "price": 65,
    "image": "/images/lv-leather-bracelet-charms.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Leather Dual Charm Open Cuff Bracelet (Ref: HI76800)",
      "Variantes Disponibles: Lona Monogram Marrón Clásico con charms Burdeos/Coral & Piel Rosa Pastel con charms Rojo LV/Blanco Nácar",
      "Material: Piel de vacuno genuina y lona Monogram con interior de suave cuero grabado 'LOUIS VUITTON PARIS'",
      "Detalles de Charms: Medallón circular esmaltado con logotipo 'LV' en relieve dorado y charm floral Monogram Flower con perno dorado",
      "Herrajes: Cierre con broche de clip dorado pulido y terminales en baño de oro de alta durabilidad",
      "Presentación: Incluye estuche tipo cajón oficial Louis Vuitton Maison Fondée en 1854 Paris en tono azafrán con tirador azul"
    ],
    "history": "Un diseño refinado y lúdico que fusiona la excelencia marroquinera de Louis Vuitton con la alta joyería esmaltada en una pulsera ligera y contemporánea."
  },
  {
    "id": "jewelry-03",
    "name": "Louis Vuitton • Pendientes de Botón 'LV Sweetheart' en Forma de Corazón Rosa Pastel",
    "category": "jewelry",
    "description": "Encantadores pendientes de botón en forma de corazón abombado de Louis Vuitton modelo LV Sweetheart. Elaborados en resina esmaltada de alto brillo en un delicado tono rosa pastel y coronados en el centro por el icónico logotipo de las iniciales 'LV' en relieve tridimensional con baño de oro amarillo brillante.",
    "price": 55,
    "image": "/images/lv-sweetheart-pink-earrings.jpg",
    "details": [
      "Modelo: Louis Vuitton LV Sweetheart Enamel Heart Stud Earrings (Ref: HI77A00 / Álbum LV Sweetheart)",
      "Color: Rosa Pastel Dulce / Sweetheart Pink con logotipo frontal en Oro Amarillo 18K brillante",
      "Material: Resina esmaltada pulida efecto cristal y aleación metálica hipoalergénica con baño de oro",
      "Detalles: Corazón tridimensional bombeado con iniciales 'LV' entrelazadas en relieve dorado pulido al centro",
      "Cierre: Pasador para orejas perforadas con tuerca de mariposa de ajuste cómodo y seguro",
      "Presentación: Incluye estuche joyero azul marino aterciopelado con lengüeta de piel y botón dorado LV, junto a la caja exterior oficial Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "Una creación tierna y sofisticada de la Maison Louis Vuitton que simboliza el romance y la dulzura mediante la reinterpretación juvenil del monograma LV."
  },
  {
    "id": "jewelry-04",
    "name": "Louis Vuitton • Anillo 'Monogram Frosted' con Textura Arenada y Flores Grabadas",
    "category": "jewelry",
    "description": "Elegante anillo tipo alianza ancha de Louis Vuitton con un exclusivo acabado superficial arenado/esmerilado mate efecto 'Frosted' de tacto sedoso, sobre el cual destacan en contraste pulido brillante las iniciales 'LV' y las flores del histórico monograma de la Maison. Disponible en Oro Amarillo, Plata y Oro Rosa.",
    "price": 45,
    "image": "/images/lv-frosted-monogram-rings.jpg",
    "details": [
      "Modelo: Louis Vuitton Frosted Monogram Band Ring (Ref: LVJZP0750 / 新品砂面字母花纹戒指)",
      "Acabados Disponibles: Baño en Oro Amarillo 18K, Rodio/Plata brillante y Oro Rosa (Rose Gold)",
      "Textura & Acabado: Superficie arenada mate satinada (Frosted Texture) de alta resistencia al rayado",
      "Detalles & Grabado: Logotipo 'LV' y motivos florales Monogram Flower en relieve con acabado pulido espejo",
      "Material: Acero inoxidable quirúrgico 316L hipoalergénico con triple baño galvánico de alta durabilidad",
      "Presentación: Incluye estuche y caja protectora oficial Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "Un diseño vanguardista que fusiona la textura contemporánea del microarenado con los símbolos imperecederos de la joyería clásica de Louis Vuitton."
  },
  {
    "id": "jewelry-05",
    "name": "Louis Vuitton • Brazalete Rígido 'Pearly Flower' con Flor Calada y Perlas LV",
    "category": "jewelry",
    "description": "Espectacular brazalete rígido articulado abierto de Louis Vuitton modelo Pearly Flower, bañado en oro amarillo brillante pulido. Presenta en un extremo la emblemática flor geométrica del monograma de cuatro pétalos calada con una perla blanca nacarada en su centro, y en el otro extremo un orbe esmaltado perlado enmarcado en bisel dorado con el logotipo 'LV' en relieve. Interior grabado 'LOUIS VUITTON'.",
    "price": 65,
    "image": "/images/lv-pearly-flower-bangle.jpg",
    "details": [
      "Modelo: Louis Vuitton Pearly Flower Open Cuff Hinged Bangle Bracelet (Ref: HI77A20)",
      "Material: Aleación de alta joyería bañada en Oro Amarillo 18K brillante pulido espejo y resina perlada blanca",
      "Detalle Floral: Flor Monogram de 4 puntas en estructura calada arquitectónica con media perla central nacarada",
      "Detalle Medallón: Orbe de perla esférica coronado por el icónico monograma 'LV' en relieve dorado tridimensional",
      "Estructura: Brazalete rígido de diseño abierto con bisagra trasera elástica que facilita su colocación anatómica",
      "Grabado de Autenticidad: Inscripción interior 'LOUIS VUITTON' grabada en bajorrelieve",
      "Presentación: Incluye estuche protector rígido oficial de Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "Inspirada en el universo poético de las flores del monograma de Louis Vuitton, la línea Pearly Flower combina la luminosidad de las perlas con la fuerza escultórica del oro."
  },
  {
    "id": "jewelry-06",
    "name": "Louis Vuitton • Pulsera Doble Vuelta Monogram con Charm Candado Corazón LV",
    "category": "jewelry",
    "description": "Exclusiva pulsera de doble vuelta de Louis Vuitton confeccionada en lona Monogram marrón granulada de alta resistencia. Cuenta con cuatro anillas tubulares en oro brillante y un colgante icónico en forma de candado de corazón pulido con el sello monograma 'LV' grabado. Equipada con cierre metálico magnético cilíndrico bañado en oro.",
    "price": 65,
    "image": "/images/lv-heart-lock-double-bracelet.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Double Wrap Leather Bracelet with Heart Lock Charm (Crazy In Lock / Lock It Edition)",
      "Diseño: Cordón tubular doble vuelta en lona Monogram marrón emblemática con acabado texturizado",
      "Charm Principal: Candado colgante esculpido en forma de corazón con grabado circular 'LV' en acabado oro espejo",
      "Herrajes: 4 anillas deslizantes de sujeción y broche de cierre magnético de seguridad en aleación bañada en Oro 18K",
      "Cierre: Cierre tubular de precisión con encaje magnético seguro y cómodo de poner",
      "Presentación: Incluye caja oficial Louis Vuitton Maison Fondée en 1854 Paris en tono azafrán con tirador azul y funda guardapolvo"
    ],
    "history": "El candado de Louis Vuitton, símbolo de protección y amor incondicional desde 1901, se reinventa en formato romántico de corazón sobre la legendaria lona Monogram."
  },
  {
    "id": "jewelry-07",
    "name": "Louis Vuitton • Pulsera Rígida Monogram con Charms Esmaltados Blanco Nácar LV",
    "category": "jewelry",
    "description": "Sofisticada pulsera rígida de Louis Vuitton confeccionada en auténtica lona Monogram marrón con interior de piel grabada 'LOUIS VUITTON made in Spain'. Destacan sus dos terminales frontales redondeados en baño de oro brillante con acabado esmaltado en blanco nácar: uno con las iniciales 'LV' y el otro con la icónica flor de cuatro puntas Monogram Star Flower en relieve dorado.",
    "price": 65,
    "image": "/images/lv-white-enamel-monogram-bracelet.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Daily Open Bracelet with White Enamel Charms (Ref: HI76800 / White Enamel Edition)",
      "Material: Lona Monogram marrón emblemática con forro interior de piel natural grabado 'LOUIS VUITTON made in Spain'",
      "Charms Frontales: Dos medallones cilíndricos con baño de oro amarillo 18K y base de esmalte blanco nácar vitrificado",
      "Detalles de Diseño: Logotipo 'LV' en relieve dorado en un extremo y motivo floral Monogram Star Flower en el opuesto",
      "Cierre: Estructura de brazalete rígido anatómico con broche central articulado y cierre de clic a presión",
      "Presentación: Incluye estuche protector rígido oficial de Louis Vuitton Maison Fondée en 1854 Paris con cinta azul"
    ],
    "history": "Una pieza imprescindible que reinterpreta con sutil modernidad los símbolos eternos de Louis Vuitton, combinando la calidez del Monogram clásico con la luminosidad del esmalte blanco y el oro."
  },
  {
    "id": "jewelry-08",
    "name": "Louis Vuitton • Pulsera de Piel Monogram Multicolore Blanca con Cierre Flor Dorada",
    "category": "jewelry",
    "description": "Espectacular pulsera de Louis Vuitton confeccionada en lona Monogram Multicolore sobre fondo blanco nacarado con motivos florales e iniciales LV en vibrantes tonos pop (rosa fucsia, verde esmeralda, azul cobalto, violeta y gris). Cuenta con un forro interior en cuero natural con sello grabado 'LOUIS VUITTON' y un llamativo cierre central en baño de oro brillante esculpido con la icónica flor de cuatro pétalos Monogram Flower.",
    "price": 65,
    "image": "/images/lv-multicolore-white-bracelet.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Multicolore White Canvas Bracelet with Gold Flower Clasp (Ref: HI-MC800 / Multicolor Blanc)",
      "Material: Lona técnica revestida Monogram Multicolore blanca de tacto graneado con motivos en múltiples colores vibrantes",
      "Forro Interior: Piel de vacuno suave color arena natural con sello grabado al calor 'LOUIS VUITTON'",
      "Broche Joya: Cierre frontal esculpido con la icónica flor Monogram Flower de 4 pétalos en relieve 3D bañado en Oro Amarillo 18K pulido espejo con grabado 'LV'",
      "Cierre: Ajustable con pasador metálico y ojal de precisión para máxima comodidad en muñeca",
      "Presentación: Incluye estuche protector rígido oficial de Louis Vuitton Maison Fondée en 1854 Paris con tirador azul"
    ],
    "history": "Un diseño icónico y alegre que rinde homenaje a la legendaria colaboración artística Multicolore de Louis Vuitton, combinando la frescura juvenil del pop art con la excelencia artesanal."
  },
  {
    "id": "jewelry-09",
    "name": "Louis Vuitton • Brazalete Rígido 'Monogram Frosted' con Textura Arenada Grabada",
    "category": "jewelry",
    "description": "Exclusivo brazalete rígido ovalado de Louis Vuitton con una textura superficial microarenada 'Frosted' de acabado satinado de alto impacto visual. Presenta en contraste pulido espejo las iniciales entrelazadas 'LV' y las flores del histórico monograma de la Maison. Con interior pulido grabado 'LOUIS VUITTON Au750' y cierre de bisagra articulada oculta. Disponible en Oro Amarillo, Plata y Oro Rosa.",
    "price": 65,
    "image": "/images/lv-frosted-monogram-bangles.jpg",
    "details": [
      "Modelo: Louis Vuitton Frosted Monogram Hinged Bangle Bracelet (Ref: LV-SZP0750 / 新品砂面字母花纹手镯)",
      "Variantes Disponibles: Baño en Oro Amarillo 18K, Rodio/Plata brillante y Oro Rosa (Rose Gold)",
      "Textura & Superficie: Acabado exterior microarenado mate (Frosted Sandblast Texture) de alta resistencia al roce",
      "Detalles en Relieve: Logotipo 'LV' y motivos florales Monogram Flower en relieve con acabado pulido espejo de alto brillo",
      "Grabados Interiores: Inscripción 'LOUIS VUITTON Paris Au750' grabada en bajorrelieve en la cara interior lisa",
      "Estructura & Cierre: Perfil ovalado ergonómico con apertura de bisagra lateral oculta y cierre de seguridad a presión",
      "Presentación: Incluye estuche rígido oficial y caja en tono azafrán de Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "La sofisticación del microarenado se une al legado joyero de Louis Vuitton en un brazalete de presencia arquitectónica y elegancia atemporal."
  },
  {
    "id": "jewelry-10",
    "name": "Louis Vuitton • Brazalete Rígido Ancho 'Nanogram' con Monograma Grabado al Espejo",
    "category": "jewelry",
    "description": "Majestuoso brazalete rígido de perfil ancho de Louis Vuitton elaborado con un acabado en baño de oro pulido efecto espejo de máximo brillo. Toda la superficie exterior convexa está meticulosamente grabada con el icónico patrón 'Nanogram' en miniatura, que combina las iniciales 'LV' y las flores del monograma en una trama geométrica continua. Equipado con bisagra lateral y cierre de pasador con cabezal esférico plateado.",
    "price": 65,
    "image": "/images/lv-nanogram-gold-cuff.jpg",
    "details": [
      "Modelo: Louis Vuitton Nanogram All-Over Wide Cuff Bangle Bracelet (Edición Nanogram Gold)",
      "Acabado: Baño en Oro 18K pulido espejo de alto brillo con grabado en bajo relieve nítido",
      "Diseño & Patrón: Trama 'Nanogram' con repetición regular de monogramas 'LV' y flores Monogram Flower",
      "Estructura: Perfil abombado de brazalete ancho rígido de ajuste anatómico ergonómico",
      "Cierre: Bisagra articulada lateral de precisión con pasador cilíndrico y botón esférico de encaje seguro",
      "Presentación: Incluye estuche y caja protectora oficial de Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "El motivo Nanogram reinventa la herencia clásica de Louis Vuitton con una escala reducida y vanguardista, creando un juego de reflejos y luz inconfundible sobre el oro pulido."
  },
  {
    "id": "jewelry-11",
    "name": "Louis Vuitton • Brazalete Rígido 'Bandeau Silk Cuff' con Cinta de Seda Monogram",
    "category": "jewelry",
    "description": "Exclusivo brazalete joya de Louis Vuitton que fusiona una estructura metálica rígida abierta tipo cuff con una elegante cinta twilly de seda estampada con el emblemático patrón Monogram y detalles de cadenas de baúl históricas. Destacan en el frontal superior el monograma 'LV' y motivos florales Monogram Flower en relieve. Disponible en Seda Rosa/Blanco con Oro, Seda Monogram Marrón con Oro, y Seda Monogram Marrón con Plata/Rodio.",
    "price": 65,
    "image": "/images/lv-bandeau-silk-ribbon-cuff.jpg",
    "details": [
      "Modelo: Louis Vuitton Bandeau Silk Ribbon Open Cuff Bangle Bracelet (Edición Silk Scarf & Metal Cuff)",
      "Variantes Disponibles: 1) Seda Rosa Pastel/Blanca con montura dorada en Oro 18K, 2) Seda Monogram Marrón/Caramelo con montura en Oro 18K, 3) Seda Monogram Marrón con montura en Rodio/Plata brillante",
      "Materiales: Cinta 100% sarga de seda natural estampada de tacto fluido y estructura rígida metálica hipoalergénica con triple baño galvánico",
      "Detalles de Joyería: Letras 'LV' entrelazadas en relieve tridimensional y flores de cuatro pétalos Monogram Flower en los laterales",
      "Estructura & Versatilidad: Brazalete abierto anatómico envolvente con cinta entrelazada que se puede anudar o dejar fluir elegantemente sobre la muñeca",
      "Presentación: Incluye tarjeta de autenticidad oficial 'Louis Vuitton Malletier à Paris', estuche protector y caja rígida de la Maison"
    ],
    "history": "Una creación poética que une la ligereza y el dinamismo de los pañuelos de seda de Louis Vuitton con la elegancia escultórica de su orfebrería de alta gama."
  },
  {
    "id": "jewelry-12",
    "name": "Louis Vuitton • Pendientes de Aro 'LV Edge Chain Links' con Eslabones Monogram",
    "category": "jewelry",
    "description": "Impresionantes pendientes de aro estilo 'creole' de Louis Vuitton compuestos por una cadena articulada de eslabones rectangulares pulidos al espejo, alternando eslabones lisos con eslabones calados que integran el logotipo 'LV'. Cuentan con tuercas traseras de mariposa esculpidas con la icónica flor Monogram Flower de cuatro puntas. Disponibles en Plata brillante (Rodio) y Oro Amarillo 18K.",
    "price": 65,
    "image": "/images/lv-edge-chain-links-hoops.jpg",
    "details": [
      "Modelo: Louis Vuitton LV Edge / Chain Links Hoop Earrings (Boucles d'Oreilles Créoles LV Edge)",
      "Variantes Disponibles: Baño en Oro Amarillo 18K brillante y Baño en Rodio/Plata de alto brillo",
      "Diseño de Eslabones: Estructura de eslabones de cadena rectangulares con esquinas biseladas y calado central del logotipo 'LV' intercalado",
      "Cierre de Seguridad: Cierre de poste con tuerca de presión mariposa moldeada con la flor Monogram Flower",
      "Grabado de Autenticidad: Grabado sutil 'LOUIS VUITTON' en la estructura del aro",
      "Presentación: Incluye funda guardapolvo textil con tipografía oficial 'LOUIS VUITTON' en azul cobalto y caja rígida con tirador"
    ],
    "history": "Inspirados en la joyería urbana y la herencia de marroquinería de la Maison, los aros LV Edge reinterpretan los eslabones de cadena con una audacia contemporánea inconfundible."
  },
  {
    "id": "jewelry-13",
    "name": "Louis Vuitton • Brazalete Rígido 'Monogram Gold Flower Cuff' con Logotipo LV Central",
    "category": "jewelry",
    "description": "Imponente brazalete rígido abierto de Louis Vuitton que combina una sólida estructura metálica con baño de oro amarillo brillante e inserción central de lona Monogram marrón emblemática. En el centro destaca el icónico logotipo 'LV' en relieve escultórico 3D, flanqueado por dos flores Monogram Flower de cuatro pétalos abombados en oro pulido. Con extremos anatómicos calados y grabado interior de la Maison.",
    "price": 65,
    "image": "/images/lv-monogram-gold-flower-cuff.jpg",
    "details": [
      "Modelo: Louis Vuitton Monogram Open Cuff Bracelet with 3D LV Logo & Gold Flowers (Ref: M68273 / Monogram Frame Edition)",
      "Materiales: Estructura rígida de aleación hipoalergénica con baño de Oro Amarillo 18K brillante y banda de lona Monogram granulada de alta durabilidad",
      "Aplicaciones de Joyería: Emblema 'LV' tridimensional central y dos flores Monogram Flower de pétalos convexos pulidos al espejo en los laterales",
      "Bordes & Terminales: Marco protector dorado superior e inferior con extremos redondeados lisos y perforación ovalada ergonómica",
      "Grabado Interior: Cuño 'LOUIS VUITTON Paris' grabado en bajorrelieve en el interior pulido",
      "Ajuste: Formato 'Open Cuff' anatómico adaptable suavemente a diferentes medidas de muñeca",
      "Presentación: Incluye estuche guardapolvo y caja protectora oficial de Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "Una pieza de impactante presencia visual que fusiona la tradición talabartera de la lona Monogram con la suntuosidad de la orfebrería dorada de Louis Vuitton."
  },
  {
    "id": "jewelry-14",
    "name": "Louis Vuitton • Pendientes de Media Caña 'LV Sparkle Pavé' con Circonitas y Monogram",
    "category": "jewelry",
    "description": "Deslumbrantes pendientes de aro ancho de media caña (huggie hoops) de Louis Vuitton, ricamente cuajados con un pavé continuo de circonitas brillantes que destellan con cada movimiento. Sobre el manto de cristales emergen en relieve dorado de oro amarillo 18K las iniciales 'LV' y las icónicas flores del monograma (medallón floral y flor de cuatro puntas). Cierre de perno con tuerca de mariposa ergonómica.",
    "price": 65,
    "image": "/images/lv-sparkle-pave-monogram-hoops.jpg",
    "details": [
      "Modelo: Louis Vuitton LV Sparkle Pavé Wide Huggie Hoop Earrings (Boucles d'Oreilles LV Pavé Monogram)",
      "Acabado: Baño en Oro Amarillo 18K de alto brillo con tratamiento galvánico protector antidesgaste",
      "Engaste de Piedras: Micro-pavé denso de cristales y circonitas cúbicas de talla brillante con refracción luminosa",
      "Motivos en Relieve: Logotipo 'LV' en oro pulido tridimensional acompañado de flores Monogram Flower",
      "Estructura: Silueta de aro ancho de media caña curvada (anchura aprox. 10 mm) con perfil abombado",
      "Cierre: Perno clásico con tuerca de mariposa reforzada para máxima seguridad y comodidad",
      "Presentación: Incluye estuche protector oficial y caja de regalo de Louis Vuitton Maison Fondée en 1854 Paris"
    ],
    "history": "Una joya nocturna de deslumbrante magnetismo que eleva la emblemática firma LV al máximo esplendor de la pedrería fina."
  },
  {
    "id": "jewelry-15",
    "name": "Louis Vuitton • Pendientes de Media Caña 'LV Trunk Studs' con Pátina Vintage y Remaches",
    "category": "jewelry",
    "description": "Distiguidos pendientes de aro estilo 'huggie' de Louis Vuitton con acabado en pátina envejecida de inspiración vintage. Presentan una estructura cilíndrica abombada cincelada con los monogramas 'LV' en bajorrelieve y remaches esféricos en relieve que rinden homenaje a los históricos clavos de los baúles de viaje de la Maison. Con tuercas traseras esculpidas con la flor Monogram Flower. Disponibles en Latón Dorado Envejecido y Plata Antigua.",
    "price": 65,
    "image": "/images/lv-vintage-trunk-studs-hoops.jpg",
    "details": [
      "Modelo: Louis Vuitton Vintage LV Trunk Studs Huggie Hoop Earrings (Boucles d'Oreilles LV Clous & Monogram)",
      "Variantes Disponibles: Baño en Latón Dorado con Pátina Envejecida (Antique Gold) y Baño en Paladio/Plata Envejecida (Antique Silver)",
      "Detalles de Diseño: Iniciales 'LV' grabadas en relieve profundo intercaladas con remaches esféricos abombados (inspirados en la clavazón de los baúles históricos)",
      "Cierre de Seguridad: Cierre de poste hipoalergénico con tuerca mariposa de presión moldeada con la flor Monogram Flower",
      "Grabado Interior: Acabado interior pulido suave con sello de la Maison grabado",
      "Presentación: Incluye estuche rígido oficial en tono azafrán con tirador azul y sobre/tarjeta oficial 'Louis Vuitton'"
    ],
    "history": "Un tributo a la legendaria herencia de los baúles de Louis Vuitton, donde la estética artesanal de la herrería histórica se transforma en una joya moderna con carácter imperecedero."
  },
  {
    "id": "bags-01",
    "name": "Fendi • Bolso 'Peekaboo' en Lona Canvas Verde Oliva con Letras Metálicas Doradas",
    "category": "bags",
    "description": "Emblemático bolso Peekaboo de Fendi confeccionado en resistente lona canvas en tono verde oliva / caqui militar con ribetes y asa en piel gris marengo. Luce en el frontal un bordado tridimensional 'FENDI ROMA' al tono carbón, el legendario cierre de giro Peekaboo en latón dorado pulido y una impactante correa ancha de piel extraíble decorada con letras metálicas tridimensionales 'FENDI' en oro brillante.",
    "price": 220,
    "image": "/images/fendi-peekaboo-canvas-bag.jpg",
    "details": [
      "Modelo: Fendi Peekaboo Canvas & Leather Handbag (Ref: wsxc1776985812393_0 / Fendi Peekaboo手提包)",
      "Dimensiones: 33 cm (ancho) × 26 cm (alto) × 12 cm (profundidad) aprox.",
      "Color: Verde Oliva / Khaki Militar, gris marengo y herrajes bañados en oro brillante",
      "Material: Lona canvas de algodón reforzado y detalles en piel de ternera lisa",
      "Cierre: Cierre giratorio Peekaboo con placa superior metálica dorada grabada con la firma Fendi",
      "Asas: Asa de mano superior rígida en piel y correa de hombro ancha desmontable con letras metálicas 'FENDI' en dorado tridimensional",
      "Interior: Dos compartimentos divididos por una partición rígida central con bolsillo interior de cremallera"
    ],
    "history": "Creado por Silvia Venturini Fendi en 2008, el Peekaboo es uno de los bolsos más icónicos de la moda italiana contemporánea, reinterpretado aquí en un sofisticado lenguaje utilitario de lona y alta marroquinería."
  },
  {
    "id": "bags-02",
    "name": "Guess • Billetera 'Woodson SLG Zip Around' Monograma 4G Blanco & Crema",
    "category": "bags",
    "description": "Cartera continental de Guess modelo Woodson SL G con cremallera perimetral completa, confeccionada en material técnico de alta resistencia con el clásico monograma '4G' estampado en tonos neutros arena sobre fondo blanco crema. Destaca por su detalle frontal con el logotipo 'G' en relieve metálico dorado pulido.",
    "price": 49.9,
    "image": "/images/guess-woodson-white-wallet.jpg",
    "details": [
      "Modelo: Guess Woodson SL G / Zip Around Wallet (Ref: G9282599 / UPC: 1 98659 01786 6)",
      "PVP Oficial: 80,00 € (Precio Especial Outlet: 49,90 € con etiqueta original)",
      "Color: White / Blanco Crema con estampado monograma 4G en beige arena y herrajes dorados",
      "Material: Piel sintética texturizada saffiano con monograma continuo 4G y forro textil interior",
      "Detalles: Cierre perimetral con cremallera metálica dorada (Zip Around), insignia 'G' dorada en frontal, compartimento para monedas con cremallera, 8 ranuras para tarjetas y divisiones para billetes"
    ],
    "history": "El diseño Woodson SLG representa la esencia cosmopolita de Guess: ligereza, durabilidad y el icónico monograma 4G en tonos claros luminosos."
  },
  {
    "id": "bags-03",
    "name": "Michael Kors • Cartera Continental 'Carson LG Snap Wallet' Piel Pebbled Luggage & Herrajes Oro",
    "category": "bags",
    "description": "Cartera continental de lujo Michael Kors modelo Carson confeccionada en auténtica piel granulada de vacuno (pebbled leather) en el emblemático tono marrón 'Luggage'. Incorpora en el frontal un elegante pasador con barra de freno ecuestre dorada grabada con 'MICHAEL KORS', solapa con broche a presión y un bolsillo exterior trasero con cremallera dorada y tirador metálico grabado.",
    "price": 149,
    "image": "/images/mk-carson-luggage-wallet.jpg",
    "details": [
      "Modelo: Michael Michael Kors Carson LG Snap Wallet Leather (Ref: 35S5G2ZE3L / Style # 42810 NS / UPC: 1 97853 42810 2)",
      "PVP Oficial: 225,00 € / £ 225.00 (Precio Especial Outlet: 149,00 € / £ 149.00 con tarjeta de autenticidad y etiqueta)",
      "Color: Luggage / Marrón Caramelo con apliques metálicos bañados en oro brillante",
      "Material: 100% Piel de vacuno con textura de grano guijarro (pebbled leather) ultra flexible y duradera",
      "Detalles: Cierre de solapa frontal con botón snap a presión, adorno metálico central tipo bocado ecuestre grabado 'MICHAEL KORS', compartimento posterior con cremallera reforzada para monedas, ranura exterior para tickets, tarjeteros múltiples interiores y compartimento para billetes",
      "Incluye: Libreto oficial Michael Kors Care Card de cuidado de la piel y etiquetas originales del distribuidor europeo (Michael Kors Europe BV, Venlo, The Netherlands)"
    ],
    "history": "La línea Carson de Michael Kors rinde homenaje a la marroquinería clásica americana, fusionando funcionalidad de viaje y sofisticación refinada en tono cuero natural."
  },
  {
    "id": "bags-04",
    "name": "Loewe • Bolso Bucket Tote en Lona Canvas Crudo & Piel Marrón con Anagrama Vintage",
    "category": "bags",
    "description": "Exclusivo bolso tote estilo bucket / hobo de Loewe confeccionado en robusta lona de algodón canvas en tono crudo natural con base y refuerzos en rica piel de ternera marrón chocolate. Destaca por el emblemático Anagrama de Loewe calado en piel y cosido artesanalmente en el frontal, combinado con pespuntes en contraste blanco y una elegante asa de hombro ajustable con herrajes dorados.",
    "price": 195,
    "image": "/images/loewe-anagram-canvas-tote.jpg",
    "details": [
      "Modelo: Loewe Vintage Canvas & Leather Anagram Bucket Tote (Ref: wsxc1785668747931_2 / 罗意威 中古帆布包 托特)",
      "Dimensiones: 32 cm (ancho) × 35 cm (alto) × 15 cm (base) aprox.",
      "Color: Crudo / Beige Claro Natural y Marrón Chocolate con pespuntes blancos en contraste y herrajes dorados",
      "Material: Lona canvas de algodón premium y aplicaciones en auténtica piel de ternera noble",
      "Asa y Herrajes: Correa de hombro regulable en piel marrón con hebilla y remaches metálicos dorados",
      "Detalles: Emblema Anagram en piel troquelada en el frontal, base reforzada en piel para mantener la silueta vertical, amplio compartimento principal y forro interior con bolsillo"
    ],
    "history": "Una silueta atemporal procedente de los archivos vintage de Loewe que combina la frescura de la lona natural con la centenaria tradición marroquinera de la casa española."
  },
  {
    "id": "bags-05",
    "name": "Chanel • Bolso Tote 'Deauville Straw' en Rafia Trenzada Bicolor y Asas de Piel Negra",
    "category": "bags",
    "description": "Exclusivo bolso tote veraniego de Chanel confeccionado en un primoroso trenzado artesanal bicolor que combina cordón de algodón en tono blanco crema y rafia natural entrelazada. Luce en el frontal el emblemático logotipo de la doble 'CC' bordado en relieve negro azabache, acompañado de dobles asas largas de piel negra con remaches plateados para lucir elegantemente al hombro.",
    "price": 195,
    "image": "/images/chanel-straw-tote-bag.jpg",
    "details": [
      "Modelo: Chanel Woven Straw & Cotton Rope Tote Bag (Ref: wsxc1783024817400_5 / 香奈儿草编托特包)",
      "Dimensiones Oficiales: 29 cm × 29 cm (Formato cuadrado estructurado tipo bucket/tote)",
      "Color: Bicolor Crema / Arena Natural con detalles y logotipo 'CC' en Negro Profundo",
      "Material: Fibras de algodón natural y rafia trenzada de alta tenacidad con forro interior reforzado",
      "Asas y Herrajes: Asas dobles de piel vacuna negra fijadas con remaches metálicos pulidos en acabado plata",
      "Detalles: Base reforzada para mantener la estructura, amplio compartimento central y bolsillo interior organizador"
    ],
    "history": "Inspirado en los paseos marítimos de la Costa Azul y el espíritu libre de Deauville, este capazo tote de Chanel encarna la elegancia estival relajada con el sello inconfundible de la alta costura."
  },
  {
    "id": "bags-06",
    "name": "Prada • Bolso Tote 'Crochet Raffia' Negro con Asas de Piel Coñac y Ojetes Metálicos",
    "category": "bags",
    "description": "Codiciado bolso tote de Prada confeccionado en ganchillo artesanal de rafia trenzada en negro azabache de textura suave y flexible. Destaca por sus elegantes tiras verticales y asas dobles en piel lisa color coñac envejecido ornamentadas con ojetes metálicos dorados y hebillas a tono, rematado con el icónico bordado en hilo blanco del escudo y tipografía 'PRADA MILANO' en el panel frontal.",
    "price": 210,
    "image": "/images/prada-crochet-tote-bag.jpg",
    "details": [
      "Modelo: Prada Crochet & Leather Straps Raffia Tote (Ref: wsxc1786141210097_0 / Prada绝美草编包)",
      "Dimensiones: 34 cm (ancho) × 30 cm (alto) × 12 cm (profundidad) aprox.",
      "Color: Negro Profundo con tiras de cuero en Tono Cuero / Coñac y bordado en Blanco Óptico",
      "Material: 100% Rafia técnica de fibra natural tejida al ganchillo con apliques en auténtica piel vacuna",
      "Asas y Herrajes: Asas de piel ajustables con hebillas doradas, tiras frontales y posteriores con hilera de ojetes metálicos",
      "Detalles: Logotipo 'PRADA MILANO' bordado a mano en el frontal con escudo heráldico, forro interior al tono y cierre magnético superior"
    ],
    "history": "Un diseño icónico de las colecciones estivales de Prada que eleva la estética artesanal del ganchillo de playa al estatus de lujo contemporáneo más sofisticado de la firma milanesa."
  },
  {
    "id": "bags-07",
    "name": "Louis Vuitton • Bolso Tote 'Cabas OnTheGo / Maison Fondée en 1854' en Lona Cruda y Piel Coñac",
    "category": "bags",
    "description": "Elegante bolso tote de gran formato de Louis Vuitton confeccionado en lona gruesa de algodón natural en tono crudo / marfil con base, refuerzos y asas dobles en piel vacuna lisa color coñac tostado. En el panel frontal destaca la emblemática inscripción 'LOUIS VUITTON' en letras de cuero coñac aplicadas en relieve tridimensional, completada debajo con la inscripción serigrafiada 'MAISON FONDÉE EN 1854 PARIS'.",
    "price": 215,
    "image": "/images/lv-onthego-canvas-tote.jpg",
    "details": [
      "Modelo: Louis Vuitton Cabas OnTheGo Canvas & Leather Tote (Ref: wsxc1786283889708_1 / Lv路易威登托特包)",
      "Dimensiones: 41 cm (ancho) × 34 cm (alto) × 19 cm (profundidad) aprox.",
      "Color: Lona Crudo Natural / Marfil con Piel Lisa en Marrón Coñac Tostado",
      "Material: Lona de algodón de alto gramaje con base, ribetes y cantoneras en piel vacuna de curtición vegetal",
      "Frontal Distintivo: Letras 'LOUIS VUITTON' en piel coñac cortada y pespunteada en relieve 3D + 'MAISON FONDÉE EN 1854 PARIS'",
      "Asas y Organización: Asas de mano tubulares de piel y asas de hombro integradas, compartimento espacioso con bolsillo interior con cremallera"
    ],
    "history": "Inspirado en los históricos archivos de baúles de viaje y equipaje de la Maison en Asnières, este tote combina la frescura de la lona veraniega con la nobleza del cuero coñac."
  },
  {
    "id": "bags-08",
    "name": "Dior • Bolso 'Book Tote 35cm' con Bordado Botánico Herbarium en Verde Bosque y Flores Coral",
    "category": "bags",
    "description": "Sublime bolso Dior Book Tote de 35 cm confeccionado íntegramente en tejido técnico bordado con un exquisito motivo vegetal de herbario botánico. Sobre un denso fondo en verde bosque profundo florecen ramilletes silvestres en tonos rosa coral, carmín y follaje verde menta. En el centro resalta un medallón ovalado perfilado por un cordón dorado bordado con la firma 'Dior' en elegante caligrafía clásica.",
    "price": 220,
    "image": "/images/dior-floral-book-tote.jpg",
    "details": [
      "Modelo: Christian Dior Book Tote 35cm Botanical Garden Herbarium Embroidery (Ref: wsxc1784377033353_1 / Dior tote购物袋 35cm)",
      "Dimensiones: 35 cm (ancho) × 27 cm (alto) × 16,5 cm (profundidad)",
      "Color: Verde Bosque Intenso con bordados florales en Coral, Rosa y detalles Dorados",
      "Material: Lienzo rígido de alta densidad bordado artesanalmente con más de 1.5 millones de puntadas continuas",
      "Diseño Central: Medallón ovalado con trenzado dorado en relieve y firma 'Dior' en verde esmeralda",
      "Acabados: Asas rígidas bordadas al tono para llevar en la mano o al antebrazo, interior diáfano con forro reforzado"
    ],
    "history": "Presentado por Maria Grazia Chiuri y convertido en emblema mundial del savoir-faire de la firma parisina, el Book Tote encarna el lujo artesanal en su máxima expresión."
  },
  {
    "id": "bags-09",
    "name": "Hermès • Bandolera 'Calèche Duc Attelé' en Piel Togo Gris Antracita con Emblema en Relieve",
    "category": "bags",
    "description": "Exclusivo bolso de mensajero y bandolera masculina de Hermès confeccionado en suntuosa piel de ternera Togo granulada en tono gris antracita oscuro. Su solapa envolvente luce un refinado grabado en bajo relieve del carruaje y palafrenero ecuestre (Duc attelé), emblema histórico de la firma. Cuenta con un discreto pasador superior metálico con la 'H', forro suave en piel y una ancha correa ajustable de lona técnica al tono.",
    "price": 230,
    "image": "/images/hermes-caleche-messenger.jpg",
    "details": [
      "Modelo: Hermès Men's Messenger Bag Togo Leather Caleche Relief (Ref: wsxc1783611661618_3 / HERMES 爱马仕 斜挎单肩背包 男包)",
      "Dimensiones: 28 cm (ancho) × 24 cm (alto) × 8 cm (profundidad)",
      "Color: Gris Antracita / Grafito Mineral (Graphite) con herrajes plateados paladio mate",
      "Material: Genuina piel de ternera Togo de grano natural anti-arañazos y tacto sedoso flexible",
      "Emblema Frontal: Carruaje Duc attelé y palafrenero de Hermès grabado en relieve ciego de alta precisión sobre la solapa",
      "Portabilidad: Correa ancha de lona técnica de alta resistencia ajustable con mosquetones para hombro o cruzado bandolera"
    ],
    "history": "Heredero de la maestría guarnicionera de la calle Faubourg Saint-Honoré desde 1837, este bolso combina la elegancia discreta con el confort para el hombre contemporáneo."
  },
  {
    "id": "bags-10",
    "name": "Loewe • Bolso 'Hammock' en Piel Ternera Clásica Marrón Chocolate Oscuro con Herrajes Dorados",
    "category": "bags",
    "description": "Aclamado bolso Hammock de Loewe confeccionado en flexible piel de ternera clásica en un elegante tono marrón chocolate oscuro / café intenso. Su revolucionaria arquitectura multifuncional permite modificar su silueta según la ocasión mediante paneles laterales expandibles con cremalleras y tiradores de cuero. Luce el logotipo 'LOEWE' grabado en sutil oro en la parte inferior, asas superiores tubulares ajustables y bandolera desmontable.",
    "price": 225,
    "image": "/images/loewe-hammock-chocolate.jpg",
    "details": [
      "Modelo: Loewe Hammock Bag Classic Calfskin Chocolate (Ref: wsxc1783161277234_3 / 罗意威手袋)",
      "Dimensiones: 30 cm (alto) × 25 cm (ancho cerrado) / 35 cm (abierto) × 13,5 cm (profundidad)",
      "Color: Marrón Chocolate Oscuro / Moka Profundo con herrajes dorados pulidos",
      "Material: 100% Piel de ternera clásica suave (Classic Calf) de curtición artesanal española",
      "Multifuncionalidad: 6 formas distintas de llevarlo (de mano, al codo, al hombro, como tote o bandolera cruzada)",
      "Detalles: Cremalleras laterales con tiradores largos de piel, bolsillo exterior con cremallera, forro de lona de espiga y logotipo LOEWE grabado en oro"
    ],
    "history": "Diseñado por Jonathan Anderson, el Hammock representa la cúspide del ingenio geométrico y la centenaria tradición marroquinera de Loewe en Madrid."
  },
  {
    "id": "bags-11",
    "name": "Chanel • Bolso 'Deauville Bucket Tote 29×29' en Cuerda y Rafia Bicolor con Logotipo CC Bordado",
    "category": "bags",
    "description": "Auténtico capazo tote de verano de Chanel confeccionado con trenzado artesanal de cuerda de algodón blanco crudo y rafia color arena natural en patrón geométrico zigzag. En el frontal destaca en relieve bouclé negro el icónico monograma de las dos 'C' entrelazadas. Dispone de asas largas de piel vacuna negra fijadas con tachuelas plateadas, permitiendo lucirlo cómodamente colgado del hombro en la playa o en la ciudad.",
    "price": 195,
    "image": "/images/chanel-woven-cc-tote.jpg",
    "details": [
      "Modelo: Chanel Deauville Beach Bucket Woven Rope & Rafia Tote 29×29 (Ref: wsxc1783024817400_5 / 香奈儿草编托特包 29.29)",
      "Dimensiones: 29 cm × 29 cm × 14 cm (Formato cubo / bucket estructurado)",
      "Color: Bicolor Blanco Crudo y Rafia Tostada Natural con logotipo y correas en Negro Azabache",
      "Material: Cordón trenzado de algodón natural y rafia con refuerzo textil interior",
      "Asas: Doble asa de hombro en piel suave negra fijada con pernos metálicos de terminación plateada",
      "Cierre y Capacidad: Base firme con soporte interior, cierre magnético de seguridad y bolsillo interior organizador"
    ],
    "history": "La elegancia marinera y el espíritu desenfadado de Deauville reinterpretados con la maestría insuperable de Chanel."
  },
  {
    "id": "bags-12",
    "name": "Louis Vuitton • Bolso de Viaje 'Keepall / Speedy Bandoulière Trunks & Bags' en Lona Amarillo Pastel",
    "category": "bags",
    "description": "Extraordinario bolso de viaje Speedy / Keepall Bandoulière de Louis Vuitton confeccionado en lona Monogram especial en franjas crema y suave amarillo pastel. Destaca el gran sello circular 'LOUIS VUITTON TRUNKS & BAGS' en tonos fucsia y mostaza con las ciudades de la ruta histórica de la Maison (Paris 101 Champs-Élysées, New York, Tokyo, Hong Kong). Asas y detalles en piel vachetta natural y correa bandolera desmontable.",
    "price": 235,
    "image": "/images/lv-speedy-trunks-duffle.jpg",
    "details": [
      "Modelo: Louis Vuitton Speedy Keepall Bandoulière Heritage Stamp Duffle (Ref: wsxc1781307596917_0 / LV Speedy 旅行包 徽章)",
      "Dimensiones: 45 cm (ancho) × 27 cm (alto) × 20 cm (profundidad) (Tamaño cabina)",
      "Color: Lona Monogram Rayures Vainilla Pastel y Crema con sello en Magenta/Ocre y ribetes Vachetta Natural",
      "Material: Lona revestida Monogram de alta resistencia con cantoneras y ribetes en piel de vaca natural (vachetta)",
      "Diseño Frontal: Sello circular serigrafiado de la colección histórica 'Trunks & Bags' con ciudades del Grand Tour",
      "Accesorios Incluidos: Etiqueta de equipaje en piel grabada, candado dorado LV, bandolera de piel ajustable con almohadilla para hombro"
    ],
    "history": "Un tributo a la era dorada de los grandes viajes transoceánicos y a los sellos postales conmemorativos de las primeras boutiques de Louis Vuitton en el mundo."
  },
  {
    "id": "bags-13",
    "name": "Hermès • Bolso Tote de Viaje 'Hermès Sellier' en Lona Gruesa Negra con Asas Bicolor y Pouch",
    "category": "bags",
    "description": "Maxi bolso tote 'Grooming Cabas' de Hermès confeccionado en robusta lona de algodón de grueso calibre en negro azabache con la tipografía 'HERMÈS SELLIER' en contraste blanco impoluto. Cuenta con asas dobles combinadas en lona negra con refuerzos de cuero marrón silla fijados por remaches metálicos, correa bandolera ancha desmontable y un estuche/neceser de lona negra extraíble a juego.",
    "price": 215,
    "image": "/images/hermes-sellier-black-tote.jpg",
    "details": [
      "Modelo: Hermès Grooming Cabas 'Hermès Sellier' Large Travel Tote (Ref: wsxc1781124444352_2 / 爱马仕Hermas 大容量帆布包托特包)",
      "Dimensiones: 44 cm (ancho) × 36 cm (alto) × 18 cm (profundidad) (Gran capacidad de almacenaje)",
      "Color: Lona Negra Intensa con tipografía en Blanco Óptico y detalles en Cuero Marrón Silla",
      "Material: Lona técnica de algodón de ultra-resistencia al desgaste, agua y suciedad",
      "Asas y Correa: Asas cortas reforzadas con piel marrón y mosquetones + correa ancha de hombro en tejido de cincha marrón de 5 cm de ancho",
      "Complemento: Incluye pouch/neceser de mano independiente en la misma lona negra con cremallera superior"
    ],
    "history": "Diseñado originalmente para la alta equitación y el transporte de aperos hípicos, hoy es el bolso de viaje, fin de semana y gimnasio predilecto por su resistencia imbatible y distinción discreta."
  },
  {
    "id": "bags-14",
    "name": "Louis Vuitton • Bolso 'Neverfull MM Monogram' con Ribetes Rosa Fucsia y Medallón de Cristales",
    "category": "bags",
    "description": "Edición especial y vibrante del icónico bolso Neverfull MM de Louis Vuitton en lona Monogram clásica marrón, realzado de forma electrizante con asas de hombro, cordones laterales y ribetes superiores en piel fucsia neón brillante. En el panel frontal resalta un espectacular medallón circular con el monograma 'LV' y 'PARIS' formado por strass y tachuelas de cristal rosa fucsia reflectantes. Forro interior de tela a juego en rosa intenso.",
    "price": 220,
    "image": "/images/lv-neverfull-fuchsia-tote.jpg",
    "details": [
      "Modelo: Louis Vuitton Neverfull MM Fuchsia Trim & Crystal Strass Medallion (Ref: wsxc178079609451_3 / LV Neverfull 玫红双面托特包)",
      "Dimensiones: 31 cm (base) / 45 cm (boca superior) × 28 cm (alto) × 14 cm (profundidad)",
      "Color: Lona Monogram Marrón Café con ribetes, asas e interior en Rosa Fucsia / Frambuesa Intenso",
      "Material: Lona revestida flexible Monogram impermeable con guarniciones de piel vacuna teñida en rosa",
      "Frontal Joya: Círculo y logotipo 'LV' compuestos por cristales facetados y tachuelas metálicas esmaltadas en fucsia destellante",
      "Funcionalidad: Cordones laterales ajustables para cerrar la silueta, interior amplio con bolsillo con cremallera y anilla en D"
    ],
    "history": "Una oda a la alta costura pop y nocturna, reinventando el bolso más versátil de Louis Vuitton con un toque festivo y exclusivo."
  },
  {
    "id": "bags-15",
    "name": "Hermès • Bolso 'Médor / 24/24' en Piel Clemence Color Étoupe con Tachuelas Piramidales",
    "category": "bags",
    "description": "Magnífico bolso de alta marroquinería de Hermès confeccionado en auténtica piel de ternera Taurillon Clemence en el legendario color Étoupe (taupe grisáceo con sutiles pespuntes blancos en contraste). Su solapa delantera está protagonizada por una ancha correa con las emblemáticas tachuelas piramidales 'Clous Médor' en acabado paladio pulido con cierre de pasador. Dispone de asa superior rígida arqueada y bandolera de piel a tono desmontable.",
    "price": 245,
    "image": "/images/hermes-medor-etoupe-bag.jpg",
    "details": [
      "Modelo: Hermès Médor / 24/24 Flap Bag Étoupe Taurillon Clemence (Ref: wsxc1777046448382_1 / 爱马仕 Hermes medor)",
      "Dimensiones: 29 cm (ancho) × 21 cm (alto) × 12 cm (profundidad)",
      "Color: Étoupe (Gris Topo / Taupe cálido icónico) con pespuntes blancos guarnicioneros y herrajes plateados paladio",
      "Material: 100% Piel de ternera Taurillon Clemence de tacto flexible, suave y textura de grano mate",
      "Cierre Médor: Correa horizontal con tachuelas en forma de pirámide inspiradas en los collares de perro 'Collier de Chien' de los años 1920",
      "Estructura: Asa corta reforzada de mano, correa larga de hombro desmontable, compartimento interior forrado en piel con bolsillo de seguridad"
    ],
    "history": "Las tachuelas piramidales Médor son uno de los códigos de diseño más antiguos y venerados de Hermès, confiriendo a esta pieza una presencia rotunda y señorial."
  }
];
