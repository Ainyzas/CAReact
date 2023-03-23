import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 100,
  },
  password: {
    type: String,
    minLength: 7,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
