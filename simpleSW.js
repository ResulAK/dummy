try {
  self.addEventListener("install", () => {
    console.log("SW installed");
  })
  self.addEventListener("activate", () => {
    console.log("SW activated")
  })
} catch(error) {
  console.log("Error occured in sw: ", error);
}
