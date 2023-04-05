const express = require('express');
const PORT = 3000;
const path = require('path');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/task.html'));
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
