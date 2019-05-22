var artistarr=["Kaan Ünlü","Sedef Topçuoğlu","İpek Girgin","Ayça Durmuş"];

$(document).ready(function(){
  $("#button").click(function(){
    var artistno=$('[name=artist]').val();
    var artist=artistarr[artistno];
    var time= $('[name=time]').val();
    var size= $('#size:checked').val();
    var result= 100; //base price
    //alert(size);
    if (size==0)
    {
      result+=50;
    }
    else if(size==1){
      result+=100;
    }
    else{
      result+=200;
    }
    if (time<5)
    {result*=2;}

    var text="You commissioned from "+artist+". Your commission will cost "+result+" TL. Thank you for your commission!";
    //alert(text);
    $("#res").html(text);
  });
});
