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

const navigatorButton = document.getElementById("navigatorButton");

navigatorButton.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest";
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});