import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  body: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  userId: mongoose.SchemaTypes.ObjectId,
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
