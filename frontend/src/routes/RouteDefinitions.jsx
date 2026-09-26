import HomePage from "../modules/home/homePage/homePage";
import PatientsPage from "../modules/patients/patientsPage/patientsPage";
import SessionsPage from "../modules/sessions/sessionsPage/sessionsPage";
import TreatmentPlansPage from "../modules/treatmentPlans/treatmentPlansPage/treatmentPlansPage";
import AppointmentsPage from "../modules/appointments/appointmentsPage/appointmentsPage";
import FinancePage from "../modules/finance/financePage/financePage";
import StatisticsPage from "../modules/statistics/statisticsPage/statisticsPage";

//Providers
import { PatientsProvider } from "../modules/patients/context/patientsProvider";
import { SessionsProvider } from "../modules/sessions/context/sessionsProvider";
import { TreatmentPlansProvider } from "../modules/treatmentPlans/context/treatmentPlansProvider";
import { AppoProvider } from "../modules/appointments/context/appoProvider";
import { FinanceProvider } from "../modules/finance/context/financeProvider";
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
  {
    path: "/sessions",
    element: (
      <SessionsProvider>
        <SessionsPage />
      </SessionsProvider>
    ),
  },
  {
    path: "/treatmentPlans",
    element: (
      <TreatmentPlansProvider>
        <TreatmentPlansPage />
      </TreatmentPlansProvider>
    ),
  },
  {
    path: "/appointments",
    element: (
      <AppoProvider>
        <AppointmentsPage />
      </AppoProvider>
    ),
  },
  {
    path: "/finance",
    element: (
      <FinanceProvider>
        <FinancePage />
      </FinanceProvider>
    ),
  },
  { path: "/statistics", element: <StatisticsPage /> },
];
