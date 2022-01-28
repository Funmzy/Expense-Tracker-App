import { model, Schema } from "mongoose";

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please fill in the title"],
      unique: true,
    },
    amount: {
      type: Number,
      required: [true, "Please fill in the amount"],
      default: 0,
    },

    date: {
      type: Date,
      required: [true, "Please fill in the date"],
    },

    note: {
      type: String,
    },

    isPurchased: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Items", ItemSchema);
