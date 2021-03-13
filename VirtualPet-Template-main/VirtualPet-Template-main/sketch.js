var dog,sadDog,happyDog;
var foodS
var foodObj
var fedTime, lastFed, feed, addFood

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");


}

function setup() {
  database = firebase.database()
  createCanvas(1000,400);
  foodObj = new food()

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);

  foodObj.display()

  fedTime = database.ref('FeedTime')
  fedTime.on("value",function (data){
    lastFed = data.val()
  })

  fill(255,255,254)
  textSize(15)
  if(lastFed>= 12){
    text("last feed"+lastFed %12 + "pm", 350,30)
  }
  else if(lastFed == 0) {
    text("last feed:"+ lastFed+"am",350,30)
  }
  else {
    text("last feed"+lastFed + "am", 350,30)
  }
  drawSprites();
  
}

//function to read food Stock
function readStock(data){
  foodS = data.val()
    foodObj.updateFoodStock()
  
}


//function to update food stock and last fed time
function feedDog(){
  dog(addImage(happyDog))

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
      feedTime : hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}