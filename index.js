const MESG = require('mesg-js').service()
const bodyParser = require('body-parser')
const app = require('express')()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', async (req, res) => {
  const response = await MESG.emitEvent('request', {
    headers: req.headers,
    data: req.body,
  })
  res.send(response)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
