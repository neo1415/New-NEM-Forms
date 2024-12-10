import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { Box, Typography } from "@mui/material";

type DropzoneProps<T extends FieldValues> = Omit<
  DropzoneOptions,
  "onDrop" | "accept"
> & {
  name: Path<T>;
  accept?: Record<string, string[]>;
  label?: string;
};

const Dropzone = forwardRef(
  <T extends FieldValues>(
    { name, accept, label, ...dropzoneProps }: DropzoneProps<T>,
    ref: Ref<HTMLDivElement>
  ) => {
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const { getRootProps, getInputProps, isDragActive } = useDropzone({
            ...dropzoneProps,
            accept,
            onDrop: (acceptedFiles) => {
              onChange(acceptedFiles);
            },
          });

          return (
            <Box>
              <Box
                ref={ref}
                {...getRootProps()}
                sx={{
                  border: "2px dashed",
                  borderColor: error ? "error.main" : "primary.main",
                  borderRadius: 1,
                  p: 2,
                  cursor: "pointer",
                  bgcolor: isDragActive ? "action.hover" : "background.paper",
                }}
              >
                <input {...getInputProps()} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {label && <Typography>{label}</Typography>}
                  <Typography
                    color={isDragActive ? "primary" : "textSecondary"}
                  >
                    {isDragActive
                      ? "Drop the files here..."
                      : "Drag 'n' drop files here, or click to select files"}
                  </Typography>
                  {value?.length > 0 && (
                    <Typography>
                      Selected files:{" "}
                      {value.map((file: File) => file.name).join(", ")}
                    </Typography>
                  )}
                </Box>
              </Box>
              {error && (
                <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                  {error.message}
                </Typography>
              )}
            </Box>
          );
        }}
      />
    );
  }
) as <T extends FieldValues>(
  props: DropzoneProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;

export { Dropzone };
