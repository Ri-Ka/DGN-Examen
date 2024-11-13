// MSAL-Konfiguration
const msalConfig = {
    auth: {
        clientId: "2e358634-c519-4968-9b1e-c1168873766f", // Die Application (Client) ID deiner App
        authority: "https://login.microsoftonline.com/cd5c6082-4849-4c49-a171-0044e130d518", // Die Directory (Tenant) ID deiner Organisation
        redirectUri: "https://ri-ka.github.io/DGN-Examen" // Die Redirect-URI
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

// Seite ausblenden, bis der Login erfolgreich ist
document.documentElement.style.display = "none";

// Login-Funktion mit MSAL
function login() {
    const loginRequest = {
        scopes: ["User.Read"]
    };

    msalInstance.loginPopup(loginRequest)
        .then(response => {
            console.log("Erfolgreich angemeldet:", response);
            // Seite anzeigen, wenn der Login erfolgreich ist
            document.documentElement.style.display = "block";
        })
        .catch(error => {
            console.error("Anmeldefehler:", error);
            alert("Zugriff nur für autorisierte Benutzer.");
            // Weiterleitung auf eine andere Seite oder ausloggen
            window.location.href = "https://login.microsoftonline.com";
        });
}

// Führe die Login-Funktion bei Seitenaufruf aus
window.onload = login;
