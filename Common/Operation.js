import {http} from "../api.js";
// class Operations{
//     initializeAppRefForWin(port,bundleIdentifierOrAppLaunchPath,isUWPApp,launchTimeOut){
//         let data = JSON.stringify({
//             "bundleIdentifierOrAppLaunchPath": bundleIdentifierOrAppLaunchPath,
//             "isUWPApp": isUWPApp,
//             "launchTimeOut":launchTimeOut
//           });
//         url = `http://localhost:${port}/windows/launchApp`,
//         http("post",url,data)
//     }
// }

async function initializeAppRefForWin(port,bundleIdentifierOrAppLaunchPath,isUWPApp,launchTimeOut){
    let data = JSON.stringify({
        "bundleIdentifierOrAppLaunchPath": bundleIdentifierOrAppLaunchPath,
        "isUWPApp": isUWPApp,
        "launchTimeOut":launchTimeOut
      });
    let url = `http://localhost:${port}/windows/launchApp`
    let aa = await http("post",url,data)
    console.log(aa)
}


initializeAppRefForWin(8080,"C:\\WINDOWS\\System32\\calc.exe",true,10000)