// 'use strick'

document.addEventListener("DOMContentLoaded", function () {
    
    //Récupérer les balles
    const balle1 = document.getElementById("balle1");
    const balle2 = document.getElementById("balle2");

    //la largeur de navigateur
    let windowWidth = window.innerWidth;
    //la largeur de navigateur
    let windowHeight = window.innerHeight;

    //Dimension exact de balles 1
    const limitWidth = windowWidth - balle1.offsetWidth;
    const limitHeight = windowHeight - balle1.offsetHeight;
    
    //Dimension exact de balles 2
    const limitWidth2 = windowWidth - balle2.offsetWidth;
    const limitHeight2 = windowHeight - balle2.offsetHeight;

    /**
     * Balle 1
     */
    //PositionX de la balle1
    let positionX = 0;
    //SensX de la balle1
    let sensX = 1;

    //PositionY de la balle1
    let positionY = 0;
    //SensX de la balle1
    let sensY = 1;
    
    //Sens de la balle1
    let speed1 = 4;
    let speed2 = 10;
    

    /**
     * Balle 2 
     */
    //PositionX de la balle1
    let position1X = 0;
    //SensX de la balle1
    let sens1X = -1;

    //PositionY de la balle1
    let position1Y = 0;
    //SensX de la balle1
    let sens1Y = 1;

    moveball1();
    
    function moveball1() {
        positionX += speed1 * sensX;
        positionY += speed1 * sensY;
        
        if (positionX >= limitWidth) {
            sensX = -1;
        }else if (positionX <= 0) {
            sensX = 1;
        }
        
        if (positionY >= limitHeight) {
            sensY = -1;
        }else if (positionY <= 0) {
            sensY = 1;
        }
            
        balle1.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
        
        requestAnimationFrame(moveball1);
    }


    moveball2();
    
    function moveball2() {
        position1X += speed2 * sens1X;
        position1Y += speed2 * sens1Y;
        
        if (position1X <= -limitWidth2) {
            sens1X = 1;
        }else if (position1X >= 0) {
            sens1X = -1;
        }
        
        if (position1Y <= -limitHeight2) {
            sens1Y = 1;
        }else if (position1Y >= 0) {
            sens1Y = -1;
        }
            
        balle2.style.transform = `translateX(${position1X}px) translateY(${position1Y}px)`;
        
        requestAnimationFrame(moveball2);
    }
        

});