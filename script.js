const firebaseConfig = {
    apiKey: "AIzaSyAe-_WfpgKfSfU9CMn-B1rcbOV44HZK9YY",
    authDomain: "chatapp-e0dcd.firebaseapp.com",
    databaseURL: "https://chatapp-e0dcd-default-rtdb.firebaseio.com",
    projectId: "chatapp-e0dcd",
    storageBucket: "chatapp-e0dcd.appspot.com",
    messagingSenderId: "166512332362",
    appId: "1:166512332362:web:1fd6a1c73371facf14a0b3",
    measurementId: "G-Z5VMGNGWBT"
    };

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const databaseRoom = firebase.database();


    function createAccount(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var btn = document.getElementById("btn");
        btn.innerHTML = `<i class="fa-solid fa-spinner"></i> <br> <small>Please Wait...</small>`
        var username = document.getElementById('username').value;

        auth.createUserWithEmailAndPassword(email, password)

        .then(function(userCredentials){
            const userFolder = databaseRoom.ref()
            var userDetails = {
                username:username,
                email:email,
                create:Date().now(),
                status:"online"
            }
            const user = auth.currentUser
            userFolder.child('users/' + user.uid).set(userDetails)
            alert("account has been created👍");
            btn.innerHTML = "account created"
        })
        .catch(function(error){
            alert("something went wrong please try again later..!")
            btn.innerHTML = "error"
        })

    }