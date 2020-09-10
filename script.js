var wrapperEle = document.body.querySelector(".wrapper");

var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for (var i=0; i<animals.length; i++){
  createwhack(animals[i]);
}

function createwhack(str){
  var nah = document.createElement("div");
  if(str==="dog"){
    nah.innerHTML= "borf borf";
  }else if(str==="cat"){
    nah.innerHTML= "I am a cat";
  }else{
    nah.innerHTML = "I'm an animal"
  }
  wrapperEle.appendChild(nah);
}