import app from "../server_core/index.js";

// Export a serverless function handler
export default (req, res) => {
  return app(req, res);
};
