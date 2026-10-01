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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 75,
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
    "price": 75,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 75,
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
    "price": 75,
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
    "price": 75,
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
    "price": 75,
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
    "price": 75,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "price": 60,
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
    "id": "glasses-chanel-twotone-cc",
    "name": "Chanel Gafas de Sol Bicolor 'Two-Tone CC' Signature Polarizadas",
    "category": "glasses",
    "description": "Exclusivas gafas de sol rectangulares de Chanel con frontal en acetato negro brillante y audaces patillas en contraste blanco marfil. Lucen el emblemático logotipo joya de la doble 'CC' tridimensional en relieve y lentes solares polarizadas de alta definición.",
    "price": 250,
    "image": "/images/chanel-bicolor-sunglasses.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Chanel Two-Tone CC Signature (Ref. 1656T8 52 P001)",
      "Montura: Acetato premium en diseño bicolor blanco y negro",
      "Patillas: Varillas anchas en tono marfil con logotipo joya CC en acabado plata y negro",
      "Lentes: Polarizadas en gris humo con grabado 'CHANEL POLARIZED' y protección UV400 Cat. 3",
      "Incluye: Estuche protector oficial Chanel Paris, funda suave y paño de seda"
    ],
    "history": "Un tributo al contraste inmortal de blanco y negro establecido por Gabrielle Chanel como máxima expresión de modernidad y alta costura."
  },
  {
    "id": "glasses-prada-symbole-17ws",
    "name": "Prada Gafas de Sol Symbole PR 17WS Rectangulares Geométricas Carey",
    "category": "glasses",
    "description": "Icónica silueta geométrica multifacetada con cortes arquitectónicos en acetato carey havana. Varillas tridimensionales angulares que integran la legendaria placa triangular esmaltada de Prada Milano dal 1913.",
    "price": 200,
    "image": "/images/prada-symbole-geometric.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Prada Symbole PR 17WS Trt Ptr Pol (Ref. # R019)",
      "Montura: Acetato carey havana de alta densidad con biselados geométricos",
      "Varillas: Escultura arquitectónica tridimensional con emblema triangular Prada Milano dal 1913",
      "Lentes: Lentes polarizadas minerales en marrón cálido con protección 100% UV400 Cat. 3",
      "Accesorios: Estuche rígido texturizado Prada Milano, caja oficial y toallita de microfibra"
    ],
    "history": "La silueta más emblemática del diseño contemporáneo de Prada, combinando el brutalismo arquitectónico con el refinamiento de la pasarela de Milán."
  },
  {
    "id": "glasses-prada-26zs-cateye",
    "name": "Prada Gafas de Sol PR 26ZS Hexagonales Cat-Eye Oversize Negro y Marfil",
    "category": "glasses",
    "description": "Vanguardistas gafas de sol de silueta hexagonal cat-eye extragrande en acetato negro pulido. Las varillas de perfil ancho lucen el interior en contraste marfil/blanco y la firma en relieve PRADA MILANO.",
    "price": 200,
    "image": "/images/prada-26zs-cateye.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Prada PR 26ZS BLK SHN GRY (Ref. # R019)",
      "Montura: Acetato negro brillante en silueta cat-eye hexagonal sobredimensionada con ángulos biselados",
      "Varillas: Perfil ancho con forro interior en contraste marfil/blanco y firma grabada PRADA MILANO",
      "Lentes: Tintadas en gris mineral uniforme de máxima agudeza visual con filtro solar Cat. 3 UV400",
      "Incluye: Estuche joya rígido Prada, caja original y paño de limpieza oficial"
    ],
    "history": "Una declaración de feminidad audaz y vanguardia geométrica que reinterpreta el clásico cat-eye con proporciones esculturales de alta costura."
  },
  {
    "id": "glasses-dolce-gabbana-dg-havana",
    "name": "Dolce & Gabbana Gafas de Sol Rectangulares Carey Havana con Logotipo DG Dorado",
    "category": "glasses",
    "description": "Gafas rectangulares de silueta cat-eye refinada en acetato carey havana con ricas vetas ámbar, lentes degradadas en tono malva-marrón y patillas robustas ornamentadas con el logotipo 'DG' dorado en relieve y apliques dobles en charnelas.",
    "price": 180,
    "image": "/images/dolce-gabbana-havana-dg.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Dolce & Gabbana DG Plaque Collection Havana",
      "Montura: Acetato italiano carey havana oscuro con elegantes destellos ambarinos",
      "Herrajes: Majestuoso monograma 'DG' en metal dorado macizo tridimensional y dobles apliques en charnela",
      "Lentes: Tintadas en degradado malva-marrón cálido con tratamiento antirreflejante y protección UV400",
      "Presentación: Estuche rígido aterciopelado negro oficial Dolce & Gabbana y paño de satén"
    ],
    "history": "Celebración de la seducción mediterránea y el lujo barroco siciliano característicos de la firma italiana."
  },
  {
    "id": "glasses-celine-navigator-cl40236u",
    "name": "Celine Gafas de Sol Navigator Cuadradas con Doble Puente en Acetato Negro",
    "category": "glasses",
    "description": "Imponente silueta aviador cuadrada con doble puente arquitectónico en acetato negro ébano de alta densidad, patillas gruesas con la firma Celine estampada en dorado y los emblemáticos tres remaches metálicos distintivos.",
    "price": 180,
    "image": "/images/celine-navigator-sunglasses.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Celine Aviator / Navigator Square CL40236U",
      "Montura: Acetato de alta densidad negro ébano con frontal recto y barra superior de doble puente",
      "Varillas: Diseño lineal y robusto con los icónicos 3 remaches de bisagra y logotipo 'CELINE' en oro",
      "Lentes: Lentes solares gris mineral uniforme con filtro solar Categoría 3 y tratamiento anti-impacto",
      "Accesorios: Funda rígida en piel granulada negra de Celine Paris y paño de microfibra oficial"
    ],
    "history": "El sello inconfundible de Hedi Slimane: actitud rock-and-roll atemporal combinada con la artesanía de lujo francesa más rigurosa."
  },
  {
    "id": "glasses-rayban-ferrari-lifestyle",
    "name": "Ray-Ban Scuderia Ferrari Lifestyle RB 2217-M Carey Havana Flat-Top",
    "category": "glasses",
    "description": "Edición exclusiva de la colección Ray-Ban Scuderia Ferrari Lifestyle. Frontal plano horizontal contemporáneo en acetato carey havana oscuro con lentes marrón solar y remates inspirados en la ingeniería de Maranello.",
    "price": 125,
    "image": "/images/rayban-ferrari-sunglasses.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Ray-Ban Scuderia Ferrari Lifestyle RB 2217-M F613/73 53[]21 145 3N (Ref. ICONSN125)",
      "Montura: Acetato havana carey oscuro con frontal plano horizontal tipo escudo contemporáneo",
      "Lentes: Cristal mineral marrón clásico de alta definición con firma Ray-Ban y escudo Ferrari",
      "Varillas: Diseño ergonómico con remates y tornillería inspirados en la aerodinámica de Ferrari",
      "Incluye: Estuche de piel oficial Ray-Ban for Scuderia Ferrari con pespunte rojo y caja de colección"
    ],
    "history": "La unión de dos mitos mundiales: la legendaria silueta de Ray-Ban enriquecida con la pasión y aerodinámica de la escudería Ferrari."
  },
  {
    "id": "glasses-armani-clipon-ea4208",
    "name": "Emporio Armani Gafas Graduables con Doble Clip-On Solar Magnético (EA 4208)",
    "category": "glasses",
    "description": "Set versátil de montura óptica rectangular en acabado mate grafito sostenible con dos suplementos solares magnéticos intercambiables (clip-on polarizados degradados) y varillas estilizadas con el águila de Emporio Armani.",
    "price": 90,
    "image": "/images/armani-magnetic-clipon.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Emporio Armani Sustainability Edition EA 4208 (55[]17 145)",
      "Montura: Rectangular moderna en acetato mate grafito ecológico ultraligero",
      "Suplementos: Incluye 2 clips solares magnéticos intercambiables (polarizado negro y degradado espejado)",
      "Varillas: Perfil refinado con franja metálica pulida y el icónico emblema del águila de Emporio Armani",
      "Presentación: Estuche rígido compartimentado para montura y clips, con paño oficial de microfibra"
    ],
    "history": "Ingeniería óptica versátil y elegancia urbana milanesa: dos gafas de sol y una gafa de vista en un solo accesorio vanguardista."
  },
  {
    "id": "glasses-lacoste-l2707magn-clipon",
    "name": "Lacoste L2707MAGN Gafas Ópticas con Clip-On Solar Magnético y Varilla Racing Bicolor",
    "category": "glasses",
    "description": "Gafas ópticas rectangulares semi al aire con clip solar polarizado magnético de ajuste instantáneo, patillas ergonómicas con franja deportiva bicolor azul y rojo racing y emblema del cocodrilo Lacoste.",
    "price": 90,
    "image": "/images/lacoste-magnetic-sunglasses.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Lacoste Magnetic Clip-On L2707MAGN 002 55[]16 (Ref. 158)",
      "Montura: Frontal rectangular semi al aire en metal y acetato negro mate de gran ligereza",
      "Varillas: Varillas deportivas con línea de contraste en azul cielo y rojo dinámico con cocodrilo Lacoste",
      "Clip-On: Suplemento polarizado magnético que se fija firmemente convirtiéndolas en gafas de sol al instante",
      "Incluye: Estuche rígido original Lacoste con compartimento para clip solar magnético"
    ],
    "history": "El espíritu tenístico y la innovación técnica francesa de René Lacoste convertidos en confort y versatilidad diaria."
  },
  {
    "id": "glasses-lacoste-sport-clipon",
    "name": "Lacoste Sport Active Gafas Rectangulares con Clip-On Magnético Polarizado",
    "category": "glasses",
    "description": "Montura completa en acetato negro mate de líneas deportivas y dinámicas, patillas con inserciones en azul cobalto y gris carbón con cocodrilo plateado, y suplemento solar magnético polarizado de fijación instantánea.",
    "price": 90,
    "image": "/images/lacoste-sport-clipon.jpg",
    "availability": "available",
    "isAvailable": true,
    "details": [
      "Modelo: Lacoste Sport Performance Magnetic Edition",
      "Montura: Acetato inyectado negro mate integral con puente ergonómico de sujeción perfecta",
      "Varillas: Acabado deportivo con inserciones bitono en azul cobalto y gris asfalto con cocodrilo plateado",
      "Clip Solar: Suplemento magnético con lentes polarizadas de alto contraste para máxima protección antirreflejos",
      "Presentación: Funda semirrígida Lacoste con cremallera y gamuza limpiadora"
    ],
    "history": "Máximo rendimiento deportivo y estilo lifestyle para quienes buscan dinamismo, protección ocular completa y practicidad."
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
    "id": "clothing-puma-mclaren-cap-papaya",
    "name": "Puma McLaren F1 Team • Gorra Oficial Réplica 'Papaya & Black'",
    "category": "clothing",
    "description": "Gorra oficial del equipo McLaren Formula 1. Confeccionada en tejido técnico transpirable con visera curvada, panel frontal en emblemático color papaya y laterales negros con emblema reflectante McLaren.",
    "price": 0.0,
    "image": "/images/puma-mclaren-cap-papaya.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Puma McLaren F1 Team • Gorra Oficial Réplica 'Papaya & Black' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-puma-ferrari-bb-cap",
    "name": "Puma Scuderia Ferrari • Gorra Oficial F1 'Rosso Corsa'",
    "category": "clothing",
    "description": "Gorra deportiva oficial de la Scuderia Ferrari en su legendario rojo Rosso Corsa. Escudo 'Cavallino Rampante' engomado en relieve frontal, detalles en negro carbón y ajuste regulable.",
    "price": 0.0,
    "image": "/images/puma-ferrari-bb-cap.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Puma Scuderia Ferrari • Gorra Oficial F1 'Rosso Corsa' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-puma-mclaren-trucker-cap",
    "name": "Puma McLaren Racing • Gorra Trucker con Rejilla Transpirable",
    "category": "clothing",
    "description": "Gorra estilo trucker oficial McLaren Racing en color negro con paneles traseros de rejilla transpirable, ribete contrastado en naranja papaya y bordado de alta definición.",
    "price": 0.0,
    "image": "/images/puma-mclaren-trucker-cap.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Puma McLaren Racing • Gorra Trucker con Rejilla Transpirable forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-puma-mercedes-amg-tracksuit",
    "name": "Puma Mercedes-AMG Petronas Motorsport • Chándal Deportivo Completo",
    "category": "clothing",
    "description": "Conjunto oficial de sudadera con capucha y pantalón jogger de la escudería Mercedes-AMG Petronas F1. Confección premium en negro con bandas laterales contrastadas y emblemas de alta precisión.",
    "price": 27.5,
    "image": "/images/puma-mercedes-amg-tracksuit.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Puma Mercedes-AMG Petronas Motorsport • Chándal Deportivo Completo forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-green-hoodie",
    "name": "adidas • Sudadera con Capucha 'Trefoil' Verde Esmeralda",
    "category": "clothing",
    "description": "Sudadera con capucha y bolsillo canguro confeccionada en suave felpa de algodón en tono verde esmeralda profundo. Tres bandas icónicas en blanco en las mangas y logotipo bordado.",
    "price": 30.0,
    "image": "/images/adidas-green-hoodie.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas • Sudadera con Capucha 'Trefoil' Verde Esmeralda forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-palm-angels-miami-croptop",
    "name": "Palm Angels • Camiseta Cropped 'Miami Palms' Graphic Print",
    "category": "clothing",
    "description": "Camiseta corta de diseño urbano de Palm Angels con estampado fotográfico tropical de palmeras estilo neón Miami, cuello a contraste y banda elástica con tipografía gótica distintiva.",
    "price": 0.0,
    "image": "/images/palm-angels-miami-croptop.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Palm Angels • Camiseta Cropped 'Miami Palms' Graphic Print forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-lacoste-sports-polo-grey",
    "name": "Lacoste Sport • Polo Deportivo de Piqué Gris Vigoré Regular Fit",
    "category": "clothing",
    "description": "Polo de manga corta en piqué de algodón técnico transpirable de color gris claro vigoré. Cuello acanalado clásico con tapeta de botones y cocodrilo verde bordado en el pecho.",
    "price": 0.0,
    "image": "/images/lacoste-sports-polo-grey.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Lacoste Sport • Polo Deportivo de Piqué Gris Vigoré Regular Fit forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-lacoste-navy-polo-classic",
    "name": "Lacoste • Polo Clásico de Piqué Azul Marino Regular Fit",
    "category": "clothing",
    "description": "La elegancia atemporal del polo de piqué Petit en azul marino profundo. Botones de nácar auténticos, corte regular impecable y emblemático cocodrilo bordado en el pecho.",
    "price": 0.0,
    "image": "/images/lacoste-navy-polo-classic.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Lacoste • Polo Clásico de Piqué Azul Marino Regular Fit forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-helly-hansen-driftline-polo",
    "name": "Helly Hansen • Polo Piqué Técnico 'Driftline' Azul Marino",
    "category": "clothing",
    "description": "Polo técnico de navegación y sport en piqué de secado rápido tactel. Color azul marino con cuello camisero, tapeta con botones grabados y logotipo HH bordado en blanco.",
    "price": 0.0,
    "image": "/images/helly-hansen-driftline-polo.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Helly Hansen • Polo Piqué Técnico 'Driftline' Azul Marino forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-ralph-lauren-navy-polo",
    "name": "Polo Ralph Lauren • Polo Piqué 'Slim Fit' Azul Marino",
    "category": "clothing",
    "description": "Polo icónico de Ralph Lauren en piqué de algodón azul marino de tacto sedoso. Corte slim refinado, botones de nácar y bordado de jinete Pony distintivo.",
    "price": 84.5,
    "image": "/images/ralph-lauren-navy-polo.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Polo Ralph Lauren • Polo Piqué 'Slim Fit' Azul Marino forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-spain-rfef-jersey",
    "name": "adidas • Camiseta Oficial Selección Española de Fútbol RFEF Roja",
    "category": "clothing",
    "description": "Camiseta oficial de juego de la Selección Española en color rojo pasión con detalles amarillos en las mangas y escudo termosellado de la RFEF con estrella de campeones.",
    "price": 0.0,
    "image": "/images/adidas-spain-rfef-jersey.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas • Camiseta Oficial Selección Española de Fútbol RFEF Roja forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-leopard-tee",
    "name": "adidas Originals • Camiseta Animal Print Leopardo 'Trefoil'",
    "category": "clothing",
    "description": "Camiseta de moda urbana con estampado animal print de leopardo integral en tonos arena y negro. Tres bandas blancas en los hombros y cuello redondo en canalé negro.",
    "price": 0.0,
    "image": "/images/adidas-leopard-tee.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas Originals • Camiseta Animal Print Leopardo 'Trefoil' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-lilac-climacool-tights",
    "name": "adidas Climacool • Mallas Técnicas de Entrenamiento Lila Pastel",
    "category": "clothing",
    "description": "Leggings deportivos de cintura alta y compresión moderada en suave tono lavanda lila pastel. Confeccionados en tejido transpirable Climacool con costuras ergonómicas.",
    "price": 0.0,
    "image": "/images/adidas-lilac-climacool-tights.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas Climacool • Mallas Técnicas de Entrenamiento Lila Pastel forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-snake-print-leggings",
    "name": "adidas Originals • Mallas con Estampado de Serpiente 'Snake Print'",
    "category": "clothing",
    "description": "Mallas de diseño contemporáneo con patrón de piel de serpiente en escala de grises y grafito. Franjas laterales blancas y cintura elástica de ajuste ceñido estilizador.",
    "price": 0.0,
    "image": "/images/adidas-snake-print-leggings.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas Originals • Mallas con Estampado de Serpiente 'Snake Print' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-adidas-mint-leggings",
    "name": "adidas Performance • Mallas de Entrenamiento Cintura Alta Verde Menta",
    "category": "clothing",
    "description": "Leggings deportivos de compresión suave en fresco tono verde menta pastel. Tejido elástico en cuatro direcciones anti-transparencia con banda anatómica en la cintura.",
    "price": 0.0,
    "image": "/images/adidas-mint-leggings.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de adidas Performance • Mallas de Entrenamiento Cintura Alta Verde Menta forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-joma-brown-leggings",
    "name": "Joma • Mallas Deportivas Moldeadoras Marrón Moka",
    "category": "clothing",
    "description": "Leggings técnicos de alta elasticidad en distinguido tono marrón moka chocolate. Cintura ancha reforzada que moldea la silueta con total libertad de movimiento.",
    "price": 0.0,
    "image": "/images/joma-brown-leggings.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Joma • Mallas Deportivas Moldeadoras Marrón Moka forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-joma-running-nude-shoes",
    "name": "Joma • Zapatillas Running 'R.Vitaly' Mujer Rosa Palo & Nude",
    "category": "clothing",
    "description": "Zapatillas deportivas ultraligeras para running y fitness en combinación rosa palo y nude. Malla transpirable sin costuras y mediasuela amortiguadora Phylon para máxima comodidad.",
    "price": 0.0,
    "image": "/images/joma-running-nude-shoes.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Joma • Zapatillas Running 'R.Vitaly' Mujer Rosa Palo & Nude forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ]
  },
  {
    "id": "clothing-joma-white-slip-resistant",
    "name": "Joma • Zapatillas Confort Blancas con Suela Antideslizante",
    "category": "clothing",
    "description": "Calzado confort deportivo monocromo en blanco pulcro con plantilla Memory Foam de alta densidad y suela antideslizante certificada. Ideal para largas jornadas y estilo athleisure.",
    "price": 0.0,
    "image": "/images/joma-white-slip-resistant.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Joma • Zapatillas Confort Blancas con Suela Antideslizante forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-skechers-hands-free-slip-ins",
    "name": "Skechers Slip-ins • Zapatillas Confort Blancas Sin Manos",
    "category": "clothing",
    "description": "Innovadoras zapatillas slip-in en malla técnica blanca transpirable. Talonera diseñada para calzar sin agacharse ni usar las manos, con plantilla amortiguada Air-Cooled Memory Foam.",
    "price": 0.0,
    "image": "/images/skechers-hands-free-slip-ins.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Skechers Slip-ins • Zapatillas Confort Blancas Sin Manos forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ]
  },
  {
    "id": "clothing-joma-black-running-shoes",
    "name": "Joma Sport • Zapatillas Running Negras Transpirables Hombre",
    "category": "clothing",
    "description": "Zapatillas de entrenamiento ligero y uso diario en malla técnica negra con detalles contrastados. Suela ergonómica de espuma EVA para pisada amortiguada y confortable.",
    "price": 0.0,
    "image": "/images/joma-black-running-shoes.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Joma Sport • Zapatillas Running Negras Transpirables Hombre forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ]
  },
  {
    "id": "clothing-skechers-bobs-brown",
    "name": "Skechers BOBS • Zapatillas Confort Casual Marrón Chocolate",
    "category": "clothing",
    "description": "Calzado casual de cordones confeccionado en lona resistente color marrón chocolate oscuro. Plantilla viscoelástica acolchada y suela flexible de perfil bajo.",
    "price": 0.0,
    "image": "/images/skechers-bobs-brown.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Skechers BOBS • Zapatillas Confort Casual Marrón Chocolate forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-hm-mid-trunks-coolmax-pack",
    "name": "H&M • Pack de 3 Bóxers Mid Trunks Algodón & Coolmax",
    "category": "clothing",
    "description": "Set de tres calzoncillos tipo bóxer ajustado en gama de grises, negro y azul ceniza. Tejido con tecnología Coolmax transpirable y cinturilla elástica suave anti-roce.",
    "price": 0.0,
    "image": "/images/hm-mid-trunks-coolmax-pack.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de H&M • Pack de 3 Bóxers Mid Trunks Algodón & Coolmax forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-springfield-boxers-organic-pack",
    "name": "Springfield • Pack de 5 Bóxers Algodón Orgánico Tonos Azules",
    "category": "clothing",
    "description": "Lote de cinco bóxers elásticos confeccionados en suave algodón orgánico hipoalergénico. Diseños lisos y con microrrayas en tonos navy, celeste y azul petróleo.",
    "price": 0.0,
    "image": "/images/springfield-boxers-organic-pack.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Springfield • Pack de 5 Bóxers Algodón Orgánico Tonos Azules forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-springfield-boxers-greys-pack",
    "name": "Springfield • Pack de 5 Bóxers Monocromo Grises & Carbón",
    "category": "clothing",
    "description": "Pack de cinco unidades de ropa interior masculina en tonos negro, antracita y gris vigoré. Confección en punto elástico de máxima durabilidad con banda elástica con logo.",
    "price": 0.0,
    "image": "/images/springfield-boxers-organic-pack.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Springfield • Pack de 5 Bóxers Monocromo Grises & Carbón forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "clothing-victorias-secret-shine-strap",
    "name": "Victoria's Secret • Tanga Joya Cristal 'Shine Strap' Rosa Nude",
    "category": "clothing",
    "description": "Icónico tanga de lujo de Victoria's Secret en microfibra sedosa color rosa nude con tiras laterales decoradas con brillantes cristales strass y logotipo de la Maison.",
    "price": 15.0,
    "image": "/images/victorias-secret-shine-strap.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Victoria's Secret • Tanga Joya Cristal 'Shine Strap' Rosa Nude forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-victorias-secret-black-shine-strap",
    "name": "Victoria's Secret • Tanga Multi-Tiras Negro con Cristales 'Shine Strap'",
    "category": "clothing",
    "description": "Diseño de lencería de alta sensualidad en microfibra negra satinada. Tiras dobles enriquecidas con pavé de pedrería y herrajes pulidos.",
    "price": 15.0,
    "image": "/images/victorias-secret-black-shine-strap.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Victoria's Secret • Tanga Multi-Tiras Negro con Cristales 'Shine Strap' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "clothing-victorias-secret-lace-shine-strap",
    "name": "Victoria's Secret Very Sexy • Tanga de Encaje Floral con 'Shine Strap'",
    "category": "clothing",
    "description": "Delicada pieza de lencería en fino encaje floral transparente con ribete ondulado y laterales deslumbrantes engastados de cristales brillantes.",
    "price": 15.0,
    "image": "/images/victorias-secret-lace-shine-strap.jpg",
    "isAvailable": true,
    "availability": "available",
    "details": [
      "Confección de alta calidad con acabados impecables",
      "Diseño ergonómico y materiales de tacto premium",
      "Edición oficial de colección exclusiva",
      "Garantía de autenticidad Katty Privé Madrid"
    ],
    "history": "Esta exclusiva pieza de Victoria's Secret Very Sexy • Tanga de Encaje Floral con 'Shine Strap' forma parte de la cuidada selección de moda y prendas de autor de Katty Privé Madrid, aunando estilo atemporal y confort supremo."
  },
  {
    "id": "bags-miu-miu-arcadie-nappa",
    "name": "Miu Miu • Bolsa Arcadie de Piel de Napa Matelassé Blanco Alabastro",
    "category": "bags",
    "description": "La icónica bolsa Arcadie de Miu Miu confeccionada en exquisita piel de napa con el inconfundible trabajo artesanal acolchado matelassé en tono blanco marfil alabastro. Silueta estructurada con dobles asas tubulares, logotipo metálico dorado 'miu miu' en relieve frontal, bandolera ajustable desmontable y etiqueta clochette con candado dorado.",
    "price": 1100.0,
    "image": "/images/miu-miu-arcadie-nappa-bag.jpg",
    "isAvailable": true,
    "availability": "available",
    "featured": true,
    "details": [
      "Modelo: Miu Miu Arcadie Bolsa de Piel de Napa (Ref: 5BB148 / Matelassé Nappa Leather)",
      "PVP Oficial boutique: 2.550,00 € (PVP Especial Katty Privé: 1.100,00 €)",
      "Color: Blanco Alabastro / Chalk White con herrajes metálicos dorados pulidos",
      "Material: 100% Piel de napa de cordero ultrasuave con textura acolchada matelassé",
      "Dimensiones: 22 cm (ancho) × 12 cm (alto) × 7.5 cm (profundidad) aprox.",
      "Cierre: Cremallera superior perimetral de dos vías con tiradores de piel",
      "Asas: Doble asa de mano de napa cosida y correa bandolera de piel desmontable y regulable (105 cm)",
      "Accesorios: Etiqueta clochette de cuero extraíble con logotipo metálico dorado y candado lateral",
      "Interior: Forro textil de satén de algodón con placa metálica oficial Miu Miu Milano y bolsillo de parche"
    ],
    "history": "La bolsa Arcadie encarna el espíritu audaz y sofisticado de Miu Miu. Su técnica de acolchado matelassé tridimensional combina la más refinada artesanía peletera italiana con un diseño contemporáneo y rebelde, convirtiéndose en el bolso fetiche de las pasarelas internacionales."
  },
  {
    "id": "bags-tom-ford-whisky-suede-bag",
    "name": "Tom Ford • Bolso Bandolera de Ante Coñac y Cierre 'T' Dorada",
    "category": "bags",
    "description": "Pieza de alta marroquinería confeccionada en ante de ternera color whisky coñac con ribetes de piel suave, correa bandolera y emblemático cierre metálico 'T' bañado en oro. Incluye funda guardapolvo original.",
    "price": 900.0,
    "image": "/images/tom-ford-whisky-suede-bag.jpg",
    "isAvailable": false,
    "availability": "sold_out",
    "featured": true,
    "details": [
      "Modelo: Tom Ford Tara / T-Clasp Suede Shoulder Bag",
      "PVP Oficial boutique: 2.190,00 € (PVP Especial Katty Privé: 900,00 €)",
      "Material: 100% Ante de ternera italiana de tacto aterciopelado con ribetes en piel vacuna lisa",
      "Herrajes: Cierre magnético frontal con emblemática 'T' metálica bañada en oro brillante",
      "Correa: Bandolera regulable en piel para llevar al hombro o cruzada",
      "Interior: Compartimento principal con forro interior de lujo y bolsillo de seguridad",
      "Incluye: Funda guardapolvo original protectora de la firma"
    ],
    "history": "La sofisticación inconfundible de Tom Ford en su máxima expresión: una silueta icónica de proporciones perfectas que combina la suntuosidad del ante coñac con el brillo eterno de su emblemático cierre 'T' dorado."
  }
];
