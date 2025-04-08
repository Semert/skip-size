import React from "react";

interface DummyImageProps {
  width?: number;
  height?: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  alt?: string;
}

const DummyImage: React.FC<DummyImageProps> = ({
  width = 400,
  height = 200,
  text = "Skip Image",
  bgColor = "#1F2937", // gray-800
  textColor = "#9CA3AF", // gray-400
  className = "",
  alt = "Placeholder image",
}) => {
  // Create an SVG placeholder with the given dimensions and colors
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1E3A8A;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#111827;stop-opacity:0.9" />
        </linearGradient>
        <pattern id="pattern1" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
          <rect width="30" height="30" fill="${bgColor}"/>
          <rect width="15" height="15" fill="${bgColor}" fill-opacity="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern1)" />
      <rect width="100%" height="100%" fill="url(#grad1)" />
      <rect x="30%" y="35%" width="40%" height="30%" rx="10" fill="#374151" stroke="#4B5563" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;

  // Convert SVG to a data URL
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    svgContent
  )}`;

  return (
    <img
      src={dataUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default DummyImage;
