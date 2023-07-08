import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  history: {
    type: [{
      message: String,
      date: Date,
      campaign: String,
    }],
    default: [],
  },
});

export default model('user', UserSchema);
