import axios from "axios";

const BASE_API_URL = "http://localhost:3000";

class ShoplyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async getCategories() {
    const result = await axios.get(`${BASE_API_URL}/categories`);
    return result.data.categories;
  }

  static async getProductsByCategory(category) {
    const result = await axios.get(`${BASE_API_URL}/${category}`);
    return result.data;
  }

  static async getProduct(id, category) {
    const result = await axios.get(`${BASE_API_URL}/${category}/${id}`);
    return result.data;
  }

  static async getCurrentUser(username) {
    const result = await axios.get(`${BASE_API_URL}/users/${username}`);
    console.log("result for getCurrentUser is: ", result.data.user);
    return result.data.user;
  }

  static async login(data) {
    const result = await axios.post(`${BASE_API_URL}/auth/token`, data);
    return result.data.token;
  }

}

export default ShoplyApi;
