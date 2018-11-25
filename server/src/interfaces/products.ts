import * as mongoose from 'mongoose';

export default interface Products extends mongoose.Document {
  name: string;
  color: string;
  image: string;
  fabric: string;
  category: string;
  value: number;
  valueFor: number;
}
