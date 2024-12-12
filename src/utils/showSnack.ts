import { enqueueSnackbar } from "notistack";

const showSnack = (message?: string, variant?: "error" | "success") => {
  message = message || "";
  variant = variant || "success";

  return enqueueSnackbar(message, {
    autoHideDuration: 3000,
    variant,
  });
};

export { showSnack };
