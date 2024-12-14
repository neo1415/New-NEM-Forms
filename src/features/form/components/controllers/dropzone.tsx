import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Box, ButtonBase, Typography, SxProps, Theme } from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useDropzone, DropzoneOptions } from "react-dropzone";

type DropzoneBaseProps = Omit<DropzoneOptions, "onDrop" | "accept"> & {
  onChange: (files: File[]) => void;
  value: File[];
  error?: { message?: string };
  accept?: Record<string, string[]>;
  label?: string;
  ref?: Ref<HTMLDivElement>;
};

type DropzoneProps<T extends FieldValues> = Omit<
  DropzoneOptions,
  "onDrop" | "accept"
> & {
  name: Path<T>;
  accept?: Record<string, string[]>;
  label?: string;
  sx?: SxProps<Theme>;
};

const DropzoneBase = forwardRef<HTMLDivElement, DropzoneBaseProps>(
  ({ onChange, value, error, accept, label, ...dropzoneProps }, ref) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      ...dropzoneProps,
      accept,
      onDrop: onChange,
    });

    const defaultSx: SxProps<Theme> = {
      width: "100%",
      border: "2px dashed",
      borderColor: error ? "error.main" : "primary.main",
      borderRadius: 1,
      p: 2,
      textAlign: "center",
      bgcolor: isDragActive ? "action.hover" : "background.paper",
      "&:hover": {
        bgcolor: "action.hover",
      },
    };

    return (
      <Box>
        <ButtonBase
          ref={ref}
          component="div"
          {...getRootProps()}
          sx={defaultSx}
          disabled={dropzoneProps.disabled}
        >
          <input {...getInputProps()} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            {label && <Typography>{label}</Typography>}
            {!dropzoneProps.disabled && (
              <Typography color={isDragActive ? "primary" : "textSecondary"}>
                {isDragActive
                  ? "Drop the files here..."
                  : "Drag 'n' drop files here, or click to select files"}
              </Typography>
            )}
            {value?.length > 0 && (
              <Typography>
                Selected files:{" "}
                {value.map((file: File) => file.name).join(", ")}
              </Typography>
            )}
          </Box>
        </ButtonBase>
        {error && (
          <Typography color="error" variant="caption" sx={{ mt: 1 }}>
            {error.message}
          </Typography>
        )}
      </Box>
    );
  }
);

const Dropzone = forwardRef(
  <T extends FieldValues>(
    { name, accept, label, sx, ...dropzoneProps }: DropzoneProps<T>,
    ref: Ref<HTMLDivElement>
  ) => {
    const { control, readOnly } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DropzoneBase
            onChange={onChange}
            value={value}
            error={error}
            accept={accept}
            disabled={readOnly}
            label={label}
            ref={ref}
            {...dropzoneProps}
          />
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: DropzoneProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;

DropzoneBase.displayName = "DropzoneBase";
Dropzone.displayName = "Dropzone";

export { Dropzone };
