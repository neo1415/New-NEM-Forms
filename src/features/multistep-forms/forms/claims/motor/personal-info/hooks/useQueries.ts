// import { Schema } from "@/features/multistep-forms/forms/employee/personal-info/types/schema";
// import {
//   getAnswers,
// } from "@/features/multistep-forms/forms/employee/personal-info/utils/api";
// import { useFormContext } from "@/features/form/hooks/useFormContext";
// import { useQuery } from "@tanstack/react-query";
// import { useWatch } from "react-hook-form";

// const useAnswers = () => {
//   return useQuery({
//     queryKey: ["answers"],
//     queryFn: getAnswers,
//   });
// };

// // const useCities = () => {
// //   const { control } = useFormContext<Schema>();
// //   const state = useWatch({ control, name: "state" });

// //   return useQuery({
// //     queryKey: ["cities", { state }],
// //     queryFn: () => getCities(state),
// //   });
// // };

// export { useAnswers };
