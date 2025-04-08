import React from "react";
import { ArrowRight } from "lucide-react";
import { calculatePrice } from "../../utils/skipUtils";
import { SkipData } from "../../types";

interface SkipDetailsProps {
  skip: SkipData;
  isSelected: boolean | null;
  onSelect: (skip: SkipData) => void;
  className?: string;
}

const SkipDetails: React.FC<SkipDetailsProps> = ({
  skip,
  isSelected,
  onSelect,
  className = "",
}) => {
  const price = calculatePrice(skip);

  return (
    <div className={`p-4 ${className}`}>
      <h3 className="text-xl font-bold mb-1">{skip.size} Yard Skip</h3>
      <p className="text-gray-400 text-sm mb-3">
        {skip.hire_period_days} day hire period
      </p>

      <div className="flex items-center mb-4">
        <span className="text-blue-400 text-2xl font-bold">£{price}</span>
        <span className="text-gray-400 ml-2">per week</span>
      </div>

      <button
        onClick={() => onSelect(skip)}
        className={`w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center ${
          isSelected
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {isSelected ? (
          "Selected"
        ) : (
          <>
            <span>Select This Skip</span>
            <ArrowRight size={16} className="ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default SkipDetails;
