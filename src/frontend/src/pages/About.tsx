import {
  Eye,
  FlaskConical,
  Heart,
  Leaf,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import PageBanner from "../components/PageBanner";

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    desc: "Every decision centers on improving patient outcomes and quality of life.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Integrity",
    desc: "We uphold the highest standards of research ethics and data transparency.",
  },
  {
    icon: Star,
    title: "Innovation",
    desc: "Pushing boundaries to find novel solutions to complex medical challenges.",
  },
  {
    icon: Shield,
    title: "Quality",
    desc: "Uncompromising quality in every molecule, process, and outcome we deliver.",
  },
  {
    icon: Users,
    title: "Accessibility",
    desc: "Striving to make advanced therapies accessible to patients worldwide.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Committed to responsible practices for a sustainable pharmaceutical future.",
  },
];

const leadership = [
  {
    name: "Dr. Anil Kumar",
    role: "Chief Executive Officer",
    bio: "20+ years in biopharmaceutical leadership, driving global strategy and innovation.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Scientific Officer",
    bio: "Pioneer in targeted oncology research with 15+ published studies in top journals.",
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "Chief Operating Officer",
    bio: "Expert in pharmaceutical operations, supply chain, and regulatory compliance.",
  },
];

export default function About() {
  return (
    <main>
      <PageBanner
        title="About NKB Biopharma"
        subtitle="Our story, mission, and the people driving innovation"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                15 Years of Discovery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a singular vision — to harness the power of science
                and innovation to address critical health challenges — NKB
                Biopharma has grown from a small research unit into a global
                biopharmaceutical leader.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey began in Hyderabad, India's pharmaceutical capital,
                where our founders combined decades of academic research with
                entrepreneurial drive to establish a company that truly puts
                patients first.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, with a portfolio spanning oncology, cardiovascular
                disease, immunology, rare conditions, and biologics, NKB
                Biopharma serves patients in 30+ countries and continues to
                expand its pipeline of transformative therapies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2009", label: "Founded" },
                { value: "30+", label: "Countries" },
                { value: "200+", label: "Experts" },
                { value: "5", label: "Products" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-background rounded-xl p-6 text-center border border-border"
                >
                  <div className="font-display text-3xl font-bold text-navy mb-1">
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <Target size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To discover, develop, and deliver innovative biopharmaceutical
                solutions that improve the lives of patients with serious and
                life-threatening diseases, while maintaining the highest
                standards of scientific integrity and ethical conduct.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <Eye size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized leader in biopharmaceutical
                innovation, transforming scientific breakthroughs into
                accessible therapies that extend and enhance human life across
                every corner of the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl p-6 border border-border card-hover"
              >
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mb-3">
                  <v.icon size={18} className="text-gold" />
                </div>
                <h4 className="font-bold text-navy mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-border shadow-card card-hover"
              >
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">
                    {l.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-navy mb-1">{l.name}</h4>
                <p className="text-gold text-sm font-semibold mb-3">{l.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {l.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
