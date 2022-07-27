import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneClass: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/${uuid}`);
      return res.json();
    },
    fetchStatistics: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/statistics/${uuid}`);
      return res.json();
    }
  };
})();
