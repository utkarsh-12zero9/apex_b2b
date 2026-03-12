import "./ImpactSection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const impacts = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-6" />
      </svg>
    ),
    title: "Stronger Sales Pipeline",
    description:
      "B2B decision makers reached monthly using structured AI assisted outreach with measurable pipeline growth.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Faster Sales Execution",
    description:
      "Lead response time reduced from hours to minutes using AI powered response workflows and automated routing.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Higher Revenue Efficiency",
    description:
      "Sales teams spend significantly more time selling instead of doing manual prospecting and admin work.",
  },
];

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact__bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          tag="Business Impact"
          title={<>Real Results from <span className="gradient-text">Real Implementations</span></>}
          subtitle="What B2B sales teams consistently achieve after completing the program."
        />

        <div className="impact__grid">
          {impacts.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="impact__card">
                <div className="impact__icon">{item.icon}</div>
                <div className="impact__text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      
    </section>
  );
}
