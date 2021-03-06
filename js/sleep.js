/**
 * Sample JavaScript code for fitness.users.dataSources.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function authenticate()
{
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.activity.write https://www.googleapis.com/auth/fitness.blood_glucose.read https://www.googleapis.com/auth/fitness.blood_glucose.write https://www.googleapis.com/auth/fitness.blood_pressure.read https://www.googleapis.com/auth/fitness.blood_pressure.write https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body.write https://www.googleapis.com/auth/fitness.body_temperature.read https://www.googleapis.com/auth/fitness.body_temperature.write https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.heart_rate.write https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.location.write https://www.googleapis.com/auth/fitness.nutrition.read https://www.googleapis.com/auth/fitness.nutrition.write https://www.googleapis.com/auth/fitness.oxygen_saturation.read https://www.googleapis.com/auth/fitness.oxygen_saturation.write https://www.googleapis.com/auth/fitness.reproductive_health.read https://www.googleapis.com/auth/fitness.reproductive_health.write https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/fitness.sleep.write"})
        .then(function ()
            {
                console.log("Sign-in successful");
            },
            function (err)
            {
                console.error("Error signing in", err);
            });
}

function loadClient()
{
    gapi.client.setApiKey("AIzaSyBChsVqY-3SdymYzLia5myUoRrpTPj91ns");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/fitness/v1/rest")
        .then(function ()
            {
                console.log("GAPI client loaded for API");
            },
            function (err)
            {
                console.error("Error loading GAPI client for API", err);
            });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute()
{
    return gapi.client.fitness.users.dataSources.list({
        "userId": "me"
    })
        .then(function (response)
            {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
            function (err)
            {
                console.error("Execute error", err);
            });
}

gapi.load("client:auth2", function ()
{
    gapi.auth2.init({client_id: "835030589592-45piefur4mc1av9k101fbf7n5d5r25l4.apps.googleusercontent.com"});
});