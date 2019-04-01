    <script>
      var config = {
        apiKey: "AIzaSyBAbxGA7GDKM30-ET3PrOLufj9s3pW6obE",
        authDomain: "second-assignment-debf4.firebaseapp.com",
        databaseURL: "https://second-assignment-debf4.firebaseio.com",
        projectId: "second-assignment-debf4",
        storageBucket: "second-assignment-debf4.appspot.com",
        messagingSenderId: "384669237406"
      };
      firebase.initializeApp(config);
      $(document).ready(function() {
        var postsRef = firebase.database().ref();
        document.getElementById('postForm').addEventListener('submit', submitForm);
        function submitForm(e) {
          e.preventDefault();
          var heading = getInputVal('heading');
          var category = getInputVal('category');
          var author_name = getInputVal('author_name');
          var description = getInputVal('description');
          var date_created = firebase.database.ServerValue.TIMESTAMP;
          var user = firebase.auth().currentUser.uid;

          saveMessage(heading,category,author_name,description,date_created,user);
          var head = heading
          var storageRef = firebase.storage().ref(head.toString());
          var file_data = $('#img').prop('files')[0];
          storageRef.put(file_data);
          document.getElementById('postForm').reset();
        }
        function getInputVal(id) {
          return document.getElementById(id).value;
        }
        function saveMessage(heading, category, author_name, description, date_created, user) {
          data_to_save = {
            heading: heading,
            category: category,
            author_name: author_name,
            description: description,
            date_created: date_created,
            user: user
          };
          postsRef.child("users/"+author_name).set(data_to_save);
        }
        $(document).on('click','#include #btnlogout',function(){
          firebase.auth().signOut();
        });
        firebase.auth().onAuthStateChanged(user => {
          if(user) {
            console.log('logged In');
          }
          else {
            console.log('Logout');
            window.location='index.html';
          }
        });
      });
    </script>

