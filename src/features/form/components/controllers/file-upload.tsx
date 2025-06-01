import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Box, Typography, Button, SxProps } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { forwardRef, ReactElement, Ref, useRef, useState } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

const MAX_SIZE_MB = 5;
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

export type FileUploadProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  sx?: SxProps;
  helperText?: string;
  accept?: string;
};

const FileUpload = forwardRef(
  <T extends FieldValues>(
    { name, label, sx, helperText, accept = ".pdf,image/jpeg,image/png,image/jpg" }: FileUploadProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control, readOnly } = useFormContext<T>();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const validateFile = (file: File | null) => {
      if (!file) return true;
      if (!ALLOWED_TYPES.includes(file.type)) {
        return "Only PDF, JPG, JPEG, or PNG files are allowed.";
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        return `File size must be less than ${MAX_SIZE_MB}MB.`;
      }
      return true;
    };

    return (
      <Controller
        name={name}
        control={control}
        rules={{
          validate: validateFile,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const file = (value as any) instanceof File ? value : null;

          const handleFile = (fileList: FileList | null) => {
            if (fileList && fileList[0]) {
              onChange(fileList[0]);
            }
          };

          const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setDragActive(false);
            handleFile(e.dataTransfer.files);
          };

          return (
            <Box
              sx={{
                border: "2px dashed",
                borderColor: error ? "error.main" : dragActive ? "primary.main" : "grey.400",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                cursor: readOnly ? "not-allowed" : "pointer",
                backgroundColor: dragActive ? "grey.100" : "inherit",
                ...sx,
              }}
              onClick={() => !readOnly && inputRef.current?.click()}
              onDragOver={e => {
                e.preventDefault();
                if (!readOnly) setDragActive(true);
              }}
              onDragLeave={e => {
                e.preventDefault();
                setDragActive(false);
              }}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept={accept}
                style={{ display: "none" }}
                ref={inputRef}
                onChange={e => handleFile(e.target.files)}
                disabled={readOnly}
              />
              <CloudUploadIcon color={error ? "error" : "primary"} sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="body2" sx={{ mb: 1 }}>
                {label || "Upload file (PDF, JPG, JPEG, PNG, max 5MB)"}
              </Typography>
              <Button
                variant="outlined"
                component="span"
                disabled={readOnly}
                sx={{ mb: 1 }}
              >
                Browse
              </Button>
              <Typography variant="caption" color={error ? "error" : "text.secondary"}>
                {file ? (file as File).name : helperText || "Drag and drop or click to browse."}
              </Typography>
              {error && (
                <Typography variant="caption" color="error" display="block">
                  {error.message}
                </Typography>
              )}
            </Box>
          );
        }}
      />
    );
  }
) as <T extends FieldValues>(props: FileUploadProps<T> & { ref?: Ref<HTMLInputElement> }) => ReactElement;

export { FileUpload }; 