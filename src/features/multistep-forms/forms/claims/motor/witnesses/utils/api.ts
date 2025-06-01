import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";

const getWitnessPassengers = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    {
      label: "Witness !",
      value: "1",
    },
    {
      label: "Witness 2",
      value: "2",
    },
    {
      label: "Witness 3",
      value: "3",
    },
    {
      label: "WItness 4",
      value: "4",
    },
    {
      label: "WItness 5",
      value: "5",
    },
    {
      label: "WItness 6",
      value: "6",
    },
    
  ];
};


export { getWitnessPassengers };
