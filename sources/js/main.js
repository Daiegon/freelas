$(function(){
    $("#typed").typed({
        strings: ["o que precisa", "o produto", "as promoções", "os descontos"],
        typeSpeed: 50,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 3000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false
    });
});