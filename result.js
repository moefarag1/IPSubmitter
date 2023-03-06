// Extract the IP address from the URL parameters
const queryParams = new URLSearchParams(window.location.search);
const ip = queryParams.get("ip");

// Make a request to the background script with the IP address
chrome.runtime.sendMessage({ ip: ip }, function (response) {
  if (response.success) {
    // Display the response data
    console.log("Response:", response.message);
    document.getElementById("result").textContent = JSON.stringify(
      response.message
    );
  } else {
    // Handle error
    console.log("Error:", response.error);
    document.getElementById("result").textContent = response.error;
  }
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message) {
  // Display the response data
  console.log("Response:", message.data);
  document.getElementById("result").textContent = message.data;
});
