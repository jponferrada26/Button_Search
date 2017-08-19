var pushed = false;
function push_search(){
  if(pushed){
    $("div.input_search>input").css({"display":"none"});
    $("div.input_search").css({"width":"20px"});
    $("div.input_search").css({"min-width":"0px"});
    $("body").css({"background":"#FFF"});
    pushed = false;
  }else{
    $("div.input_search>input").css({"display":"inline-block"});
    $("div.input_search").css({"width":"70%"});
    $("body").css({"background":"#000"});


    pushed = true;
  }
}
