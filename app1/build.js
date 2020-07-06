var stealTools = require("steal-tools");

const buildPromise = stealTools.build({
    main: ["src/index"],
    config: __dirname + "/package.json!npm",
}, {
    bundleSteal: true,
    sourceMaps: true,
    minify: false
});