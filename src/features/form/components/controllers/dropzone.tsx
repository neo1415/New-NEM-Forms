import { useFormContext } from "@/features/form/hooks/useFormContext";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Box,
  ButtonBase,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Controller, FieldValues, Path } from "react-hook-form";

const FilePreview = ({ file }: { file: File }) => {
  const getFileIcon = () => {
    if (file.type === "application/pdf") {
      return <PictureAsPdfIcon color="primary" sx={{ fontSize: 40 }} />;
    }
    return <InsertDriveFileIcon color="primary" sx={{ fontSize: 40 }} />;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        p: 1,
      }}
    >
      {getFileIcon()}
      <Typography variant="caption" noWrap sx={{ maxWidth: 100 }}>
        {file.name}
      </Typography>
    </Box>
  );
};

type DropzoneBaseProps = Omit<DropzoneOptions, "onDrop" | "accept"> & {
  onChange: (file: File | null) => void;
  value: File | null;
  error?: { message?: string };
  label?: string;
  ref?: Ref<HTMLDivElement>;
};

type DropzoneProps<T extends FieldValues> = Omit<
  DropzoneOptions,
  "onDrop" | "accept"
> & {
  name: Path<T>;
  label?: string;
  sx?: SxProps<Theme>;
};

const DropzoneBase = forwardRef<HTMLDivElement, DropzoneBaseProps>(
  ({ onChange, value, error, label, ...dropzoneProps }, ref) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      ...dropzoneProps,
      accept: {
        "application/pdf": [".pdf"],
        "application/zip": [".zip"],
      },
      maxFiles: 1,
      multiple: false,
      onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
          onChange(acceptedFiles[0]);
        }
      },
    });

    const handleRemoveFile = (event: React.MouseEvent) => {
      event.stopPropagation();
      onChange(null);
    };

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
                  ? "Drop the file here..."
                  : "Drag 'n' drop a file here, or click to select file (PDF or ZIP only)"}
              </Typography>
            )}
            {value && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  position: "relative",
                  "&:hover .remove-button": {
                    opacity: 1,
                  },
                }}
              >
                <FilePreview file={value} />
                {!dropzoneProps.disabled && (
                  <IconButton
                    className="remove-button"
                    size="small"
                    onClick={handleRemoveFile}
                    sx={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      bgcolor: "background.paper",
                      opacity: 0,
                      transition: "opacity 0.2s",
                      "&:hover": {
                        bgcolor: "background.paper",
                      },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
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
    { name, label, ...dropzoneProps }: DropzoneProps<T>,
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

export { Dropzone };
