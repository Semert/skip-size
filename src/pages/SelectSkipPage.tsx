import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Container from "../components/UI/Container";
import ProgressSteps from "../components/ProgressSteps/ProgressSteps";
import SkipCard from "../components/SkipCard/SkipCard";
import SkipFilters from "../components/Filters/SkipFilters";
import useWindowSize from "../hooks/useWindowSize";
import {
  getItemsPerRow,
  organizeSkipsIntoRows,
  filterSkips,
} from "../utils/skipUtils";
import { mockFetchSkipOptions } from "../services/skipService";
import { SkipData, SkipOption, SkipFilterOptions } from "../types";

const SelectSkipPage: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);
  const [skipData, setSkipData] = useState<SkipOption[]>([]);
  const [filteredSkips, setFilteredSkips] = useState<SkipOption[]>([]);
  const [filters, setFilters] = useState<SkipFilterOptions>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { width: windowWidth } = useWindowSize();

  // Fetch skip options when the component mounts
  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const data = await mockFetchSkipOptions("NR32"); // Hardcoded for this example
        setSkipData(data);
        setFilteredSkips(data);
        setError(null);
      } catch (err) {
        setError("Failed to load skip options. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  // Apply filters when they change
  useEffect(() => {
    setFilteredSkips(filterSkips(skipData, filters));

    // If the selected skip is filtered out, deselect it
    if (selectedSkip && !filterSkips([selectedSkip], filters).length) {
      setSelectedSkip(null);
    }
  }, [filters, skipData, selectedSkip]);

  // Handle skip selection
  const handleSelectSkip = (skip: SkipData) => {
    setSelectedSkip(skip);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: SkipFilterOptions) => {
    setFilters(newFilters);
  };

  // Handle mock navigation
  const handleBack = () => {
    // In a real app, this would navigate to the previous step
    alert("This would navigate back to the Waste Type selection step");
  };

  const handleContinue = () => {
    if (selectedSkip) {
      // In a real app, this would navigate to the next step
      alert(
        `Selected ${selectedSkip.size} Yard Skip! This would navigate to the Permit Check step`
      );
    }
  };

  // Get the appropriate number of items per row based on screen size
  const itemsPerRow = getItemsPerRow(windowWidth);

  // Organize skips into rows for the grid display
  const skipRows = organizeSkipsIntoRows(filteredSkips, itemsPerRow);

  // Determine if we have any skips to display after filtering
  const hasFilteredSkips = filteredSkips.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="flex-1 pb-24">
        {" "}
        {/* Add padding to account for the fixed footer */}
        <Container className="py-6">
          {/* Progress Steps */}
          <ProgressSteps currentStep="select-skip" />

          {/* Page Title */}
          <div className="text-center my-8">
            <h1 className="text-3xl font-bold mb-2">Choose Your Skip Size</h1>
            <p className="text-gray-400">
              Select the skip size that best suits your needs
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-md p-4 text-center mb-8">
              <p className="text-red-300">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-4 py-2 bg-red-800 hover:bg-red-700 rounded-md text-white text-sm"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Filters */}
          {!loading && !error && skipData.length > 0 && (
            <SkipFilters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          )}

          {/* No Results Message */}
          {!loading && !error && !hasFilteredSkips && (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                No skips match your filters
              </h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your filter criteria to see more options.
              </p>
              <button
                onClick={() => setFilters({})}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Skip Grid */}
          {!loading && !error && hasFilteredSkips && (
            <div>
              {skipRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap mb-6 gap-4">
                  {row.map((skip) => (
                    <div
                      key={skip.id}
                      className={`flex-1 min-w-0 ${
                        itemsPerRow === 1
                          ? "w-full"
                          : itemsPerRow === 2
                          ? "w-5/12"
                          : "w-3/10"
                      }`}
                    >
                      <SkipCard
                        skip={skip}
                        isSelected={selectedSkip && selectedSkip.id === skip.id}
                        onSelect={handleSelectSkip}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </Container>
      </main>

      <Footer
        selectedSkip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default SelectSkipPage;
