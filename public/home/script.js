function addUser() {
  email = document.getElementById('email').value;
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  writeUserData(username, email, password);

  checkbox = document.getElementById('rememberMe');
  if (checkbox.checked == true) {
    link(username, password);
  }
}

function link(username, password) {
  let apiKey = 'd9e53816d07345139c58d0ea733e3870';
  $.getJSON(
    'https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey,
    function (data) {
      let json = JSON.stringify(data, null, 2);
      let obj = JSON.parse(json);
      let ip = obj.ip;
      var ref = firebase.database().ref();
      ref.on('value', function (dat) {
        user = dat.val().users;
        try {
          if (user[username].password == password) {
            linkDevice(ip, username);
          }
        } catch {
          console.log('incorrect password or username');
        }
      });
    }
  );
}
