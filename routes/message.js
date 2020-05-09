const express = require('express');

const router = express.Router();

const MessageCtrl = require('../controllers/message');
const auth = require('../middleware/guideAuth');


router.post('guide/chat-messages/:sender_Id/:receiver_Id',auth,MessageCtrl.SendMessage)

module.exports = router;