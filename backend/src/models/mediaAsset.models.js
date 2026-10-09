import mongoose from 'mongoose';

const mediaAssetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: ''
    },
    imageUrl: {
      type: String,
      required: true
    },
    cloudinaryPublicId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    folder: {
      type: String,
      required: true,
      default: 'colway_expeditions'
    },
    resourceType: {
      type: String,
      default: 'image'
    },
    format: {
      type: String,
      default: 'jpg'
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    bytes: {
      type: Number
    },
    tags: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

const MediaAsset = mongoose.model('MediaAsset', mediaAssetSchema);
export default MediaAsset;
