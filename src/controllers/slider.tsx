import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";
import Box from "@mui/material/Box";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type SliderProps<T extends FieldValues> = Omit<
  MuiSliderProps,
  "name" | "value" | "onChange"
> & {
  name: Path<T>;
};

const Slider = forwardRef(
  <T extends FieldValues>(
    { name, ...sliderProps }: SliderProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Box sx={{ width: 200 }}>
            <MuiSlider
              {...sliderProps}
              {...field}
              value={field.value ?? 0}
              onChange={(_, value) => field.onChange(value)}
              ref={ref}
            />
          </Box>
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: SliderProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { Slider };
