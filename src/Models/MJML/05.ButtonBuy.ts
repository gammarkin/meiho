import mongoose from 'mongoose';

const mjButtonSchema = new mongoose.Schema({
  description: String,
  align: String,
  backgroundColor: String,
  color: String,
  fontWeight: String,
  borderRadius: String,
  lineHeight: String,
  target: String,
  verticalAlign: String,
  border: String,
  textAlign: String,
  href: String,
  fontFamily: String,
  fontSize: String,
  width: String,
  padding: String,
  innerPadding: String,
  content: String,
});

const mjColumnSchema = new mongoose.Schema({
  border: String,
  verticalAlign: String,
  padding: String,
  mjButton: mjButtonSchema,
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

export default mongoose.model('05.ButtonBuy', mjSectionSchema);
