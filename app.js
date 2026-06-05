const registerServiceWorker = async () => {
    try {
      await navigator.serviceWorker.register('/PWA/FileSystemAccess/sw.js', { scope: '/PWA/FileSystemAccess/'});
      console.log('Service worker registered');
    } catch (e) {
      console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
  registerServiceWorker();
}

const navigatorButtonPOC = document.getElementById("navigatorButtonPOC");

navigatorButtonPOC.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest";
    await navigator.installFromManifest(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

const navigatorButtonDict = document.getElementById("navigatorButtonDict");

navigatorButtonDict.addEventListener("click", async() => {
  try {
    await navigator.install({ manifest: "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest" }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});