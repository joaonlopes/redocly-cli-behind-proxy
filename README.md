The purpose of this fork is to keep an hack that allows using the redocly cli behind a proxy. The change is only on 2 files push.ts and registry-api.ts. It requires package https-proxy-agent.

I made the fork from Main. 

How I use this hack :

  1. Clone this repo
  2. Run npm install
  3. Run npm compile 
  4. Install the latest version of redocly api (currently 1.6.0)
     npm install @redocly/cli -g
     
  6. This install the cli in C:\Users\myUser\AppData\Roaming\npm\
  7. Go into node_modules\@redocly and create a copy the cli folder. Call it "redocly-cli-behind-proxy"

     Copy the modified files from the cloned folder (I don't know which files are needed so I copy all of them) :
     
            E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\cli\lib\commands\push.d.ts     --to-->     C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\lib\commands 
            E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\cli\lib\commands\push.js       --to-->     C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\lib\commands

             
           E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\core\lib\redocly\registry-api.d.ts              --to-->  C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\node_modules\@redocly\openapi-core\lib\redocly
           E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\core\lib\redocly\registry-api.js                --to-->  C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\node_modules\@redocly\openapi-core\lib\redocly
           E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\core\lib\redocly\registry-api-types.d.ts        --to-->  C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\node_modules\@redocly\openapi-core\lib\redocly
           E:\Tmp\git-clone\redocly-cli-behind-proxy\packages\core\lib\redocly\registry-api-types.js          --to-->  C:\Users\Myuser\AppData\Roaming\npm\node_modules\@redocly\redocly-cli-behind-proxy\node_modules\@redocly\openapi-core\lib\redocly
           
         

  9. Back in the  C:\Users\myUser\AppData\Roaming\npm\ modify the redocly.cmd and redocly.ps1 (if you are using bash or using linux, you also need to modify the redocly file)

     Change the execution paths to run the CLI from (..)/redocly-cli-behind-proxy/bin/cli.js

If something is not clear, create an issue, I'll try to answer     

I only tested this on Windows and for my specific case, it's very possible that it won't work for everybody.

There is an issue with the organization parameter though, for some reason it requires having a redocly.yaml file. Otherwise the push won't recognize the organization.

Run it using:


 redocly push openapi.yaml --destination="API_REGISTRY@VERSION"
