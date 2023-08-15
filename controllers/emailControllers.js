const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer")


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    user: "sitanshu@difmlaw.com",
    pass: "szpznjexlfsldciu"
    },
  });
  
  const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email, message } = req.body;
    console.log(email, message);
  
    var mailOptions = {
      from: '"Admin 👻" <sitanshu@difmlaw.com>',
      to: "sitanshu@difmlaw.com",
      subject: "New Contact Us Inquiry from DIFM Law Portal",
      html: `Dear Admin,<br><br>A new inquiry has been submitted through the Contact Us form on the DIFM Law portal.<br><br>Sender's Email: ${email}<br>Message: ${message}<br><br>Please review and respond to this inquiry promptly to address any concerns or provide<br>necessary assistance.<br><br>Thank you for your attention to this matter.<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  const sendEmails = expressAsyncHandler(async (req, res) => {
    const { email, username, message } = req.body;
    console.log(email, username, message);
  
    var mailOptions = {
      from: '"user 👻" <sitanshu@difmlaw.com>',
      to: "sitanshu@difmlaw.com",
      subject: "New Contact Us Inquiry from DIFM Law Portal",
      html: `Dear Admin,<br><br>A new inquiry has been submitted through the Contact Us form on the DIFM Law portal.<br><br>Sender's Email: ${email}<br>Name: ${username}<br>Message: ${message}<br><br>Please review and respond to this inquiry promptly to address any concerns or provide<br>necessary assistance.<br><br>Thank you for your attention to this matter.<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });


  const sendEmailSubs = expressAsyncHandler(async (req, res) => {
    const { email} = req.body;
    console.log(email);
  
    var mailOptions = {
      from: email,
      to: email,
      subject: "Thank You for Subscribing to DIFM Law Updates",
      html: `Dear Subscriber,<br><br>Thank you for subscribing to DIFM Law updates. We are thrilled to have you as part of our<br>community!<br><br>As a subscriber, you will receive the latest news, legal insights, and updates related to our<br>platform and the legal industry. We are committed to providing valuable information and<br>ensuring that you stay informed.<br><br>Should you ever wish to unsubscribe or update your subscription preferences, you can do so<br>by clicking the "unsubscribe" link in any of our emails.<br><br>If you have any questions or need assistance, please don't hesitate to contact us at<br>support@difmlaw.com. We are always here to help.<br><br>Once again, thank you for subscribing to DIFM Law's updates. We look forward to sharing<br>exciting content with you.<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  const sendEmaillaw = expressAsyncHandler(async (req, res) => {
    const { name, email, number, lawyerEmail, message } = req.body;
    console.log(name, email, number, lawyerEmail, message);
  
    var mailOptions = {
      from: lawyerEmail,
      to: lawyerEmail,
      subject: "New Message Alert: Potential Client Awaits!",
      html: `Hello ${name},<br><br>A new message awaits you. Might this be a prospective client? View it immediately.<br><br><b>Tap here to access the message.</b><br><br>If the button fails, kindly access your DIFM Law account to read and swiftly reply to the<br>sender. Prompt replies can greatly impact those in search of legal aid.<br><br><b>Access your account:</b> https://difmlaw.com<br><br>Appreciation for your unwavering commitment as a Lawyer/attorney!<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  const sendEmailAdd = expressAsyncHandler(async (req, res) => {
    const { name, email, password} = req.body;
    console.log(name, email, password);
  
    var mailOptions = {
      from: email,
      to: email,
      subject: "Welcome to DIFM Law",
      html: `Hello ${name},<br><br>Welcome to  DIFM Law, the premier platform connecting lawyers with people needing legal<br>aid. Your profile is now active. Here are your login credentials.<br><br><b>Login Email:</b> ${email}<br><b>Password:</b> ${password}<br><br><b>Login Link:</b> https://difmlaw.com/login<br><br>Your profile will be visible once you have completed your personal details and our admin<br>team reviews and approves you. We might need to call or email you for verification, in case<br>required. Kindly ensure to provide all the required details on the profile to get approved<br>quickly.<br><br>Please keep your profile up to date for better networking.<br>Explore, connect, and succeed!<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });


  const sendEmailAdmin = expressAsyncHandler(async (req, res) => {
    const { name, email, password,lawyer_id } = req.body;
    console.log(name, email, password, lawyer_id);
  
    var mailOptions = {
      from: '"user 👻" <sitanshu@difmlaw.com>',
      to: "sitanshu@difmlaw.com",
      subject: "Confirmation - Lawyer Profile Successfully Added on DIFM Law",
      html: `Dear Admin,<br><br>This is to inform you that a new lawyer profile has been successfully added to DIFM Law:<br><br><b>Lawyer Name:</b> ${name}<br><b>Profile Link:</b> http://localhost:3000/job/${lawyer_id}<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  const sendEmailLawyersign = expressAsyncHandler(async (req, res) => {
    const {name, email} = req.body;
    console.log(email, name);
  
    var mailOptions = {
      from: email,
      to: email,
      subject: "Welcome to DIFM Law - Your Legal Networking Platform",
      html: `Hello ${name},<br><br>Welcome to DIFM Law! We're thrilled to have you onboard as a legal professional on our<br>platform. Your lawyer profile has been successfully created, and you're now part of a dynamic community<br>of legal experts.<br><br>With DIFM Law, you have the power to enhance your legal practice in various ways:<br><b>Edit Profile:</b> Personalize your profile to showcase your skills, expertise, and achievements.<br>Keep your information updated to make a strong impression.<br><b>Receive Messages:</b> Stay connected with potential clients by receiving and responding to<br>messages directly from those seeking legal assistance.<br><b>Networking:</b> Build your professional network by connecting with fellow lawyers and legal<br>professionals.<br><b>Category Search:</b> Explore the platform to find opportunities in your area of expertise,<br>connecting you with potential clients seeking specialized assistance.<br>To begin, simply log in using the following link:<br><br><b>Difmlaw Login Link:</b> https://difmlaw.com/login<br><br>We're committed to supporting your legal journey. If you have any questions or require<br>assistance, feel free to reach out to our dedicated support team at support@difmlaw.us.<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  const sendEmailUsersign = expressAsyncHandler(async (req, res) => {
    const {name, email} = req.body;
    console.log(email, name);
  
    var mailOptions = {
      from: email,
      to: email,
      subject: "Welcome to DIFM Law - Your Legal Resource",
      html: `Hello ${name},<br><br>Welcome to DIFM Law! We're delighted to have you as a user on our platform, your gateway<br>to the world of legal assistance. You're now part of a community where you can access legal<br>expertise and connect with professionals who can help navigate legal matters.<br><br>Here's how DIFM Lawn empowers you:<br><b>Find Lawyers:</b> Explore our directory to discover lawyers specializing in various fields,<br>making it easy to find the right professional for your needs.<br><b>Send Messages:</b> Reach out to lawyers directly by sending messages to discuss your legal<br>concerns and requirements.<br><b>Search By Category:</b> Browse lawyers by category to locate experts in the specific area of<br>law you need assistance with.<br><b>Stay Informed:</b>  Access legal insights and stay informed about trends and discussions in the<br>legal world.<br><br>To get started, simply log in using the following link:<br><br><b>DIFM Law Login Link:</b> https://difmlaw.com/login<br><br>Your legal journey begins here. If you have any inquiries or need support, please don't<br>hesitate to contact our team at support@difmlaw.com.<br><br>Best regards,<br><b>Fazal Ansari,</b><br>Project Coordinator<br>Team <a href="https://www.difm.llc"><b>DIFM LAW</b></a><br>A unit of <a href="https://www.difmlaw.com"><b>DO IT FOR ME LLC.</b></a>`,
    
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
      }
    });
  });

  module.exports = { sendEmail, sendEmails, sendEmailSubs, sendEmaillaw, sendEmailAdd, sendEmailAdmin, sendEmailLawyersign, sendEmailUsersign};