import server from "./server";
import * as routes from "./routes";

const api = {
  fetchCategories: payload => {
    return server.get(routes.CATEGORY_URL, payload);
  },
  fetchProducts: payload => {
    return server.get(routes.PRODUCTS_URL, payload);
  }
};

export default api;
