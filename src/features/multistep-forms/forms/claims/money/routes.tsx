import { RouteObject } from "react-router-dom";
import { MoneyInsuranceWrapper } from "./wrapper/page";
import { MoneyInsuranceInsuredDetails } from "./insured-details/page";
import { MoneyInsuranceDetailsOfLoss } from "./details-of-loss/page";
import { MoneyInsuranceReview } from "./review/page";

export const moneyInsuranceRoutes: RouteObject = {
  path: "money",
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
      path: "review",
      element: <MoneyInsuranceReview />,
    },
  ],
}; 