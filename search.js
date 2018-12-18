String.prototype.replaceChars = function (character, replacement) {
    let str = this;
    let a;
    let b;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === character) {
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
};

function search(query) {
    window.location = "https://www.google.com/search?source=hp&ei=ZboYXLWPN8mKsAHnuIWQBg&q=" + query.replaceChars(" ", "+");
}

window.onload = function () {
    // search
    let searchinput = document.getElementById("searchbox");
    if (!!searchinput) {
        searchinput.addEventListener("keypress", function (a) {
            let key = a.keyCode;
            if (key === 13) {
                let query = this.value;
                search(query);
            }
        });
    }
};