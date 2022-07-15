function login(username, password) {
var url = "http://localhost:8081/user/login";
  console.log(url);
  $.ajax({
    type: "POST",
    url: url,
    dataType: "JSON",
    data: JSON.stringify({
      "username": username,
      "password": password,
    }),
    crossDomain: true,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    },
    success: function (data) {
      console.log("ok");
      console.log(data.data);
      window.localStorage.setItem("token", data.data.token);
    },
  });
}