import { Provider as NaicomPartnersCddWrapper } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/wrapper/page";
import { CompanyInfo as NaicomPartnersCddCompanyInfo } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/company-info/page";
import { DirectorsInfo as NaicomPartnersCddDirectorsInfo } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/directors-info/page";
import { AccountDetails as NaicomPartnersCddAccountDetails } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/account-details/page";
import { FileUploads as NaicomPartnersCddFileUploads } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/file-uploads/page";
import { Review as NaicomPartnersCddReview } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/review/page";
import { RouteObject } from "react-router";
import { Wrapper as BrokersCDDWrapper } from "@/features/multistep-forms/forms/kyc/brokers-cdd/wrapper/page";
import { CompanyInfo as BrokersCDDCompanyInfo } from "@/features/multistep-forms/forms/kyc/brokers-cdd/company-info/page";
import { DirectorsInfo as BrokersCDDDirectorsInfo } from "@/features/multistep-forms/forms/kyc/brokers-cdd/directors-info/page";
import { AccountDetails as BrokersCDDAccountDetails } from "@/features/multistep-forms/forms/kyc/brokers-cdd/account-details/page";
import { FileUploads as BrokersCDDFileUploads } from "@/features/multistep-forms/forms/kyc/brokers-cdd/file-uploads/page";
import { Review as BrokersCDDReview } from "@/features/multistep-forms/forms/kyc/brokers-cdd/review/page";

export const CDDRoutes = {
  path: "cdd",
  children: [
    {
      path: "individual",
      children: [],
    },
    {
      path: "corporate",
      children: [],
    },
    {
      path: "naicom-partners",
      element: <NaicomPartnersCddWrapper />,
      children: [
        {
          path: "company-info",
          element: <NaicomPartnersCddCompanyInfo />,
        },
        {
          path: "directors-info",
          element: <NaicomPartnersCddDirectorsInfo />,
        },
        {
          path: "account-details",
          element: <NaicomPartnersCddAccountDetails />,
        },
        {
          path: "file-uploads",
          element: <NaicomPartnersCddFileUploads />,
        },
        {
          path: "review",
          element: <NaicomPartnersCddReview />,
        },
      ],
    },
    {
      path: "brokers",
      element: <BrokersCDDWrapper />,
      children: [
        {
          path: "company-info",
          element: <BrokersCDDCompanyInfo />,
        },
        {
          path: "directors-info",
          element: <BrokersCDDDirectorsInfo />,
        },
        {
          path: "account-details",
          element: <BrokersCDDAccountDetails />,
        },
        {
          path: "file-uploads",
          element: <BrokersCDDFileUploads />,
        },
        {
          path: "review",
          element: <BrokersCDDReview />,
        },
      ],
    },
  ],
}; 