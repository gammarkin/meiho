import mongoose from 'mongoose';

const mjTextSchema = new mongoose.Schema({
  description: String,
  align: String,
  mjClass: String,
  containerBackgroundColor: String,
  color: String,
  padding: String,
  content: String,
});

const mjColumnSchema = new mongoose.Schema({
  border: String,
  verticalAlign: String,
  padding: String,
  mjText: mjTextSchema,
});

const mjSectionSchema = new mongoose.Schema({
  backgroundRepeat: String,
  backgroundSize: String,
  backgroundPosition: String,
  border: String,
  direction: String,
  textAlign: String,
  padding: String,
  mjColumn: mjColumnSchema,
});

export default mongoose.model('06.Footer', mjSectionSchema);