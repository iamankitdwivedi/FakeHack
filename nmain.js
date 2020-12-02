const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches){
    console.log("Nothing happened!")
}else{
    setTimeout(() => {
        window.location.replace("https://fakeupdate.net/steam/");
    }, 5000);
}

setInterval(() => {
    $(".sys").toggleClass("syss");
}, 500);

