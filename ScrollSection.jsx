import React, { useRef, useEffect, useState } from "react";
import "./ScrollSection.css";

const ScrollSection = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sampleCards = Array.from({ length: 10 }, (_, i) => ({
    title: `${title} Team ${i + 1}`,
    image: "https://via.placeholder.com/150",
  }));

  return (
    <div ref={ref} className={`scroll-section ${visible ? "visible" : ""}`}>
      <h2>{title}</h2>
      <div className="scroll-row">
        {sampleCards.map((card, index) => (
          <div className="scroll-card" key={index}>
            <img src={card.image} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSection;
