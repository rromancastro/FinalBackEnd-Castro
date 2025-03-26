import { ProductModel } from "../models/products-model";

class ProductManager {
    constructor(model) {
        this.model = model;
    }

    getAll = async () => {
        try {
            return await this.dao.getAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    getById = async (id) => {
        try {
            const product = await this.dao.getById(id);
            if (!product) throw new CustomError('Product not found', 404);
            return product;
        } catch (error) {
            throw (error);
        }
    }

    create = async (product) => {
        try {
           const newProd = await this.dao.create(product);
           if(!newProd) throw new CustomError('Error creating product', 400);
           return newProd; 
        } catch (error) {
            throw (error);
        }
    }

    update = async (id, obj) => {
        try {
            const prodUpd = await this.dao.update(id, obj);
            if(!prodUpd) throw new CustomError('Error updating product', 400);
            return prodUpd;
        } catch (error) {
            throw new Error(error);
        }
    }

    delete = async (id) => {
        try {
            const prodDel = await this.dao.delete(id);
            if(!prodDel) throw new CustomError('Error deleting product', 400);
            return prodDel;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const ProductManager = new ProductManager(ProductModel);