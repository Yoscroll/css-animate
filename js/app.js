console.log("k");
function hey() {
	var box = document.getElementById('js');
	var id = setInterval(shrink,2);
  var num = 0;
  function shrink(){
    if (num ==1000){
      clearInterval(id);
    }
    else{
      num++;
      box.style.marginLeft=num+"px";
    }
  }
 console.log("hi");
}
