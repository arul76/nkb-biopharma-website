import { Building2, Globe, Landmark, Stethoscope } from "lucide-react";
import { motion } from "motion/react";
import PageBanner from "../components/PageBanner";

const segments = [
  {
    Icon: Building2,
    title: "Hospital Networks",
    desc: "We partner with major hospital chains, academic medical centers, and integrated health systems to deliver specialty therapeutics at scale. Our dedicated medical affairs team provides clinical support and education to hospital formulary committees.",
    highlights: [
      "50+ hospital network partnerships",
      "Academic medical center collaborations",
      "Formulary inclusion in top-tier institutions",
    ],
  },
  {
    Icon: Stethoscope,
    title: "Specialty Clinics",
    desc: "NKB Biopharma works closely with specialist practitioners in oncology, cardiology, rheumatology, and immunology. Our specialty sales force provides scientific engagement, patient support programs, and clinical evidence resources.",
    highlights: [
      "Dedicated specialty sales teams",
      "Oncology and cardiology focus",
      "Patient assistance programs",
    ],
  },
  {
    Icon: Globe,
    title: "International Markets",
    desc: "With a growing international presence across 30+ countries in Asia, Europe, and the Americas, we leverage regional distribution partnerships and local regulatory expertise to ensure patients worldwide have access to our therapies.",
    highlights: [
      "30+ countries with market access",
      "Asia, Europe & Americas presence",
      "Regional regulatory approvals",
    ],
  },
  {
    Icon: Landmark,
    title: "Government Programs",
    desc: "NKB Biopharma actively participates in national healthcare schemes, government tender programs, and public health initiatives to ensure broad patient access to our innovative therapies at sustainable price points.",
    highlights: [
      "National healthcare scheme listings",
      "Government tender expertise",
      "Public health partnerships",
    ],
  },
];

const regions = [
  { name: "South Asia", countries: "India, Bangladesh, Sri Lanka, Nepal" },
  {
    name: "Southeast Asia",
    countries: "Singapore, Malaysia, Thailand, Vietnam, Philippines",
  },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait" },
  {
    name: "Europe",
    countries: "Germany, France, UK, Italy, Spain, Netherlands",
  },
  { name: "North America", countries: "USA, Canada" },
  { name: "Latin America", countries: "Brazil, Mexico, Colombia, Argentina" },
];

export default function Markets() {
  return (
    <main>
      <PageBanner
        title="Our Markets"
        subtitle="Reaching patients across 30+ countries through strategic partnerships"
      />

      {/* Segments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-card card-hover"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <s.Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>
                <ul className="space-y-1">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Global Reach
            </p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Geographic Presence
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <h4 className="font-bold text-navy mb-2">{r.name}</h4>
                <p className="text-muted-foreground text-sm">{r.countries}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
