export const authConfig = {
  clientId: "258466447657922005@first",
  authorizationEndpoint:
    "https://first-8gnkkp.zitadel.cloud/oauth/v2/authorize",
  tokenEndpoint: "https://first-8gnkkp.zitadel.cloud/oauth/v2/token",
  redirectUri: "http://localhost:3000/connect",
  scope: "openid profile email",
  response_type: "code",
  response_mode: "query",
  code_challenge_method: "S256",
  post_logout_redirect_uri: "http://localhost:3000/login",
  onRefreshTokenExpire: (event) =>
    window.confirm(
      "Session expired. Refresh page to continue using the site?"
    ) && event.login(),
};
