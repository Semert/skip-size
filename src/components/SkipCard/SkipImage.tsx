import React from "react";
import WarningBadge from "./WarningBadge";
import DummyImage from "../UI/DummyImage";

interface SkipImageProps {
  size: number;
  allowedOnRoad?: boolean;
  allowsHeavyWaste?: boolean;
  className?: string;
}

const SkipImage: React.FC<SkipImageProps> = ({
  size,
  allowedOnRoad = true,
  allowsHeavyWaste = true,
  className = "",
}) => {
  return (
    <div className={`relative bg-gray-800 ${className}`}>
      <DummyImage
        width={400}
        height={200}
        text={`${size} Yard Skip`}
        className="w-full h-48 object-cover opacity-70"
        alt={`${size} Yard Skip`}
      />

      {/* Size badge */}
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
        {size} Yards
      </div>

      {/* Warning badges */}
      {!allowedOnRoad && (
        <WarningBadge type="private-property" position="bottom-left" />
      )}

      {!allowsHeavyWaste && (
        <WarningBadge
          type="heavy-waste"
          position={!allowedOnRoad ? "bottom-left-offset" : "bottom-left"}
        />
      )}
    </div>
  );
};

export default SkipImage;
