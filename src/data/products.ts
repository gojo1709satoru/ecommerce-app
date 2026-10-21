export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp?: number;
  image: string;
  rating: number;
  reviewCount: number;
  availability: "In Stock" | "Out of Stock" | "Limited Stock";
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Gel Pen Set (Pack of 10)",
    category: "Stationery",
    price: 149,
    mrp: 199,
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 128,
    availability: "In Stock",
    isBestSeller: true,
    tag: "Best Seller",
  },
  {
    id: "p2",
    name: "Geometry Box Deluxe Set",
    category: "School Supplies",
    price: 220,
    mrp: 260,
    image:
      "https://images.unsplash.com/photo-1596496181861-5fd5344c3951?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 96,
    availability: "In Stock",
    isBestSeller: true,
  },
  {
    id: "p3",
    name: "DOMS Art Kit - 24 Pieces",
    category: "Art & Craft",
    price: 349,
    mrp: 399,
    image:
      "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 74,
    availability: "In Stock",
    isNewArrival: true,
    tag: "New",
  },
  {
    id: "p4",
    name: "Navy Cap Badge (Officer)",
    category: "Navy & Coast Guard",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1591951425600-8de5f1de9887?q=80&w=600&auto=format&fit=crop",
    rating: 5,
    reviewCount: 32,
    availability: "Limited Stock",
    tag: "Premium",
  },
  {
    id: "p5",
    name: "A4 Multi-Colour Paper (100 Sheets)",
    category: "Paper Products",
    price: 180,
    mrp: 220,
    image:
      "https://images.unsplash.com/photo-1568205612837-017257d2da8a?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 61,
    availability: "In Stock",
    isNewArrival: true,
  },
  {
    id: "p6",
    name: "Cricket Ball - Leather",
    category: "Sports & Games",
    price: 250,
    mrp: 300,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 40,
    availability: "In Stock",
    isBestSeller: true,
  },
  {
    id: "p7",
    name: "Steel Tiffin Box - 3 Compartment",
    category: "Daily Essentials",
    price: 320,
    mrp: 380,
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 55,
    availability: "In Stock",
  },
  {
    id: "p8",
    name: "Gift Wrapping Paper Roll (Set of 5)",
    category: "Gift Corner",
    price: 130,
    mrp: 160,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 22,
    availability: "In Stock",
    isNewArrival: true,
  },
  {
    id: "p9",
    name: "Navy T-Shirt - Combat Fit",
    category: "Navy & Coast Guard",
    price: 399,
    mrp: 450,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 48,
    availability: "In Stock",
    isBestSeller: true,
  },
  {
    id: "p10",
    name: "Exam Pad with Clip - A4",
    category: "Office Supplies",
    price: 90,
    mrp: 110,
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 33,
    availability: "In Stock",
  },
  {
    id: "p11",
    name: "Chess Board - Wooden Finish",
    category: "Sports & Games",
    price: 280,
    mrp: 340,
    image:
      "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 29,
    availability: "In Stock",
    isNewArrival: true,
  },
  {
    id: "p12",
    name: "Service Shoe - Navy Issue",
    category: "Navy & Coast Guard",
    price: 899,
    mrp: 999,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 61,
    availability: "In Stock",
    isBestSeller: true,
    tag: "Premium",
  },
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getNavyCollection = () => products.filter((p) => p.category === "Navy & Coast Guard");
export const getByCategory = (category: string) =>
  products.filter((p) => p.category === category);
