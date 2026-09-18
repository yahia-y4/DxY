import HomePage from "../modules/home/homePage/homePage";
import PatientsPage from "../modules/patients/patientsPage/patientsPage";
import SessionsPage from "../modules/sessions/sessionsPage/sessionsPage";
import TreatmentPlansPage from "../modules/treatmentPlans/treatmentPlansPage/treatmentPlansPage";
import AppointmentsPage from "../modules/appointments/appointmentsPage/appointmentsPage";
import FinancePage from "../modules/finance/financePage/financePage";

export const RouteDefine = [
  { path: "/", element: <HomePage /> },
  { path: "/patients", element: <PatientsPage /> },
  { path: "/sessions", element: <SessionsPage /> },
  { path: "/treatmentPlans", element: <TreatmentPlansPage /> },
  { path: "/appointments", element: <AppointmentsPage/> },
  { path: "/finance", element: <FinancePage/> },
];
