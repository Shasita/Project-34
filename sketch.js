//Create variables here
var dogImage, happyDog;
var database;
var foods, foodStock;
var dog;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(1200, 1200);
  
  dog = createSprite(600, 800,);
  dog.addImage(dogImage); 
  database = firebase.database();
  console.log(database);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(49, 139, 87);
 
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }
  textSize (35);
  fill ("white");
 
  drawSprites();
  text ("Note: Press UP_ARROW key to feed Drago milk!", 30, 200);
 
}
//function to read values from DB
function readStock(data){
  
    foods = data.val();
   
}

//function to write values from DB
function writeStock(x){

  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}



