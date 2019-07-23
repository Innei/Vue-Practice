const express = require("express");
const app = express();

app.set('secret', 'absskjakfjsd') // 设置秘钥

app.use(require("cors")());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db.js')(app)
require('./admin/index')(app)

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
