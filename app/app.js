/**
 * Mock JS file for QA URL scanner testing
 * Contains ERRORS, WARNINGS, and valid URLs
 */

console.log("Starting mock app.js");

// ❌ ERROR: staging API URL
const stagingApi = "https://staging.api.example.com/v1/orders";

// ✅ VALID: relative API URL
const loginUrl = "/api/v1/login";

// ❌ ERROR: localhost reference
const localDebug = "http://localhost:3000/debug";

// ⚠️ WARNING: absolute production CDN asset
const cdnJs = "https://cdn.example.com/js/plugin.js";

// ✅ VALID: relative JS asset
const localJs = "/js/local.js";

// ❌ ERROR: test domain API
const testApi = "https://test.example.com/v2/data";

// Function to simulate loading scripts
function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

// Load scripts
loadScript(stagingApi);
loadScript(loginUrl);
loadScript(localDebug);
loadScript(cdnJs);
loadScript(localJs);
loadScript(testApi);
