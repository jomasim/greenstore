import server from "./server";
import * as routes from "./routes";

const api = {
  fetchCategories: payload => {
    return server.get(routes.CATEGORY_URL, payload);
  }
};

export default api;
