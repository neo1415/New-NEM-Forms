import { RouteObject } from "react-router";
import { InsuredDetailsPage } from "./insured-details/page";
import { DetailsOfLossPage } from "./details-of-loss/page";
import { ReviewPage } from "./review/page";

export const routes: RouteObject[] = [
  {
    path: "insured-details",
    element: <InsuredDetailsPage />,
  },
  {
    path: "details-of-loss",
    element: <DetailsOfLossPage />,
  },
  {
    path: "review",
    element: <ReviewPage />,
  },
]; 