import { urlRoute } from "../../../routes/urlRoute";
import api from "../../../api/axios";

export async function getFinanceAPI() {
  const [resCharges, resPayment] = await Promise.all([
    api.get(urlRoute.charges),
    api.get(urlRoute.payment),
  ]);

  return {
    charges: resCharges.data.charges,
    payment: resPayment.data.payment,
  };
}
