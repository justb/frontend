const http = require("http")
const fs = require("fs")
const hostname = "127.0.0.1"
const port = 8080
http
	.createServer((req, res) => {
		if (req.url.includes("world")) {
			fs.readFile("./world2.json", "utf-8", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html" })
				res.write(data)
				res.end()
			})
		} else {
			fs.readFile("./earch-3d.html", "utf-8", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html" })
				res.write(data)
				res.end()
			})
		}
	})
	.listen(port, hostname, () => {
		console.log("Server running at " + hostname + ":" + port)
	})
