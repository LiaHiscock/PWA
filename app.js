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

const navigatorButtonNoParams = document.getElementById("navigatorButtonNoParams");

navigatorButtonNoParams.addEventListener("click", async () => {
  try {
    const result = await navigator.install();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

const navigatorButtonOneParam = document.getElementById("navigatorButtonOneParam");

navigatorButtonOneParam.addEventListener("click", async () => {
  try {
    const result = await navigator.install({
      manifest: "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest"
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

const navigatorButtonTwoParams = document.getElementById("navigatorButtonTwoParams");

navigatorButtonTwoParams.addEventListener("click", async () => {
  try {
    const result = await navigator.install({
      manifest: "https://diek.us/bubble/",
      id: "https://diek.us/bubble/"
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

const navigatorButtonDataErrorOneParam = document.getElementById("navigatorButtonDataErrorOneParam");

navigatorButtonDataErrorOneParam.addEventListener("click", async () => {
  try {
    const result = await navigator.install({ manifest: "https://diek.us/bubble/" });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});