import { Dialog } from "@/features/form/components/dialog";
import { d } from "@/utils/corporateCDDDictionary/dictionary";
import { useStore } from "../hooks/useStore";
import { Button } from "@mui/material";

export const SummaryDialog = () => {
  const { formData } = useStore();

  return (
    <Dialog
      title={d.review}
      trigger={<Button variant="contained">{d.review}</Button>}
    >
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </Dialog>
  );
}; 