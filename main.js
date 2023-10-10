var board = document.getElementById('board');
const boton = document.getElementById('boton');
var cartas = document.querySelectorAll('.tarjeta');

var counter =0;
var tarjetaCount =0;
var dirImages = ['images/Luffy.jpg', 'images/zoro.jpg', 'images/Nami.jpg', 
'images/ussopp.jpg', 'images/sanji.jpg',' images/robin.png', 'images/chopper.jpg',
'images/franky.jpg', 'images/brook.jpg', 'images/jinbe.jpg','images/Luffy.jpg', 'images/zoro.jpg', 'images/Nami.jpg', 
'images/ussopp.jpg', 'images/sanji.jpg',' images/robin.png', 'images/chopper.jpg',
'images/franky.jpg', 'images/brook.jpg', 'images/jinbe.jpg'  ];

var arrVolteadas = [];



boton.addEventListener('click', function(){
    board.innerHTML ='';
    tarjetaCount=0;
    counter=0;
    //Randomizamos los elementos dentro del arreglo
    let indice = dirImages.length,  randomIndex;

    while (indice > 0) {
      randomIndex = Math.floor(Math.random() * indice);
      indice--;
      [dirImages[indice], dirImages[randomIndex]] = [
        dirImages[randomIndex], dirImages[indice]];
    }
    var copiaArr = dirImages;

    for (let i = 0; i < 5; i++) {
        var div = document.createElement('div');
        div.classList.add('row');

        for(let j=0; j< 4; j++){
            var tarjeta = document.createElement('div');
            tarjeta.id = tarjetaCount;
            tarjetaCount ++;
            tarjeta.classList.add('unflipped');
            tarjeta.classList.add('tarjeta');
            tarjeta.classList.add('col-4');

            var img = document.createElement("img");
            img.src = 'images/unflipped.jpg';

            tarjeta.appendChild(img);
            div.appendChild(tarjeta);
        }
        board.appendChild(div);

        
    }



    document.querySelectorAll('.tarjeta').forEach( carta => carta.addEventListener('click', function(){
        if(counter < 2){
            if(carta.classList.contains('locked')){
                console.log('locked');
            }else{
                if (carta.classList.contains('unflipped')) {
                    carta.classList.replace('unflipped', 'flipped');
                    carta.removeChild(carta.firstChild);
                    var img = document.createElement("img");
                    img.src = dirImages[carta.id] ;
    
                    carta.appendChild(img);
                    //guardar en el arreglo el id de la tarjeta volteada
                    arrVolteadas.push(carta.id);
                    counter ++;
                    
                }
            }
            
            
            console.log(counter);
        }
        setTimeout(function(){
            if(counter ==2){
                var carta1 = document.getElementById(arrVolteadas[0]);
                var carta2 = document.getElementById(arrVolteadas[1]);
                //checamos si son iguales
                if (dirImages[arrVolteadas[0]]  === dirImages[arrVolteadas[1] ] ) {
    
                    carta1.classList.replace('flipped', 'locked');
                    carta2.classList.replace('flipped', 'locked');
                    arrVolteadas.pop();
                    arrVolteadas.pop();
                }
                else{
    
                    carta1.classList.replace('flipped', 'unflipped');
                    carta1.removeChild(carta1.firstChild);
                    var img = document.createElement("img");
                    img.src = 'images/unflipped.jpg';
                    carta1.appendChild(img);
    
                    carta2.classList.replace('flipped', 'unflipped');       
                    carta2.removeChild(carta2.firstChild);
                    var img = document.createElement("img");
                    img.src = 'images/unflipped.jpg';
                    carta2.appendChild(img);
                    arrVolteadas.pop();
                    arrVolteadas.pop();
    
                }
                //eliminar del arreglo las ids
                counter -=2;

            }
        }, 2000);
        

        
        }));
});



// class remove
//class add
//flipped unflipped locked











