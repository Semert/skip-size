import React from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Container from "../UI/Container";
import { calculatePrice } from "../../utils/skipUtils";
import { SkipData } from "../../types";

interface FooterProps {
  selectedSkip: SkipData | null;
  onBack: () => void;
  onContinue: () => void;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  selectedSkip = null,
  onBack,
  onContinue,
  className = "",
}) => {
  // Calculate default values or use selected skip values
  const skipSize = selectedSkip ? selectedSkip.size : 6;
  const price = selectedSkip ? calculatePrice(selectedSkip) : 293;
  const hirePeriod = selectedSkip ? selectedSkip.hire_period_days : 14;

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 p-4 shadow-lg shadow-black/30 backdrop-blur-sm z-50 ${className}`}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Order summary */}
          <div className="flex items-center text-gray-300 bg-gray-800 bg-opacity-60 rounded-lg px-4 py-2 shadow-inner w-full md:w-auto">
            <div className="w-8 h-8 bg-blue-900 rounded-md flex items-center justify-center mr-3 shadow">
              <span className="font-bold">{skipSize}</span>
            </div>
            <div className="flex-1 md:flex-auto">
              <span className="text-xl font-bold text-white">£{price}</span>
              <span className="ml-2 text-sm text-gray-400">
                {hirePeriod} day hire
              </span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={onBack}
              className="flex-1 md:flex-auto px-4 py-2.5 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back
            </button>

            <button
              onClick={onContinue}
              disabled={!selectedSkip}
              className={`
                flex-1 
                md:flex-auto 
                px-4 
                py-2.5 
                rounded-md 
                font-medium 
                flex 
                items-center 
                justify-center 
                ${
                  !selectedSkip
                    ? "bg-blue-800 opacity-70 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
                }
              `}
            >
              Continue
              <ArrowRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
