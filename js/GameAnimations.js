var numberOfFrames=0;
var FPS=100;
function repeatOften() {
  $("<div class='loader' />").appendTo("#loadingBar");
  throtle();
  numberOfFrames++;
  var limit=$("#loadingBar").css("width");
  var width=$(".loader").css("width");
  console.log("limit = "+limit+" width = "+width);
  var tempStr=limit.substring(0,limit.length-2);
  var tempStr1=width.substring(0,width.length-2);
 // alert(limit);
  var counter=Number(tempStr)/Number(tempStr1);
  //alert(counter);
   if(numberOfFrames<counter){
    globalID = requestAnimationFrame(repeatOften);
  }else{
      window.location.href="GameFrame.html";
  }
}
function throtle(){
    var j=new Date().getTime();
    var i=new Date().getTime();
    while((i-j)<FPS){
        i=new Date().getTime();
    }
}
function LoadGame(){
    setFrame("#gameFrameLoadPage");
    repeatOften();
}
