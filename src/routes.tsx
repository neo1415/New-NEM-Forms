// import { EmployeeAdditionalInfo } from "@/features/multistep-forms/forms/employee/additional-info/page";
import { MotorPersonalInfo } from "@/features/multistep-forms/forms/claims/motor/personal-info/page";
import { MotorInsuranceReview } from "@/features/multistep-forms/forms/claims/motor/review/page";
// import { EmployeeSkills } from "@/features/multistep-forms/forms/employee/skills/page";
import { MotorWrapper } from "@/features/multistep-forms/forms/claims/motor/wrapper/page";
import { DashboardLayout } from "@/features/layout/components/dashboard-layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { VehicleDetails } from "./features/multistep-forms/forms/claims/motor/vehicle-details/page";
import { IncidentDetails } from "./features/multistep-forms/forms/claims/motor/incident-details/page";
import { WitnessPage } from "./features/multistep-forms/forms/claims/motor/witnesses/page";
import { OtherDriversPage } from "./features/multistep-forms/forms/claims/motor/otherDrivers/page";
// import { ClaimsRoutes } from "./routes/claims.routes";
// import { KYCRoutes } from "./routes/kyc.routes";
// import { CDDRoutes } from "./routes/cdd.routes";
// import { AuthRoutes } from "./routes/auth.routes";
// import { DashboardRoutes } from "./routes/dashboard.routes";
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
import { DetailsOfLossPage as EmployersLiabilityDetailsOfLoss } from "@/features/multistep-forms/forms/claims/employers-liability/details-of-loss/page";
import { ReviewPage as EmployersLiabilityReview } from "@/features/multistep-forms/forms/claims/employers-liability/review/page";
import { StatementOfEarningsPage } from "./features/multistep-forms/forms/claims/employers-liability/statement-of-earnings/page";
import { CombinedGpaEmployersWrapper } from "@/features/multistep-forms/forms/claims/combined-gpa-employers/wrapper/page";
import { InsuredDetailsPage as CombinedGPAEmployersInsuredDetails } from "@/features/multistep-forms/forms/claims/combined-gpa-employers/insured-details/page";
import { DetailsOfLossPage as CombinedGPAEmployersDetailsOfLoss } from "@/features/multistep-forms/forms/claims/combined-gpa-employers/details-of-loss/page";
import { ReviewPage as CombinedGPAEmployersReview } from "@/features/multistep-forms/forms/claims/combined-gpa-employers/review/page";
import { StatementOfEarningsPage as CombinedGPAEmployersStatementOfEarnings } from "@/features/multistep-forms/forms/claims/combined-gpa-employers/statement-of-earnings/page";
import { AllRiskWrapper } from "@/features/multistep-forms/forms/claims/all-risk/wrapper/page";
import { InsuredDetailsPage as AllRiskInsuredDetails } from "@/features/multistep-forms/forms/claims/all-risk/insured-details/page";
import { DetailsOfLossPage as AllRiskDetailsOfLoss } from "@/features/multistep-forms/forms/claims/all-risk/details-of-loss/page";
import { ReviewPage as AllRiskReview } from "@/features/multistep-forms/forms/claims/all-risk/review/page";
import { BurglaryWrapper } from "@/features/multistep-forms/forms/claims/burglary/wrapper/page";
import { InsuredDetailsPage as BurglaryInsuredDetails } from "@/features/multistep-forms/forms/claims/burglary/insured-details/page";
import { DetailsOfLossPage as BurglaryDetailsOfLoss } from "@/features/multistep-forms/forms/claims/burglary/details-of-loss/page";
import { ReviewPage as BurglaryReview } from "@/features/multistep-forms/forms/claims/burglary/review/page";
import { AgentsKYCWrapper } from "@/features/multistep-forms/forms/kyc/agents-kyc/wrapper/page";
import { PersonalInfo } from "@/features/multistep-forms/forms/kyc/agents-kyc/personal-info/page";
import { AdditionalInfo } from "@/features/multistep-forms/forms/kyc/agents-kyc/additional-info/page";
import { FinancialInfo } from "@/features/multistep-forms/forms/kyc/agents-kyc/financial-info/page";
import { Review as AgentsKYCReview } from "@/features/multistep-forms/forms/kyc/agents-kyc/review/page";
import { CorporateKYC } from "@/features/multistep-forms/forms/kyc/corporate-kyc/wrapper/page";
import { CompanyDetails } from "@/features/multistep-forms/forms/kyc/corporate-kyc/company-details/page";
import { DirectorsInfo as CorporateKYCDirectorsInfo } from "@/features/multistep-forms/forms/kyc/corporate-kyc/directors-info/page";
import { FileUploads as CorporateKYCFileUploads } from "@/features/multistep-forms/forms/kyc/corporate-kyc/file-uploads/page";
import { Review as CorporateReview } from "@/features/multistep-forms/forms/kyc/corporate-kyc/review/page";
import { Provider as IndividualKYCWrapper } from "@/features/multistep-forms/forms/kyc/individual-kyc/wrapper/page";
import { PersonalInfo as IndividualPersonalInfo } from "@/features/multistep-forms/forms/kyc/individual-kyc/personal-info/page";
import { FinancialInfo as IndividualFinancialInfo } from "@/features/multistep-forms/forms/kyc/individual-kyc/financial-info/page";
import { Review as IndividualReview } from "@/features/multistep-forms/forms/kyc/individual-kyc/review/page";
import { FileUploads as IndividualFileUploads } from "@/features/multistep-forms/forms/kyc/individual-kyc/file-uploads/page";
import { Provider as IndividualCDDWrapper } from "@/features/multistep-forms/forms/kyc/individual-cdd/wrapper/page";
import { PersonalInfo as IndividualCDDPersonalInfo } from "@/features/multistep-forms/forms/kyc/individual-cdd/personal-info/page";
import { FinancialInfo as IndividualCDDFinancialInfo } from "@/features/multistep-forms/forms/kyc/individual-cdd/financial-info/page";
import { Review as IndividualCDDReview } from "@/features/multistep-forms/forms/kyc/individual-cdd/review/page";
import { FileUploads as IndividualCDDFileUploads } from "@/features/multistep-forms/forms/kyc/individual-cdd/file-uploads/page";
import { Provider as CorporateCDDWrapper } from "@/features/multistep-forms/forms/kyc/corporate-cdd/wrapper/page";
import { CompanyDetails as CorporateCDDCompanyDetails } from "@/features/multistep-forms/forms/kyc/corporate-cdd/company-info/page";
import { DirectorsInfo as CorporateDirectorsInfo } from "@/features/multistep-forms/forms/kyc/corporate-cdd/directors-info/page";
import { AccountDetails } from "@/features/multistep-forms/forms/kyc/corporate-cdd/account-details/page";
import { FileUploads as CorporateFileUploads } from "@/features/multistep-forms/forms/kyc/corporate-cdd/file-uploads/page";
import { Review as CorporateCDDReview } from "@/features/multistep-forms/forms/kyc/corporate-cdd/review/page";
import { Provider as NaicomCompanyCddWrapper } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/wrapper/page";
import { CompanyDetails as NaicomCompanyCddCompanyDetails } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/company-info/page";
import { DirectorsInfo as NaicomCompanyCddDirectorsInfo } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/directors-info/page";
import { AccountDetails as NaicomCompanyCddAccountDetails } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/account-details/page";
import { FileUploads as NaicomCompanyCddFileUploads } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/file-uploads/page";
import { Review as NaicomCompanyCddReview } from "@/features/multistep-forms/forms/kyc/naicom-company-cdd/review/page";
import { Provider as PartnersCddWrapper } from "@/features/multistep-forms/forms/kyc/partners-cdd/wrapper/page";
import { CompanyInfo as PartnersCddCompanyInfo } from "@/features/multistep-forms/forms/kyc/partners-cdd/company-info/page";
import { DirectorsInfo as PartnersCddDirectorsInfo } from "@/features/multistep-forms/forms/kyc/partners-cdd/directors-info/page";
import { AccountDetails as PartnersCddAccountDetails } from "@/features/multistep-forms/forms/kyc/partners-cdd/account-details/page";
import { FileUploads as PartnersCddFileUploads } from "@/features/multistep-forms/forms/kyc/partners-cdd/file-uploads/page";
import { Review as PartnersCddReview } from "@/features/multistep-forms/forms/kyc/partners-cdd/review/page";
import { Provider as NaicomPartnersCddWrapper } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/wrapper/page";
import { CompanyInfo as NaicomPartnersCddCompanyInfo } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/company-info/page";
import { DirectorsInfo as NaicomPartnersCddDirectorsInfo } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/directors-info/page";
import { AccountDetails as NaicomPartnersCddAccountDetails } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/account-details/page";
import { FileUploads as NaicomPartnersCddFileUploads } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/file-uploads/page";
import { Review as NaicomPartnersCddReview } from "@/features/multistep-forms/forms/kyc/naicom-partners-cdd/review/page";
import { BrokersCDDCompanyInfo } from "./features/multistep-forms/forms/kyc/brokers-cdd/company-info/page";
import { BrokersCDDDirectorsInfo } from "./features/multistep-forms/forms/kyc/brokers-cdd/directors-info/page";
import { BrokersCddAccountDetails } from "./features/multistep-forms/forms/kyc/brokers-cdd/account-details/page";
import { BrokersCddFileUploads } from "./features/multistep-forms/forms/kyc/brokers-cdd/file-uploads/page";
import { BrokersCddReview } from "./features/multistep-forms/forms/kyc/brokers-cdd/review/page";
import { BrokersCDD } from "./features/multistep-forms/forms/kyc/brokers-cdd/wrapper/page";


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
            <Route path="motor" element={<MotorWrapper />}>
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
              <Route path="details-of-loss" element={<EmployersLiabilityDetailsOfLoss />} />
              <Route path="statement-of-earnings" element={<StatementOfEarningsPage />} />
              <Route path="review" element={<EmployersLiabilityReview />} />
            </Route>
            <Route path="combined-gpa-employers" element={<CombinedGpaEmployersWrapper />}>
              <Route path="insured-details" element={<CombinedGPAEmployersInsuredDetails />} />
              <Route path="details-of-loss" element={<CombinedGPAEmployersDetailsOfLoss />} />
              <Route path="statement-of-earnings" element={<CombinedGPAEmployersStatementOfEarnings />} />
              <Route path="review" element={<CombinedGPAEmployersReview />} />
            </Route>
            <Route path="all-risk" element={<AllRiskWrapper />}>
              <Route path="insured-details" element={<AllRiskInsuredDetails />} />
              <Route path="details-of-loss" element={<AllRiskDetailsOfLoss />} />
              <Route path="review" element={<AllRiskReview />} />
            </Route>
            <Route path="burglary" element={<BurglaryWrapper />}>
              <Route path="insured-details" element={<BurglaryInsuredDetails />} />
              <Route path="details-of-loss" element={<BurglaryDetailsOfLoss />} />
              <Route path="review" element={<BurglaryReview />} />
            </Route>
          </Route>

          {/* KYC Routes */}
          <Route path="kyc">
            <Route path="individual" element={<IndividualKYCWrapper />}>
              <Route path="personal-info" element={<IndividualPersonalInfo />} />
              <Route path="financial-info" element={<IndividualFinancialInfo />} />
              <Route path="file-uploads" element={<IndividualFileUploads />} />
              <Route path="review" element={<IndividualReview />} />
            </Route>
            <Route path="individual-cdd" element={<IndividualCDDWrapper />}>
              <Route path="personal-info" element={<IndividualCDDPersonalInfo />} />
              <Route path="financial-info" element={<IndividualCDDFinancialInfo />} />
              <Route path="file-uploads" element={<IndividualCDDFileUploads />} />
              <Route path="review" element={<IndividualCDDReview />} />
            </Route>
            <Route path="agents" element={<AgentsKYCWrapper />}>
              <Route path="personal-info" element={<PersonalInfo />} />
              <Route path="additional-info" element={<AdditionalInfo />} />
              <Route path="financial-info" element={<FinancialInfo />} />
              <Route path="review" element={<AgentsKYCReview />} />
            </Route>
            <Route path="naicom-company-cdd" element={<NaicomCompanyCddWrapper />}>
              <Route path="company-info" element={<NaicomCompanyCddCompanyDetails />} />
              <Route path="directors-info" element={<NaicomCompanyCddDirectorsInfo />} />
              <Route path="account-details" element={<NaicomCompanyCddAccountDetails />} />
              <Route path="file-uploads" element={<NaicomCompanyCddFileUploads />} />
              <Route path="review" element={<NaicomCompanyCddReview />} />
            </Route>
            <Route path="brokers" element={<BrokersCDD />}>
       
            <Route path="company-info" element={<BrokersCDDCompanyInfo />} />
            <Route path="directors-info" element={<BrokersCDDDirectorsInfo/>} />
            <Route path="account-details" element={<BrokersCddAccountDetails/>} />
            <Route path="file-uploads" element={<BrokersCddFileUploads/>} />
            <Route path="review" element={<BrokersCddReview/>} />
     
            </Route>
           {/* Partners CDD Routes */}
            <Route path="partners-cdd" element={<PartnersCddWrapper />}>
            <Route path="company-info" element={<PartnersCddCompanyInfo />} />
            <Route path="directors-info" element={<PartnersCddDirectorsInfo />} />
            <Route path="account-details" element={<PartnersCddAccountDetails />} />
            <Route path="file-uploads" element={<PartnersCddFileUploads />} />
            <Route path="review" element={<PartnersCddReview />} />
          </Route>
            <Route path="corporate-kyc" element={<CorporateKYC />}>
              <Route path="company-details" element={<CompanyDetails />} />
              <Route path="directors-info" element={<CorporateKYCDirectorsInfo />} />
              <Route path="file-uploads" element={<CorporateKYCFileUploads />} />
              <Route path="review" element={<CorporateReview />} />
            </Route>
          </Route>

          {/* CDD Routes */}
          <Route path="cdd">
            <Route path="individual">
              {/* To be implemented */}
            </Route>
            <Route path="corporate-cdd" element={<CorporateCDDWrapper />}>
              <Route path="company-info" element={<CorporateCDDCompanyDetails />} />
              <Route path="directors-info" element={<CorporateDirectorsInfo />} />
              <Route path="account-details" element={<AccountDetails />} />
              <Route path="file-uploads" element={<CorporateFileUploads />} />
              <Route path="review" element={<CorporateCDDReview />} />
            </Route>
            <Route path="naicom-partners" element={<NaicomPartnersCddWrapper />}>
              <Route path="company-info" element={<NaicomPartnersCddCompanyInfo />} />
              <Route path="directors-info" element={<NaicomPartnersCddDirectorsInfo />} />
              <Route path="account-details" element={<NaicomPartnersCddAccountDetails />} />
              <Route path="file-uploads" element={<NaicomPartnersCddFileUploads />} />
              <Route path="review" element={<NaicomPartnersCddReview />} />
            </Route>
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RoutesWrapper };
