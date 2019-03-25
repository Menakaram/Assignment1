var config = {
    apiKey: "AIzaSyD2qxByifwbSARxHTIb9N7kfwqlp7Po2fU",
    authDomain: "assignment-99f6e.firebaseapp.com",
    databaseURL: "https://assignment-99f6e.firebaseio.com",
    projectId: "assignment-99f6e",
    storageBucket: "assignment-99f6e.appspot.com",
    messagingSenderId: "1075541919700"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('products');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var company = getInputVal('company');
  var country = getInputVal('country');
  var interest = getInputVal('interest');
  var role = getInputVal('role');

  // Save message
  saveMessage(fname, lname, phone, email, company, country, interest, role);// Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, altphone, degree, experience, role){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname:fname,
    lname:lname,
    phone:phone,
    email:email,
    company:company,
    country:country,
    interest:interest,
    role:role
  });
}
