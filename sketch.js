var form;
var database;
var allWishes;
function preload(){

}
function setup(){
  createCanvas(displayWidth-30,displayHeight-50);
  database=firebase.database();
  form= new Form();
}
function draw(){
    form.show();
}