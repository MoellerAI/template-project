import React, { useEffect } from "react";

const Background: React.FC = () => {
  return (
    <div
      className="fixed inset-0"
      style={{ 
        backgroundColor: '#800080', 
        zIndex: -1,
      }}
    ></div>
  );
};

export default Background;