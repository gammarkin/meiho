import mongoose, { Schema } from 'mongoose';

const styleSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  attributes: { type: Schema.Types.Mixed, default: {} },
});

export default mongoose.model('styles', styleSchema);
