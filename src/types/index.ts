import { ReactNode } from "react";

// Skip data interface
export interface SkipData {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

// Skip option interface for API responses
export interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

// Progress step interface
export interface ProgressStepData {
  id: string;
  label: string;
  icon: ReactNode;
  completed?: boolean;
  active?: boolean;
}

// Window size interface
export interface WindowSize {
  width: number;
  height: number;
}

// Filter options for skips
export interface SkipFilterOptions {
  minSize?: number;
  maxSize?: number;
  allowedOnRoad?: boolean;
  allowsHeavyWaste?: boolean;
}
