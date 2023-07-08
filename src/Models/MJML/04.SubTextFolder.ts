import mongoose from 'mongoose';

const mjSectionSchema = new mongoose.Schema({
  description: String,
  backgroundRepeat: String,
  backgroundSize: String,
  backgroundPosition: String,
  border: String,
  direction: String,
  textAlign: String,
  padding: String,
  mjColumn: {
    border: String,
    verticalAlign: String,
    width: String,
    padding: String,
    mjText: {
      align: String,
      mjClass: String,
      fontSize: String,
      lineHeight: String,
      padding: String,
      innerHtml: String,
    },
  },
});
  
export default mongoose.model('04.SubTextFolder', mjSectionSchema);
