const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const emailRoutes = require("./routes/emailRoutes");

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");


//Signup and login
app.use("/email", emailRoutes);
app.use("/emails", emailRoutes);
app.use("/emailss", emailRoutes);
app.use("/emailsss", emailRoutes);
app.use("/emailsssa", emailRoutes);
app.use("/emailsssadmin", emailRoutes);
app.use("/emailslawsign", emailRoutes);
app.use("/emailsusersign", emailRoutes)


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});



// // Firebase Authentication se user delete karna
// admin.auth().deleteUser(uidToDelete)
//   .then(() => {
//     console.log("User deleted from Firebase Authentication");

//     // Firestore se user data delete karna
//     const db = admin.firestore();
//     db.collection("users").doc(uidToDelete).delete()
//       .then(() => {
//         console.log("User data deleted from Firestore");
//       })
//       .catch((error) => {
//         console.error("Error deleting user data from Firestore:", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Error deleting user from Firebase Authentication:", error);
//   });



app.post("/delete-user", async (req, res) => {
  try {
    const uidToDelete = req.body.uid;

    // Delete user from Firebase Authentication
    await admin.auth().deleteUser(uidToDelete);

    console.log("User data deleted from Firestore", uidToDelete);
    res.json({ message: "User account deleted successfully." });
  } catch (error) {
    console.error("Error deleting user data:", error);
    res.status(500).json({ message: "Error deleting user data" });
  }
});






app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
