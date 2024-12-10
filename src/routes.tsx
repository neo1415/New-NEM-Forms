import { EmployeeAdditionalInfo } from "@/features/employee/additional-info/page";
import { EmployeeHistory } from "@/features/employee/history/page";
import { EmployeePersonalInfo } from "@/features/employee/personal-info/page";
import { EmployeeReview } from "@/features/employee/review/page";
import { EmployeeSkills } from "@/features/employee/skills/page";
import { EmployeeWrapper } from "@/features/employee/wrapper/page";
import { Home } from "@/features/home/page";
import { BrowserRouter, Route, Routes } from "react-router";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<EmployeeWrapper />}>
          <Route path="/personal-info" element={<EmployeePersonalInfo />} />
          <Route path="/history" element={<EmployeeHistory />} />
          <Route path="/skills" element={<EmployeeSkills />} />
          <Route path="/additional-info" element={<EmployeeAdditionalInfo />} />
          <Route path="/review" element={<EmployeeReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RoutesWrapper };
