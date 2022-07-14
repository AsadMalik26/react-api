import ApiCalls from "./ApiCalls";

class ProductOperations extends ApiCalls {
  addProduct = (data) => this.post("", data);
  getProduct = () => this.get("");
  updateProduct = (_id, data) => this.put("" + _id, data);
  deleteProduct = (_id) => this.delete("" + _id);
}

let productOperation = new ProductOperations();

export default productOperation;
