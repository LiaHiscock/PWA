const navigatorButton = document.getElementById("navigatorButton");

navigatorButton.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});