import { commonRequest } from "./apiCall";
import { BASE_URL } from "./helper";

// Jobs endpoint - fetch all jobs
export const jobs = async (params) => {
  // Uses the hosted jobs API directly
  return commonRequest("get", `${BASE_URL}/jobs`, params);
};