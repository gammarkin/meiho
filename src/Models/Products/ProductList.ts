import mongoose, { Schema } from 'mongoose';

const ProductList = new mongoose.Schema({
  profile: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: Schema.Types.Array, required: true },
  src: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
});

export default mongoose.model('products', ProductList);
