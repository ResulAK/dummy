


onmessage = (e) => {
    console.log("Message Received from main script");
    postMessage("Message from Worker");
}


