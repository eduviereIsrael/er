const express = require('express');
const serverless = require('serverless-http');
const multer  = require('multer');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const cors = require('cors')
const Properties = require('./properties')
const jwt = require('jsonwebtoken')

const admin = {
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
  _id: process.env.USER_ID
}

const auth = (req, res, next) => {
  const token = req.headers('x-access-token')
  if (!token){
    res.send("we need a token")
  }else {
    jwt.verify(token, "jwtsecret", (err, decoded) => {
      if (err){
        res.json({auth: false, message: "you failed to authenticate"})
      } req.userId = decoded.id;
    })
  }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      let newFileName =  uniqueSuffix + '-' + file.originalname
    //   fileArray.push(newFileName)
      cb(null, newFileName)
    }
})

const upload = multer({storage: storage})

// try {
//   mongoose.connect('mongodb://er:steverogers2019@ac-e1wtska-shard-00-00.xas6bt2.mongodb.net:27017,ac-e1wtska-shard-00-01.xas6bt2.mongodb.net:27017,ac-e1wtska-shard-00-02.xas6bt2.mongodb.net:27017/?ssl=true&replicaSet=atlas-vm3d3v-shard-0&authSource=admin&retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
      
//   });

//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, "connection error"))
//   db.once('open', () => {
//       console.log('Dataabse connected');
//   });
// } catch (err) {
//   console.log(err)
// }



app.use(cors())
app.use(express.json())

router.get('/', (req, res)=> {
    res.send('We hit the backend')
})

router.post('/profile', upload.single('file'), (req, res) => {
    const files = req.file.filename
    console.log(req.file)
    res.status(200).json({"message": "I see you", "imgs": files})
    // res.send('Image uploaded')
})

router.post('/login', (req, res) => {
    const {email, password} = req.body
    if (password === admin.password && email === admin.email){
      const {id} = admin._id;
      const token = jwt.sign({id}, "jwtsecret", {
        expiresIn: 300
      })
      res.status(200).json({auth: true, token: token})
      // res.status(200).json({"email": email, "password": password})
    } else (
      res.status(403).json({"message": "email or password is incorrect"})
    )
    
    // console.log(email, password)
})

router.get('/propertydetails',auth, (req, res) => {
  res.status(200).json({message: "You are authenticated"})
})

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app)
