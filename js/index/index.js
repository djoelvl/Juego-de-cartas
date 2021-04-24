var r= 0;
var p=0;
var v= 4;
var w=0;
var rac= document.getElementById("ra");
document.getElementById("ra").innerHTML = "Racha: " + r;
var pun= document.getElementById("pu");
document.getElementById("pu").innerHTML = "Puntos: " + p;
var vid= document.getElementById("vi");
document.getElementById("vi").innerHTML = "Vidas: " + v;

const cards = document.querySelectorAll('.card');


let voltear = false;

let firstCard, secondCard;

function flipCard() {
  

  this.classList.add('flip');

  if (!voltear) {
    
    voltear = true;
    firstCard = this;

    return;
  }

  
  voltear = false;
  secondCard = this;

if(firstCard.dataset.car === secondCard.dataset.car){
  
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  var x= 1;
  w++;
  if(x==1){
    r++;
    document.getElementById("ra").innerHTML = "Racha: " + r;
    p++;
    document.getElementById("pu").innerHTML = "Puntos: " + p;
  }
  
  if(w==8){
    window.alert("Usted ha ganado");
  }

}
else{
  
setTimeout(()=> {

  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
}, 500)

if(r>0){
  r=0;
document.getElementById("ra").innerHTML = "Racha: " + r;
}
v--;
document.getElementById("vi").innerHTML = "Vidas: " + v;
  if(v==0){
    location.reload();
    window.alert("Usted ha perdido");
  }

}

}



function ramdon(){
  
  cards.forEach(card=>{
    let randomPos = Math.floor(Math.random()*16);
    card.style.order= randomPos;
  }
  )
};


cards.forEach(card => card.addEventListener('click', flipCard));

function disableCards() {
  location.reload();
}




  setTimeout(()=> {
    cards.forEach(card=>{
      card.classList.add('flip');
}
    )
    
  }, 400);   

  setTimeout(()=> {
    cards.forEach(card=>{
      card.classList.remove('flip');
}
    )
    
  }, 2000);   

  



 
 
  






