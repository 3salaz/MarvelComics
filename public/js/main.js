$(document).ready(() => {
    // would like to 
    const button = $('#button');
    let hulkImg = $('#hulkImg'); 
    let ironManImg = $('#ironManImg');
    let thorImg = $('#thorImg');
    let captainAmericaImg = $('#captainAmericaImg');
    button.click(() => {
        hulkImg.fadeIn(3000);
        ironManImg.removeClass("hide");
        thorImg.removeClass("hide");
        captainAmericaImg.removeClass("hide");
    });
    // $("button").click(function(){
    //     $("#div1").fadeIn();
    //     $("#div2").fadeIn("slow");
    //     $("#div3").fadeIn(3000);
    //   });
})