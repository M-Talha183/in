// expense-tracker > src > utils > ApiPaths.js

// The base URL looks like a common local development server address
export const BASE_URL = `http://localhost:5000`;

// Defines a constant object to hold all API path strings and functions
export const API_PATHS = {
    // Authentication related paths
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        REGISTER: "/api/v1/auth/register",
        GET_USER_INFO: "/api/v1/auth/getUser",
    },

    // Dashboard paths
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard",
    },

    // Income related paths
    INCOME: {
        ADD_INCOME: "/api/v1/income/add",
        GET_ALL_INCOME: "/api/v1/income/get",
        // Function that takes an ID and constructs the URL
        DELETE_INCOME: (incomeId) => `/api/v1/income/delete/${incomeId}`,
        DOWNLOAD_INCOME: "/api/v1/income/downloadexcel",
    },

    // Expense related paths
    EXPENSE: {
        ADD_EXPENSE: "/api/v1/expense/add",
        GET_ALL_EXPENSE: "/api/v1/expense/get",
        // Function that takes an ID and constructs the URL
        DELETE_EXPENSE: (expenseId) => `/api/v1/expense/delete/${expenseId}`,
        DOWNLOAD_EXPENSE: `/api/v1/expense/downloadexcel`,
    },

    // Image upload path
    IMAGE: {
        UPLOAD_IMAGE: "/api/v1/auth/upload-image",
    },
};