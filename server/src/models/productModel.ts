import * as mongoose from 'mongoose';
import Products from '../interfaces/products';

export const ProductSchema = new mongoose.Schema({
  name: {type:String, required: true},
  color: {type:String, required: true},
  image: {type:String, required: true},
  fabric: {type:String, required: true},
  category: {type:String, required: true},
  value: {type:Number, required: true},
  valueFor: {type:Number, required: true}
});
  
const Product = mongoose.model<Products>('Product', ProductSchema);

export default Product;
