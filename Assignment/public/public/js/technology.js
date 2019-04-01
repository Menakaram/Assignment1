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
      var messagesRef = firebase.database().ref('users/');
      var storage = firebase.storage();
      var storageRef = storage.ref();
       messagesRef.orderByChild('category').equalTo('technology').on("value", function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(data) {
          var tangRef = storageRef.child(data.val().heading);
          tangRef.getDownloadURL().then(function(url) {
            var test = url;
            document.querySelector('img').src = test;
          });
          $('#list-data').append("<img src="+ this.test +"width='100' height='100'>");
          $('#list-data').append("<li>"+data.key+"</li>");
          $('#list-data').append("<ol style='list-style-type:upper-roman;'>"+
            "<li>Heading: "+data.val().heading+"</li>"+
            "<li>Author Name: "+data.val().author_name+"</li>"+
            "<li>Description: "+data.val().description+"</li>"+
            "</ol>"
          );
        })
      }) 
      var postsRef = firebase.database().ref();
      function submitForm() {
        var heading = getInputVal('updheading');
        var author_name = getInputVal('updauthor_name');
        var description = getInputVal('upddescription');
        var date_created = firebase.database.ServerValue.TIMESTAMP;
        var user = firebase.auth().currentUser.uid;
          
        saveMessage(heading,author_name,description,date_created,user);
        $('.update').addClass('hide');
      }
      function getInputVal(id) {
        return document.getElementById(id).value;
      }
      function saveMessage(heading,author_name,description,date_created,user) {
        data_to_save = {
          heading: heading,
          author_name: author_name,
          description: description,
          date_created: date_created,
          user: user
        };
        postsRef.child("users/"+author_name).update(data_to_save);
      }
      $(document).ready(function() {
        firebase.auth().onAuthStateChanged(user => {
          if(user) {
            console.log('logged In');
            $('#edit').removeClass('hide');
          }
          else {
            $('#include #btnlogout').addClass('hide'); 
            console.log('Logout');
          }
        });
        $(document).on('click','#include #btnlogout',function(){
          firebase.auth().signOut();
          window.location = 'index.html';
        });
      });
      function edit() {
        $('.update').append(
          "<input type='text' name='updheading' /><br>"+
          "<input type='text' name='updauthor_name' /><br>"+
          "<input type='text' name='upddescription' id='upddescription' /><br>"+
          "<input type='submit' id='updateForm' value='update' onclick='submitForm()'>"
        );
      }
    </script>

