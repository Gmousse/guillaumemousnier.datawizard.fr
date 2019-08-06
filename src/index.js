const express = require("express");

function main(config) {
    const port = config.port || 5000;
    const app = express();
    app.use(express.static("public"));
    app.listen(port, function() {
        console.info(`[INFO] Listening port ${port}.`);
    });
}

module.exports = main;

if (process.argv[1] === __filename) {
    main({ port: process.argv[2] });
}
