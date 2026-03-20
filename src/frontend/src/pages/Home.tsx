import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Heart,
  Leaf,
  Microscope,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    key: "lab",
    img: "/assets/generated/slider-lab.dim_1400x500.jpg",
    title: "Innovating for a",
    highlight: "Healthier Tomorrow",
    titleSuffix: "",
    sub: "NKB Biopharma develops cutting-edge biopharmaceutical solutions that address unmet medical needs and transform patient care globally.",
    primary: { label: "Explore Our Products", to: "/products" },
    secondary: { label: "About Us", to: "/about" },
  },
  {
    key: "patient",
    img: "/assets/generated/slider-patient.dim_1400x500.jpg",
    title: "Putting",
    highlight: "Patients First",
    titleSuffix: " in Every Decision",
    sub: "Our compassionate approach ensures every therapy we develop brings real, measurable improvement to patients and their families worldwide.",
    primary: { label: "Our Commitment", to: "/commitment" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
  {
    key: "global",
    img: "/assets/generated/slider-global.dim_1400x500.jpg",
    title: "Reaching",
    highlight: "Patients Globally",
    titleSuffix: " Across 30+ Countries",
    sub: "With a strong global presence, NKB Biopharma delivers life-changing therapies to patients in over 30 countries across all major markets.",
    primary: { label: "Our Markets", to: "/markets" },
    secondary: { label: "Partner With Us", to: "/contact" },
  },
];

const products = [
  {
    id: "NKB-ONCO 101",
    area: "Oncology",
    desc: "Targeted therapeutic for treatment-resistant solid tumors",
    Icon: Microscope,
  },
  {
    id: "NKB-CARDIO 202",
    area: "Cardiovascular",
    desc: "Next-gen biologic reducing major adverse cardiac events",
    Icon: Heart,
  },
  {
    id: "NKB-IMMUNO 303",
    area: "Immunology",
    desc: "Immunotherapy platform for autoimmune disorders",
    Icon: Shield,
  },
  {
    id: "NKB-RARE 404",
    area: "Rare Diseases",
    desc: "Gene-therapy approach for rare genetic disorders",
    Icon: Star,
  },
  {
    id: "NKB-BIO 505",
    area: "Biologics",
    desc: "High-purity monoclonal antibodies for inflammatory conditions",
    Icon: FlaskConical,
  },
];

const stats = [
  { value: "5+", label: "Innovative Products" },
  { value: "15+", label: "Years of Research" },
  { value: "30+", label: "Countries Served" },
  { value: "200+", label: "Clinical Experts" },
];

const commitments = [
  {
    title: "Quality Excellence",
    desc: "Rigorous GMP compliance and quality management across every production batch.",
    Icon: Star,
  },
  {
    title: "R&D Innovation",
    desc: "Continuous investment in novel therapeutic targets and collaborative research.",
    Icon: FlaskConical,
  },
  {
    title: "Sustainability",
    desc: "Green chemistry practices, renewable energy, and sustainable packaging initiatives.",
    Icon: Leaf,
  },
];

function useCardsPerView() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

function ProductCarousel() {
  const cardsPerView = useCardsPerView();
  const [index, setIndex] = useState(0);
  const maxIndex = products.length - cardsPerView;

  // Clamp index when cardsPerView changes (e.g. on resize)
  const safeIndex = Math.min(index, Math.max(0, maxIndex));

  const dots = maxIndex + 1;

  return (
    <div className="relative">
      {/* Viewport */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.4s ease",
            transform: `translateX(-${safeIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                minWidth: `${100 / cardsPerView}%`,
                boxSizing: "border-box",
                padding: "0 12px",
              }}
            >
              <div
                className="bg-white rounded-xl shadow-card card-hover text-center h-full"
                style={{ padding: "24px", minHeight: 200 }}
              >
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <p.Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-navy text-sm mb-1">{p.id}</h3>
                <p className="text-gold text-xs font-semibold mb-2">{p.area}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button
        type="button"
        onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
        disabled={safeIndex === 0}
        aria-label="Previous products"
        className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full border-2 border-navy bg-white text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ zIndex: 2 }}
        data-ocid="products.pagination_prev"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => setIndex((prev) => Math.min(maxIndex, prev + 1))}
        disabled={safeIndex >= maxIndex}
        aria-label="Next products"
        className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full border-2 border-navy bg-white text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ zIndex: 2 }}
        data-ocid="products.pagination_next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: dots }, (_, i) => `dot-${i}`).map((dotKey, i) => (
          <button
            key={dotKey}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to product ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === safeIndex ? 24 : 10,
              height: 10,
              background:
                i === safeIndex
                  ? "oklch(0.72 0.12 80)"
                  : "oklch(0.72 0.12 80 / 0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const go = useCallback((n: number) => {
    setCurrent((prev) => (prev + n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  const slide = slides[current];

  return (
    <div className="relative overflow-hidden" style={{ height: 520 }}>
      {slides.map((s, i) => (
        <div
          key={s.key}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.img} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(28,35,90,0.82) 45%, rgba(28,35,90,0.3) 100%)",
            }}
          />
        </div>
      ))}

      <div
        className="absolute inset-0 flex items-center px-12 md:px-20"
        style={{ zIndex: 2 }}
      >
        <div className="text-white max-w-xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              {slide.title}{" "}
              <span style={{ color: "oklch(0.72 0.12 80)" }}>
                {slide.highlight}
              </span>
              {slide.titleSuffix}
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              {slide.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.primary.to}
                className="px-6 py-3 rounded font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "oklch(0.72 0.12 80)" }}
              >
                {slide.primary.label}
              </Link>
              <Link
                to={slide.secondary.to}
                className="px-6 py-3 rounded font-semibold text-white border-2 border-white hover:bg-white hover:text-navy transition-colors"
              >
                {slide.secondary.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white/60 bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
        style={{ zIndex: 3 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white/60 bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
        style={{ zIndex: 3 }}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 3 }}
      >
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? 24 : 10,
              height: 10,
              background:
                i === current ? "oklch(0.72 0.12 80)" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                A Legacy of Scientific Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NKB Biopharma is a research-driven pharmaceutical company
                dedicated to discovering and developing innovative therapies
                that address critical unmet medical needs across oncology,
                cardiovascular, immunology, and rare disease areas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of cutting-edge research experience and a
                global footprint spanning 30+ countries, we combine scientific
                rigor with compassionate care to deliver transformative
                medicines to patients worldwide.
              </p>
              <Link
                to="/about"
                data-ocid="home.secondary_button"
                className="inline-block bg-navy text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hero-gradient rounded-2xl p-8 flex items-center justify-center min-h-[300px]"
            >
              <img
                src="/assets/uploads/Logo-1.png"
                alt="NKB Biopharma"
                className="max-h-40 object-contain opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {s.value}
                </div>
                <div className="text-sm font-medium text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Innovation Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Our Product Pipeline
            </h2>
          </div>
          <div className="px-6">
            <ProductCarousel />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              data-ocid="home.primary_button"
              className="inline-block bg-navy text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Promise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Built on Commitment
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-background rounded-xl p-8 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <c.Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with NKB Biopharma?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let's work together to advance healthcare and bring life-changing
            therapies to patients.
          </p>
          <Link
            to="/contact"
            data-ocid="home.primary_button"
            className="inline-block bg-gold text-white px-8 py-4 rounded font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
