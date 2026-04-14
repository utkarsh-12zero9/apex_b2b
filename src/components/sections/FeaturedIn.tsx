"use client";

import "./TrustedBySection.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const companies = [
  { name: "feature_1", logo: "/feature_1.jpg", url: "https://www.digitalfirstmagazine.com/pandemic-becomes-an-unexpected-catalyst-for-deep-tech-start-ups/" },
  { name: "feature2", logo: "/feature_2.jpg", url: "https://www.retail4growth.com/products/new-technology-to-help-retailers-map-customer-data-with-sound-waves-4209" },
  { name: "feature_3", logo: "/feature_3.jpg", url: "https://www.ivycapventures.com/portfolio/trillbit" },
  { name: "feature_4", logo: "/feature_4.jpg", url: "https://yourstory.com/2021/09/funding-alert-deeptech-startup-trillbit-raises-funds" },
  { name: "feature_5", logo: "/feature_5.png", url: "https://www.ptinews.com/press-release/pay-after-you-get-hired-apex-school-of-business-launches-indias-most-audacious-career-program-for-job-seekers-backed-by-iit-and-isb-alumni/3550256" },
];

export default function FeaturedIn() {
  const doubled = [...companies, ...companies];

  return (
    <section className="trusted-section spl_section" id="trusted">
      <div className="container">
        <SectionHeader
          tag="Featured In"
          title={
            <>
              Our Faculties have been {" "}
              <span className="gradient-text">featured in</span>
            </>
          }
        />

        {/* Marquee */}
        <div className="trusted__marquee-wrapper">
          <div className="trusted__marquee-track">
            {doubled.map((company, i) => (
              <a
                key={`${company.name}-${i}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="trusted__logo-card"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="trusted__logo-img"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Proof Block */}
        <Reveal delay={100}>
          <div className="trusted__proof">
            <h3 className="trusted__proof-title">Proven Across Teams</h3>
            <p className="trusted__proof-text">
              We have trained <span className="font-bold text-purple-600">300+ SDRs </span>and<span className="font-bold text-purple-600"> BDRs</span> across different companies.
              <br />
              Our training is based on real sales workflows used by active teams.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a
              href="https://casestudy.apexschoolofbusiness.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="trusted__casestudy-btn"
            >
              Explore Case Study
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
