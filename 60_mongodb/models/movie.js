const mongoose = require("mongoose");

//스키마 생성
const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  director: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

//스키마를 통해 모델 객체 생성
//mongoose.model("모델명", 스키마) ->모델명s
//mongoose.model("모델명", 스키마,"컬렉션명")
module.exports = mongoose.model("movie", MusicSchema);
