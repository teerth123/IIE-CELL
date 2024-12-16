import React from 'react';

const ShootingStars = () => {
  return (
    <div className="shooting-stars-container">
      {[...Array(50)].map((_, index) => (
        <div 
          key={index} 
          className="shooting-star"
          style={{
            animationDelay: `${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShootingStars;

// CSS for Shooting Stars
const shootingStarsCSS = `
.shooting-stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: shootingStar 3s linear infinite;
}

@keyframes shootingStar {
  0% {
    transform: translate(-100px, -100px) rotate(315deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translate(300px, 300px) rotate(315deg);
    opacity: 0;
  }
}
`;

// Dynamically inject CSS into the document
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = shootingStarsCSS
document.head.appendChild(styleSheet)