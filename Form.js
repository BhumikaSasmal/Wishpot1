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
        this.wishButton.mousePressed(()=>{
            this.wishButton.hide();
            this.donateButton.hide();
            console.log("this.wishButton.mousePressed()")
            //wishform = new WishForm();
            this.nameInput = createInput("Name");
            this.addressInput = createInput("Address");
            this.wishInput = createInput("My Wish");
            this.submitButton = createButton('Submit');
            this.nameInput.position(displayWidth/2-30,displayHeight/2);
            this.addressInput.position(displayWidth/2-30,displayHeight/2+30);
            this.wishInput.position(displayWidth/2-30,displayHeight/2+60);
            this.submitButton.position(displayWidth/2-30,displayHeight/2+80);
            this.submitButton.mousePressed(()=>{
                var wish = new Wish(this.nameInput.value(),this.addressInput.value(),this.wishInput.value());
                
                wish.saveWish();
            })
        })
        this.donateButton.mousePressed(()=>{
            this.wishButton.hide();
            this.donateButton.hide();
            Wish.readWish();
            
        })
    }
}