import React from "react";
import SkipImage from "./SkipImage";
import SkipDetails from "./SkipDetails";
import { SkipData } from "../../types";

interface SkipCardProps {
  skip: SkipData;
  isSelected?: boolean | null;
  onSelect: (skip: SkipData) => void;
  className?: string;
}

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  isSelected = false,
  onSelect,
  className = "",
}) => {
  return (
    <div
      onClick={() => onSelect(skip)}
      className={`
        relative 
        rounded-lg 
        overflow-hidden 
        border-2 
        transition-all 
        cursor-pointer
        ${
          isSelected
            ? "border-blue-500 shadow-lg"
            : "border-gray-700 hover:border-gray-500"
        }
        ${className}
      `}
    >
      <SkipImage
        size={skip.size}
        allowedOnRoad={skip.allowed_on_road}
        allowsHeavyWaste={skip.allows_heavy_waste}
      />

      <SkipDetails skip={skip} isSelected={isSelected} onSelect={onSelect} />
    </div>
  );
};

export default SkipCard;
