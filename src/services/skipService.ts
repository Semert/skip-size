import { SkipOption } from "../types";

/**
 * Fetches skip options from the API based on postcode
 * @param postcode The postcode to fetch skip options for
 * @returns Promise that resolves to an array of skip options
 */
export async function fetchSkipOptions(
  postcode: string
): Promise<SkipOption[]> {
  try {
    // In a real app, this would be an API call
    // For this example, we'll return mock data
    const response = await fetch(`/api/skips?postcode=${postcode}`);

    if (!response.ok) {
      throw new Error("Failed to fetch skip options");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching skip options:", error);
    throw error;
  }
}

/**
 * Mocks the API response for development and testing
 * @param postcode The postcode to generate mock data for
 * @returns Promise that resolves to an array of skip options
 */
export async function mockFetchSkipOptions(
  postcode: string
): Promise<SkipOption[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  return [
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
}
