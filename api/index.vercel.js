const app = require("../server_core/index");

// Export a serverless function handler
module.exports = (req, res) => {
  return app(req, res);
};
