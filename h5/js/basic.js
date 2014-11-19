
window.onload = function() {
    home_support.setPageSize();
    sliderAction();
    animationPage1(1,0);
}

function sliderAction() {
    window.onkeydown = function(e) {
        var e = e || window.event;
        if(e.keyCode == 38){
            //上
            home_support.sliderUp();
        } else if(e.keyCode == 40) {
            //下
            home_support.sliderDown();
        }
        home_support.startPageAnimation();

    }
    window.onmousewheel = function(e) {
        var e = e || window.event;
        if(e.wheelDelta) {//IE/Opera/Chrome
            if(e.wheelDelta==120) {
                //上
                home_support.sliderUp();
            }else {
                //下
                home_support.sliderDown();
            }
        }else if(e.detail) {//Firefox
            if(e.detail==-3) {
                //上
                home_support.sliderUp();
            }else {
                //下
                home_support.sliderDown();
            }
        }
        home_support.startPageAnimation();
    }
}
var interval;
var home_support = {
    page2ImgIndex: 1,
    curpage: 1,
    pageHeight: 0,
    setPageSize: function() {
        var sections = document.getElementsByClassName('page');
        this.pageHeight = window.innerHeight - 60;//window.screen.availHeight;
        document.getElementById('content').style.height = this.pageHeight + 59 + 'px';
        for(var len = sections.length - 1; len >= 0; len--) {
            sections[len].style.height =  this.pageHeight + 'px';
        }
    },
    sliderUp: function() {
        var height;
        if(this.curpage > 1) {
            this.curpage--;
            height = this.pageHeight * (this.curpage - 1);
            document.getElementById('pages').style.transform = 'translateY('+(-height)+'px)';
            document.getElementById('pages').style.mozTransform = 'translateY('+(-height)+'px)';
            document.getElementById('pages').style.webkitTransform = 'translateY('+(-height)+'px)';
        }
        if(this.curpage == 1) {
            initsecond();
            setTimeout('animationPage2(0)', 500);
        }
        if(this.curpage == 2) {
            initsecond();
            setTimeout('animationPage3(0, 0.2)', 500);
        }
        if(this.curpage == 3) {
            setTimeout('animationPage4(0, 800)', 500);
        }
    },
    sliderDown: function() {
        var height;
        if(this.curpage < 5) {
            this.curpage++;
            height = this.pageHeight * (this.curpage - 1);
            document.getElementById('pages').style.transform = 'translateY('+(-height)+'px)';
            document.getElementById('pages').style.mozTransform = 'translateY('+(-height)+'px)';
            document.getElementById('pages').style.webkitTransform = 'translateY('+(-height)+'px)';
        }

        if(this.curpage == 2) {
            initsecond();
            setTimeout('animationPage1(0, 800)', 500);
        }
        if(this.curpage == 3) {
            initsecond();
            setTimeout('animationPage2(0)', 500);
        }
        if(this.curpage == 4) {
            setTimeout('animationPage3(0, 0.2)', 500);
        }
        if(this.curpage == 5) {
            setTimeout('animationPage4(0, 800)', 500);
        }
    },
    startPageAnimation: function() {
        switch(this.curpage) {
            case 1:
                animationPage1(1,0);
                break;
            case 2:
                //initSection2();
                animationPage2(1);
                break;
            case 3:
                animationPage3(1,1);
                break;
            case 4:
                animationPage4(1,0);
                break;
            case 5:
                animationPage5();
                break;
            default:

                console.log('which page?');
        }
    }
}

function animationPage1(x, y) {
    document.getElementById('first-img').style.opacity = x;
    document.getElementById('first-img').style.webkitTransform = 'translateX(-'+y+'px)';
    document.getElementById('first-text').style.opacity = x;
    document.getElementById('first-text').style.webkitTransform = 'translateX('+y+'px)';
}

function initSection2() {
    for(var i= 2; i<=6;i++){
        document.getElementById('circle'+i+'').style.webkitTransform = 'translate('+(Math.cos(2*Math.PI*72*i / 360))*200+'px, '+(Math.sin(2*Math.PI*72*i / 360))*200+'px)';
        document.getElementById('circle'+i+'').style.msTransform = 'translate('+(Math.cos(2*Math.PI*72*i / 360))*200+'px, '+(Math.sin(2*Math.PI*72*i / 360))*200+'px)';
        document.getElementById('circle'+i+'').style.mozTransform = 'translate('+(Math.cos(2*Math.PI*72*i / 360))*200+'px, '+(Math.sin(2*Math.PI*72*i / 360))*200+'px)';
        document.getElementById('circle'+i+'').style.oTransform = 'translate('+(Math.cos(2*Math.PI*72*i / 360))*200+'px, '+(Math.sin(2*Math.PI*72*i / 360))*200+'px)';
    }
}


function animationPage2(x) {
    var text1 = document.getElementById('second-text1');
    var text2 = document.getElementById('second-text2');
    var text3 = document.getElementById('second-text3');
    var text4 = document.getElementById('second-text4');
    var text5 = document.getElementById('second-text5');

    var index = 1;

    if(x) {
        secondTextAction(index);
    } else {
        window.clearTimeout(interval);
    }

}


function animationPage3(x, y) {
    document.getElementById('third-img').style.opacity = x;
    document.getElementById('third-img').style.webkitTransform = 'scale('+y+')';
}

function animationPage4(x, y) {
    document.getElementById('forth-img').style.opacity = x;
    document.getElementById('forth-img').style.webkitTransform = 'translateX('+y+'px)';
    document.getElementById('forth-text').style.opacity = x;
    document.getElementById('forth-text').style.webkitTransform = 'translateX(-'+y+'px)';
}

function animationPage5() {

}
function initsecond() {
    document.getElementById('second-img1').style.display = 'none';
    document.getElementById('second-img2').style.display = 'none';
    document.getElementById('second-img3').style.display = 'none';
    document.getElementById('second-img4').style.display = 'none';
    document.getElementById('second-img5').style.display = 'none';
    document.getElementById('second-text1').style.webkitAnimation = '';
    document.getElementById('second-text2').style.webkitAnimation = '';
    document.getElementById('second-text3').style.webkitAnimation = '';
    document.getElementById('second-text4').style.webkitAnimation = '';
    document.getElementById('second-text5').style.webkitAnimation = '';
}
function secondTextAction(i) {
    var time;
    switch(i) {
        case 1:
            document.getElementById('second-img5').style.display = 'none';
            document.getElementById('second-text1').style.webkitAnimation = 'moveUpRight1 9s ease forwards';
            document.getElementById('second-text5').style.webkitAnimation = '';
            setTimeout(function() {
                document.getElementById('second-img1').style.display = 'block';
                for(var i=1;i<3;i++) {
                    document.getElementById('a'+i+'').style.webkitAnimation = 'swing 7s ease '+(i-1)+'s';
                }
            }, 2000);
            time = 7000;
            break;
        case 2:
            document.getElementById('second-img1').style.display = 'none';
            document.getElementById('second-text2').style.webkitAnimation = 'moveUpRight2 9s ease forwards';
            document.getElementById('second-text1').style.webkitAnimation = '';
            setTimeout(function() {
                document.getElementById('second-img2').style.display = 'block';
                for(var i=1;i<4;i++) {
                    document.getElementById('b'+i+'').style.webkitAnimation = 'swing 7s ease '+(i-1)+'s';
                }
            }, 2000);
            time = 7000;
            break;
        case 3:
            document.getElementById('second-img2').style.display = 'none';
            document.getElementById('second-text3').style.webkitAnimation = 'moveUpRight3 10s ease forwards';
            document.getElementById('second-text2').style.webkitAnimation = '';
            setTimeout(function() {
                document.getElementById('second-img3').style.display = 'block';
                for(var i=1;i<3;i++) {
                    document.getElementById('c'+i+'').style.webkitAnimation = 'swing 8s ease '+(i-1)+'s';
                }
            }, 2000);
            time = 8000;
            break;
        case 4:
            document.getElementById('second-img3').style.display = 'none';
            document.getElementById('second-text4').style.webkitAnimation = 'moveUpRight4 7s ease forwards';
            document.getElementById('second-text3').style.webkitAnimation = '';
            setTimeout(function() {
                document.getElementById('second-img4').style.display = 'block';
                for(var i=1;i<2;i++) {
                    document.getElementById('d'+i+'').style.webkitAnimation = 'swing 5s ease '+(i-1)+'s';
                }
            }, 2000);
            time = 5000;
            break;
        case 5:
            document.getElementById('second-img4').style.display = 'none';
            document.getElementById('second-text5').style.webkitAnimation = 'moveUpRight5 9s ease forwards';
            document.getElementById('second-text4').style.webkitAnimation = '';

            setTimeout(function() {
                document.getElementById('second-img5').style.display = 'block';
                for(var i=1;i<3;i++) {
                    document.getElementById('e'+i+'').style.webkitAnimation = 'swing 7s ease '+(i-1)+'s';
                }
            }, 2000);
            i = 0;
            time = 7000;
            break;
        default:
    }
    i++;
    interval = setTimeout(function(){secondTextAction(i);}, time);
};