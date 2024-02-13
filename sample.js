


console.log("Hello");

function setCookie(cname, cvalue, exdays, domain, path) {
    console.log("Set cookie called");
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    let cookieString = cname + "=" + cvalue;

    console.log(cookieString);
    // Add domain if provided
    if (domain) {
        cookieString += ";domain=" + domain;
    }

    // Add path if provided
    if (path) {
        cookieString += ";path=" + path;
    } else {
        cookieString += ";path=/"; // Default path
    }

    cookieString = cookieString + ";" + expires;

    console.log(cookieString);
    document.cookie = cookieString;
}

setTimeout(() => {
    console.log("Setting cookie");
    // setCookie("Anand", "Krishna", 3, ".resulak.github.io")

    document.cookie = 'Hello=World; path=/; expires=Thu, 12 Feb 2026 12:10:24 GMT; domain=resulak.github.io; '
}, 3000);
