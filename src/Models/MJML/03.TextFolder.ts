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
    border: { type: String },
    verticalAlign: { type: String },
    padding: { type: String },
  },
  mjText: {
    align: { type: String },
    fontSize: { type: String },
    lineHeight: { type: String },
    textTransform: { type: String },
    fontFamily: { type: String },
    mjClass: { type: String },
    padding: { type: String },
    content: [
      {
        style: { type: String },
        text: { type: String },
      },
    ],
  },
});

export default mongoose.model('03.TextFolder', MjmlSchema);
