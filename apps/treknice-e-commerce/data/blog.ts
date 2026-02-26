export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Journey to Zero Waste: Small Steps, Big Impact",
    excerpt:
      "Discover how small everyday changes can dramatically reduce your environmental footprint and lead to a more mindful lifestyle.",
    content: `<p>Living a zero-waste lifestyle might seem overwhelming at first, but it doesn't have to be an all-or-nothing approach. The key is to start small and build sustainable habits over time.</p>
<h2>Start With Your Kitchen</h2>
<p>The kitchen is often the biggest source of household waste. Begin by replacing single-use items with reusable alternatives: beeswax wraps instead of plastic wrap, cloth napkins instead of paper, and glass containers for storage.</p>
<h2>Rethink Your Bathroom</h2>
<p>Switch to bar soap and shampoo bars to eliminate plastic bottles. A bamboo toothbrush and natural deodorant are easy swaps that make a significant difference over time.</p>
<h2>Shop Mindfully</h2>
<p>Bring your own bags, choose products with minimal packaging, and support local businesses that prioritize sustainability. Every purchase is a vote for the world you want to live in.</p>
<p>Remember, perfection isn't the goal — progress is. Every small step counts, and together, our collective efforts create meaningful change.</p>`,
    image: "/assets/blog-1.jpg",
    author: "Maya Chen",
    date: "2025-02-15",
    category: "Sustainability",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Why Natural Materials Matter for Your Daily Routine",
    excerpt:
      "From bamboo to organic cotton, learn why choosing natural materials is better for both your health and the planet.",
    content: `<p>In a world dominated by synthetic materials, returning to natural alternatives isn't just a trend — it's a conscious choice for better health and environmental stewardship.</p>
<h2>The Hidden Costs of Synthetics</h2>
<p>Synthetic materials like polyester, nylon, and plastic release microplastics into our water systems with every wash. These tiny particles accumulate in ecosystems and eventually find their way into our food chain.</p>
<h2>Benefits of Natural Materials</h2>
<p>Natural materials like organic cotton, bamboo, wood, and beeswax are biodegradable, renewable, and often hypoallergenic. They work in harmony with your body and the environment rather than against them.</p>
<h2>Making the Switch</h2>
<p>Start by evaluating the products you use daily. Look for certifications like GOTS for cotton, FSC for wood products, and organic certifications for personal care items. Quality natural products may cost more upfront but last longer and have a lower total environmental cost.</p>`,
    image: "/assets/blog-2.jpg",
    author: "Liam Nguyen",
    date: "2025-02-01",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Our Story: From Idea to Impact",
    excerpt:
      "How a simple idea about mindful living grew into a community dedicated to sustainable, beautiful everyday products.",
    content: `<p>Every great journey begins with a single step. Ours began with a question: what if everyday products could be both beautiful and kind to the planet?</p>
<h2>The Beginning</h2>
<p>Founded in 2023, our brand started as a small workshop creating handmade soaps from locally sourced ingredients. We believed that personal care products should nourish both the user and the earth.</p>
<h2>Growing the Vision</h2>
<p>As demand grew, so did our product line. We partnered with artisan communities across Southeast Asia who shared our commitment to traditional craftsmanship and sustainable practices.</p>
<h2>Where We Are Today</h2>
<p>Today, every product in our collection tells a story of careful sourcing, mindful production, and genuine care. We're proud to serve a community of thousands who believe that living well and living sustainably aren't mutually exclusive.</p>`,
    image: "/assets/blog-1.jpg",
    author: "Terra Team",
    date: "2025-01-15",
    category: "Brand Story",
    readTime: "3 min read",
  },
];
