export const AuthRoutes = {
  path: "auth",
  children: [
    {
      path: "user",
      children: [
        {
          path: "login",
          element: null, // Will be implemented later
        },
        {
          path: "register",
          element: null, // Will be implemented later
        },
        {
          path: "forgot-password",
          element: null, // Will be implemented later
        },
        {
          path: "reset-password",
          element: null, // Will be implemented later
        },
        {
          path: "2fa",
          element: null, // Will be implemented later
        },
      ],
    },
    {
      path: "admin",
      children: [
        {
          path: "login",
          element: null, // Will be implemented later
        },
        {
          path: "2fa",
          element: null, // Will be implemented later
        },
      ],
    },
  ],
}; 