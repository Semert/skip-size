import React from "react";

interface ProgressStepProps {
  icon: React.ReactNode;
  label: string;
  completed?: boolean;
  active?: boolean;
  isLast?: boolean;
  isMobile?: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  icon,
  label,
  completed = false,
  active = false,
  isLast = false,
  isMobile = false,
}) => {
  // Determine the appropriate text color based on step state
  const textColor = completed
    ? "text-blue-500"
    : active
    ? "text-blue-400"
    : "text-gray-500";

  return (
    <div
      className={`flex items-center ${
        isMobile ? "text-xs w-1/3 mb-2" : "text-sm"
      } ${textColor}`}
    >
      <span className="mr-1">{icon}</span>
      <span>{label}</span>
      {!isLast && !isMobile && <span className="mx-2 text-gray-600">—</span>}
    </div>
  );
};

export default ProgressStep;
