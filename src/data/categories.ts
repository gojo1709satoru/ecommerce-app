import type { IconType } from "react-icons";
import {
  FaPencilAlt,
  FaPaintBrush,
  FaFutbol,
  FaGift,
  FaShip,
  FaBoxOpen,
  FaBriefcase,
  FaHome,
} from "react-icons/fa";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: IconType;
  image: string;
  productCount: number;
  subCategories?: string[];
}

export const featuredCategories: Category[] = [
  {
    id: "stationery",
    name: "Stationery",
    slug: "stationery",
    description: "Pens, pencils, paper products & more",
    icon: FaPencilAlt,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    productCount: 320,
    subCategories: ["Pens & Pencils", "Paper Products", "Correction Items", "Geometry Sets"],
  },
  {
    id: "school-supplies",
    name: "School Supplies",
    slug: "school-supplies",
    description: "Everything for students & teachers",
    icon: FaBoxOpen,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    productCount: 210,
    subCategories: ["Exam Pads", "Geometry Box", "Maps & Charts", "Bags"],
  },
  {
    id: "office-supplies",
    name: "Office Supplies",
    slug: "office-supplies",
    description: "Professional essentials for the workplace",
    icon: FaBriefcase,
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=800&auto=format&fit=crop",
    productCount: 150,
    subCategories: ["Files & Folders", "Envelopes", "Tapes", "Locks"],
  },
  {
    id: "art-craft",
    name: "Art & Craft",
    slug: "art-craft",
    description: "Creative materials for artists of all ages",
    icon: FaPaintBrush,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    productCount: 180,
    subCategories: ["Clay", "Colours", "Decoration", "Craft Paper"],
  },
  {
    id: "sports-games",
    name: "Sports & Games",
    slug: "sports-games",
    description: "Gear up for the game",
    icon: FaFutbol,
    image:
      "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop",
    productCount: 90,
    subCategories: ["Balls", "Indoor Games", "Skipping Ropes"],
  },
  {
    id: "daily-essentials",
    name: "Daily Essentials",
    slug: "daily-essentials",
    description: "Everyday items for home & travel",
    icon: FaHome,
    image:
      "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=800&auto=format&fit=crop",
    productCount: 75,
    subCategories: ["Tiffin Boxes", "Socks", "Raincoats"],
  },
  {
    id: "gift-corner",
    name: "Gift Corner",
    slug: "gift-corner",
    description: "Thoughtful gifts for every occasion",
    icon: FaGift,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    productCount: 60,
    subCategories: ["Gift Items", "Wrapping Paper"],
  },
  {
    id: "navy-coast-guard",
    name: "Navy & Coast Guard",
    slug: "navy-coast-guard",
    description: "Uniforms, badges, medals & accessories",
    icon: FaShip,
    image:
      "https://images.unsplash.com/photo-1580130379624-3a069adbfbd5?q=80&w=800&auto=format&fit=crop",
    productCount: 140,
    subCategories: ["Uniforms", "Footwear", "Badges", "Medals & Insignia"],
  },
];

export const megaMenu = [
  {
    title: "Stationery",
    slug: "stationery",
    columns: [
      {
        heading: "Writing & Correction",
        items: ["Pens", "Pencils", "Markers", "Highlighters", "Whitener", "Correction Tape", "Ink Pad"],
      },
      {
        heading: "Paper Products",
        items: [
          "A3 White Paper",
          "A4 White Paper",
          "A5 White Paper",
          "Chart Paper",
          "Glaze Paper",
          "Glitter Paper",
          "Handmade Paper",
          "Origami Paper",
        ],
      },
      {
        heading: "Office & School",
        items: ["Exam Pad", "Geometry Box", "Steel Scale", "Compass", "Protractor", "Stick File", "Envelope"],
      },
    ],
  },
  {
    title: "Art & Craft",
    slug: "art-craft",
    columns: [
      {
        heading: "Craft Materials",
        items: ["Clay", "Cloth Colours", "DOMS Art Kit", "Picture Charts", "Decoration Items"],
      },
      {
        heading: "Party & Festive",
        items: ["Balloons", "Birthday Caps", "Use & Throw Plates", "Holi Colour Powder"],
      },
      {
        heading: "Educational",
        items: ["Indian Map", "African Map", "American Map", "World Map"],
      },
    ],
  },
  {
    title: "Sports & Games",
    slug: "sports-games",
    columns: [
      {
        heading: "Sports",
        items: ["Football", "Plastic Ball", "Tennis Ball", "Cricket Ball", "Badminton Cork", "Skipping Rope"],
      },
      {
        heading: "Indoor Games",
        items: ["Chess", "Ludo"],
      },
    ],
  },
  {
    title: "Gifts & Essentials",
    slug: "gift-corner",
    columns: [
      {
        heading: "Gift Items",
        items: ["Gift Items", "Gift Wrapping Paper", "Plain Wrapping Paper"],
      },
      {
        heading: "Daily Essentials",
        items: ["Plastic Tiffin Box", "Steel Tiffin Box", "Socks", "Comb", "Hanger", "Raincoat"],
      },
    ],
  },
  {
    title: "Navy & Coast Guard",
    slug: "navy-coast-guard",
    columns: [
      {
        heading: "Uniforms & Footwear",
        items: ["Navy T-Shirt", "Camo T-Shirt", "Dangri", "Navy Shoe", "Service Shoe", "Boots"],
      },
      {
        heading: "Headwear & Belts",
        items: ["P Cap", "Camo Cap", "White Belt", "Black Belt", "Buckle"],
      },
      {
        heading: "Badges & Medals",
        items: ["Arm Badge", "Wings Badge", "Cap Badge (Officer)", "Medal", "Ribbon", "Collar Tag"],
      },
      {
        heading: "Accessories",
        items: ["ID Card Cover", "ID Card Lanyard", "No. 2 Button", "CDS Accessories"],
      },
    ],
  },
];
