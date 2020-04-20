const jwt = require("jsonwebtoken");
// APP_SECRET is used to sign the JWTs being issued for users
const APP_SECRET = "xsw2zaq1";
// getUserId will be called in resolvers which require authentication
function getUserId(context) {
  // retrieves the Authorization header, which contains the User's JWT from the context
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    // after verification of the JWT, retrieve the User's ID from it
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }
  throw new Error("Not authenticated.");
}

module.exports = {
  APP_SECRET,
  getUserId,
};
