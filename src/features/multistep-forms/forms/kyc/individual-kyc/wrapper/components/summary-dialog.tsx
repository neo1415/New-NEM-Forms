import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useStore as usePersonalInfoStore } from "../../personal-info/hooks/useStore";
import { useStore as useFinancialInfoStore } from "../../financial-info/hooks/useStore";
import { useStore as useFileUploadsStore } from "../../file-uploads/hooks/useStore";
import { useStore as useReviewStore } from "../../review/hooks/useStore";
import { useStore } from "../hooks/useStore";
import { schema } from "../types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import { Button, Divider } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { FormEvent } from "react";
import { d } from "@/utils/individualKYCDictionary/dictionary";
import { PersonalInfo } from "../../personal-info/page";
import { FinancialInfo } from "../../financial-info/page";
import { FileUploads } from "../../file-uploads/page";
import { Review } from "../../review/page";

export const SummaryDialog = () => {
  const { open, updateOpen } = useStore();
  const { formData: personalInfoData } = usePersonalInfoStore();
  const { formData: financialInfoData } = useFinancialInfoStore();
  const { formData: fileUploadsData } = useFileUploadsStore();
  const { formData: reviewData } = useReviewStore();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = {
        ...personalInfoData,
        ...financialInfoData,
        ...fileUploadsData,
        ...reviewData,
      };

      await schema.parseAsync(data);

      // TODO: Submit form data to API
      showSnack("Form submitted successfully", { variant: "success" });
      updateOpen(false);
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog open={open} onClose={() => updateOpen(false)} maxWidth="md" fullWidth>
      <DialogTitle>{d.confirmInformation}</DialogTitle>
      <Divider />
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <PersonalInfo readOnly />
          <Divider sx={{ my: 2 }} />
          <FinancialInfo readOnly />
          <Divider sx={{ my: 2 }} />
          <FileUploads readOnly />
          <Divider sx={{ my: 2 }} />
          <Review readOnly />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateOpen(false)}>{d.close}</Button>
          <LoadingButton
            type="submit"
            variant="contained"
            startIcon={<SendOutlinedIcon />}
          >
            {d.submit}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};