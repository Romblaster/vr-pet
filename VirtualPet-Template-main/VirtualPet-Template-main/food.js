class food {
    constructor() {

        this.foodstock= 0
        this.image = loadImage("./images/Milk.png");
        this.lastFed
     }
     
     updateFoodStock(foodstock){ 
      this.foodstock = foodstock
     }
     getFedTime(lastFed) {
      this.lastFed = lastFed
     }
     getFoodStock(){
  return this.foodstock
 }
 deductFood(){
 if (this.foodstock>0){
   this.foodstock = this.foodstock -1
 }
}

   display(){ 

     var x=80,y=100

     imageMode(CENTER)
    image(this.image,720,220,70,70)

    if(this.foodstock!= 0){
      for(var i=0;i<this.foodstock;i++){
        if(i%10==0){
          x=80
          y=y+50
        }
        image(this.image,x,y,50,50)
        x=x+30
      }
    }


 } 
 
 
}