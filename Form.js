class Form{
    constructor(){
        this.wishButton = createButton('I am here to make a wish' );
        this.donateButton = createButton('I am here to fulfill a wish');
        console.log("inside form class constructor");
    }
    show(){
        console.log("inside show function");
        this.wishButton.position(displayWidth/2-140,displayHeight/2);
        this.donateButton.position(displayWidth/2+60,displayHeight/2);
    }
}