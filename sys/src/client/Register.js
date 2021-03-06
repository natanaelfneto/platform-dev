//Registration page 
export default HTML = (team_name) => `<!DOCTYPE html>

<html>

<head>
    <meta charset=utf-8 />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Equipe | HackBrazil </title>

    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.orange-indigo.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>

    <link rel="stylesheet" href="main.css">

    <link type="text/css" rel="stylesheet" href="app.css" />

    <title>HackBrazil</title>

    <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script>
    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDe7sKBJyuHpW8TQlKml-z_XT7wa6FmCtI",
            authDomain: "hackbrazil-files.firebaseapp.com",
            databaseURL: "https://hackbrazil-files.firebaseio.com",
            projectId: "hackbrazil-files",
            storageBucket: "hackbrazil-files.appspot.com",
            messagingSenderId: "381639451152"
        };
        firebase.initializeApp(config);

    </script>

    <script src="https://www.gstatic.com/firebasejs/ui/3.4.1/firebase-ui-auth__pt.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/3.4.1/firebase-ui-auth.css" />

    <script type="text/javascript">

        function toggleSignIn() {
            if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
                // [END signout]
            } else {
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;

                if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
                if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }

                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    document.getElementById('quickstart-sign-in').disabled = false;
                });
            }
            document.getElementById('quickstart-sign-in').disabled = true;
        }

        /**
         * Sends an email verification to the user.
         */
        function sendEmailVerification() {
            firebase.auth().currentUser.sendEmailVerification().then(function () {
                alert('Email Verification Sent!');
            });
        }

        function sendPasswordReset() {
            var email = document.getElementById('email').value;
            // [START sendpasswordemail]
            firebase.auth().sendPasswordResetEmail(email).then(function () {
                // Password Reset Email Sent!
                // [START_EXCLUDE]
                alert('Password Reset Email Sent!');
                // [END_EXCLUDE]
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/invalid-email') {
                    alert(errorMessage);
                } else if (errorCode == 'auth/user-not-found') {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }

        function initApp() {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;

                    sessionStorage.setItem('user', JSON.stringify(user));
                    //window.location.href = "/register";

                    document.getElementById('quickstart-sign-in').textContent = 'Sign out';

                } else {
                    sessionStorage.setItem('user', null);
                    document.getElementById('quickstart-sign-in').textContent = 'Login';
                }
                document.getElementById('quickstart-sign-in').disabled = false;
            });

            document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
            document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
        }
        window.onload = function () {
            initApp();
        };

    </script>
</head>

<body>
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <!-- Header section containing title -->
        <header class="mdl-layout__header mdl-color-text--white mdl-color--blue-grey-900">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
                <div class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop center-items">
                    <h3>HackBrazil</h3>
                </div>
            </div>
        </header>

        <main class="mdl-layout__content mdl-color--grey-100">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">

                <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
                </div>

                <!-- Container for the demo -->
                <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
                    <div class="mdl-card__title mdl-color--teal-900	mdl-color-text--white">
                        <h2 class="mdl-card__title-text"></h2>
                    </div>
                    <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                        <p>Use o email e senha de sua equipe ou, se for o primeiro login, crie uma senha</p>
                        <input class="mdl-textfield__input" style="display:inline;width:auto;" type="text" id="email"
                            name="email" placeholder="Email" />
                        &nbsp;&nbsp;&nbsp;
                        <input class="mdl-textfield__input" style="display:inline;width:auto;" type="password" id="password"
                            name="password" placeholder="Password" />
                        <br /><br />
                        <button disabled class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-in"
                            name="signin">Login</button>
                        &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;
                        <button class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-password-reset" name="verify-email">Criar
                            Senha</button>

                    </div>

                    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
                    </div>

                </div>
        </main>
    </div>
</body>

</html>`