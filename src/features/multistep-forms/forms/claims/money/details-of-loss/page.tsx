import { Form } from "@/features/form/components/form";
import { schema, Schema, defaultValues } from "./types/schema";
import { d } from "@/utils/moneyInsuranceDictionary/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useFieldArray, useWatch } from "react-hook-form";
import { useStore } from "./hooks/useStore";
import { useNavigate } from "react-router";
import { TextField } from "@/features/form/components/controllers/text-field";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Menu } from "@/features/form/components/controllers/menu";
import { TextArea } from "@/features/form/components/controllers/text-area";
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Fragment } from "react";

type PageProps = {
  readOnly?: boolean;
};

const Page = ({ readOnly }: PageProps) => {
  const { control } = useFormContext<Schema>();

  const isTransitLoss = useWatch({
    control,
    name: "isTransitLoss",
  });

  const isSafeLoss = useWatch({
    control,
    name: "isSafeLoss",
  });

  const policeNotified = useWatch({
    control,
    name: "policeNotified",
  });

  const previousLoss = useWatch({
    control,
    name: "previousLoss",
  });

  const {
    fields: transitLossDiscovererFields,
    append: appendTransitLossDiscoverer,
    remove: removeTransitLossDiscoverer,
  } = useFieldArray({
    control,
    name: "transitLossDiscoverers",
  });

  const {
    fields: keyHolderFields,
    append: appendKeyHolder,
    remove: removeKeyHolder,
  } = useFieldArray({
    control,
    name: "keyHolders",
  });

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <DatePicker<Schema>
          name="incidentDateTime"
          label={d.incidentDateTime}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="incidentLocation"
          label={d.incidentLocation}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="isTransitLoss"
          label={d.isTransitLoss}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {isTransitLoss && (
        <>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={12}
            id="transitLossDiscoverers"
          >
            <Typography variant="subtitle2">{d.transitLossDiscoverers}:</Typography>
            {!readOnly && (
              <IconButton
                onClick={() =>
                  appendTransitLossDiscoverer({
                    name: "",
                    position: "",
                    salary: "",
                  })
                }
                color="success"
              >
                <AddCircleRoundedIcon />
              </IconButton>
            )}
          </Grid>
          {transitLossDiscovererFields.map((field, index) => (
            <Fragment key={field.id}>
              <Grid
                sx={{ display: "flex", alignItems: "center" }}
                size={{ xs: 12 }}
              >
                <Chip
                  label={`${d.discovererName} #${index + 1}:`}
                  size="small"
                  color="secondary"
                />
                {!readOnly && (
                  <IconButton
                    color="error"
                    onClick={() => removeTransitLossDiscoverer(index)}
                  >
                    <RemoveCircleOutlineRoundedIcon />
                  </IconButton>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`transitLossDiscoverers.${index}.name`}
                  label={d.discovererName}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`transitLossDiscoverers.${index}.position`}
                  label={d.discovererPosition}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`transitLossDiscoverers.${index}.salary`}
                  label={d.discovererSalary}
                />
              </Grid>
            </Fragment>
          ))}

          <Grid size={{ xs: 12, sm: 6 }}>
            <Menu<Schema>
              name="policeEscortPresent"
              label={d.policeEscortPresent}
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
            />
          </Grid>

          {policeNotified && (
            <Grid size={{ xs: 12 }}>
              <TextArea<Schema>
                name="policeEscortDetails"
                label={d.policeEscortDetails}
              />
            </Grid>
          )}

          <Grid size={{ xs: 12, sm: 6 }}>
            <Menu<Schema>
              name="employeeIntegrityCheck"
              label={d.employeeIntegrityCheck}
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
            />
          </Grid>

          {policeNotified && (
            <Grid size={{ xs: 12 }}>
              <TextArea<Schema>
                name="employeeIntegrityDetails"
                label={d.employeeIntegrityDetails}
              />
            </Grid>
          )}
        </>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="isSafeLoss"
          label={d.isSafeLoss}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {isSafeLoss && (
        <>
          <Grid size={{ xs: 12, sm: 6 }}>
            <DatePicker<Schema>
              name="safeInstallationDate"
              label={d.safeInstallationDate}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="safeManufacturer"
              label={d.safeManufacturer}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="safeModel"
              label={d.safeModel}
            />
          </Grid>

          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={12}
            id="keyHolders"
          >
            <Typography variant="subtitle2">{d.keyHolders}:</Typography>
            {!readOnly && (
              <IconButton
                onClick={() =>
                  appendKeyHolder({
                    name: "",
                    position: "",
                    salary: "",
                  })
                }
                color="success"
              >
                <AddCircleRoundedIcon />
              </IconButton>
            )}
          </Grid>
          {keyHolderFields.map((field, index) => (
            <Fragment key={field.id}>
              <Grid
                sx={{ display: "flex", alignItems: "center" }}
                size={{ xs: 12 }}
              >
                <Chip
                  label={`${d.keyHolderName} #${index + 1}:`}
                  size="small"
                  color="secondary"
                />
                {!readOnly && (
                  <IconButton
                    color="error"
                    onClick={() => removeKeyHolder(index)}
                  >
                    <RemoveCircleOutlineRoundedIcon />
                  </IconButton>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`keyHolders.${index}.name`}
                  label={d.keyHolderName}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`keyHolders.${index}.position`}
                  label={d.keyHolderPosition}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField<Schema>
                  name={`keyHolders.${index}.salary`}
                  label={d.keyHolderSalary}
                />
              </Grid>
            </Fragment>
          ))}
        </>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField<Schema>
          name="lossAmount"
          label={d.lossAmount}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextArea<Schema>
          name="lossDescription"
          label={d.lossDescription}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="policeNotified"
          label={d.policeNotified}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {policeNotified && (
        <>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="policeStation"
              label={d.policeStation}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField<Schema>
              name="policeReference"
              label={d.policeReference}
            />
          </Grid>
        </>
      )}

      <Grid size={{ xs: 12, sm: 6 }}>
        <Menu<Schema>
          name="previousLoss"
          label={d.previousLoss}
          options={[
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
      </Grid>

      {previousLoss && (
        <Grid size={{ xs: 12 }}>
          <TextArea<Schema>
            name="previousLossDetails"
            label={d.previousLossDetails}
          />
        </Grid>
      )}
    </Grid>
  );
};

const Provider = ({ readOnly }: { readOnly?: boolean }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("../review");
  };

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      values={formData}
      onSubmit={handleSubmit}
      slotProps={{
        submitButtonProps: {
          children: d.saveAndContinue,
          endIcon: <ArrowForwardIosRoundedIcon />,
        },
      }}
      title={d.detailsOfLoss}
      readOnly={readOnly}
    >
      <Page readOnly={readOnly} />
    </Form>
  );
};

export { Provider as MoneyInsuranceDetailsOfLoss };
export { Page as DetailsOfLoss };
export type { PageProps as DetailsOfLossProps }; 