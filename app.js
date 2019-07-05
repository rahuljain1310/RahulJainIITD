const http = require('http');
const port = process.env.PORT || 3000

const CONTACT_ADDRESS = 'rahuljain13101999@gmail.com';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

var mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: 'rahul.website.worker@gmail.com',
    pass: 'elex1310',
  }
});

server.post('/contact', function(req, res) {
  mailer.sendMail({
    from: req.body.from,
    to: [CONTACT_ADDRESS],
    subject: req.body.subject || '[No subject]',
    html: req.body.message || '[No message]',
  }, function(err, info) {
    if (err) return res.status(500).send(err);
    res.json({success: true});
  })
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});