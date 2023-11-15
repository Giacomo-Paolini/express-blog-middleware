module.exports = function(err, req, res, next) {
    res.format({
        html: () => {
            res.status(500).send(`<h1>Qualcosa è andato storto</h1>`);
        },
        json: () => {
            res.status(500).json({
                message: "Qualcosa è andato storto",
                error: err.message
            });
        }
    })
}