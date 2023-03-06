// Get the form element
var form = document.querySelector("form");

// Listen for the form submission event
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the IP address from the form input
  var ip = document.getElementById("ip-address").value;

  // Send a message to the background script with the IP address
  chrome.runtime.sendMessage({ ip: ip }, function (response) {
    if (response.success) {
      // Redirect to the result page
      var resultUrl = chrome.runtime.getURL("result.html") + "?ip=" + ip;
      window.location.href = resultUrl;
    } else {
      // Handle error
      alert("Error: " + response.error);
    }
  });
});
