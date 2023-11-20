console.log("Iframe Loaded");

setTimeout(() => {
    navigator.serviceWorker.register("./sw.js").then(res => {
        console.log("Service worker registered");
    })
}, 5000);

