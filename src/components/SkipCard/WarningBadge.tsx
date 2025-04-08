import React from "react";
import { AlertTriangle } from "lucide-react";

type WarningType = "private-property" | "heavy-waste";
type PositionType = "bottom-left" | "bottom-right" | "bottom-left-offset";

interface WarningBadgeProps {
  type?: WarningType;
  position?: PositionType;
  className?: string;
}

const WarningBadge: React.FC<WarningBadgeProps> = ({
  type = "private-property",
  position = "bottom-left",
  className = "",
}) => {
  // Define badge styles based on type
  const badgeStyles: Record<WarningType, string> = {
    "private-property": "bg-yellow-800 bg-opacity-90 text-yellow-300",
    "heavy-waste": "bg-red-800 bg-opacity-90 text-red-300",
  };

  // Define badge text based on type
  const badgeText: Record<WarningType, string> = {
    "private-property": "Private Property Only",
    "heavy-waste": "Not Suitable for Heavy Waste",
  };

  // Define position styles
  const positionStyles: Record<PositionType, string> = {
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left-offset": "bottom-11 left-4",
  };

  return (
    <div
      className={`
      absolute 
      ${positionStyles[position]} 
      ${badgeStyles[type]} 
      px-2 
      py-1 
      rounded-md 
      text-xs 
      flex 
      items-center
      ${className}
    `}
    >
      <AlertTriangle size={14} className="mr-1" />
      {badgeText[type]}
    </div>
  );
};

export default WarningBadge;
