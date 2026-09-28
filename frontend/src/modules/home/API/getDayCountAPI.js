import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getDayCountAPI() {
  const [sessionsCount, patientsCount ,appointmentsCount , appointmentsDoingCount] = await Promise.all([
    api.get(urlRoute.statistics +"/session/day/count"),
    api.get(urlRoute.statistics +"/patients/day/count"),
    api.get(urlRoute.statistics +"/appointments/day/count"),
    api.get(urlRoute.statistics +"/appointments/doing/day/count")
 
  ]);

  return {
    sessionsCount:sessionsCount.data.count,
    patientsCount:patientsCount.data.count,
    appointmentsCount:appointmentsCount.data.count,
    appointmentsDoingCount:appointmentsDoingCount.data.count

  };
}
