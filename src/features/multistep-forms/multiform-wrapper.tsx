import { ReactNode } from "react";
import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

type Step = {
  label: string;
  path: string;
};

type Props = {
  children: ReactNode;
  steps: Step[];
  title: string;
  basePath: string;
};

const MultiFormWrapper = ({ children, steps, title, basePath }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname.replace(basePath + "/", "");
  const activeStep = steps.findIndex((step) => step.path === currentPath);

  return (
    <Box>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((step) => (
                <Step key={step.path}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid size={{ xs: 12 }}>{children}</Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export { MultiFormWrapper };



