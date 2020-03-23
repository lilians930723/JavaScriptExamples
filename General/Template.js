var title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);

    /*     if (title.length > 0) {
            console.log(`=============${title}=============`);
        } else {
            var title = "=".repeat(60);
            console.log(title);
        } */
}

var print = function (value) {
    console.log(value);
}