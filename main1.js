const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {
	requestCount++

	response.write('MaxShowPro:' + requestCount)
	response.end()
})

server.listen(3000)