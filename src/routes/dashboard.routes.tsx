export const DashboardRoutes = {
  path: "dashboard",
  children: [
    {
      path: "user",
      children: [
        {
          path: "",
          element: null, // Will be implemented later
        },
        {
          path: "claims",
          element: null, // Will be implemented later
        },
        {
          path: "profile",
          element: null, // Will be implemented later
        },
      ],
    },
    {
      path: "admin",
      children: [
        {
          path: "",
          element: null, // Will be implemented later
        },
        {
          path: "users",
          element: null, // Will be implemented later
        },
        {
          path: "claims",
          element: null, // Will be implemented later
        },
        {
          path: "kyc",
          element: null, // Will be implemented later
        },
        {
          path: "cdd",
          element: null, // Will be implemented later
        },
      ],
    },
  ],
}; 