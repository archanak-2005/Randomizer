function RandomnumGenerator(value){
    var n=Math.random();                      //function
    n=(Math.floor(n*value));
    return n;
}


$(".btn").click(function(){
    $(this).animate({opacity:0.5}    //for all buttons
,100);
 
setTimeout(()=>{
    $(this).animate({opacity:1}     //timeout function
        ,100);
    },100);
});

$(".number").click(function(){
    window.location.href="./RandomNUmber.html";    //to navigate to random number page
});

$(".color").click(function(){
    window.location.href="./RandomColor.html";    //to navigate to random color page
});

$(".YesORrNo").click(function(){
    window.location.href="./YesOrNp.html";    //to navigate to yes or no page
});

$(".TorD").click(function(){
    window.location.href="./TorD.html";    //to navigate to Truth or Dare page
});


$(".start1").click(function(){
                      
     var num=RandomnumGenerator(101);                  //random number on clicking start
    $(".answer1").text("the random number is "+num);
});
    

$(".start2").click(function(){
                      
    var red=RandomnumGenerator(256);      
    var green=RandomnumGenerator(256);     //random color generator
    var blue=RandomnumGenerator(256);  
    var randomcolor="rgb("+red+","+green+","+blue+")"

    
   $(".answer2").text("the color for you is "+randomcolor);
   $(".answer2").css("color",randomcolor);

});
   
$(".start3").click(function(){
    var val=RandomnumGenerator(2);
    if(val==0){
        $(".answer3").text("'Go ahead do whatever you think!'");        //yes or no
    }
    else{
        $(".answer3").text("'That's ok,lets go with another decision'")
    }

})
$(".start4").click(function(){
    var val=RandomnumGenerator(2);
    if(val==0){
        $(".answer4").text("'You got Truth!'");        //yes or no
    }
    else{
        $(".answer4").text("'You got Dare!'")
    }

})