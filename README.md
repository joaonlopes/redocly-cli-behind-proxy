The purpose of this branch is to keep an hack that allows using the redocly cli behind a proxy. The change is only on 2 files push.ts and registry-api.ts. It requires package https-proxy-agent.

How I use this hack :

  1. Clone this repo
  2. Run npm install
  3. Run npm compile 
  4. Install the latest version of redocly api (currently 1.6.0)
     npm install @redocly/cli -g
     
  6. This install the cli in C:\Users\myUser\AppData\Roaming\npm\
  7. Go into node_modules\@redocly and create a copy the cli folder. Call it "redocly-cli-behind-proxy"
  8. Back in the  C:\Users\myUser\AppData\Roaming\npm\ modify the redocly.cmd and redocly.ps1 (if you are using bash or using linux, you also need to modify the redocly file)

     Change the execution paths to run the CLI from (..)/redocly-cli-behind-proxy/bin/cli.js

If something is not clear, create an issue, I'll try to answer     
