/*
    Copyright (C) 2023 Gruetzig
    Copyright (C) 2023 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

// required as vitepress don't always fully reload page
// without putting script in its own scope will have const redefine issue
(() => {
function redirect() {
    const incrementalVersion = document.getElementById("versioninput").value;
    const isQuest3 = document.getElementById("quest3").checked;
    const isQuest3s = document.getElementById("quest3s").checked;
    document.getElementById("result_noneSelected").style.display = "none";
    document.getElementById("result_invalidVersion").style.display = "none";
    if ((!isQuest3) && (!isQuest3s)) {
        document.getElementById("result_noneSelected").style.display = "block";
        return;
    }

    if (incrementalVersion == '' || isNaN(incrementalVersion)) {
        document.getElementById("result_invalidVersion").style.display = "block";
        return;
    }

    var numVersion = BigInt(incrementalVersion);


    if (isQuest3) {
        if (numVersion <= 51154110129000520n) {
            window.location.href = "installing-eventhorizon";
            return true;
        }
    }
    else if (isQuest3s) {
        if (numVersion <= 1176880085300610n) {
            window.location.href = "installing-eventhorizon";
            return true;
        }
    }

    // if it actually got to this point, there is no exploit available.
    document.getElementById("result_methodUnavailable").style.display = "block";
    return false;
}

window.redirect = redirect;

})();
