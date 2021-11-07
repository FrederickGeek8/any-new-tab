var urlTextInput = document.getElementById("url");
var saveButton = document.getElementById("save");
var exitButton = document.getElementById("exit");
var settingsButton = document.getElementById("settings");
var frame = document.getElementById("frame");
var dialog = document.getElementById("dialog");

chrome.storage.local.get(['url'], function(result) {
  console.log(result);
  if (Object.keys(result).length == 0) {
    urlTextInput.value = "";
  } else {
    urlTextInput.value = result.url;
    frame.src = result.url;
  }
});

saveButton.onclick = function() {
  frame.src = urlTextInput.value;
  chrome.storage.local.set({url: urlTextInput.value}, function() {
    console.log('url is set to ' + urlTextInput.value);
  });
};

exitButton.onclick = function() {
  dialog.style.display = "none";
};

settingsButton.onclick = function() {
  dialog.style.display = "block";
};