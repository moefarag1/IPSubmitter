// Listen for clicks on the extension icon
chrome.action.onClicked.addListener(function (tab) {
  // Create a new tab with the form page
  chrome.tabs.create({
    url: chrome.runtime.getURL("form.html"),
  });
});

// Listen for messages from the form page
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Received message:", message);
  fetch(
    `https://hostedby-hwphkwyqoq-uc.a.run.app/findip?ip=${encodeURIComponent(
      message.ip
    )}`
  )
    .then((response) => response.json())
    .then((responseData) => {
      // Assign responseData to the data variable
      const data = responseData;
      // Handle successful response
      const result = `Net: ${data.Net}, Start_ip: ${data.Start_ip}, End_ip: ${data.End_ip}, Url: ${data.Url}, Cloudplatform: ${data.Cloudplatform}, Iptype: ${data.Iptype}, Error: ${data.Error}`;
      console.log("Response:", data);
      console.log("Response:", result);
      chrome.runtime.sendMessage({ data: JSON.stringify(result) });
      sendResponse({ success: true });
    })
    .catch((error) => {
      // Handle error
      console.log("Error:", error);
      sendResponse({ success: false, error: error });
    });
  // Indicate that the response will be asynchronous
  return true;
});
