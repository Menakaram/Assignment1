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
      const btnsignup = document.getElementById('signup');
      btnsignup.addEventListener('click',e => {
        const Email = email.value;
        const Password = password.value;
        const Auth = firebase.auth();
        const promise = Auth.createUserWithEmailAndPassword(Email,Password);
        promise
          .then(user=>console.log(user));
        
      });
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log('logging');
          window.location = 'home.html'; 
        } else{
          console.log('logout')
        }
      });
    </script>
