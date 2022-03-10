const OpenAPIParser = require("@readme/openapi-parser");

const args = process.argv.slice(2);
let apiRef = args[0];

export function cli(args) {
    OpenAPIParser.validate(apiRef, (err, api) => {
        if (err) {
            console.log("❌ At least one error was found. Look for '👈' for more info.");
            console.error(err);
            process.exit(1);
        }
        else {
            console.log("✅ No errors were found in:\nAPI name: %s, Version: %s", api.info.title, api.info.version);
            process.exit(0);
        }
    });
}