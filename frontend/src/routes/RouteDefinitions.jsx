import HomePage from "../modules/home/homePage/homePage";
import PatientsPage from "../modules/patients/patientsPage/patientsPage";
import SessionsPage from "../modules/sessions/sessionsPage/sessionsPage";
import TreatmentPlansPage from "../modules/treatmentPlans/treatmentPlansPage/treatmentPlansPage";
import AppointmentsPage from "../modules/appointments/appointmentsPage/appointmentsPage";
import FinancePage from "../modules/finance/financePage/financePage";
import StatisticsPage from "../modules/statistics/statisticsPage/statisticsPage";

//Providers
import { PatientsProvider } from "../modules/patients/context/patientsProvider";
//-------

export const RouteDefine = [
  { path: "/", element: <HomePage /> },
  {
    path: "/patients",
    element: (
      <PatientsProvider>
        <PatientsPage />
      </PatientsProvider>
    ),
  },
  { path: "/sessions", element: <SessionsPage /> },
  { path: "/treatmentPlans", element: <TreatmentPlansPage /> },
  { path: "/appointments", element: <AppointmentsPage /> },
  { path: "/finance", element: <FinancePage /> },
  { path: "/statistics", element: <StatisticsPage /> },
];
