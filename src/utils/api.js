export function checkStatus(response) {
    if (!response.ok) {
        // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        error.statusCode = response.status;
        throw error;
    }
    return response;
}

export function parseJSON(response) {
    return response.json().catch(() => ({}));
}

export function isTokenExpired() {
    return true;
}
