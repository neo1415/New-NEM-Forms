import { RouteObject } from "react-router-dom";
import { RentAssuranceInsuredDetails } from "./insured-details/page";
import { RentAssuranceClaimInformation } from "./claim-information/page";
import { RentAssuranceBeneficiaryDetails } from "./beneficiary-details/page";
import { RentAssuranceDeclaration } from "./declaration/page";
import { RentAssuranceReview } from "./review/page";
import { RentAssuranceWrapper } from "@/features/multistep-forms/forms/claims/rent-assurance/wrapper/page";

export const rentAssuranceRoutes: RouteObject = {
  path: "rent-assurance",
  element: <RentAssuranceWrapper />,
  children: [
    {
      path: "insured-details",
      element: <RentAssuranceInsuredDetails />,
    },
    {
      path: "claim-information",
      element: <RentAssuranceClaimInformation />,
    },
    {
      path: "beneficiary-details",
      element: <RentAssuranceBeneficiaryDetails />,
    },
    {
      path: "declaration",
      element: <RentAssuranceDeclaration />,
    },
    {
      path: "review",
      element: <RentAssuranceReview />,
    },
  ],
}; 