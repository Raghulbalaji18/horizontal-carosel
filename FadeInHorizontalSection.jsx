import React from "react";
import "./FadeInHorizontalSection.css";

const FadeInHorizontalSection = () => {
  const perks = [
    "Incubation Support",
    "Mentorship Programs",
    "Funding Access",
    "Startup Networking",
    "Legal & IP Support",
  ];

  return (
    <div className="fade-section">
      <h2 className="fade-title">🚀 Explore Startup Perks</h2>
      <div className="fade-scroll">
        {perks.map((perk, index) => (
          <div className="fade-card" key={index}>
            <h3>{perk}</h3>
            <p>Learn more about {perk} and how it benefits your journey.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FadeInHorizontalSection;
