import mongoose from 'mongoose';

const MjmlSchema = new mongoose.Schema({
  description: { type: String },
  mjSection: {
    backgroundRepeat: { type: String },
    backgroundSize: { type: String },
    backgroundPosition: { type: String },
    border: { type: String },
    direction: { type: String },
    textAlign: { type: String },
    padding: { type: String },
  },
  mjColumn: {
    verticalAlign: { type: String },
    textAlign: { type: String },
    padding: { type: String },
  },
  mjImage: {
    src: { type: String },
    alt: { type: String },
    href: { type: String },
    width: { type: String },
    height: { type: String },
    align: { type: String },
    padding: { type: String },
  },
  style: { type: String, required: true },
  profile: { type: String, requried: true },
});

export default mongoose.model('02.HeroBanner', MjmlSchema);
