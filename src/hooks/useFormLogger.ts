import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const useFormLogger = () => {
  const { watch } = useFormContext();

  useEffect(() => {
    const { unsubscribe } = watch((value) => console.log(value));
    return unsubscribe;
  }, [watch]);
};

export { useFormLogger };
