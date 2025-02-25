import { gapi } from "gapi-script";

const initGoogleClient = () => {
  const CLIENT_ID = "777154732450-4id6v59l38il53qo33fk5fpprerufaqc.apps.googleusercontent.com"; // Replace with your OAuth Client ID
  const API_KEY = "AIzaSyAq9wZ88N5HC1Jbb-cL0tQ3ozbOEsfqHFk"; // Replace with your API Key
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: SCOPES,
    });
  });
};

export default initGoogleClient;
