let express = require('express') 
let bodyParser = require('body-parser')
let nodemailer = require('nodemailer')
let app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const CONTACT_ADDRESS = 'rahuljain13101999@gmail.com';

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: 'rahul.website.worker@gmail.com',
    pass: 'HE3kkSzv'
  }
}

var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) console.log(error);
  else console.log('Server is ready to take messages');
});

app.post('/contact', (req, res, next) => {
  var from = req.body.from || 'Anonymous'
  var email = req.body.email || 'No Email Provided'
  var message = req.body.message
  var subject = 'Contact Website: '+ ( req.body.subject || '[No subject]' )
  var content = `name: ${from} \n email: ${email} \n message: ${message} `

  var mail = {
    from: from,
    to: [CONTACT_ADDRESS],  //Change to email address that you want to receive messages on
    subject: subject,
    text: content
  }

  console.log(mail)

  transporter.sendMail(mail, (err, data) => {
    console.log('Mail Response')
    if (err)  {
      console.log(err)
      res.status(404).json({'msg': 'fail'})
    }
    else {
      console.log('successful mail send')
      res.status(200).json({'msg': 'success'})
    }
  })
})

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server running at port 3000')
});