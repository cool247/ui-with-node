const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__filename, '../../public');
const port = 5000;
console.log(publicDirectoryPath);

//middleware
app.use(express.static(publicDirectoryPath));

app.get('/data', (req, res) => {
	res.send({
		sensor: 'abcd123',
		user: 'xyz123'
	});
});

//server listner
app.listen(port, () => {
	console.log('Server started on ' + port);
});
