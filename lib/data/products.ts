import { Product } from "../types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

export const products: Product[] = [
  {
    id: "running-shoes",
    title: "Running Shoes",
    price: 99,
    category: "clothing",
    brand: "StrideWell",
    image: img("photo-1542291026-7eec264c27ff"),
    description:
      "Lightweight running shoes with breathable mesh uppers and cushioned soles built for daily mileage.",
    rating: 4.5,
    stock: 24,
  },
  {
    id: "wireless-headphones",
    title: "Wireless Headphones",
    price: 89,
    category: "electronics",
    brand: "SoundWave",
    image: img("photo-1505740420928-5e560c06d30e"),
    description:
      "Over-ear Bluetooth headphones with active noise cancellation and 30 hours of battery life.",
    rating: 4.3,
    stock: 40,
  },
  {
    id: "backpack",
    title: "Backpack",
    price: 129,
    category: "clothing",
    brand: "Urban Gear",
    image: img("photo-1553062407-98eeb64c6a62"),
    description:
      "Water-resistant everyday backpack with a padded 15-inch laptop sleeve and multiple organizer pockets.",
    rating: 4.6,
    stock: 15,
  },
  {
    id: "smartwatch",
    title: "Smartwatch",
    price: 249,
    category: "electronics",
    brand: "Pulse",
    image: img("photo-1523275335684-37898b6baf30"),
    description:
      "Fitness smartwatch with heart-rate tracking, GPS, and a week-long battery on a single charge.",
    rating: 4.4,
    stock: 18,
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    price: 149,
    category: "clothing",
    brand: "SunRay",
    image: img("photo-1572635196237-14b3f281503f"),
    description:
      "Polarized acetate sunglasses with UV400 protection and a scratch-resistant coating.",
    rating: 4.1,
    stock: 30,
  },
  {
    id: "digital-camera",
    title: "Digital Camera",
    price: 499,
    category: "electronics",
    brand: "Aperture",
    image: img("photo-1516035069371-29a1b244cc32"),
    description:
      "Mirrorless digital camera with a 24MP sensor, 4K video, and interchangeable lens mount.",
    rating: 4.7,
    stock: 8,
  },
  {
    id: "classic-tshirt",
    title: "Classic T-Shirt",
    price: 29,
    category: "clothing",
    brand: "ClassicThreads",
    image: img("photo-1521572163474-6864f9cf17ab"),
    description:
      "Soft 100% cotton crew-neck t-shirt with a regular fit, made for everyday wear.",
    rating: 4.2,
    stock: 60,
  },
  {
    id: "smartphone",
    title: "Smartphone",
    price: 699,
    category: "electronics",
    brand: "PixelPro",
    image: img("photo-1511707171634-5f897ff02aa9"),
    description:
      "6.1-inch flagship smartphone with a triple-camera system, all-day battery, and 5G support.",
    rating: 4.5,
    stock: 12,
  },
  {
    id: "table-lamp",
    title: "Table Lamp",
    price: 45,
    category: "home",
    brand: "HearthHome",
    image: img("photo-1507473885765-e6ed057f782c"),
    description:
      "Minimalist ceramic table lamp with a warm dimmable bulb, suited for bedside or desk use.",
    rating: 4.3,
    stock: 20,
  },
  {
    id: "ceramic-mug-set",
    title: "Ceramic Mug Set",
    price: 19,
    category: "home",
    brand: "HearthHome",
    image: img("photo-1514228742587-6b1558fcca3d"),
    description:
      "Set of four glazed ceramic mugs, dishwasher and microwave safe, 12oz capacity each.",
    rating: 4.6,
    stock: 50,
  },
  {
    id: "throw-pillow",
    title: "Throw Pillow",
    price: 25,
    category: "home",
    brand: "CozyNest",
    image: img("photo-1591129841117-3adfd313e34f"),
    description:
      "Woven cotton throw pillow with a removable, machine-washable cover.",
    rating: 4.0,
    stock: 35,
  },
  {
    id: "bluetooth-speaker",
    title: "Bluetooth Speaker",
    price: 59,
    category: "electronics",
    brand: "SoundWave",
    image: img("photo-1608043152269-423dbba4e7e1"),
    description:
      "Portable waterproof Bluetooth speaker with 12-hour playback and deep bass output.",
    rating: 4.2,
    stock: 22,
  },
];
