function doLogin() {
  window.event.returnValue = false;
  var url = "http://localhost:8081/user/login";
  var flag = false
  console.log(url);
  console.log(String($("#exampleInputEmail").val()));
  $.ajax({
    type: "POST",
    url: url,
    dataType: "JSON",
    data: JSON.stringify({
      "username": String($("#exampleInputEmail").val()),
      "password": String($("#exampleInputPassword").val()),
    }),
    crossDomain: true,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    },
    success: function (data) {
      if (data.data == null) {
        alert("登陆失败！");
      } else {
        console.log("ok");
        console.log(data.data);
        window.localStorage.setItem("token", data.data.token);
        window.location.href = "http://127.0.0.1:5500/block_chain_analyze_system/index.html";
      }

    },
  });
}