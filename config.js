// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi696156a0e0edd76550a637ef-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
