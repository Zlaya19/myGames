const container = document.getElementById('container');
const naslov = document.getElementById('naslov');
let wrongElement = 0;
let chosenColor = '';

    questColor();

    function questColor(){
        return inputColor = prompt('pink, brown, royalblue or gold?');
    }

    /* as long as the input value is not pink, brown, royal blue, or gold, the same
    prompt is displayed as long as inputColor is not one of the specified colors. */

    while(inputColor !== 'pink' && inputColor !== 'brown' && inputColor !== 'royalblue' && inputColor !== 'gold'){
        questColor();
    }

const pink = 'pink';
const brown = 'brown';
const royalBlue = 'royalblue';
const AU = 'gold';

// Each time the page is loaded, 23 elements with different characters are displayed

window.addEventListener('load', function(){

    for( let i = 0; i < 23; i++ ){

    let element = document.createElement('div');
    element.classList.add('classDiv');
    element.style.transform = rotateElement();
    element.style.background = colorElement();
    element.style.margin = marginElement();
    container.appendChild(element);

    // Displays every element item in the golden color on the console

        if(element.style.background == inputColor){
            console.log(chosenColor++)
        };

    naslov.innerHTML = '<span>' + wrongElement + '</span>' + '<h1>' + 'Press only ' + inputColor + " cube's"  + '</h1>' + '<p>' + chosenColor + '</p>';

    // Mouseenter, mouseleave & mouseclick events for the element items (transform, margin, rotate & functions)

        element.addEventListener('mouseenter', function(){
            element.style.transform = 'scale(1.15)';
            element.style.margin = marginElement();
        });

        element.addEventListener('mouseleave', function(){
            element.style.transform = 'scale(1)';
            element.style.transform = rotateElement();
        });

        element.addEventListener('click', function(){

            wrongCube();
            correctCube();

        naslov.innerHTML = '<span>' + wrongElement + '</span>' + '<h1>' + 'Press only ' + inputColor + " cube's" + '</h1>' + '<p>' + chosenColor + '</p>';

            /*  
                If you click on an golden element. it disapears.
                If the item is not gold, an X will appear on the item.

                Javascript reaction if you make three mistakes.
            
                The function setTimeout allows you to see the third element that you have chosen incorrectly.
                After 700 milliseconds, all elements are removed and a new div element will be displayed.
            */

        if(element.style.background === inputColor){
                element.remove();
            }else{

                element.innerHTML = '<h2>X</h2>';

                    if(wrongElement >= 3){

                        setTimeout(function(){
                            let divElement = document.createElement('div');
                            const h1poraz = document.createElement('h1')
                            let img = document.createElement('img');
                            img.src = 'bilder/sad.png';
                            h1poraz.innerHTML = '<span>' + 'Try again' + '</span>';
                            naslov.innerHTML = '<h1>' + 'You had ' + wrongElement +  ' mistakes'  + '</h1>';
                            container.innerHTML = '';
                            img.setAttribute('height', '300px');
                            img.setAttribute('width', '300px');
                            container.style.backgroundImage = 'bilder/smile.png';
                            divElement.classList.add('class_div');
                            divElement.appendChild(img)
                            container.appendChild(divElement);
                            container.appendChild(h1poraz);
                        },700)   
                    }
                }

        // When you click on the wrong item, wrongElement increase. When.. ( wrongElement === 3 ) => GAME OVER!

                function wrongCube(){

                    if(element.style.background !== inputColor){
                        return wrongElement ++;
                    }
                };

        // When you click on the correct item, correctElement decrease. When.. ( correntElement === 0 ) => You win!

                function correctCube(){

                    if(element.style.background == inputColor){
                        return chosenColor--;
                    }
                };

                // Javascript reaction, if there are no items in a golden color

                    if(chosenColor === 0){
                        let divElement = document.createElement('div');
                        let img = document.createElement('img');
                        const h1Pobjeda = document.createElement('h1');
                        h1Pobjeda.innerHTML = '<span>' + 'You are the winner!' + '</span>';
                        img.src = 'bilder/smile.png';
                        naslov.innerHTML = '<h1>Win</h1>';
                        container.innerHTML = '';
                        img.setAttribute('height', '300px');
                        img.setAttribute('width', '300px');
                        container.style.backgroundImage = 'bilder/smile.png';
                        divElement.classList.add('class_div');
                        divElement.appendChild(img);
                        container.appendChild(divElement);
                        container.appendChild(h1Pobjeda);             
                };       
               
        });
    };
});

// functions for the element item (rotate, color & margin)

function rotateElement(){
    const rotateCube = ["rotate(-1deg)", "rotate(5deg)","rotate(10deg)","rotate(15deg)"];
    return rotateCube[Math.floor(Math.random() * rotateCube.length)];
};
function colorElement(){
    const colorCube = [pink, brown, royalBlue, AU];
    return colorCube[Math.floor(Math.random() * colorCube.length)];
};
function marginElement(){
    const marginCube = ["-1px", "3px","7px","10px"];
    return marginCube[Math.floor(Math.random() * marginCube.length)];
};
