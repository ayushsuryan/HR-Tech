// This replaces your src/styles/theme.js
// Define types for theme colors and other properties

// Color type to ensure all theme colors have the same structure
interface ThemeColors {
  background: string;
  surface: string;
  surfaceSecondary: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  primary: string;
  primaryText: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  purple: string;
  blue: string;
  green: string;
  yellow: string;
  red: string;
  teal: string;
}

// Define the colors for light and dark themes
export const colors: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceSecondary: "#F3F4F6",
    text: "#111827",
    textSecondary: "#4B5563",
    textTertiary: "#6B7280",
    border: "#E5E7EB",
    primary: "#000000",
    primaryText: "#FFFFFF",
    accent: "#3B82F6",
    success: "#10B981",
    warning: "#FBBF24",
    error: "#EF4444",
    purple: "#8B5CF6",
    blue: "#3B82F6",
    green: "#10B981",
    yellow: "#F59E0B",
    red: "#EF4444",
    teal: "#14B8A6",
  },
  dark: {
    background: "#111827",
    surface: "#1F2937",
    surfaceSecondary: "#374151",
    text: "#FFFFFF",
    textSecondary: "#D1D5DB",
    textTertiary: "#9CA3AF",
    border: "#374151",
    primary: "#FFFFFF",
    primaryText: "#000000",
    accent: "#60A5FA",
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
    purple: "#A78BFA",
    blue: "#60A5FA",
    green: "#34D399",
    yellow: "#FBBF24",
    red: "#F87171",
    teal: "#2DD4BF",
  },
};

export const gradients: Record<string, [string, string]> = {
  blue: ["#60A5FA", "#2563EB"],
  green: ["#34D399", "#059669"],
  purple: ["#A78BFA", "#7C3AED"],
  yellow: ["#FBBF24", "#D97706"],
  red: ["#F87171", "#DC2626"],
  teal: ["#2DD4BF", "#0D9488"],
};

export const spacing: Record<string, string> = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

export const borderRadius: Record<string, string> = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xxl: "24px",
  full: "9999px",
};

export const fontSizes: Record<string, string> = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "24px",
  xxxl: "30px",
};

export const fontWeights: Record<string, string | number> = {
  regular: "normal",
  medium: "500",
  semibold: "600",
  bold: "bold",
};

// Function to generate CSS variables based on the theme
export function generateCssVariables(mode = "dark"): Record<string, string> {
  const theme = mode === "dark" ? colors.dark : colors.light;
  const cssVars: Record<string, string> = {};

  // Process all theme colors
  Object.entries(theme).forEach(([key, value]) => {
    cssVars[`--ion-color-${key}`] = value;
  });

  // Add additional Ionic framework required variables
  cssVars["--ion-background-color"] = theme.background;
  cssVars["--ion-text-color"] = theme.text;
  cssVars["--ion-border-color"] = theme.border;

  // Set the primary, secondary, tertiary colors required by Ionic
  cssVars["--ion-color-primary"] = theme.primary;
  cssVars["--ion-color-primary-contrast"] = theme.primaryText;
  cssVars["--ion-color-secondary"] = theme.accent;
  cssVars["--ion-color-secondary-contrast"] = "#ffffff";
  cssVars["--ion-color-tertiary"] = theme.purple;
  cssVars["--ion-color-tertiary-contrast"] = "#ffffff";
  cssVars["--ion-color-success"] = theme.success;
  cssVars["--ion-color-warning"] = theme.warning;
  cssVars["--ion-color-danger"] = theme.error;

  return cssVars;
}
