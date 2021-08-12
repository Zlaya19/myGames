const userTurn = document.getElementById('user-div');
const compTurn = document.getElementById('computer-div');
const schäre = document.getElementById('schäre');
const stein = document.getElementById('stein');
const papir = document.getElementById('papir');
const result = document.getElementById('result');

let userChoice = '';
let computerChoice = '';

let userScore = 0;
let compScore = 0;
const compPoints = document.getElementById('compPoints');
const userPoints = document.getElementById('userPoints');

const button = document.getElementById('btn_user');

  const broj = prompt('Koliko partija zelis da odigras?');

 schäre.addEventListener('click', function(){

  userChoice = 'schäre';

    function schäreSteinPapir(){
        const randomChoice  = ['schäre','stein','papir'];
        return randomChoice[Math.floor(Math.random() * randomChoice.length)];
      }
      computerChoice = schäreSteinPapir();

      if(userChoice == computerChoice){
        result.innerHTML = '<h1>' + 'Nerijeseno, igraj ponovo!' + '</h1>';
      }
      else if (computerChoice == 'stein' && userChoice == 'schäre'){
        result.innerHTML = '<h1>' + 'Kompjuter je pobijedio!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      }
      else if (computerChoice == 'papir' && userChoice == 'schäre'){
        result.innerHTML = '<h1>' + 'Pobijedio si!  Kompjuter je imao papir.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      };
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }

      compTurn.appendChild(element);

      schäre.addEventListener('mouseleave', function(){
            
        element.remove();
        result.innerHTML = '';  
    })

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span>' + 'Igra je zavrsena!' + '</span>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        userPoints.style.transform = 'scale(1.2)';
        compPoints.style.background = '#ff4d4d';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#ff4d4d';
        compPoints.style.background = '#4dffa6';
        compPoints.style.transform = 'scale(1.2)';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
    
    });

  papir.addEventListener('click', function(){

    userChoice = 'papir';

    function schäreSteinPapir(){
        const randomChoice  = ['schäre','stein','papir'];
        return randomChoice[Math.floor(Math.random() * randomChoice.length)];
      }

    computerChoice = schäreSteinPapir();

      if(userChoice == computerChoice){
        result.innerHTML = '<h1>' + 'Nerijeseno, igraj ponovo!' + '</h1>';
      }
      else if (computerChoice == 'stein' && userChoice == 'papir'){
        result.innerHTML = '<h1>' + 'Pobijedio si!  Kompjuter je imao kamen.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      }
      else if(computerChoice == 'schäre' && userChoice == 'papir'){
        result.innerHTML = '<h1>' + 'Kompjuter je pobijedio!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      };
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
  
      compTurn.appendChild(element);

      papir.addEventListener('mouseleave', function(){
        
        element.remove();
        result.innerHTML = '';
    });

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span>' + 'Igra je zavrsena!' + '</span>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        userPoints.style.transform = 'scale(1.2)';
        compPoints.style.background = '#ff4d4d';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#ff4d4d';
        compPoints.style.background = '#4dffa6';
        compPoints.style.transform = 'scale(1.2)';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
    
  });
        
    stein.addEventListener('click', function(){

      userChoice = 'stein';
    
      function schäreSteinPapir(){
      const randomChoice  = ['schäre','stein','papir'];
      return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    }
    computerChoice = schäreSteinPapir(); 

      if(userChoice == computerChoice){
          result.innerHTML = '<h1>' + 'Nerijeseno, igraj ponovo!' + '</h1>';
      }
      else if (computerChoice == 'papir' && userChoice == 'stein'){
        result.innerHTML = '<h1>' + 'Kompjuter je pobijedio!' + '</h1>';
        compPoints.classList.add('score');
        compScore ++;
        compPoints.innerHTML = compScore;
      }
      else if (computerChoice == 'schäre' && userChoice == 'stein'){
        result.innerHTML = '<h1>' + 'Pobijedio si!  Kompjuter je imao makaze.' + '</h1>';
        userPoints.classList.add('score');
        userScore ++;
        userPoints.innerHTML = userScore;
      };
      
      let element = document.createElement('div');
      let img = document.createElement('img');
      if(computerChoice == 'schäre'){
        img.src = 'bilder/makaze.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'stein'){
        img.src = 'bilder/kamen.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
      if(computerChoice == 'papir'){
        img.src = 'bilder/papir.png';
        img.setAttribute('height', '100px');
        img.setAttribute('width', '100px');
        element.classList.add('class_div');
        element.appendChild(img);
      }
  
    compTurn.appendChild(element);

    stein.addEventListener('mouseleave', function(){
      
        element.remove();
        result.innerHTML = '';
    });

    if(userScore == broj || compScore == broj){
      result.innerHTML = '<span>' + 'Igra je zavrsena!' + '</span>';
      if(userScore == broj){
        userPoints.style.background = '#4dffa6';
        userPoints.style.transform = 'scale(1.2)';
        compPoints.style.background = '#ff4d4d';
        img.src = 'bilder/smile.png';
        compTurn.style.backgroundImage = 'bilder/smile.png';
      }
      else if(compScore = broj){
        userPoints.style.background = '#ff4d4d';
        compPoints.style.background = '#4dffa6';
        compPoints.style.transform = 'scale(1.2)';
        img.src = 'bilder/sad.png';
        compTurn.style.backgroundImage = 'bilder/sad.png';
      }
      userTurn.remove();
    }
  });

    // events for a better design

    schäre.addEventListener('pointerdown', function(){
      schäre.style.background = '#54d6b1';
    })
    schäre.addEventListener('mouseleave', function(){
      schäre.style.background = '#54d5d1';
    })

    stein.addEventListener('pointerdown', function(){
      stein.style.background = '#54d6b1';
    })
    stein.addEventListener('mouseleave', function(){
      stein.style.background = '#54d5d1';
    })

    papir.addEventListener('pointerdown', function(){
      papir.style.background = '#54d6b1';
    })
    papir.addEventListener('mouseleave', function(){
      papir.style.background = '#54d5d1';
    })

    schäre.addEventListener('mouseenter', function(){
      schäre.style.transform = 'scale(1.1)';
      schäre.style.transition = '0.7s';
    });
    schäre.addEventListener('mouseleave', function(){
      schäre.style.transform = 'scale(1.0)';
    });

    stein.addEventListener('mouseenter', function(){
      stein.style.transform = 'scale(1.1)';
      stein.style.transition = '0.7s';
    });
    stein.addEventListener('mouseleave', function(){
      stein.style.transform = 'scale(1.0)';
    });

    papir.addEventListener('mouseenter', function(){
      papir.style.transform = 'scale(1.1)';
      papir.style.transition = '0.7s';
    });
    papir.addEventListener('mouseleave', function(){
      papir.style.transform = 'scale(1.0)';
    });