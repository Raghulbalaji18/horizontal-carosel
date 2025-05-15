import React, { useRef, useEffect } from "react";
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
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="page">
      <h1 className="header">🏏 IPL 2025 🏆</h1>
      <div className="scroll-wrapper" ref={containerRef}>
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.logo} alt={team.name} />
            <h2>{team.name}</h2>
            <div className="buttons">
              <button>About</button>
              <button>Squad</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
