import React, { useEffect, useRef } from "react";
import "./HorizontalScroll.css";

const teams = [
  {
    name: "Mumbai Indians",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
  },
  {
    name: "Chennai Super Kings",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
  },
  {
    name: "Royal Challengers Bengaluru",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/800px-Royal_Challengers_Bengaluru_Logo.svg.png",
  },
  {
    name: "Delhi Capitals",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
  },
  {
    name: "Rajasthan Royals",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/640px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/1200px-Sunrisers_Hyderabad_Logo.svg.png",
  },
  {
    name: "Lucknow Super Giants",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/1200px-Lucknow_Super_Giants_IPL_Logo.svg.png",
  },
  {
    name: "Gujarat Titans",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
  },
  {
    name: "Punjab Kings",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg",
  },
];

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    let isScrolling = false;
    let targetScrollLeft = 0;

    const handleScroll = (e) => {
      e.preventDefault();

      // Increase scroll speed
      const scrollSpeed = 100; // You can adjust this value

      // Set the new scroll target
      targetScrollLeft = container.scrollLeft + e.deltaY * scrollSpeed;

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      const distance = targetScrollLeft - container.scrollLeft;
      const step = distance * 0.2; // controls the smoothness

      if (Math.abs(distance) > 0.5) {
        container.scrollLeft += step;
        requestAnimationFrame(smoothScroll);
      } else {
        container.scrollLeft = targetScrollLeft;
        isScrolling = false;
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="scroll-section">
      <h1 className="header">🏏 IPL 2025 🏆</h1>
      <div className="scroll-wrapper" ref={scrollContainerRef}>
        {teams.map((team, index) => (
          <div className="team-card" key={index}>
            <img src={team.logo} alt={team.name} />
            <h2>{team.name}</h2>
            <div className="buttons">
              <button>About</button>
              <button>Squad</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
