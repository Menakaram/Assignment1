    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBAbxGA7GDKM30-ET3PrOLufj9s3pW6obE",
        authDomain: "second-assignment-debf4.firebaseapp.com",
        databaseURL: "https://second-assignment-debf4.firebaseio.com",
        projectId: "second-assignment-debf4",
        storageBucket: "second-assignment-debf4.appspot.com",
        messagingSenderId: "384669237406"
      };
      firebase.initializeApp(config);
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const btnlogin = document.getElementById('login');
      btnlogin.addEventListener('click',e => {
        const Email = email.value;
        const Password = password.value;
        const auth = firebase.auth();
        promise = auth.signInWithEmailAndPassword(Email,Password);
        promise.catch(e => console.log(e.message));
      });
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log('logging');
          var user = firebase.auth().currentUser;
	  var emailId = user.email;
	  sessionStorage.setItem('user',emailId);
          window.location = 'home.html';
        }
        else {
          console.log('logout');
          sessionStorage.removeItem('user');
        }
      });
    </script>
