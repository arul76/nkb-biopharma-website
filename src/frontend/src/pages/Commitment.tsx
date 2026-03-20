import {
  FileCheck,
  FlaskConical,
  Heart,
  Leaf,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import PageBanner from "../components/PageBanner";

const commitments = [
  {
    Icon: Star,
    title: "Quality Excellence",
    desc: "Our manufacturing operations adhere to the strictest global quality standards.",
    points: [
      "Full GMP compliance at all manufacturing sites",
      "ISO 9001:2015 certified quality management system",
      "100% batch release testing with full traceability",
      "Continuous improvement through Six Sigma methodologies",
    ],
  },
  {
    Icon: FlaskConical,
    title: "R&D Innovation",
    desc: "Innovation is the cornerstone of NKB Biopharma's long-term strategy.",
    points: [
      "Targeting novel disease pathways and biomarkers",
      "Collaborative research with global academic institutions",
      "15% of revenue reinvested into pipeline development",
      "AI-assisted drug discovery and molecular modeling",
    ],
  },
  {
    Icon: Shield,
    title: "Patient Safety",
    desc: "Patient safety is non-negotiable — it is embedded in every process.",
    points: [
      "Dedicated pharmacovigilance team monitoring all markets",
      "Proactive post-market surveillance programs",
      "24/7 patient safety reporting hotline",
      "Patient support and adherence programs",
    ],
  },
  {
    Icon: Leaf,
    title: "Sustainability",
    desc: "We are committed to minimizing our environmental footprint.",
    points: [
      "Green chemistry principles in API synthesis",
      "Transition to 100% renewable energy by 2030",
      "Sustainable packaging across all product lines",
      "Zero liquid discharge at manufacturing sites",
    ],
  },
  {
    Icon: FileCheck,
    title: "Regulatory Compliance",
    desc: "We maintain stringent compliance with regulatory authorities worldwide.",
    points: [
      "Multi-market regulatory approvals (US FDA, EMA, CDSCO)",
      "Stringent dossier preparation and submission standards",
      "Regular inspection readiness audits",
      "Comprehensive change control management",
    ],
  },
  {
    Icon: Heart,
    title: "Corporate Social Responsibility",
    desc: "Beyond business, we invest in communities and broader societal health.",
    points: [
      "Community health screening programs in rural India",
      "Patient access initiatives for low-income populations",
      "STEM education sponsorships for underprivileged students",
      "Annual health camps serving 10,000+ beneficiaries",
    ],
  },
];

export default function Commitment() {
  return (
    <main>
      <PageBanner
        title="Our Commitment"
        subtitle="The principles and practices that define how we operate"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-card card-hover"
              >
                <div className="bg-navy px-6 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <c.Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">
                    {c.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <ul className="space-y-2">
                    {c.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-1.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
