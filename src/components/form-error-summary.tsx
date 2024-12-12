import { d } from "@/utils/dictionary";
import { formatErrors } from "@/utils/formatErrors";
import { Alert, AlertTitle, List, ListItem } from "@mui/material";
import { useFormState } from "react-hook-form";

const FormErrorSummary = () => {
  const { errors, isSubmitted } = useFormState();

  if (!isSubmitted || !errors || Object.keys(errors).length === 0) return null;

  const formattedErrors = formatErrors(errors);

  return (
    <Alert
      severity="error"
      sx={{
        mb: 2,
        "& .MuiAlert-message": { width: "100%" },
      }}
    >
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <AlertTitle>{d.errorValidationTitle}</AlertTitle>
      <List dense>
        {formattedErrors.map(({ label, message, field }, index) => (
          <ListItem
            key={index}
            sx={{
              px: 0,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => {
              const element = document.getElementsByName(field)[0];
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                element.focus();
              }
            }}
          >
            • {label}: {typeof message === "string" ? message : "Invalid field"}
          </ListItem>
        ))}
      </List>
    </Alert>
  );
};

export { FormErrorSummary };
