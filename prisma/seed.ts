import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function img(photoId: string) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&h=800&q=80`;
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
    imageUrl: img("photo-1579952363873-27f9bade6f55"),
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
    imageUrl: img("photo-1515955656352-a1fa3ffcd111"),
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
    imageUrl: img("photo-1560272564-c83b66b1ad12"),
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
    imageUrl: img("photo-1526234070-4bb8e786031d"),
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
    imageUrl: img("photo-1542291026-7eec264c27ff"),
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
    imageUrl: img("photo-1571907480493-893e1a0b9672"),
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
    imageUrl: img("photo-1476480862126-209feaa3e8c3"),
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
    imageUrl: img("photo-1534438327276-14e5300c3a48"),
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
    imageUrl: img("photo-1599901860904-17e06ed45436"),
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
    imageUrl: img("photo-1598289431512-b763265389aa"),
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
    imageUrl: img("photo-1574680096145-d05b064e4483"),
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
    imageUrl: img("photo-1626687810124-e235343b816f"),
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
    imageUrl: img("photo-1626613342656-68a067c35838"),
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
    imageUrl: img("photo-1530549387789-4c1017266635"),
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
    imageUrl: img("photo-1546519638-68b109498ffc"),
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
    imageUrl: img("photo-1606107557195-0a42ed6354b3"),
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
    imageUrl: img("photo-1622163642999-9580494a8217"),
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
    imageUrl: img("photo-1554068723-9bf329bce6f0"),
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
