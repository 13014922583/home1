$("#login").click(function () {
  let user = $("#user").val();
  let pass = $("#pass").val();
  if (pass != null && pass != "" && user != null && user != "") {
    // 账号密码不为空跳转到后台页面
    window.location.href = "../houtai.html";
  } else {
    alert("请输入正确的账号密码");
  }
});

window.onload = function () {
  $("#up").css({
    display: "none",
  });
};
window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
  if (t < 200) {
    $("#up").css({
      display: "none",
    });
  } else {
    $("#up").css({
      display: "",
    });
  }
};
