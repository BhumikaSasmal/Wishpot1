class Wish {
    constructor(n,a,w){
        
        this.nameDetail = n;
        this.addressDetail = a;
        this.wishDetail= w;
    }

   saveWish() {
       var key = "wish1";
       var dbIndex = "wishes/"+key;
        var ref = database.ref(dbIndex);
        console.log(ref);
        var data = {
            name:this.nameDetail,
            address:this.addressDetail,
            wish: this.wishDetail
        }
        ref.push(data);
   }
   static readWish(){
       database.ref('wishes/wish1').on("value",(data)=>{
           allWishes=data.val();

       })
       console.log(allWishes);
   }
}