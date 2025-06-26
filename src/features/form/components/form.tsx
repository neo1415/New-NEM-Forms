import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, ButtonProps, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { z } from "zod";

interface Props<T extends z.ZodType<any, any>> {
  children: ReactNode;
  schema: T;
  values?: z.infer<T>;
  defaultValues?: UseFormProps<z.infer<T>>["defaultValues"];
  onSubmit: SubmitHandler<z.infer<T>>;
  submitButtonText?: string;
  title?: string;
  readOnly?: boolean;
  slotProps?: {
    submitButtonProps?: Partial<ButtonProps>;
  };
}

export const Form = <T extends z.ZodType<any, any>>({
  children,
  schema,
  values,
  defaultValues,
  onSubmit,
  submitButtonText = "Submit",
  title,
  readOnly,
  slotProps,
}: Props<T>) => {
  const methods = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues: values || defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        sx={{ width: "100%" }}
      >
        <Stack spacing={4}>
          {title && (
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          )}
          {children}
          {!readOnly && (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              {...slotProps?.submitButtonProps}
            >
              {submitButtonText}
            </Button>
          )}
        </Stack>
      </Box>
    </FormProvider>
  );
};
