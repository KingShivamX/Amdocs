const auth = (req, res, next) => {
    // Skip authentication
    next();
};

module.exports = auth; 