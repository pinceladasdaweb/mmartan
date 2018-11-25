import * as mongoose from 'mongoose';
import Product from '../models/productModel';
import { Request, Response } from 'express';

export class ProductController {
  async getProducts (req: Request, res: Response) {
    try {
      let products;

      if (req.query.search) {
        const regExpTerm = new RegExp(req.query.search, 'i');
        const regExpSearch = [
          {name: {$regex: regExpTerm}},
          {color: {$regex: regExpTerm}},
          {fabric: {$regex: regExpTerm}},
          {category: {$regex: regExpTerm}}
        ];

        products = await Product.find({'$or': regExpSearch}).select("-_id");
      } else {
        products = await Product.find({}).select("-_id");
      }

      res.send(products);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
