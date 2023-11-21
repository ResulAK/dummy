// Setup the WorkerPool
var wp = google.gears.workerPool;

// Allow a cross-origin script to run this
wp.allowCrossOrigin();
wp.onmessage = function(a,b,messageObject) {
  // Ignore messages from unexpected origins

  if(messageObject.origin == 'http://www.expectedorigin.com') {
    // Create LocalServer
    var localServer = google.gears.factory.create('beta.localserver');

    // Create ResourceStore (Could also use ManagedResourceStore)
    var store = localServer.createStore('Cross_Origin_Store');

    // We are capturing the filename sent to us by the 
    // WorkerPool (crossOriginResource.html)
    var fileToCapture = messageObject.text;

    // Capture the file
    store.capture(fileToCapture, function(url, success, captureId){
      // When capture finishes, let the WorkerPool know the status
      // This will cause workerPool.onmessage to alert the message received
      wp.sendMessage(url + ' captured ' + (success ? 'succeeded' : 'failed'), messageObject.sender);
    });
  }
}
