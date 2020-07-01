import "@babel/polyfill";
import "dotenv/config";

import "#root/server/startServer";

console.log(process.env.APPLICATION_NAME);
