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
