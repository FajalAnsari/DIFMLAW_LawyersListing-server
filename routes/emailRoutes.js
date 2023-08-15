const express = require("express");
const router = express.Router();
const { sendEmail, sendEmails, sendEmailSubs, sendEmaillaw, sendEmailAdd, sendEmailAdmin, sendEmailLawyersign, sendEmailUsersign  } = require("../controllers/emailControllers");

router.post("/sendEmail", sendEmail);
router.post("/sendEmails", sendEmails);
router.post("/sendEmailSubs", sendEmailSubs);
router.post("/sendEmaillaw", sendEmaillaw);
router.post("/sendEmailAdd", sendEmailAdd);
router.post("/sendEmailAdmin", sendEmailAdmin);
router.post("/sendEmailLawyersign", sendEmailLawyersign);
router.post("/sendEmailUsersign", sendEmailUsersign);


module.exports = router;