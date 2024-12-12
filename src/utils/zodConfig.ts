import { z } from "zod";

const setupZodErrors = () => {
  z.setErrorMap((issue, ctx) => {
    let message: string;

    switch (issue.code) {
      case "invalid_type":
        if (issue.received === "undefined" || issue.received === "null") {
          message = "Required";
        } else {
          message = "Invalid input";
        }
        break;

      case "too_small":
        if (issue.minimum === 1) {
          message = "Required";
        } else {
          message = `Minimum ${issue.minimum} characters`;
        }
        break;

      case "invalid_string":
        if (issue.validation === "email") {
          message = ctx.data === "" ? "Required" : "Invalid email";
        } else {
          message = "Invalid input";
        }
        break;

      default:
        message = ctx.defaultError;
    }

    return { message };
  });
};

export { setupZodErrors };
