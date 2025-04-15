const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// use after runing npm build to server react app - not needed until deployment
//app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
