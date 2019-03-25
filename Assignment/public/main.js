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
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var altphone = getInputVal('altphone');
  var degree = getInputVal('degree');
  var experience = getInputVal('experience');
  var role = getInputVal('role');

  // Save message
  saveMessage(name, phone, email, altphone, degree, experience, role);// Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  var timestamp = Number(new Date())
  var storageRef = firebase.storage().ref(timestamp.toString());
  var file_data = $('#resume').prop('files')[0];
  storageRef.put(file_data);
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
    name: name,
    phone:phone,
    email:email,
    altphone:altphone,
    degree:degree,
    experience:experience,
    role:role
  });
}
