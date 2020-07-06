# steal-multi-app
StealJS Multi APP

This project has two steal bundled apps, APP1 and APP2, with both steal bundled.

### How to run
Execute the following command on the command line:

```npm run start```

### Issues

1. When the second app is loaded it is making a request for `/app2/dist/bundles/src/stealconfig.js`.
2. When the app requires the load of assets like CSS files it fails.
   1. For the first app the CSS file is loaded from `/dist/bundles/src/index.css`.
   2. For the second app the CSS file is loaded from `/app2/dist/bundles/src/dist/bundles/src/index.css`.
