import { Document } from 'mongoose';

interface IProductList extends Document {
  profile: string;
  description: string;
  categories: string[];
  src: string;
  name: string;
  price: number;
  url: string;
}

export default IProductList;
