import React, { useEffect, useState } from "react";
import {
  MapPin,
  Trash2,
  Truck,
  FileText,
  Calendar,
  CreditCard,
} from "lucide-react";
import { ProgressStepData } from "../../types";

// Define the steps for the skip hire process
const defaultSteps: ProgressStepData[] = [
  { id: "postcode", label: "Postcode", icon: <MapPin size={16} /> },
  { id: "waste-type", label: "Waste Type", icon: <Trash2 size={16} /> },
  { id: "select-skip", label: "Select Skip", icon: <Truck size={16} /> },
  { id: "permit-check", label: "Permit Check", icon: <FileText size={16} /> },
  { id: "choose-date", label: "Choose Date", icon: <Calendar size={16} /> },
  { id: "payment", label: "Payment", icon: <CreditCard size={16} /> },
];

interface ProgressStepsProps {
  currentStep?: string;
  steps?: ProgressStepData[];
  className?: string;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  currentStep = "select-skip",
  steps = defaultSteps,
  className = "",
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Find active step index
  const activeIndex = steps.findIndex((s) => s.id === currentStep);

  // For mobile, only show previous, current, and next steps
  const visibleSteps = isMobile
    ? steps.filter((_, index) => {
        return index >= activeIndex - 1 && index <= activeIndex + 1;
      })
    : steps;

  return (
    <div className={`${className}`}>
      {/* Mobile Step Counter */}
      {isMobile && (
        <div className="text-center mb-4 text-sm text-gray-400">
          Step {activeIndex + 1} of {steps.length}
        </div>
      )}

      {/* Progress Bar */}
      <div className="relative mb-3 hidden md:block">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-700"></div>
        <div
          className="absolute top-4 left-0 h-0.5 bg-blue-500 transition-all duration-500"
          style={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Steps */}
      <div className="flex justify-between items-center">
        {visibleSteps.map((step, index) => {
          // Determine original index for mobile view
          const originalIndex = isMobile
            ? steps.findIndex((s) => s.id === step.id)
            : index;

          // Determine if step is completed or active
          const completed = activeIndex > originalIndex;
          const active = step.id === currentStep;
          const isFirst = originalIndex === 0;
          const isLast = originalIndex === steps.length - 1;

          // Determine the appropriate style based on step state
          const textColor = completed
            ? "text-blue-500"
            : active
            ? "text-blue-400"
            : "text-gray-500";

          const iconBg = completed
            ? "bg-blue-500 text-white"
            : active
            ? "bg-blue-900 text-blue-300"
            : "bg-gray-800 text-gray-500";

          return (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                isMobile ? "flex-1" : "w-20"
              }`}
            >
              {/* Step icon */}
              <div
                className={`
                  ${iconBg} 
                  w-8 h-8 
                  rounded-full 
                  flex items-center justify-center 
                  mb-1 
                  shadow-md 
                  transition-colors duration-300
                  ${isFirst ? "md:ml-0" : ""} 
                  ${isLast ? "md:mr-0" : ""}
                `}
              >
                {step.icon}
              </div>

              {/* Step label - hidden on very small screens */}
              <span
                className={`
                ${textColor} 
                text-xs 
                font-medium 
                transition-colors 
                duration-300 
                text-center
                ${isMobile ? "hidden sm:block" : ""}
              `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Previous/Next Indicators */}
      {isMobile && activeIndex > 0 && activeIndex < steps.length - 1 && (
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>← {steps[activeIndex - 1]?.label}</span>
          <span>{steps[activeIndex + 1]?.label} →</span>
        </div>
      )}
    </div>
  );
};

export default ProgressSteps;
