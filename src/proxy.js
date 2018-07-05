
const URL = require('url');
const HTTPS = require('https');
const HTTP = require('http');

const getUrlOptions = function(url) {
	var httpParams = URL.parse(url);
	delete httpParams.host;
	delete httpParams.href;
	delete httpParams.pathname;
	for (key in httpParams) {
		if (!httpParams[key]) {delete httpParams[key]}
	}

	return httpParams;
}

module.exports = function(request, response) {
		request.pause();

		var httpParams = getUrlOptions(request.url);
		httpParams.protocol = 'http:'
		httpParams.hostname = 'localhost'
		httpParams.port = 8060

		httpParams.method = request.method;
		httpParams.headers = request.headers;

		console.log(httpParams)

		var pRequest = HTTP.request(httpParams, (pResponse) => {
			pResponse.pipe(response)
			//pResponse.on('error', console.error)
		});

		request.pipe(pRequest);
		request.resume()

		pRequest.on('error', () => 
		{response.statusCode = 500;response.end()})
}
