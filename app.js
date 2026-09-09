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
      manifest: "https://diek.us/bubble/manifest.json",
      id: "https://diek.us/bubble/"
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

const navigatorButtonMediaControls = document.getElementById("navigatorButtonMediaControls");

navigatorButtonMediaControls.addEventListener("click", async () => {
  try {
    const result = await navigator.install({
      manifest: "/PWA/MediaControls/App1/manifest.webmanifest",
      manifestId: "https://liahiscock.github.io/PWA/MediaControls/App1/index.html"
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

const navigatorInstallTests = [
  {
    buttonId: "navigatorButtonWhitespaceManifestId",
    options: {
      manifest: " \t /PWA/MediaControls/App1/manifest.webmanifest \n",
      manifestId: " \t /PWA/MediaControls/App1/index.html \n "
    }
  },
  {
    buttonId: "navigatorButtonMismatchedManifestId",
    options: {
      manifest: "/PWA/MediaControls/App1/manifest.webmanifest",
      manifestId: "/PWA/not-the-media-controls-app"
    }
  }
];

const elementInstallTests = [
  ["installCurrentDocument", "installCurrentDocumentResult"],
  ["installRelativeManifestId", "installRelativeManifestIdResult"],
  ["installEmptyManifest", "installEmptyManifestResult"],
  ["installWhitespaceManifest", "installWhitespaceManifestResult"],
  ["installEmptyManifestId", "installEmptyManifestIdResult"]
];

elementInstallTests.forEach((installId) => {
  document.getElementById(installId).addEventListener("installresult", (event) => {
    console.log(installId + ": " + event.result);
  });
});

const navigatorButtonDataErrorOneParam = document.getElementById("navigatorButtonDataErrorOneParam");

navigatorButtonDataErrorOneParam.addEventListener("click", async () => {
  try {
    const result = await navigator.install({ manifest: "https://diek.us/bubble/manifest.json" });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
});