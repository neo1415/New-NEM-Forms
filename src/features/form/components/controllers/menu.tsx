import { useFormContext } from "@/features/form/hooks/useFormContext";
import {
  Box,
  Menu as MuiMenu,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material/MenuItem";
import { SxProps } from "@mui/material/styles";
import {
  bindPopover,
  usePopupState,
  bindTrigger,
} from "material-ui-popup-state/hooks";
import { forwardRef, ReactElement, ReactNode, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
};

type MenuProps<T extends FieldValues> = Omit<
  MuiMenuItemProps,
  "name" | "error" | "value"
> & {
  name: Path<T>;
  label?: ReactNode;
  options: Option[];
  MenuItemProps?: MuiMenuItemProps;
  className?: string;
  renderLabel?: (option: Option) => ReactNode;
  sx?: SxProps;
};

const Menu = forwardRef(
  <T extends FieldValues>(
    {
      name,
      options,
      MenuItemProps,
      className,
      renderLabel,
      sx,
      label,
      onChange,
      ...props
    }: MenuProps<T>,
    ref: Ref<HTMLLIElement>
  ) => {
    const state = usePopupState({ variant: "popover" });
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <MuiMenu {...bindPopover(state)}>
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  {...MenuItemProps}
                  ref={ref}
                  className={className}
                  selected={field.value === option.value}
                  disabled={option.disabled}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingX: 1,
                    ...sx,
                  }}
                  {...props}
                  onClick={(event) => {
                    field.onChange(option.value);
                    onChange?.(event);
                    state.close();
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {option.leftIcon}
                    {renderLabel ? (
                      renderLabel(option)
                    ) : (
                      <Typography
                        sx={{
                          paddingX: 1,
                          textAlign: "left",
                        }}
                      >
                        {option.label}
                      </Typography>
                    )}
                  </Box>
                  {option.rightIcon}
                </MenuItem>
              ))}
            </MuiMenu>
            <span {...bindTrigger(state)}>
              <TextField
                fullWidth
                label={label as string}
                value={
                  options.find((item) => item.value === field.value)?.label ||
                  ""
                }
                variant="outlined"
                onClick={() => state.open()}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ cursor: "pointer", ...sx }}
              />
            </span>
          </>
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: MenuProps<T> & { ref?: Ref<HTMLLIElement> }
) => ReactElement;

export { Menu };
