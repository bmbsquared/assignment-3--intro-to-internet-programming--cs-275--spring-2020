let rotate = document.getElementsByTagName(`td`);

rotate[0].addEventListener(`click` ,function(){
    rotate[0].style.transform =`rotate(180deg)`;
    rotate[1].style.transform=`rotate(0deg)`;
    rotate[2].style.transform=`rotate(0deg)`;
    rotate[3].style.transform=`rotate(0deg)`;
});
rotate[1].addEventListener(`click` ,function(){
    rotate[1].style.transform=`rotate(180deg)`;
    rotate[0].style.transform=`rotate(0deg)`;
    rotate[2].style.transform=`rotate(0deg)`;
    rotate[3].style.transform=`rotate(0deg)`;
});
rotate[2].addEventListener(`click` ,function(){
    rotate[2].style.transform=`rotate(180deg)`;
    rotate[0].style.transform=`rotate(0deg)`;
    rotate[1].style.transform=`rotate(0deg)`;
    rotate[3].style.transform=`rotate(0deg)`;
});
rotate[3].addEventListener(`click` ,function(){
    rotate[3].style.transform=`rotate(180deg)`;
    rotate[0].style.transform=`rotate(0deg)`;
    rotate[2].style.transform=`rotate(0deg)`;
    rotate[1].style.transform=`rotate(0deg)`;
});
