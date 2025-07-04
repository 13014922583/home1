window.onload = function () {
  // 获取导航栏伸展按钮
  var C21B22 = document.getElementById("test");
  var liList = document.getElementById("header");
  var aaaa = document.getElementsByTagName("li");
  var count = 0;

  C21B22.onclick = function () {
    if (count % 2 == 0) {
      for (var i = 0; i < 6; i++) {
        aaaa[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < 6; i++) {
        aaaa[i].style.display = "none";
      }
    }
    count++;
  };

  // 因为缩小后就把导航栏的文字隐藏掉了，再放大也是被隐藏的
  // 获取屏幕宽度，让它大于749px的时候就把li的显示出来
  var t = document.body.clientWidth;
  // 一百毫米获取一次屏幕宽度
  setInterval(function () {
    var t = document.body.clientWidth;
    if (t > 749) {
      for (var i = 0; i < 6; i++) {
        aaaa[i].style.display = "block";
      }
    }
  }, 100);
};
window.onscroll = function () {
  // 返回顶部事件
  var t = document.documentElement.scrollTop || document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
  console.log(t);
  var img111 = this.document.getElementById("img111");
  if (t > 200) {
    img111.style.display = "block";
  } else {
    img111.style.display = "none";
  }
};
