import type { Metadata } from "next";
import Image from "next/image";
import { FaBullseye, FaHistory, FaMedal, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | ARAVINDA AGENCIES",
  description:
    "Learn about ARAVINDA AGENCIES — our story, mission, and commitment to quality stationery, school, office, and Navy & Coast Guard supplies.",
};

const pillars = [
  {
    icon: FaHistory,
    title: "Years of Service",
    description: "Over two decades of trusted service to students, offices, and Navy families.",
  },
  {
    icon: FaBullseye,
    title: "Our Mission",
    description: "To be the most reliable one-stop shop for everyday and specialised supplies.",
  },
  {
    icon: FaMedal,
    title: "Quality Assurance",
    description: "Every product is sourced and checked for genuine quality before it reaches you.",
  },
  {
    icon: FaCheckCircle,
    title: "Why Choose Us",
    description: "Wide range, fair pricing, and personalised service for every customer.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-pattern py-20 text-white">
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            About Us
          </span>
          <h1 className="mt-4 font-poppins text-4xl font-bold sm:text-5xl">
            Serving Our Community, One Roof at a Time
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            ARAVINDA AGENCIES has been a trusted name for Stationery, School & Office Supplies,
            Art & Craft, Sports, Gifts, and Navy & Coast Guard Uniform Accessories.
          </p>
        </div>
      </section>

      <section className="container-custom grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-card">
          <Image
            src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=900&auto=format&fit=crop"
            alt="ARAVINDA AGENCIES store front"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="section-heading">Company Introduction</h2>
          <p className="section-subheading">
            Founded with a passion for serving our local community, ARAVINDA AGENCIES has grown from
            a small stationery shop into a comprehensive retail destination. We proudly cater to
            students, parents, teachers, office professionals, and Navy & Coast Guard personnel —
            offering everything from everyday essentials to specialised uniform accessories, all
            under one roof.
          </p>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 dark:bg-navy-800/40">
        <div className="container-custom grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card-base flex flex-col items-center gap-3 p-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
                <Icon size={22} />
              </span>
              <h3 className="font-poppins text-base font-bold text-navy dark:text-white">{title}</h3>
              <p className="text-sm text-ink/70 dark:text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
