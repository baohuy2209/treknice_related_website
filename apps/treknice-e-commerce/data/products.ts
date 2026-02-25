export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: string;
  images: string[];
  variants: { type: string; options: string[] }[];
  details: string;
  ingredients: string;
  reviews: { name: string; rating: number; comment: string; date: string }[];
  isBestSeller?: boolean;
  isNew?: boolean;
  createdAt: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Olive Oil Artisan Soap",
    price: 12.0,
    originalPrice: 15.0,
    description:
      "Handcrafted with cold-pressed olive oil and essential botanicals, this artisan soap gently cleanses while nourishing your skin with natural vitamins and antioxidants. Each bar is cured for six weeks to ensure a mild, long-lasting lather.",
    shortDescription: "Cold-pressed olive oil soap with essential botanicals",
    category: "Bath & Body",
    images: [
      "/assets/product-1.jpg",
      "/assets/product-1.jpg",
      "/assets/product-1.jpg",
    ],
    variants: [
      { type: "Scent", options: ["Lavender", "Eucalyptus", "Unscented"] },
      { type: "Size", options: ["100g", "200g"] },
    ],
    details:
      "Each bar is handmade in small batches using traditional cold-process methods. We use only organic, sustainably sourced ingredients.",
    ingredients:
      "Olea Europaea (Olive) Fruit Oil, Cocos Nucifera (Coconut) Oil, Sodium Hydroxide, Aqua, Lavandula Angustifolia (Lavender) Oil",
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        comment: "Best soap I've ever used. My skin feels so soft!",
        date: "2025-01-15",
      },
      {
        name: "James K.",
        rating: 4,
        comment: "Lovely lather and scent. Will buy again.",
        date: "2025-02-03",
      },
    ],
    isBestSeller: true,
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    name: "Bamboo Toothbrush Set",
    price: 8.5,
    description:
      "A set of two biodegradable bamboo toothbrushes with charcoal-infused bristles. The ergonomic handle is made from sustainably harvested Moso bamboo, and the bristles are BPA-free.",
    shortDescription: "Biodegradable bamboo with charcoal bristles",
    category: "Personal Care",
    images: [
      "/assets/product-2.jpg",
      "/assets/product-2.jpg",
      "/assets/product-2.jpg",
    ],
    variants: [{ type: "Bristle", options: ["Soft", "Medium"] }],
    details:
      "Made from Moso bamboo, one of the fastest-growing plants on Earth. Fully compostable handle.",
    ingredients: "Moso Bamboo, Charcoal-Infused Nylon Bristles (BPA-free)",
    reviews: [
      {
        name: "Emily R.",
        rating: 5,
        comment: "Love these! Great quality and eco-friendly.",
        date: "2025-01-20",
      },
    ],
    isBestSeller: true,
    createdAt: "2025-01-05",
  },
  {
    id: "3",
    name: "Organic Cotton Tote",
    price: 18.0,
    description:
      "A spacious, durable tote bag made from 100% GOTS-certified organic cotton. Features reinforced handles and a convenient inner pocket. Perfect for shopping, beach days, or everyday use.",
    shortDescription: "100% organic cotton, reinforced handles",
    category: "Accessories",
    images: [
      "/assets/product-3.jpg",
      "/assets/product-3.jpg",
      "/assets/product-3.jpg",
    ],
    variants: [{ type: "Color", options: ["Natural", "Sage", "Charcoal"] }],
    details:
      "GOTS-certified organic cotton. Machine washable. Holds up to 15kg. Dimensions: 40cm x 45cm x 12cm.",
    ingredients: "100% GOTS-Certified Organic Cotton",
    reviews: [
      {
        name: "Lisa T.",
        rating: 5,
        comment: "Sturdy and beautiful. I use it every day!",
        date: "2025-02-10",
      },
    ],
    isNew: true,
    createdAt: "2025-02-01",
  },
  {
    id: "4",
    name: "Beeswax Lavender Candle",
    price: 22.0,
    description:
      "Hand-poured beeswax candle infused with organic lavender essential oil. Burns cleanly for up to 40 hours with a warm, calming fragrance. Housed in a reusable ceramic jar.",
    shortDescription: "Hand-poured beeswax, 40-hour burn time",
    category: "Home",
    images: [
      "/assets/product-4.jpg",
      "/assets/product-4.jpg",
      "/assets/product-4.jpg",
    ],
    variants: [
      { type: "Scent", options: ["Lavender", "Vanilla", "Cedarwood"] },
    ],
    details:
      "100% pure beeswax with organic essential oils. The ceramic jar is handmade and food-safe for reuse.",
    ingredients:
      "Pure Beeswax, Organic Lavandula Angustifolia Oil, Cotton Wick",
    reviews: [
      {
        name: "Anna P.",
        rating: 5,
        comment:
          "Beautiful candle with an amazing scent. The ceramic jar is lovely too.",
        date: "2025-01-25",
      },
      {
        name: "Mark D.",
        rating: 4,
        comment: "Great burn time and scent. A bit pricey but worth it.",
        date: "2025-02-05",
      },
    ],
    isBestSeller: true,
    createdAt: "2025-01-10",
  },
  {
    id: "5",
    name: "Glass Water Bottle",
    price: 24.0,
    description:
      "Premium borosilicate glass water bottle with a natural bamboo lid and protective silicone sleeve. Holds 500ml, dishwasher safe, and completely free from BPA and other harmful chemicals.",
    shortDescription: "Borosilicate glass with bamboo lid, 500ml",
    category: "Accessories",
    images: [
      "/assets/product-5.jpg",
      "/assets/product-5.jpg",
      "/assets/product-5.jpg",
    ],
    variants: [
      { type: "Sleeve Color", options: ["Sage", "Charcoal", "Terracotta"] },
    ],
    details:
      "Borosilicate glass withstands temperatures from -20°C to 150°C. Bamboo lid with stainless steel interior. Leak-proof seal.",
    ingredients:
      "Borosilicate Glass, Moso Bamboo, Food-Grade Silicone, Stainless Steel",
    reviews: [
      {
        name: "Chris L.",
        rating: 5,
        comment: "Sleek design and feels premium. No plastic taste!",
        date: "2025-02-15",
      },
    ],
    isNew: true,
    createdAt: "2025-02-10",
  },
  {
    id: "6",
    name: "Wooden Hair Comb",
    price: 14.0,
    description:
      "A beautifully crafted wide-tooth comb made from sustainable neem wood. Anti-static and gentle on hair, this comb helps distribute natural oils from root to tip for healthier, shinier hair.",
    shortDescription: "Sustainable neem wood, anti-static design",
    category: "Personal Care",
    images: [
      "/assets/product-6.jpg",
      "/assets/product-6.jpg",
      "/assets/product-6.jpg",
    ],
    variants: [{ type: "Size", options: ["Standard", "Travel"] }],
    details:
      "Hand-carved from sustainably harvested neem wood. Smooth, polished finish with rounded teeth to prevent scalp irritation.",
    ingredients: "Sustainably Harvested Neem Wood",
    reviews: [
      {
        name: "Rachel W.",
        rating: 5,
        comment: "So gentle on my hair. No more static!",
        date: "2025-01-30",
      },
    ],
    createdAt: "2025-01-15",
  },
];

export const categories = [
  "All",
  "Bath & Body",
  "Personal Care",
  "Accessories",
  "Home",
];
