chrome.action.onClicked.addListener((tab) => {
  console.log("CLICKED")
  chrome.management.get('hdokiejnpimakedhajhdlcegeplioahd', ({ enabled }) => {
    chrome.management.setEnabled('hdokiejnpimakedhajhdlcegeplioahd', !enabled);
    console.log("ENABLED", enabled);
  });
});
