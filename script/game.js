var sedoset;
$(document).ready(function() {
$ (function(){
  $(document).keydown(function(e){

  // assigning border offsets
  var borright = ($("#border").offset().left + $("#border").outerWidth())-$("#sedoimg").width();
  var bordown = ($("#border").offset().top + $("#border").outerHeight())-$("#sedoimg").height();
  var borset=$("#border").offset();
  //assigning sedo offsets
  var sedoset= $("#sedoimg").offset();
  var sedoleft= $("#sedoimg").offset().left;
  var sedotop=$("#sedoimg").offset().top;
  var sedoright=$("#sedoimg").offset().left+ $("#sedoimg").width();
  var sedodown=$("#sedoimg").offset().top+$("#sedoimg").height();

  //moving sedef
  switch(e.keyCode)
  {
    case 65: $("#sedoimg").css('left',sedoset.left -= 10);
      if (sedoset.left < borset.left)
        {
          $("#sedoimg").css('left',sedoset.left += 10);
        }
    break; //left

    case 87: $("#sedoimg").css('top',sedoset.top -= 10);
      if (sedoset.top < borset.top)
      {
        $("#sedoimg").css('top',sedoset.top += 10);
      }
    break; //up

    case 68: $("#sedoimg").css('left',sedoset.left += 10);
    if (sedoset.left > borright)
    {
      $("#sedoimg").css('left',sedoset.left -= 10);
    }
    break; //right

    case 83: $("#sedoimg").css('top',sedoset.top += 10);
    if (sedoset.top > bordown)
    {
      $("#sedoimg").css('top',sedoset.top -= 10);
    }
    break; //down
  }
    $("#sedoimg").offset(sedoset);

    //checking if breads collide with sedo
    var minleft=borset.left;
    var mintop=borset.top;
    for (var i=1;i<=3;i++){
      var breadleft=$("#bread"+i).offset().left;
      var breadtop=$("#bread"+i).offset().top;
      var breadright = $("#bread"+i).offset().left + $("#bread"+i).width();
      var breaddown = $("#bread"+i).offset().top + $("#bread"+i).height();
    //checking if mayos collide with sedo
    var mayoleft=$("#mayo"+i).offset().left;
    var mayotop=$("#mayo"+i).offset().top;
    var mayoright = $("#mayo"+i).offset().left + $("#mayo"+i).width();
    var mayodown = $("#mayo"+i).offset().top + $("#mayo"+i).height();
      //COLLISION DETECTION
      if((sedotop<breadtop) && (sedodown>breaddown) && (sedoleft<breadleft) && (sedoright>breadright))
        {
          var x=Math.floor(Math.random()*($("#border").width()-$(".breadimg").width()))+minleft;
          var y=Math.floor(Math.random()*($("#border").height()-$(".breadimg").height()))+mintop;
          $("#bread"+i).offset({top:y, left:x});
          var res=parseInt($("#res").html());
          $("#res").html(res+1);
          if(res>=19)
          {
            alert("Game Won!");
            location.reload(true);
          }
        }

      if((sedotop<mayotop) && (sedodown>mayodown) && (sedoleft<mayoleft) && (sedoright>mayoright))
      {
        var x=Math.floor(Math.random()*($("#border").width()-$(".mayoimg").width()))+minleft;
        var y=Math.floor(Math.random()*($("#border").height()-$(".mayoimg").height()))+mintop;
        $("#mayo"+i).offset({top:y, left:x});

        $(".sedefdied:last").detach();
        var livesleft=parseInt($("#invisible").html());
        $("#invisible").html(livesleft-1);
        if (livesleft==0)
        {
          alert("Game Lost!");
          location.reload(true);
        }
      }
    }
    });


    //randomly assigning the first position of the breads and mayos
    $(function(){
      var borset=$("#border").offset();
      var minleft=borset.left;
      var mintop=borset.top;
      for (var i=1;i<=3;i++)
      {
        var x=Math.floor(Math.random()*($("#border").width()-$(".breadimg").width()))+minleft;
        var y=Math.floor(Math.random()*($("#border").height()-$(".breadimg").height()))+mintop;
        $("#bread"+i).offset({top:y, left:x});
      };
      for (var i=1;i<=3;i++)
      {
        var x=Math.floor(Math.random()*($("#border").width()-$(".mayoimg").width()))+minleft;
        var y=Math.floor(Math.random()*($("#border").height()-$(".mayoimg").height()))+mintop;
        $("#mayo"+i).offset({top:y, left:x});
      };
    });
  });
  //timer
  var time;
  setInterval(function(){
    time=parseInt($("#timer").html());
    $("#timer").html(time-1);
    if(parseInt(time)==0)
    {
      alert("Time Over!");
      location.reload(true);
    };
  },1000);

});
