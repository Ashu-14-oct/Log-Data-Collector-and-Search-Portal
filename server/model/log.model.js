const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    level: String,
    message: String,
    resourceId: String,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
      parentResourceId: String,
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
