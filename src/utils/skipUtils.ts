import { SkipData, SkipFilterOptions } from "../types";

// The original data from the API
export const skipData: SkipData[] = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:31.302",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:31.481",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:31.65",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:31.829",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:32.003",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:32.185",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 7,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T14:29:32.364",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T14:29:30.95",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
];

/**
 * Calculate the final price including VAT
 * @param {SkipData} skip - The skip object with price data
 * @returns {number} - The calculated price with VAT
 */
export const calculatePrice = (skip: SkipData): number => {
  const priceBeforeVat = skip.price_before_vat;
  const vatAmount = (priceBeforeVat * skip.vat) / 100;
  return Math.round(priceBeforeVat + vatAmount);
};

/**
 * Get the number of items to display per row based on screen width
 * @param {number} windowWidth - The current window width
 * @returns {number} - Number of items per row
 */
export const getItemsPerRow = (windowWidth: number): number => {
  if (windowWidth < 640) return 1; // Mobile
  if (windowWidth < 1024) return 2; // Tablet
  return 3; // Desktop
};

/**
 * Organize skips into rows for grid display
 * @param {SkipData[]} skips - Array of skip objects
 * @param {number} itemsPerRow - Number of items per row
 * @returns {SkipData[][]} - Array of arrays (rows of skips)
 */
export const organizeSkipsIntoRows = (
  skips: SkipData[],
  itemsPerRow: number
): SkipData[][] => {
  const rows: SkipData[][] = [];
  for (let i = 0; i < skips.length; i += itemsPerRow) {
    rows.push(skips.slice(i, i + itemsPerRow));
  }
  return rows;
};

/**
 * Filter skips by specific criteria
 * @param {SkipData[]} skips - Array of skip objects
 * @param {SkipFilterOptions} filters - Filter criteria
 * @returns {SkipData[]} - Filtered array of skips
 */
export const filterSkips = (
  skips: SkipData[],
  filters: SkipFilterOptions = {}
): SkipData[] => {
  // If no filters are applied, return all skips
  if (Object.keys(filters).length === 0) {
    return skips;
  }

  return skips.filter((skip) => {
    // Filter by size range
    if (filters.minSize !== undefined && skip.size < filters.minSize)
      return false;
    if (filters.maxSize !== undefined && skip.size > filters.maxSize)
      return false;

    // Filter by road placement allowance
    if (filters.allowedOnRoad === true && !skip.allowed_on_road) return false;

    // Filter by heavy waste compatibility
    if (filters.allowsHeavyWaste === true && !skip.allows_heavy_waste)
      return false;

    return true;
  });
};

/**
 * Get a specific skip by its ID
 * @param {number} skipId - The ID of the skip to find
 * @returns {SkipData|null} - The skip object or null if not found
 */
export const getSkipById = (skipId: number): SkipData | null => {
  return skipData.find((skip) => skip.id === skipId) || null;
};
