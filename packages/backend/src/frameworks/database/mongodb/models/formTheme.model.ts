import mongoose from "mongoose";

const formThemeSchema = new mongoose.Schema(
  {
    fontFamily: { type: String, required: true },
    themeName: { type: String, required: true },
    colors: {},
  },
  { timestamps: true }
);


// {
//   "id": "qHWOQ7",
//   "font": "System font",
//   "name": "Default Theme",
//   "created_at": "2020-10-14T09:56:16.481543Z",
//   "updated_at": "2020-10-14T09:56:16.481543Z",
//   "has_transparent_button": false,
//   "colors": {
//     "question": "#000000",
//     "answer": "#0445AF",
//     "button": "#0445AF",
//     "background": "#FFFFFF"
//   },
//   "visibility": "public",
//   "screens": {
//     "font_size": "x-small",
//     "alignment": "center"
//   },
//   "fields": {
//     "font_size": "medium",
//     "alignment": "left"
//   },
//   "rounded_corners": "small"
// }