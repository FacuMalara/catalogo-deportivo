import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function googleImg(url: string) {
  return url;
}

const categories = [
  { name: "Fútbol", slug: "futbol" },
  { name: "Running", slug: "running" },
  { name: "Fitness", slug: "fitness" },
  { name: "Natación", slug: "natacion" },
  { name: "Básquet", slug: "basquet" },
  { name: "Tenis", slug: "tenis" },
] as const;

const products = [
  {
    name: "Pelota de fútbol Nike Strike",
    slug: "pelota-futbol-nike-strike",
    description:
      "Pelota de fútbol profesional con excelente control y durabilidad. Ideal para entrenamientos y partidos en césped natural o sintético.",
    price: 45999,
    // Google: "pelota de futbol nike strike"
    imageUrl: googleImg(
      "https://www.sportcomweb.com/web/image/product.template/15019/image_1920?unique=a05fe4e",
    ),
    brand: "Nike",
    sport: "Fútbol",
    featured: true,
    categorySlug: "futbol",
  },
  {
    name: "Botines Adidas Predator",
    slug: "botines-adidas-predator",
    description:
      "Botines de alto rendimiento con tecnología de agarre superior. Diseñados para máxima precisión en cada pase y disparo.",
    price: 189999,
    // Google: "botines adidas predator"
    imageUrl: googleImg(
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba5b7b36d38345a59442dc3fe49a748a_9366/bota-de-futbol-predator-elite-cesped-natural-seco.jpg",
    ),
    brand: "Adidas",
    sport: "Fútbol",
    featured: false,
    categorySlug: "futbol",
  },
  {
    name: "Canilleras Puma Ultra Light",
    slug: "canilleras-puma-ultra-light",
    description:
      "Canilleras ultralivianas con protección EVA. Ajuste anatómico y máxima comodidad durante el juego.",
    price: 12999,
    // Google: "canilleras futbol puma"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/b6523392-b6523392.jpg?format=auto&quality=40",
    ),
    brand: "Puma",
    sport: "Fútbol",
    featured: false,
    categorySlug: "futbol",
  },
  {
    name: "Guantes de arquero Reusch",
    slug: "guantes-arquero-reusch",
    description:
      "Guantes de arquero con palma de látex y protección en los nudillos. Excelente agarre en condiciones húmedas.",
    price: 54999,
    // Google: "guantes arquero reusch"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/g1041230/g1041230.jpg?format=auto&quality=40",
    ),
    brand: "Reusch",
    sport: "Fútbol",
    featured: false,
    categorySlug: "futbol",
  },
  {
    name: "Zapatillas Nike Pegasus 41",
    slug: "zapatillas-nike-pegasus-41",
    description:
      "Zapatillas de running con amortiguación React Foam. Perfectas para entrenamientos diarios y largas distancias.",
    price: 219999,
    // Google: "zapatillas nike pegasus 41 running"
    imageUrl: googleImg(
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8b4-2705167967a4/air-pegasus-41-mens-road-running-shoes-Njq3wA.png",
    ),
    brand: "Nike",
    sport: "Running",
    featured: true,
    categorySlug: "running",
  },
  {
    name: "Remera running Dry-Fit",
    slug: "remera-running-dry-fit",
    description:
      "Remera técnica con tejido transpirable que aleja el sudor. Corte ergonómico para mayor libertad de movimiento.",
    price: 34999,
    // Google: "remera running dry fit nike"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p2598260/p2598260.jpg?format=auto&quality=40",
    ),
    brand: "Nike",
    sport: "Running",
    featured: false,
    categorySlug: "running",
  },
  {
    name: "Short de running 2 en 1",
    slug: "short-running-2-en-1",
    description:
      "Short con malla interior integrada y bolsillo para llaves. Tejido ligero ideal para carreras de verano.",
    price: 28999,
    // Google: "short running 2 en 1"
    imageUrl: googleImg(
      "https://acdn-us.mitiendanube.com/stores/001/219/670/products/shortriver001_3_1800x1800-1-d9b00034a251d080e117110382177269-480-0.webp",
    ),
    brand: "Adidas",
    sport: "Running",
    featured: false,
    categorySlug: "running",
  },
  {
    name: "Mancuernas ajustables 10 kg",
    slug: "mancuernas-ajustables-10kg",
    description:
      "Par de mancuernas con peso ajustable de 2 a 10 kg por unidad. Perfectas para entrenamiento en casa.",
    price: 89999,
    // Google: "mancuernas ajustables 10 kg"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/g152327/g152327.jpg?format=auto&quality=40",
    ),
    brand: "SportFit",
    sport: "Fitness",
    featured: false,
    categorySlug: "fitness",
  },
  {
    name: "Colchoneta yoga premium",
    slug: "colchoneta-yoga-premium",
    description:
      "Colchoneta antideslizante de 6 mm con excelente amortiguación. Incluye correa de transporte.",
    price: 24999,
    // Google: "colchoneta yoga premium"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p2199007/p2199007.jpg?format=auto&quality=40",
    ),
    brand: "YogaPro",
    sport: "Fitness",
    featured: false,
    categorySlug: "fitness",
  },
  {
    name: "Banda elástica de resistencia",
    slug: "banda-elastica-resistencia",
    description:
      "Set de 5 bandas con diferentes niveles de resistencia. Ideal para fortalecimiento muscular y rehabilitación.",
    price: 15999,
    // Google: "bandas elasticas resistencia fitness"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p1712305/p1712305.jpg?format=auto&quality=40",
    ),
    brand: "TheraBand",
    sport: "Fitness",
    featured: true,
    categorySlug: "fitness",
  },
  {
    name: "Musculosa training Pro",
    slug: "musculosa-training-pro",
    description:
      "Musculosa de compresión con costuras planas. Tejido elástico de secado rápido para entrenamientos intensos.",
    price: 19999,
    // Google: "musculosa training gym"
    imageUrl: googleImg(
      "https://acdn-us.mitiendanube.com/stores/001/219/670/products/18837-8bb286fc383c18e2b817574320180315-480-0.webp",
    ),
    brand: "Under Armour",
    sport: "Fitness",
    featured: false,
    categorySlug: "fitness",
  },
  {
    name: "Antiparras Speedo Fastskin",
    slug: "antiparras-speedo-fastskin",
    description:
      "Antiparras de competición con visión panorámica y sellado anti-fugas. Diseño hidrodinámico.",
    price: 32999,
    // Google: "antiparras natacion speedo"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p817234/p817234.jpg?format=auto&quality=40",
    ),
    brand: "Speedo",
    sport: "Natación",
    featured: false,
    categorySlug: "natacion",
  },
  {
    name: "Gorro de natación silicona",
    slug: "gorro-natacion-silicona",
    description:
      "Gorro de silicona premium que protege el cabello del cloro. Ajuste cómodo para uso prolongado.",
    price: 8999,
    // Google: "gorro natacion silicona"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p817235/p817235.jpg?format=auto&quality=40",
    ),
    brand: "Arena",
    sport: "Natación",
    featured: false,
    categorySlug: "natacion",
  },
  {
    name: "Traje de baño competición",
    slug: "traje-bano-competicion",
    description:
      "Traje de baño de una pieza con tejido de compresión. Reduce la resistencia al agua en competiciones.",
    price: 42999,
    // Google: "traje baño competicion natacion"
    imageUrl: googleImg(
      "https://contents.mediadecathlon.com/p817236/p817236.jpg?format=auto&quality=40",
    ),
    brand: "TYR",
    sport: "Natación",
    featured: false,
    categorySlug: "natacion",
  },
  {
    name: "Pelota de básquet Spalding TF-1000",
    slug: "pelota-basquet-spalding-tf1000",
    description:
      "Pelota oficial de cuero composite para interiores. Excelente agarre y rebote consistente.",
    price: 67999,
    // Google: "pelota basquet spalding"
    imageUrl: googleImg(
      "https://acdn-us.mitiendanube.com/stores/001/219/670/products/lbpvdl002rw-5-pelota-de-basquet-estadios-24-river-_-licencia-clubes-n5-994369b4702830a8a017564779809585-480-0.webp",
    ),
    brand: "Spalding",
    sport: "Básquet",
    featured: true,
    categorySlug: "basquet",
  },
  {
    name: "Zapatillas Jordan Max Aura",
    slug: "zapatillas-jordan-max-aura",
    description:
      "Zapatillas de básquet con amortiguación Air y soporte lateral reforzado. Estilo icónico Jordan.",
    price: 249999,
    // Google: "zapatillas jordan basquet"
    imageUrl: googleImg(
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7f716966-4c89-428e-b17b-09289997a477/air-jordan-1-mid-mens-shoes-LCVQCT.png",
    ),
    brand: "Jordan",
    sport: "Básquet",
    featured: false,
    categorySlug: "basquet",
  },
  {
    name: "Raqueta Wilson Pro Staff",
    slug: "raqueta-wilson-pro-staff",
    description:
      "Raqueta de tenis profesional con marco de grafito. Balance equilibrado para jugadores intermedios y avanzados.",
    price: 299999,
    // Google: "raqueta tenis wilson pro staff"
    imageUrl: googleImg(
      "https://www.wilson.com/content/dam/wilson/en-us/tennis/racquets/pro-staff/pro-staff-97/pro-staff-97-v14-tennis-racket.png",
    ),
    brand: "Wilson",
    sport: "Tenis",
    featured: false,
    categorySlug: "tenis",
  },
  {
    name: "Pelotas de tenis Wilson x3",
    slug: "pelotas-tenis-wilson-x3",
    description:
      "Tubo con 3 pelotas de tenis de presurización extra. Fieltro duradero para canchas de polvo de ladrillo y dura.",
    price: 14999,
    // Google: "pelotas tenis wilson tubo"
    imageUrl: googleImg(
      "https://www.wilson.com/content/dam/wilson/en-us/tennis/balls/us-open/us-open-tennis-balls-3-can.png",
    ),
    brand: "Wilson",
    sport: "Tenis",
    featured: false,
    categorySlug: "tenis",
  },
];

async function main() {
  console.log("Limpiando datos existentes...");
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("Creando categorías...");
  const categoryMap = new Map<string, string>();

  for (const category of categories) {
    const created = await prisma.category.create({ data: category });
    categoryMap.set(category.slug, created.id);
  }

  console.log("Creando productos...");
  for (const product of products) {
    const categoryId = categoryMap.get(product.categorySlug);
    if (!categoryId) {
      throw new Error(`Categoría no encontrada: ${product.categorySlug}`);
    }

    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        brand: product.brand,
        sport: product.sport,
        featured: product.featured,
        categoryId,
      },
    });
  }

  console.log(`Seed completado: ${categories.length} categorías, ${products.length} productos.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
