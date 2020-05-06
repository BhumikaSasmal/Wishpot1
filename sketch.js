var form;
function preload(){

}
function setup(){
  createCanvas(displayWidth-30,displayHeight-50);
  form= new Form();
}
function draw(){
    form.show();
}