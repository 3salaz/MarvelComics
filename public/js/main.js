$(document).ready(() => {
    // would like to 
    const button = $('#button');
    let hulkImg = $('#hulkImg'); 
    let ironManImg = $('#ironManImg');
    let thorImg = $('#thorImg');
    let captainAmericaImg = $('#captainAmericaImg');
    button.click(() => {
        hulkImg.fadeIn(2000);
        ironManImg.fadeIn(3000)
        thorImg.fadeIn(1000)
        captainAmericaImg.fadeIn(900);
    });
})