import { AutocompleteOption } from "@/controllers/autocomplete";
import { wait } from "@/utils/wait";

pass enums as generics to this
async function getEmploymentStatuses(): Promise<AutocompleteOption[]> {
  await wait();
  return [
    {
      label: "Employed Full Time",
      value: 1,
    },
    {
      label: "Employed Half Time",
      value: 2,
    },
    {
      label: "Unemployed",
      value: 3,
    },
    {
      label: "Student",
      value: 4,
    },
    {
      label: "Other",
      value: 5,
    },
  ];
}

export { getEmploymentStatuses };
