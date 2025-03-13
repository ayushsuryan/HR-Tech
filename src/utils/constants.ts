export const ROUTES = {
  DASHBOARD: "/dashboard",
  BENEFITS: "/benefits",
  WELLNESS: "/wellness",
  REWARDS: "/rewards",
  CONNECT: "/connect",
};

export const API = {
  BASE_URL: "https://api.employeehub.example.com",
  ENDPOINTS: {
    LOGIN: "/auth/login",
    PROFILE: "/user/profile",
    BENEFITS: "/benefits",
    WELLNESS: "/wellness",
    REWARDS: "/rewards",
    REQUESTS: "/requests",
  },
};

export const APP_SETTINGS = {
  DEFAULT_THEME: "dark",
  SESSION_TIMEOUT: 30,
  VERSION: "1.0.0",
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: "EmployeeHub:authToken",
  USER_PROFILE: "EmployeeHub:userProfile",
  THEME_PREFERENCE: "EmployeeHub:themePreference",
};

export const NOTIFICATION_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL: "Please enter a valid email address",
  PASSWORD: "Password must be at least 8 characters",
  PHONE: "Please enter a valid phone number",
};
