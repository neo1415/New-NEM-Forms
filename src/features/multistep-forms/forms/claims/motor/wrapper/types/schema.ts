import { motorPersonalInfoSchema } from "@/features/multistep-forms/forms/claims/motor/personal-info/types/schema";
import { z } from "zod";
import { vehicleDetailsSchema } from "../../vehicle-details/types/schema";
import { motorIncidentDetailsSchema } from "../../incident-details/types/schema";
import { WitnessesSchema } from "../../witnesses/types/schema";
import { otherDriversSchema } from "../../otherDrivers/types/schema";

const schema = motorPersonalInfoSchema
  .and(vehicleDetailsSchema)
  .and(motorIncidentDetailsSchema)
  .and(WitnessesSchema)
  .and(otherDriversSchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
