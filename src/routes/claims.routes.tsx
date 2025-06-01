// import { Route } from "react-router-dom";
import { EmployeeWrapper } from "@/features/multistep-forms/forms/claims/motor/wrapper/page";
import { MotorPersonalInfo } from "@/features/multistep-forms/forms/claims/motor/personal-info/page";
import { VehicleDetails } from "@/features/multistep-forms/forms/claims/motor/vehicle-details/page";
import { IncidentDetails } from "@/features/multistep-forms/forms/claims/motor/incident-details/page";
import { WitnessPage } from "@/features/multistep-forms/forms/claims/motor/witnesses/page";
import { OtherDriversPage } from "@/features/multistep-forms/forms/claims/motor/otherDrivers/page";
import { MotorInsuranceReview } from "@/features/multistep-forms/forms/claims/motor/review/page";
import { FidelityGuaranteeWrapper } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/wrapper/page";
import { FidelityGuaranteeInsuredDetails } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/insured-details/page";
import { FidelityGuaranteeLossDetails } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/loss-details/page";
import { FidelityGuaranteeReview } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/review/page";
import { RentAssuranceWrapper } from "@/features/multistep-forms/forms/claims/rent-assurance/wrapper/page";
import { RentAssuranceInsuredDetails } from "@/features/multistep-forms/forms/claims/rent-assurance/insured-details/page";
import { RentAssuranceClaimInformation } from "@/features/multistep-forms/forms/claims/rent-assurance/claim-information/page";
import { RentAssuranceBeneficiaryDetails } from "@/features/multistep-forms/forms/claims/rent-assurance/beneficiary-details/page";
import { RentAssuranceDeclaration } from "@/features/multistep-forms/forms/claims/rent-assurance/declaration/page";
import { RentAssuranceReview } from "@/features/multistep-forms/forms/claims/rent-assurance/review/page";
import { MoneyInsuranceWrapper } from "@/features/multistep-forms/forms/claims/money/wrapper/page";
import { MoneyInsuranceInsuredDetails } from "@/features/multistep-forms/forms/claims/money/insured-details/page";
import { MoneyInsuranceDetailsOfLoss } from "@/features/multistep-forms/forms/claims/money/details-of-loss/page";
import { MoneyInsuranceDeclaration } from "@/features/multistep-forms/forms/claims/money/declaration/page";
import { MoneyInsuranceReview } from "@/features/multistep-forms/forms/claims/money/review/page";
import { PublicLiabilityWrapper } from "@/features/multistep-forms/forms/claims/public-liability/wrapper/page";
import { PublicLiabilityInsuredDetails } from "@/features/multistep-forms/forms/claims/public-liability/insured-details/page";
import { PublicLiabilityDetailsOfLoss } from "@/features/multistep-forms/forms/claims/public-liability/details-of-loss/page";
import { PublicLiabilityReview } from "@/features/multistep-forms/forms/claims/public-liability/review/page";

export const ClaimsRoutes = {
  path: "claims",
  children: [
    {
      path: "motor",
      children: [
        {
          path: "",
          element: <EmployeeWrapper />,
          children: [
            {
              path: "personal-info",
              element: <MotorPersonalInfo />,
            },
            {
              path: "vehicle-details",
              element: <VehicleDetails />,
            },
            {
              path: "incident-details",
              element: <IncidentDetails />,
            },
            {
              path: "witnesses",
              element: <WitnessPage />,
            },
            {
              path: "other-drivers",
              element: <OtherDriversPage />,
            },
            {
              path: "review",
              element: <MotorInsuranceReview />,
            },
          ],
        },
      ],
    },
    {
      path: "fidelity-guarantee",
      children: [
        {
          path: "",
          element: <FidelityGuaranteeWrapper />,
          children: [
            {
              path: "insured-details",
              element: <FidelityGuaranteeInsuredDetails />,
            },
            {
              path: "loss-details",
              element: <FidelityGuaranteeLossDetails />,
            },
            {
              path: "review",
              element: <FidelityGuaranteeReview />,
            },
          ],
        },
      ],
    },
    {
      path: "rent-assurance",
      children: [
        {
          path: "",
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
        },
      ],
    },
    {
      path: "money",
      children: [
        {
          path: "",
          element: <MoneyInsuranceWrapper />,
          children: [
            {
              path: "insured-details",
              element: <MoneyInsuranceInsuredDetails />,
            },
            {
              path: "details-of-loss",
              element: <MoneyInsuranceDetailsOfLoss />,
            },
            {
              path: "declaration",
              element: <MoneyInsuranceDeclaration />,
            },
            {
              path: "review",
              element: <MoneyInsuranceReview />,
            },
          ],
        },
      ],
    },
    {
      path: "public-liability",
      children: [
        {
          path: "",
          element: <PublicLiabilityWrapper />,
          children: [
            {
              path: "insured-details",
              element: <PublicLiabilityInsuredDetails />,
            },
            {
              path: "details-of-loss",
              element: <PublicLiabilityDetailsOfLoss />,
            },
            {
              path: "review",
              element: <PublicLiabilityReview />,
            },
          ],
        },
      ],
    },
    // Other claim types will go here
    {
      path: "contractors-plant",
      children: [],
    },
    {
      path: "all-risk",
      children: [],
    },
    // ... etc for other claim types
  ],
}; 