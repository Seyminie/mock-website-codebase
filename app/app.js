/**
 * Mock JS file for QA URL scanner testing
 * Contains only warnings and valid URLs (no errors)
 */

console.log("Starting mock app.js");

// ⚠️ WARNING: absolute production API URL
const apiUrl = "https://api.example.com/v1/users";

// ✅ VALID: relative API URL
const loginUrl = "/api/v1/login";

// ⚠️ WARNING: absolute production CDN asset
const cdnJs = "https://cdn.example.com/js/plugin.js";

// ✅ VALID: relative JS asset
const localJs = "/js/local.js";

// Function to simulate loading assets
function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

// Load scripts
loadScript(apiUrl);
loadScript(loginUrl);
loadScript(cdnJs);
loadScript(localJs);
