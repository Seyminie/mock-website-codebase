// ✅ VALID: production API
const apiUrl = "https://api.example.com/v1/users";

// ❌ ERROR: staging API
const stagingApi = "https://staging.api.example.com/v1/orders";

// ❌ ERROR: dev URL inside JS concatenation
const cachedCssUrl =
    "wp-content/cache/background-css/1/" +
    "amsafe-wp-2025-staging.3cs.website/wp-content/plugins/" +
    "freightexpress-core/assets/css/freightexpress-core.min.css" +
    "?ver=1aa96a28d5fc9c79545d98ce54579948&wpr_t=1766991761";

// ✅ VALID: relative asset
const logoPath = "/assets/logo.svg";

// Function to load asset dynamically
function loadAsset(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// Load assets
loadAsset(cachedCssUrl);
loadAsset(logoPath);

if (process.env.NODE_ENV === "development") {
    console.warn("Staging API in use:", stagingApi);
}
