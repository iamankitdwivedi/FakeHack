$("#click").click(()=>{
    confirm("Do you want to proceed further to Book your Game Tickets!");
    $(".loader").css("display","block");
    setTimeout(() => {
        $(".loader").css("display","none");
        $(".ac").css("display","block");
    }, 3000);
});

$(".auth").click(()=>{
    $(".nonn").css("opacity","0.2");
    $(".lod").css("display","block");
    $(".over").css("display","block");
    $(".lod").css("opacity","1");
    setTimeout(() => {
        $(".nonn").css("display","none");
        $(".over").html("<br><br><br><br><br><br><br><br><br><br>Reserving your FIFA Match Ticket!");
        $(".over").css("opacity","1");
        setTimeout(() => {
            $(".over").html("<br><br><br><br><br><br><br><br><br><br>Reserving your iPhone");
            $(".over").css("opacity","1");
            setTimeout(() => {
                $(".over").html("<br><br><br><br><br><br><br><br><br><br>Unable to send OTP to your registered Mobile number!");
                $(".over").css("opacity","1");
                setTimeout(() => {
                    $(".over").html("<br><br><br><br><br><br><br><br><br><br>Try Entering your ATM Pin");
                    $(".over").css("opacity","1");
                    setTimeout(() => {
                        pin()
                    }, 1000);
                }, 1500);
            }, 1500);
        }, 1000);
    }, 1500);
    
    
   
   

});

function pin(){
    setTimeout(() => {
        let a = prompt("Enter your ATM Pin");
        confirm("Confirm your pin "+a+". Is it OK?");
        $(".nonn").css("display","none");
        $(".over").html("<br><br><br><br><br><br><br><br><br><br>Processing Transaction");
        $(".over").css("opacity","1");
        setTimeout(()=>{

        $(".over").html("<br><br><br><br><br><br><br><br><br><br>Recieving the Whole Balance!");
        $(".over").css("opacity","1");
        setTimeout(() => {
            $(".over").html("<br><br><br><br><br><br><br><br><br><br>Recieved the Whole Balance!");
        $(".over").css("opacity","1");
        setTimeout(() => {
            $(".over").css("color","red");
            $(".over a").css("text-decoration","none");
            $(".over a").css("color","red");
            
            $(".over").html("<br><br><br><br><br><br><br><br><br><br>Oops! Unable to book any Ticket or iPhone.<br>Redirecting you to the summary page!<br><a href='next.html'><button>Check What Happened!?</button></a>");
        $(".over").css("opacity","1");
        }, 2000);
        }, 2000);
        },2000);
    }, 1000);
}



