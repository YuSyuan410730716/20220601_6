var inputElement
var txts = []
var colors = "e63946-f1faee-a8dadc-457b9d-1d3557".split("-").map(a=>"#"+a) 
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
inputElement =createInput("")
inputElement.position(50,50)
inputElement.input(userInput)
}
function userInput(){
 txts.push({
       text:this.value(),
      x:width/2,
  y:50,
  vx: random(-1,1),
  vy: 1,
  color: random (colors)
 })
 this.value('')
 // print(txts)
}
function draw() {
 background(0)
 fill(255)
 textSize(50)
 for(var i=0;i<txts.length;i++){
    let txt = txts[i]
   fill(txt.color)
   text(txt.text , txt.x , txt.y)
    txt.x=txt.x + txt.vx
    txt.y=txt.y + txt.vy
    txt.vy = txt.vy +0.1
    txt.vx = txt.vx*0.99
     txt.vy = txt.vy*0.99
    if(txt.y>height){
    txt.vy = -abs(txt.vy)
}
  }
}