import { ProductModel } from "./models/product-model.js";
import MongoDao from "./mongo-dao.js";

class ProductDaoMongo extends MongoDao {
  constructor(model) {
    super(model);
  }

  getByName = async (name) => {
    try {
      return await this.model.find({ name });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productDao = new ProductDaoMongo(ProductModel);