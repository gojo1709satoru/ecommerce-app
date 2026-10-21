export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Lt. Cdr. Ramesh Kumar",
    role: "Indian Navy",
    rating: 5,
    message:
      "Best place for authentic Navy accessories and badges. Quality and finish are always top-notch. My go-to shop for uniform requirements.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Parent",
    rating: 5,
    message:
      "Bought the entire school stationery list for my kids in one visit. Great variety, fair prices, and very helpful staff.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: "t3",
    name: "Anitha Rao",
    role: "School Teacher",
    rating: 4.5,
    message:
      "Love the art & craft section — always stocked with fresh material for classroom projects. Highly recommend ARAVINDA AGENCIES.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: "t4",
    name: "Suresh Nair",
    role: "Office Manager",
    rating: 5,
    message:
      "Reliable supplier for all our office stationery needs. Quick WhatsApp ordering and prompt delivery every time.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];
