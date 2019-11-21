const express = require('express');
const path = require('path');
const port = process.env.PORT || 4260;
const app = express();

const destinationDir = path.join(__dirname, "../dist/product-bazar");

// hosting from dist folder
app.use(express.static(destinationDir));
console.log(`Express hostimg from ${destinationDir}`);

// serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(destinationDir, 'index.html'));
});
console.log(`Serving index.html`);

// initialise app and listen to port 4260
app.listen(port, ()=> {
    console.log(`server is running from port ${port}`);
})

// this whole page created a server 