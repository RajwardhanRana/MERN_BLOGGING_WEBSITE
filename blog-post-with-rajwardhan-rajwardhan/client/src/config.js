

const yourOktaDomain = 'dev-9470064.okta.com'
const clientId = '0oa1wg7nhwncsSPdk5d7'

const oktaAuthConfig = {
    issuer: `https://${yourOktaDomain}/oauth2/default`,
    clientId: `${clientId}`,
    redirectUri: window.location.origin + '/login/callback',
};
const oktaSignInConfig = {
    baseUrl: `https://${yourOktaDomain}`,
    clientId: `${clientId}`,
    redirectUri: window.location.origin + '/login/callback',
    authParams: {

    }
};

export { oktaAuthConfig, oktaSignInConfig };