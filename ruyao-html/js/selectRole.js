

$('#sure').click(function () {
    $('.role-message').css({"visibility":"hidden"});
    $(window).attr('location',"../html/question.html");
    clearStatus();
})

$('#cancel').click(function () {
    $('.role-message').css({"visibility":"hidden"});
    clearStatus();
})

$('.btn5').click(function () {
    clearStatus();
    startSetInterval();
});

$(".commonBtn").click(function () {
    setTimeout(function(){
        $(window).attr('location',"../html/round.html");
    },1000)
})

let interval = '';

function startSetInterval() {
    if (interval !== '') {
        endSetInterval(interval);
    }
    const array = [$('.btn1'), $('.btn2'), $('.btn3'), $('.btn6'), $('.btn9'), $('.btn8'), $('.btn7'), $('.btn4')];
    let timesRun = 0;
    const randomNumber = Math.ceil(Math.random() * 30 + 10);
    const arrayNumber=[1,2,3,6,9,8,7,4];
    interval = setInterval(function () {
        if (timesRun === randomNumber) {
            setRole(array[timesRun % 8],arrayNumber[timesRun%8]);
            setImage(arrayNumber[timesRun%8]);
            clearInterval(interval);
        }else{
            toggleRole(array[timesRun % 8],arrayNumber[timesRun%8]);
        }
        timesRun += 1;
    }, 150);
}

function endSetInterval(){
    clearInterval(interval);
}

function clearStatus() {
    $('button').css({"height":"200rem","width":"220rem"});
}

function setRole(img,i) {
    const urlHover='transparent url(../images/selectRole/role'+i+'Hover.png) no-repeat';
    img.css({"height":"100%","width":"100%","background":urlHover,"background-size":"100% 100%"});
    $('.role-message').css({"visibility":"visible"});
}

function toggleRole(img,i) {
    const url='transparent url(../images/selectRole/role'+i+'.png) no-repeat';
    const urlHover='transparent url(../images/selectRole/role'+i+'Hover.png) no-repeat';
    img.css({"height":"100%","width":"100%","background":urlHover,"background-size":"100% 100%"});
    setTimeout(function () {
        img.css({"height":"200rem","width":"220rem","background":url,"background-size":"100% 100%"});
    },150);
}

function setImage(i) {
    const url='../images/selectRole/role'+i+'.png';
    $("#roleImage").attr('src',url);
}

