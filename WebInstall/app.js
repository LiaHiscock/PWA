const kbhlee2paramsbtn = document.getElementById("kbhlee2params");

kbhlee2paramsbtn.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
    let manifest_id = "https://kbhlee2121.github.io/WebInstallSample";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});