const accountSid = 'ACa5b284923945542eb58efdc515d215b9';
const authToken = '055fabc1248c9b8801cdef34cd438ae0';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Stay Safe!',
     from: '+12029310668',
     to: '+237683616156'
   })
  .then(message => console.log(message.sid));