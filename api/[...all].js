const app = require('../server');

module.exports = (req, res) => {
    // Normalize Vercel serverless request URL
    const fwd = req.headers['x-forwarded-uri'];
    const matched = req.headers['x-matched-path'];
    const route = req.query && req.query.__route;

    if (fwd && fwd !== '/api/index.js' && fwd !== '/api' && fwd !== '/api/') {
        req.url = fwd;
    } else if (route) {
        req.url = route.startsWith('/') ? route : '/api/' + route;
    } else if (matched) {
        const cleanMatched = matched.split('?')[0];
        if (cleanMatched !== '/api/index.js' && cleanMatched !== '/api' && cleanMatched !== '/api/') {
            req.url = cleanMatched;
        }
    }

    return app(req, res);
};
