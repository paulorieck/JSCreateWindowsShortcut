const tmp = require("tmp");
const {exec} = require('child_process');
const fs = require('fs');

var createShortcutScript = `set WshShell = WScript.CreateObject("WScript.Shell")
set oShellLink = WshShell.CreateShortcut(WScript.Arguments.Item(0))
oShellLink.TargetPath = WScript.Arguments.Item(1)
oShellLink.IconLocation = WScript.Arguments.Item(2)
oShellLink.WorkingDirectory = WScript.Arguments.Item(3)
oShellLink.Save`;

function writeScriptOnTemp(script, callback) {

    tmp.tmpName({keep: true},  function (err, path) {

        if ( err ) {
            console.log(err);
            return;
        }
    
        fs.writeFile(path+".vbs", script, (err) => {
            if (err) {
                reject(err);
                return;
            }
            callback(path+".vbs");
        });
    });

}

create_windows_shortcut = module.exports = {

    createShortcut: function (target_path, destiny_path, name, icon, callback) {

        writeScriptOnTemp(createShortcutScript, function (tmp_path) {

            console.log("tmp_path: "+tmp_path);
            console.log("");

            if ( typeof icon === "function" ) {
                callback = icon;
                icon = "/NoLogo";
            } else if ( typeof icon === "string" && icon === "" ) {
                icon = "/NoLogo";
            } else if ( typeof icon === "string" && icon !== "" ) {
                icon = '\"' + icon + '\"';
            }

            var run_script = exec('cscript.exe "'+tmp_path+'" "'+destiny_path+'\\'+name+'.lnk" "'+target_path+'" '+icon+' "'+destiny_path+'"');

            run_script.stdout.on('data', (data) => {
                console.log(`plataform_dependent_modules_installation => stdout: ${data}`);
            });
            
            run_script.stderr.on('data', (data) => {
                console.log(`plataform_dependent_modules_installation => stderr: ${data}`);
            });
            
            run_script.on('close', (code) => {
                callback();
            });

        });

    }

}