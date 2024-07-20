import axios from "axios";
import login_mock from "../mock/login_mock";
import register_mock from "../mock/register_mock";
import user_mock from "../mock/user_mock";

// import products_mock from "../mock/products_mocks";
const baseUrl = "http://localhost:5000";

describe('Api testing', () => {

  it("Login Should work", async () => {
    const response = await axios.post(`${baseUrl}/api/user/login`, login_mock);
    expect(response.status).toEqual(200);
    // expect(response.success).toEqual("true");
  });

  it("register Should work", async () => {
    const response = await axios.post(`${baseUrl}/api/user/create`, register_mock);
    expect(response.status).toEqual(200);
  });

  it("Fetch all products", async () => {
    const response = await axios.get(`${baseUrl}/api/product/get_products`);
    expect(response.status).toEqual(200);
    expect(response.data.products).toBeDefined();
    // matching each product name with mock data
    response.data.products.forEach((individualProduct, index) => {
      expect(individualProduct.productName).toEqual(product_mock[index].productName);
    });
  });

  it("get single Should work", async () => {
    const response = await axios.get(`${baseUrl}/api/product/get_product/65a57aed141aac0389c239b1`);
    expect(response.status).toEqual(200);
  });

  it("order Should work", async () => {
    const response = await axios.post(`${baseUrl}/api/product/create_order`, order_mock);
    expect(response.status).toEqual(200);
  });

});
