import { RouteObject } from "react-router-dom";
import { PublicLiabilityInsuredDetails } from "./insured-details/page";
import { PublicLiabilityDetailsOfLoss } from "./details-of-loss/page";
import { PublicLiabilityParticularsOfClaimant } from "./particulars-of-claimant/page";
import { PublicLiabilityReview } from "./review/page";
import { PublicLiabilityWrapper } from "./wrapper/page";

export const publicLiabilityRoutes: RouteObject = {
  path: "public-liability",
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
      path: "particulars-of-claimant",
      element: <PublicLiabilityParticularsOfClaimant />,
    },
    {
      path: "review",
      element: <PublicLiabilityReview />,
    },
  ],
}; 