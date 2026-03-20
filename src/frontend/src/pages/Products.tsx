import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import PageBanner from "../components/PageBanner";

const products = [
  {
    id: "NKB-ONCO 101",
    name: "Targeted Oncology Therapeutic",
    desc: "A first-in-class targeted therapy for treatment-resistant solid tumors. Leveraging precision molecular targeting, NKB-ONCO 101 inhibits key oncogenic pathways, delivering durable responses in patients who have exhausted standard treatment options.",
    tags: ["Oncology", "Phase III"],
    detail:
      "Targets EGFR/HER2 mutations in non-small cell lung cancer and colorectal carcinoma.",
  },
  {
    id: "NKB-CARDIO 202",
    name: "Cardiovascular Biologic",
    desc: "A next-generation cardiovascular biologic designed to significantly reduce major adverse cardiac events (MACE). NKB-CARDIO 202 offers a novel mechanism of action targeting inflammatory mediators in atherosclerotic plaque stabilization.",
    tags: ["Cardiovascular", "Approved"],
    detail:
      "Approved in 15+ countries for secondary prevention post-myocardial infarction.",
  },
  {
    id: "NKB-IMMUNO 303",
    name: "Immunotherapy Platform",
    desc: "An advanced immunotherapy platform leveraging selective cytokine modulation for the treatment of moderate-to-severe autoimmune disorders including rheumatoid arthritis, psoriatic disease, and inflammatory bowel disease.",
    tags: ["Immunology", "Phase II"],
    detail: "Phase II trials demonstrate 68% clinical remission at 52 weeks.",
  },
  {
    id: "NKB-RARE 404",
    name: "Gene Therapy for Rare Diseases",
    desc: "A pioneering gene-therapy approach targeting the underlying genetic cause of rare hereditary disorders. NKB-RARE 404 utilizes an adeno-associated viral vector platform to deliver functional gene copies to affected tissues.",
    tags: ["Rare Diseases", "Orphan Drug"],
    detail:
      "Orphan Drug designation in USA and EU; targeting Fabry and Gaucher diseases.",
  },
  {
    id: "NKB-BIO 505",
    name: "Monoclonal Antibody (mAb)",
    desc: "High-purity monoclonal antibodies engineered for optimal specificity and effector function in the treatment of inflammatory and autoimmune conditions. Manufactured using state-of-the-art cell culture and purification platforms.",
    tags: ["Biologics", "Approved"],
    detail:
      "Approved for moderate-to-severe plaque psoriasis and Crohn's disease.",
  },
];

const tagColor: Record<string, string> = {
  "Phase III": "bg-blue-100 text-blue-700",
  "Phase II": "bg-purple-100 text-purple-700",
  Approved: "bg-green-100 text-green-700",
  "Orphan Drug": "bg-orange-100 text-orange-700",
  Oncology: "bg-red-100 text-red-700",
  Cardiovascular: "bg-rose-100 text-rose-700",
  Immunology: "bg-indigo-100 text-indigo-700",
  "Rare Diseases": "bg-yellow-100 text-yellow-700",
  Biologics: "bg-teal-100 text-teal-700",
};

export default function Products() {
  return (
    <main>
      <PageBanner
        title="Our Product Portfolio"
        subtitle="Five innovative therapeutics addressing critical unmet medical needs"
      />

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`products.item.${i + 1}`}
              className="bg-white rounded-xl border-l-4 border-gold shadow-card p-8 card-hover"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="shrink-0">
                  <span className="inline-block bg-navy/10 text-navy font-bold text-xs px-3 py-1 rounded-full mb-2">
                    {p.id}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy">
                    {p.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 ml-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        tagColor[tag] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {p.desc}
              </p>
              <p className="text-sm text-blue-acc font-medium">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Pipeline
            </p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Development Pipeline Overview
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Product</th>
                  <th className="text-left px-4 py-3">Therapeutic Area</th>
                  <th className="text-left px-4 py-3">Indication</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Stage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "NKB-ONCO 101",
                    "Oncology",
                    "Treatment-resistant solid tumors",
                    "Phase III",
                  ],
                  [
                    "NKB-CARDIO 202",
                    "Cardiovascular",
                    "Post-MI secondary prevention",
                    "Approved",
                  ],
                  [
                    "NKB-IMMUNO 303",
                    "Immunology",
                    "Autoimmune disorders",
                    "Phase II",
                  ],
                  [
                    "NKB-RARE 404",
                    "Rare Diseases",
                    "Fabry & Gaucher disease",
                    "Orphan Drug",
                  ],
                  [
                    "NKB-BIO 505",
                    "Biologics",
                    "Plaque psoriasis / Crohn's",
                    "Approved",
                  ],
                ].map(([prod, area, indication, stage], i) => (
                  <tr
                    key={prod}
                    className={i % 2 === 0 ? "bg-background" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-navy">
                      {prod}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{area}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {indication}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          tagColor[stage] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
