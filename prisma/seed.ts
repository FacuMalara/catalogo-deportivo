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
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNB2-8zIwFiO0gmoF9a6gqYz9eMQadL-skg5zWTmu6cDaFa0k1zgw4rAwwHjDWzU-R5YJUYwPDqMFNT7U2zoes7IXE0dPqWb49dczYkjyHuw2UPIJQOG3c",
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
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTi4pKih1J9kjDetHOp8bx1oMcAhjTXS6h-RAofQ4Tc-TplmG8lNECBiu5IlB8AbSXEO0ZtbkmjMZ_unOpTnjInYZ0dc6W-Hlw4hc953UPvC7kYEaNyCdDp",
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
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdNCatPs6f9K3AYrfv94etbLJA4O-Orr36vlqOfvANJ8ncEnYFQOmhs_ZJp8NCUm9NLbOXqmkkfJt1zP3H7XkOd4sDGzF1CaP6q0ERsGEKMGF1m1_pneiQ",
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
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQU_kR9PP1gHdG1xT0yF-NNc8_MHSDYFVdRrrqnjr6NipbYpWb-LZyXsW3ExoKzMeF8NQv0VXBH6RLLen9TG7-ZyMit-RCVLeM2CRjz05GvKf3WFMfGM_7uOA",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZNipyEioqi1rYBCeU6S0sMQa7omA4Bav8Y5ZVfrSFYneREneiwVgX2n0_ZSCi0Ay7E-a9G-qalAoSYVcnIWttk2kdYEryCn4TtyEELd1pD4c02f8girQC7Q",
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
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5xISXzcyPYE7kVoUplpUkNS0xaQTUjrEDIZL1lke1mO1jhecuHwajVu75gb3thCdRh6QOTfa9a4iHfL3ZVBMTcBvJox6wgYtVaew4RNMfV4uqEJgqYBgltA",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRwSXzQOVacNPAghkaLXXNcL7bfJAeDPj_ZefUF8k0DkVJeF70R8dsfenLeOg63MwAmpO6AbWYD3aQ6hP02DIXqk8Yi4KVjkwGmO5RmdUkf9jtp0JRdzQqZQ",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSa12L5Dg9m9DY89A9KwKjK8Uq81i_q-cxpiwaw6tZPA01741SWJM6d7MTtAfJoPVNR1blgFnj-8fwzm9xSMnpb4PWJhDmnVNI-yR3gxRzg9gRkiDHDtlRjIA",
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
      "https://http2.mlstatic.com/D_NQ_NP_2X_993526-MLA105014505632_012026-F.webp",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPj9xAGDNsaoQ0kTx4dS-0RCiAsGF9vR-iUi_m8b84peAaz5Uih4Q_-pErYjQhmEmLFt9mwpqWuYkjSR31uJPz7bYJo40faZRK_YN281t_N8dl-CqkLjQ22zI",
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
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2Ir0bs217XQNBO20W7hfEF_puB_XQ6V5DpghWyGLWq-w4v1_a0I5uBYtc-x0E0mDswYkkXhjqe45UmdNE09N0b3LWjYqHFVepCU84n2L81C-R5KWtY8jB",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTeDVGSWjDaTNGYGskp6TgpwoJw4Ke8RFk3453qKIcGQihKE9GMmLnRXSOff1KyVnWrOqLmd9wJHUOTq9w2jee3lOFdO6G_6tT4Y9SBN3j4KkYzHI9nzUQcw",
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
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRW7w6dl0KOQc-X1UPu0z_HvLsWASvSuIbHkoktk31VabWY7wubFEqmvQDYD2XbqK0GNox-BVr_r-kHZEU-GqoIzl3xcZLTIXq4tPVBSHaQyv0lwEgZJrRQ7A",
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
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8AKIaw6Z1A40C6qqGE2-W7ZLR5N6Gtq68UgrsPUrJgtS5u9FUefzEUhR0KaJjOmkV7V-BHz7M7mVWsJ9761BIV0OYn7J7FwgWrx-ameYsdfmD8lD6p636",
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
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2iVBasFDmXtkCH-fSbj4ky8NugP1gx_UWUu_JrTbT4Ibv6fM6UMSRqJ-9ExFtgVxC-ZBdcNsD9kXpXd_STJf1RE3nxnyNf4RT1NAu5uBCnHZ61YgkJHSIpw",
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
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT8i7VUOIQz3u72N_fig7dERJX7o8z9k5_jIXUzpjMnkjvNoN0Z_ZvrH5Fn7iQe_9HNlqdUKL35hQlD8bcOOLew5e_lBKtwRvchEACl3PGwXLW9GlVh6Xex",
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
