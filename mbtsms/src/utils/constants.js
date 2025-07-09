// Placeholder for constants.js
// User Roles
export const ROLES = {
  ADMIN: 'Admin',
  MANAGER: 'Branch Manager',
  ACCOUNTANT: 'Accountant',
  LOGISTICS: 'Logistics Staff',
  ANALYST: 'Analyst',
};

// API Endpoints (relative to base URL)
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  CLIENTS: '/clients',
  BRANCHES: '/branches',
  EMPLOYEES: '/employees',
  VEHICLES: '/vehicles',
  ORDERS: '/orders',
  TRANSACTIONS: '/transactions',
  BANK_STATEMENTS: '/bank-statements',
  DUES: '/dues',
  NOTIFICATIONS: '/notifications',
  REPORTS: '/reports',
  TRIPS: '/trips',
  MAINTENANCE: '/maintenance',
  SETTINGS: '/settings',
  ROLES: '/roles',
  PARTIES: '/parties',
  CNF: '/cnf',
  LOADING_POINTS: '/loading-points',
};

// Common Status Tags
export const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  PENDING: 'Pending',
  PAID: 'Paid',
  DUE: 'Due',
};

// UI Constants
export const UI = {
  APP_NAME: 'MBTSMS',
  DEFAULT_PAGE_SIZE: 10,
  PAGINATION_OPTIONS: [10, 25, 50, 100],
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  USER: 'mbtsms-user',
};
