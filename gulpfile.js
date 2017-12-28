var gulp = require('gulp');

__workDir = __dirname;
__devTool = 'eval-source-map';
__host = "localhost";
__port = 7010;

require('@fabalous/runtime-node/config/gulp/RuntimeNode.config')(gulp);
require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);


