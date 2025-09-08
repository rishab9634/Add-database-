// 👇 Paste your Firebase Config here
const firebaseConfig = {

apiKey: "AIzaSyBpyga02eTTnH3gqc1-w6v3dc3588Cfm_U",

authDomain: "portfolio-b1236.firebaseapp.com",

}; projectId: "portfolio-b1236", storageBucket: "portfolio-b1236.firebasestorage.app", messagingSenderId: "910375006420", appId: "1:910375006420:web:83ae0e7ed79dac73cecb41", measurementId: "G-YG2BH3FQHM"
};
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = e.target[0].value;
  let email = e.target[1].value;
  let message = e.target[2].value;

  database.ref("messages").push({
    name: name,
    email: email,
    message: message
  });

  alert("✅ Message Sent & Saved in Database!");
  e.target.reset();
});
// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// Database ka reference
const database = firebase.database();