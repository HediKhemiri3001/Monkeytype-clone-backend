// Example express application adding the parse-server module to expose Parse
// compatible API routes.

import express from "express";
import { ParseServer } from "parse-server";
import path from "path";
const __dirname = path.resolve();

export const config = {
  databaseURI:
    process.env.DATABASE_URI ||
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/dev",
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + "/cloud/main.js",
  appId: process.env.APP_ID || "myAppId",
  masterKey: process.env.MASTER_KEY || "", //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || "http://localhost:1337/parse", // Don't forget to change to https if needed
  /* liveQuery: {
    classNames: ["Posts", "Comments"], // List of classes to support for query subscriptions
  }, */
};
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

export const app = express();

// Serve static assets from the /public folder
app.use("/public", express.static(path.join(__dirname, "/public")));

// Serve the Parse API on the /parse URL prefix
if (!process.env.TESTING) {
  const mountPath = process.env.PARSE_MOUNT || "/parse";
  const server = new ParseServer(config);
  await server.start();
  app.use(mountPath, server.app);
}
