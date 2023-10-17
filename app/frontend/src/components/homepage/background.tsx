import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Main } from "tsparticles-engine";

const Background: React.FC = () => {
  const particlesInit = async (main: Main) => {
    await loadLinksPreset(main);
  };

  const particlesOptions = {
    preset: "links",
    particles: {
      move: {
        speed: 0.5,
      },
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
  };

  useEffect(() => {}, []);

  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>  
      {/* Particles Component */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
      {/* Radial Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(at center, rgba(128, 0, 128, 0.4), transparent)',
          zIndex: 1, // Gradient above the particles
        }}
      ></div>
    </div>
  );
};

export default Background;
