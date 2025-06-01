// import { EmployeeAdditionalInfo } from "@/features/multistep-forms/forms/employee/additional-info/page";
import { MotorPersonalInfo } from "@/features/multistep-forms/forms/claims/motor/personal-info/page";
import { MotorInsuranceReview } from "@/features/multistep-forms/forms/claims/motor/review/page";
// import { EmployeeSkills } from "@/features/multistep-forms/forms/employee/skills/page";
import { EmployeeWrapper } from "@/features/multistep-forms/forms/claims/motor/wrapper/page";
import { DashboardLayout } from "@/features/layout/components/dashboard-layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { VehicleDetails } from "./features/multistep-forms/forms/claims/motor/vehicle-details/page";
import { IncidentDetails } from "./features/multistep-forms/forms/claims/motor/incident-details/page";
import { WitnessPage } from "./features/multistep-forms/forms/claims/motor/witnesses/page";
import { OtherDriversPage } from "./features/multistep-forms/forms/claims/motor/otherDrivers/page";
import { ClaimsRoutes } from "./routes/claims.routes";
import { KYCRoutes } from "./routes/kyc.routes";
import { CDDRoutes } from "./routes/cdd.routes";
import { AuthRoutes } from "./routes/auth.routes";
import { DashboardRoutes } from "./routes/dashboard.routes";
import { FireAndSpecialPerilsWrapper } from "./features/multistep-forms/forms/claims/fire-and-special-perils/wrapper/page";
import { FireAndSpecialPerilsInsuredDetails } from "./features/multistep-forms/forms/claims/fire-and-special-perils/insured-details/page";
import { FireAndSpecialPerilsLossDetails } from "./features/multistep-forms/forms/claims/fire-and-special-perils/loss-details/page";
import { FireAndSpecialPerilsReview } from "./features/multistep-forms/forms/claims/fire-and-special-perils/review/page";
import { FidelityGuaranteeWrapper } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/wrapper/page";
import { FidelityGuaranteeInsuredDetails } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/insured-details/page";
import { FidelityGuaranteeLossDetails } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/loss-details/page";
import { FidelityGuaranteeReview } from "@/features/multistep-forms/forms/claims/fidelity-guarantee/review/page";
import { ProfessionalIndemnityWrapper } from "./features/multistep-forms/forms/claims/professional-indemnity/wrapper/page";
import { ProfessionalIndemnityInsuredDetails } from "./features/multistep-forms/forms/claims/professional-indemnity/insured-details/page";
import { ProfessionalIndemnityClaimantDetails } from "./features/multistep-forms/forms/claims/professional-indemnity/claimant-details/page";
import { ProfessionalIndemnityContractDetails } from "./features/multistep-forms/forms/claims/professional-indemnity/contract-details/page";
import { ProfessionalIndemnityClaimDetails } from "./features/multistep-forms/forms/claims/professional-indemnity/claim-details/page";
import { ProfessionalIndemnityResponseDetails } from "./features/multistep-forms/forms/claims/professional-indemnity/response-details/page";
import { ProfessionalIndemnityReview } from "./features/multistep-forms/forms/claims/professional-indemnity/review/page";
import { RentAssuranceWrapper } from "./features/multistep-forms/forms/claims/rent-assurance/wrapper/page";
import { RentAssuranceInsuredDetails } from "./features/multistep-forms/forms/claims/rent-assurance/insured-details/page";
import { RentAssuranceClaimInformation } from "./features/multistep-forms/forms/claims/rent-assurance/claim-information/page";
import { RentAssuranceBeneficiaryDetails } from "./features/multistep-forms/forms/claims/rent-assurance/beneficiary-details/page";
import { RentAssuranceDeclaration } from "./features/multistep-forms/forms/claims/rent-assurance/declaration/page";
import { RentAssuranceReview } from "./features/multistep-forms/forms/claims/rent-assurance/review/page";
import { MoneyInsuranceWrapper } from "./features/multistep-forms/forms/claims/money/wrapper/page";
import { MoneyInsuranceInsuredDetails } from "./features/multistep-forms/forms/claims/money/insured-details/page";
import { MoneyInsuranceDetailsOfLoss } from "./features/multistep-forms/forms/claims/money/details-of-loss/page";
import { MoneyInsuranceDeclaration } from "./features/multistep-forms/forms/claims/money/declaration/page";
import { MoneyInsuranceReview } from "./features/multistep-forms/forms/claims/money/review/page";
import { PublicLiabilityWrapper } from "./features/multistep-forms/forms/claims/public-liability/wrapper/page";
import { PublicLiabilityInsuredDetails } from "./features/multistep-forms/forms/claims/public-liability/insured-details/page";
import { PublicLiabilityDetailsOfLoss } from "./features/multistep-forms/forms/claims/public-liability/details-of-loss/page";
import { PublicLiabilityParticularsOfClaimant } from "./features/multistep-forms/forms/claims/public-liability/particulars-of-claimant/page";
import { PublicLiabilityReview } from "./features/multistep-forms/forms/claims/public-liability/review/page";
import { GoodsInTransitWrapper } from "@/features/multistep-forms/forms/claims/goods-in-transit/wrapper/page";
import { InsuredDetailsPage } from "@/features/multistep-forms/forms/claims/goods-in-transit/insured-details/page";
import { DetailsOfLossPage } from "@/features/multistep-forms/forms/claims/goods-in-transit/details-of-loss/page";
import { ReviewPage } from "@/features/multistep-forms/forms/claims/goods-in-transit/review/page";
import { GroupPersonalAccidentWrapper } from "@/features/multistep-forms/forms/claims/group-personal-accident/wrapper/page";
import { InsuredDetailsPage as GroupPersonalAccidentInsuredDetails } from "@/features/multistep-forms/forms/claims/group-personal-accident/insured-details/page";
import { DetailsOfLossPage as GroupPersonalAccidentDetailsOfLoss } from "@/features/multistep-forms/forms/claims/group-personal-accident/details-of-loss/page";
import { ReviewPage as GroupPersonalAccidentReview } from "@/features/multistep-forms/forms/claims/group-personal-accident/review/page";
import { ContractorsPlantMachineryWrapper } from "@/features/multistep-forms/forms/claims/contractors-plant-machinery/wrapper/page";
import { InsuredDetailsPage as ContractorsPlantMachineryInsuredDetails } from "@/features/multistep-forms/forms/claims/contractors-plant-machinery/insured-details/page";
import { DetailsOfLossPage as ContractorsPlantMachineryDetailsOfLoss } from "@/features/multistep-forms/forms/claims/contractors-plant-machinery/details-of-loss/page";
import { ReviewPage as ContractorsPlantMachineryReview } from "@/features/multistep-forms/forms/claims/contractors-plant-machinery/review/page";
import { EmployersLiabilityWrapper } from "@/features/multistep-forms/forms/claims/employers-liability/wrapper/page";
import { InsuredDetailsPage as EmployersLiabilityInsuredDetails } from "@/features/multistep-forms/forms/claims/employers-liability/insured-details/page";


const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={null} /> {/* Landing page - will be implemented later */}
        
        {/* Auth Routes */}
        <Route path="auth">
          <Route path="user">
            <Route path="login" element={null} />
            <Route path="register" element={null} />
            <Route path="forgot-password" element={null} />
            <Route path="reset-password" element={null} />
            <Route path="2fa" element={null} />
          </Route>
          <Route path="admin">
            <Route path="login" element={null} />
            <Route path="2fa" element={null} />
          </Route>
        </Route>

        {/* Protected Routes */}
        <Route element={<DashboardLayout />}>
          {/* Dashboard Routes */}
          <Route path="dashboard">
            <Route path="user">
              <Route index element={null} />
              <Route path="claims" element={null} />
              <Route path="profile" element={null} />
            </Route>
            <Route path="admin">
              <Route index element={null} />
              <Route path="users" element={null} />
              <Route path="claims" element={null} />
              <Route path="kyc" element={null} />
              <Route path="cdd" element={null} />
            </Route>
          </Route>

          {/* Claims Routes */}
          <Route path="claims">
            <Route path="motor" element={<EmployeeWrapper />}>
              <Route path="personal-info" element={<MotorPersonalInfo />} />
              <Route path="vehicle-details" element={<VehicleDetails />} />
              <Route path="incident-details" element={<IncidentDetails />} />
              <Route path="witnesses" element={<WitnessPage />} />
              <Route path="other-drivers" element={<OtherDriversPage />} />
              <Route path="review" element={<MotorInsuranceReview />} />
            </Route>
            <Route path="fire-and-special-perils" element={<FireAndSpecialPerilsWrapper />}>
              <Route path="insured-details" element={<FireAndSpecialPerilsInsuredDetails />} />
              <Route path="loss-details" element={<FireAndSpecialPerilsLossDetails />} />
              <Route path="review" element={<FireAndSpecialPerilsReview />} />
            </Route>
            <Route path="fidelity-guarantee" element={<FidelityGuaranteeWrapper />}>
              <Route path="insured-details" element={<FidelityGuaranteeInsuredDetails />} />
              <Route path="loss-details" element={<FidelityGuaranteeLossDetails />} />
              <Route path="review" element={<FidelityGuaranteeReview />} />
            </Route>
            <Route path="professional-indemnity" element={<ProfessionalIndemnityWrapper />}>
              <Route path="insured-details" element={<ProfessionalIndemnityInsuredDetails />} />
              <Route path="claimant-details" element={<ProfessionalIndemnityClaimantDetails />} />
              <Route path="contract-details" element={<ProfessionalIndemnityContractDetails />} />
              <Route path="claim-details" element={<ProfessionalIndemnityClaimDetails />} />
              <Route path="response-details" element={<ProfessionalIndemnityResponseDetails />} />
              <Route path="review" element={<ProfessionalIndemnityReview />} />
            </Route>
            <Route path="rent-assurance" element={<RentAssuranceWrapper />}>
              <Route path="insured-details" element={<RentAssuranceInsuredDetails />} />
              <Route path="claim-information" element={<RentAssuranceClaimInformation />} />
              <Route path="beneficiary-details" element={<RentAssuranceBeneficiaryDetails />} />
              <Route path="declaration" element={<RentAssuranceDeclaration />} />
              <Route path="review" element={<RentAssuranceReview />} />
            </Route>
            <Route path="money" element={<MoneyInsuranceWrapper />}>
              <Route path="insured-details" element={<MoneyInsuranceInsuredDetails />} />
              <Route path="details-of-loss" element={<MoneyInsuranceDetailsOfLoss />} />
              <Route path="declaration" element={<MoneyInsuranceDeclaration />} />
              <Route path="review" element={<MoneyInsuranceReview />} />
            </Route>
            <Route path="public-liability" element={<PublicLiabilityWrapper />}>
              <Route path="insured-details" element={<PublicLiabilityInsuredDetails />} />
              <Route path="details-of-loss" element={<PublicLiabilityDetailsOfLoss />} />
              <Route path="particulars-of-claimant" element={<PublicLiabilityParticularsOfClaimant />} />
              <Route path="review" element={<PublicLiabilityReview />} />
            </Route>
            <Route path="goods-in-transit" element={<GoodsInTransitWrapper />}>
              <Route path="insured-details" element={<InsuredDetailsPage />} />
              <Route path="details-of-loss" element={<DetailsOfLossPage />} />
              <Route path="review" element={<ReviewPage />} />
            </Route>
            <Route path="group-personal-accident" element={<GroupPersonalAccidentWrapper />}>
              <Route path="insured-details" element={<GroupPersonalAccidentInsuredDetails />} />
              <Route path="details-of-loss" element={<GroupPersonalAccidentDetailsOfLoss />} />
              <Route path="review" element={<GroupPersonalAccidentReview />} />
            </Route>
            <Route path="contractors-plant-machinery" element={<ContractorsPlantMachineryWrapper />}>
              <Route path="insured-details" element={<ContractorsPlantMachineryInsuredDetails />} />
              <Route path="details-of-loss" element={<ContractorsPlantMachineryDetailsOfLoss />} />
              <Route path="review" element={<ContractorsPlantMachineryReview />} />
            </Route>
            <Route path="employers-liability" element={<EmployersLiabilityWrapper />}>
              <Route path="insured-details" element={<EmployersLiabilityInsuredDetails />} />
            </Route>
          </Route>

          {/* KYC Routes */}
          <Route path="kyc">
            <Route path="individual">
              {/* To be implemented */}
            </Route>
            <Route path="agents">
              {/* To be implemented */}
            </Route>
            <Route path="brokers">
              {/* To be implemented */}
            </Route>
            <Route path="partners">
              {/* To be implemented */}
            </Route>
            <Route path="corporate">
              {/* To be implemented */}
            </Route>
          </Route>

          {/* CDD Routes */}
          <Route path="cdd">
            <Route path="individual">
              {/* To be implemented */}
            </Route>
            <Route path="corporate">
              {/* To be implemented */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RoutesWrapper };
