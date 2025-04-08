import React from "react";
import { SkipFilterOptions } from "../../types";
import { Sliders, Filter, Trash2 } from "lucide-react";

interface SkipFiltersProps {
  filters: SkipFilterOptions;
  onFilterChange: (newFilters: SkipFilterOptions) => void;
  className?: string;
}

const SkipFilters: React.FC<SkipFiltersProps> = ({
  filters,
  onFilterChange,
  className = "",
}) => {
  // Handle checkbox filter changes
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    filterKey: keyof SkipFilterOptions
  ) => {
    onFilterChange({
      ...filters,
      [filterKey]: event.target.checked,
    });
  };

  // Handle range filter changes
  const handleRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    filterKey: keyof SkipFilterOptions
  ) => {
    const value =
      event.target.value === "all"
        ? undefined
        : parseInt(event.target.value, 10);

    onFilterChange({
      ...filters,
      [filterKey]: value,
    });
  };

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div
      className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-5 mb-8 border border-gray-700 shadow-md ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Sliders size={18} className="text-blue-400 mr-2" />
          <h2 className="text-lg font-semibold">Filter Options</h2>
          {activeFilterCount > 0 && (
            <span className="ml-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={() => onFilterChange({})}
            className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Trash2 size={14} className="mr-1" />
            Reset
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Size filters */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
            <Filter size={14} className="mr-1 text-gray-400" />
            Min Size
          </label>
          <select
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            value={filters.minSize?.toString() || "all"}
            onChange={(e) => handleRangeChange(e, "minSize")}
          >
            <option value="all">All Sizes</option>
            <option value="4">4 Yards or larger</option>
            <option value="8">8 Yards or larger</option>
            <option value="12">12 Yards or larger</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
            <Filter size={14} className="mr-1 text-gray-400" />
            Max Size
          </label>
          <select
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            value={filters.maxSize?.toString() || "all"}
            onChange={(e) => handleRangeChange(e, "maxSize")}
          >
            <option value="all">All Sizes</option>
            <option value="8">Up to 8 Yards</option>
            <option value="12">Up to 12 Yards</option>
            <option value="16">Up to 16 Yards</option>
          </select>
        </div>

        {/* Restriction filters */}
        <div className="space-y-4 flex flex-col justify-center">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={filters.allowedOnRoad === true}
                onChange={(e) => handleCheckboxChange(e, "allowedOnRoad")}
              />
              <div
                className={`w-5 h-5 border-2 rounded-md transition-colors ${
                  filters.allowedOnRoad
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-600 group-hover:border-gray-500"
                }`}
              ></div>
              {filters.allowedOnRoad && (
                <svg
                  className="absolute top-0.5 left-0.5 w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-sm">Road placement only</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={filters.allowsHeavyWaste === true}
                onChange={(e) => handleCheckboxChange(e, "allowsHeavyWaste")}
              />
              <div
                className={`w-5 h-5 border-2 rounded-md transition-colors ${
                  filters.allowsHeavyWaste
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-600 group-hover:border-gray-500"
                }`}
              ></div>
              {filters.allowsHeavyWaste && (
                <svg
                  className="absolute top-0.5 left-0.5 w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-sm">Heavy waste compatible</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SkipFilters;
