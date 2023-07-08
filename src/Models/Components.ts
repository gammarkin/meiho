import mongoose, { Schema } from 'mongoose';

const componentsSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  parentId: { type: String, default: null },
  attributes: { type: Schema.Types.Mixed, default: {} },
  data: { type: Schema.Types.Mixed, default: {} },
  styleId: { type: String, required: true },
  children: [{ type: String }],
});

export default mongoose.model('components', componentsSchema);
