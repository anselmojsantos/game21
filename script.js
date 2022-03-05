let col1;
let col2;
let col3;
let cols;
let btClick = 0;

document.querySelector("#bt-ct-1").addEventListener('click',()=>{
    
  start();
  cols2();
  cols1();
  cols3();

  let cont = 0;

  for(let i = 0; i< col1.length; i++){
   
    let row1 = col1[i] = cols[cont];
    let row2 = col2[i] = cols[cont+1];
    let row3 = col3[i] = cols[cont+2];

    col1[i].innerHTML = row1;
    col2[i].innerHTML = row2;
    col3[i].innerHTML = row3;

   cont = cont + 3;
  }

  btClick = btClick + 1;

  if(btClick === 3){
      stopGame();
  }


})

document.querySelector("#bt-ct-2").addEventListener('click',()=>{
    start()
    cols1();
    cols2();
    cols3()

    let cont = 0;
  
    for(let i = 0; i< col1.length; i++){
     
      let row1 = col1[i] = cols[cont];
      let row2 = col2[i] = cols[cont+1];
      let row3 = col3[i] = cols[cont+2];
  
      col1[i].innerHTML = row1;
      col2[i].innerHTML = row2;
      col3[i].innerHTML = row3;
  
     cont = cont + 3;
        
    }
    btClick = btClick + 1;

    if(btClick === 3){
        stopGame();
    }
})

document.querySelector("#bt-ct-3").addEventListener('click',()=>{
    start()
    cols1();
    cols3();
    cols2()

    let cont = 0;
  
    for(let i = 0; i< col1.length; i++){
     
      let row1 = col1[i] = cols[cont];
      let row2 = col2[i] = cols[cont+1];
      let row3 = col3[i] = cols[cont+2];
  
      col1[i].innerHTML = row1;
      col2[i].innerHTML = row2;
      col3[i].innerHTML = row3;
  
     cont = cont + 3;
        
    }
    btClick = btClick + 1;

    if(btClick == 3){
        stopGame();
    }
})

function start(){
     col1 = document.querySelectorAll(".cols-1 .format");
     col2 = document.querySelectorAll(".cols-2 .format");
     col3 = document.querySelectorAll(".cols-3 .format");
     cols = [];
}



function cols1(){
    for(let i = 0; i< col1.length; i++){
        cols.push(col1[i].innerHTML);
      }
}


function cols2(){
    for(let i = 0; i< col2.length; i++){
        cols.push(col2[i].innerHTML);
      }
}

function cols3(){
    for(let i = 0; i< col3.length; i++){
        cols.push(col3[i].innerHTML);
      }
}

function stopGame(){
  start()
  let ativeResul =  document.querySelector(".result");   
  ativeResul.classList.add("active");
  ativeResul.innerHTML = "O Número escolhido é: "+ col2[3].innerHTML + '<br><br>'+"Click na tela para reiniciar!"
  ativeResul.style.display="flex";
  ativeResul.addEventListener('click',()=>{
    location.reload();
  })

}