// MSAL-Konfiguration
const msalConfig = {
    auth: {
        clientId: "2e358634-c519-4968-9b1e-c1168873766f", // Die Application (Client) ID deiner App
        authority: "https://login.microsoftonline.com/cd5c6082-4849-4c49-a171-0044e130d518", // Die Directory (Tenant) ID deiner Organisation
        redirectUri: "https://ri-ka.github.io/DGN-Examen" // Die Redirect-URI
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

// Login-Funktion mit MSAL
function login() {
    const loginRequest = {
        scopes: ["User.Read"]
    };

    msalInstance.loginPopup(loginRequest)
        .then(response => {
            console.log("Erfolgreich angemeldet:", response);
            // Wenn erfolgreich, zeigt den Inhalt an, indem z. B. das `display` von `#content` geändert wird
            document.getElementById("content").style.display = "block";
        })
        .catch(error => {
            console.error("Anmeldefehler:", error);
            alert("Zugriff nur für autorisierte Benutzer.");
        });
}

// Beim Laden der Seite den Login auslösen
window.onload = login;
