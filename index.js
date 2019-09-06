const express = require('express');
const mongos = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


const db = mongos.connect('mongodb://localhost/mydb', { useNewUrlParser: true })
  .then(() => console.log("Conncected to MongoDB"))
  .catch(err => console.log('Not connceted'));

const productSchema = mongos.Schema({
  "id" : String,
  "name" : String
});

const userSchema = mongos.Schema({
  "name" : String,
  "isAdmin" : String,
  "password" : String
});

const Product = mongos.model('Product', productSchema);
const User = mongos.model('User', userSchema);

async function getUser() {
  const name = "Raju";
  const password = "1234"
  const result = await User.find({"name" : name, "password" : password });
  console.log('Users status OK');
}
getUser();

async function createProduct() {
  const product = new Product({
      id: '9999',
      name: 'Sample'
    });
  const result = await product.save();
  console.log(result);
}
//createProduct();

async function getProduct() {
  const result = await Product.find();
  console.log("Products Status OK");
}
getProduct();


app.post('/products', async(req, res)=> {
  // const res_data = JSON.parse(req.body);
  const product = new Product({
    id: req.body.id,
    name: req.body.name
  });
  const result = await product.save();
  res.send(result);
})

app.get('/products', async(req, res)=> {
  const result = await Product.find();
  res.send(result);
})

app.get('/users/:user', async(req, res)=> {
  result = await User.findOne({name : req.params.user});
  res.send(result);
})

app.post('/login', async(req, res)=> {
  const email = req.body.email;
  const password = req.body.password;
  result = await User.findOne({"email" : email, "password" : password });
  res.send(result);
})

app.listen(port, () =>{
  console.log(`Ekart app listining on port ${port}`)
})

