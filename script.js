

let slide=document.querySelectorAll('.slider')
function Red(){
    slide[0].style.transform='translate(15%,50px)';
    slide[1].style.transform='translate(-110%,0px)';
    slide[2].style.transform='translate(-110%,0px)';
    }
    function Blue(){
        slide[1].style.transform='translate(15%,50px)';
        slide[0].style.transform='translate(-110%,0px)';
        slide[2].style.transform='translate(-110%,0px)';
        }
        function Grey(){
            slide[2].style.transform='translate(15%,50px)';
            slide[0].style.transform='translate(-110%,0px)';
            slide[1].style.transform='translate(-110%,0px)';
            }



           
