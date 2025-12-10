const app = require("./index");

// Export a serverless function handler
module.exports = (req, res) => {
  return app(req, res);
};
