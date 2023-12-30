function triggerDownload(imageURL) {
    const input = document.getElementById("hiddenImage");
    input.value = imageURL;
    input.click();
  }
  