# IPSubmitter

IPSubmitter is a Chrome extension that allows users to submit an IP address to a web service, retrieve data related to the IP address, and display it to the user.

The extension consists of a background script, a result script, and several HTML files. When the user clicks on the extension icon, a new tab is created with a form where the user can enter an IP address. When the form is submitted, the IP address is sent to the background script, which makes a request to a web service to retrieve information about the IP address. The response from the web service is then sent back to the result script, which displays it to the user.

The remote server returns information about the IP address, such as its network, start IP, end IP, URL, cloud platform, and IP type.

The background script is responsible for listening to messages from the form page, making requests to the web service, and sending responses back to the result script. The result script is responsible for listening to messages from the background script and updating the HTML of the page with the response data.

The extension uses the Chrome extension API to create and manipulate tabs, send and receive messages between the background and result scripts, and make requests to the web service.

Overall, the IPSubmitter extension provides a simple and efficient way for users to retrieve information about an IP address directly from their browser.
