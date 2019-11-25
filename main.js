var fancyHeading = document.getElementsByClassName('fancy')[0];
var letters = fancyHeading.textContent.split('');

var content = letters.map((val, i) => {
    let delay = Math.floor((Math.random() * 1000) + 1);
    return ('<span style="animation-delay: '+ delay + 'ms">'
        + val +
        '</span>');
});

fancyHeading.innerHTML = "";

for (var i = 0; i < content.length; i++) {
    fancyHeading.innerHTML += content[i];
}

// Show Persian Date 0.1
// by Amir Masoud Irani
// http://amib.ir/weblog
if(typeof AMIB==="undefined")var AMIB={};if(typeof A$!=="function")var A$=function(a){return document.getElementById(a)};if(typeof cTN!=="function")var cTN=function(a){return document.createTextNode(a)};
AMIB.showPDate=function(a){var c=A$(a),b=new Date,b=jd_to_persian(gregorian_to_jd(b.getFullYear(),b.getMonth()+1,b.getDate())),b=ConvertEnglishNumsToPersian(b[2].toString()+" "+PERSIAN_MONTH_NAMES[b[1]-1]+" "+b[0].toString());for(setTimeout(function(){AMIB.showPDate(a)},6E4);c.firstChild;)c.removeChild(c.firstChild);c.appendChild(cTN(b))};var GREGORIAN_EPOCH=1721425.5,PERSIAN_EPOCH=1948320.5,PERSIAN_MONTH_NAMES="\u0641\u0631\u0648\u0631\u062f\u06cc\u0646,\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a,\u062e\u0631\u062f\u0627\u062f,\u062a\u06cc\u0631,\u0645\u0631\u062f\u0627\u062f,\u0634\u0647\u0631\u06cc\u0648\u0631,\u0645\u0647\u0631,\u0622\u0628\u0627\u0646,\u0622\u0630\u0631,\u062f\u06cc,\u0628\u0647\u0645\u0646,\u0627\u0633\u0641\u0646\u062f".split(",");
function mod(a,c){return a-c*Math.floor(a/c)}function leap_persian(a){return((a-(a>0?474:473))%2820+512)*682%2816<682}function persian_to_jd(a,c,b){var d;a-=a>=0?474:473;d=474+mod(a,2820);return b+(c<=7?(c-1)*31:(c-1)*30+6)+Math.floor((d*682-110)/2816)+(d-1)*365+Math.floor(a/2820)*1029983+(PERSIAN_EPOCH-1)}
function jd_to_persian(a){var c,b,d,a=Math.floor(a)+0.5;b=a-persian_to_jd(475,1,1);c=Math.floor(b/1029983);d=mod(b,1029983);d==1029982?b=2820:(b=Math.floor(d/366),d=mod(d,366),b=Math.floor((2134*b+2816*d+2815)/1028522)+b+1);c=b+2820*c+474;c<=0&&c--;b=a-persian_to_jd(c,1,1)+1;b=b<=186?Math.ceil(b/31):Math.ceil((b-6)/30);a=a-persian_to_jd(c,b,1)+1;return[c,b,a]}function leap_gregorian(a){return a%4==0&&!(a%100==0&&a%400!=0)}
function gregorian_to_jd(a,c,b){return GREGORIAN_EPOCH-1+365*(a-1)+Math.floor((a-1)/4)+-Math.floor((a-1)/100)+Math.floor((a-1)/400)+Math.floor((367*c-362)/12+(c<=2?0:leap_gregorian(a)?-1:-2)+b)}function ConvertEnglishNumsToPersian(a){for(var a=a.toString(),c=a.length,b="",d=0,d=0;d<c;++d)b+=String.fromCharCode(a.charCodeAt(d)>=48&&a.charCodeAt(d)<=57?a.charCodeAt(d)+1728:a.charCodeAt(d));return b};

let items = ["ZEzMpdj", "ZEzMpdj", "ZEzMpdj","ZEzMpdj", "LYPqaME", "OBPJKK", "KKPeOPm", "qBWVMop", "PoYepvR", "bpxgWZ", "evxZpZ", "MJKNJZ", "XPQyMo", "JXVpgp", "YNPaaQ", "QmXOOR", "MQRGOe", "zBLGYN", "mGGPXj", "VEZvdg", "XNQaym", "oXpWbd", "oPOVOL", "bqjBMv", "bvpprw", "oaWdOm", "bvgWrO", "ZMbLNM", "eZQKEr", "xywaoW", "yKOMmV", "YNyKpd", "ygNVYM", "QpwZqJ", "rNBZZqv", "gPmNwv", "pJjOGW", "Kxygqv", "QyBKvW", "azVXym", "obyLPe", "dNKKOw", "VPLgaV", "pNZzMg", "qJNRaL", "yNvKpp", "wgwdzr", "WNeEgZx", "LYPBQvW"];
let num = ["one", "two", "three", "four", "five", "six"];
let randomItem = `<a class="random" href="https://codepen.io/z-/details/${items[Math.floor(Math.random() * items.length)]}" target="_blank"><div class="card fas fa-dice-${num[Math.floor(Math.random() * num.length)]}"></div></a>`
var button = button || true;

if(window.location.href.indexOf("fullcpgrid") == -1 && window.location.href.indexOf("debug") == -1) {
    document.body.innerHTML +=
        `<link href="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.css" rel="stylesheet">`}
/****darkmode****/

// It's not clear if the ternary counts as 2 lines or 1 when I'm trying to minimise line count, but I'm counting it as 2
$(window).mousemove(function(e) {

    $('.cursor').css({
        left: e.pageX,
        top: e.pageY
    })

})

$('a')
    .on('mouseenter', function() {

        $('.cursor').addClass('active')

    })
    .on('mouseleave', function() {

        $('.cursor').removeClass('active')

    })
var settings = {
    meteor: {
        elements: [],
        size: 16,
        theta: Math.PI/4, //45 deg (0 is down)
        randomTheta: Math.PI/60, //±3 deg
        speed: 20,
        trail: {
            show: true, //Enable trails
            initial: 16, //How wide the trail is
            length: 120, //How long the trail is
            opacity: 128
        },
        create: function(c) {
            settings.meteor.elements.push(new Meteor(c));
        },
        draw: function() {
            for(var i = 0; i < settings.meteor.elements.length; i++) {
                settings.meteor.elements[i].move();
                if(settings.meteor.elements[i].remove) {
                    settings.meteor.elements.splice(i, 1);
                }
            }
        }
    },
    general: { /*C&P from old project*/
        default: "white",
        colors: {
            "red": {
                fill:[216,51,74],
                stroke:[191,38,60]
            },
            "blue": {
                fill:[93,156,236],
                stroke:[74,137,220]
            },
            "yellow": {
                fill:[255,206,84],
                stroke:[246,187,66]
            },
            "green": {
                fill:[46,204,113],
                stroke:[42,186,102]
            },
            "white": {
                fill:[245,247,250],
                stroke:[230,233,237]
            }
        }
    }
}

function Meteor(_c) {
    this.x = random(-1*windowHeight,windowWidth);
    this.y = settings.meteor.size * -0.5;
    this.px = this.x;
    this.py = this.y;
    this.c = _c == "default" ? settings.general.default : _c;

    //Randomness so it's more interesting
    this.r = settings.meteor.theta + random(-10 * settings.meteor.randomTheta, 10 * settings.meteor.randomTheta)/10;
    this.d = 0;
    this.remove = false; //request object removal

    this.move = function(){
        //Location of the meteor
        this.px = this.x + Math.sin(this.r)*this.d;
        this.py = this.y + Math.cos(this.r)*this.d;

        stroke(0,0,0,0);
        //Trail
        if(settings.meteor.trail.show) {
            fill(settings.general.colors[this.c].fill[0],settings.general.colors[this.c].fill[1],settings.general.colors[this.c].fill[2], settings.meteor.trail.opacity);
            beginShape();
            vertex(this.x + Math.sin(this.r)*(this.d-settings.meteor.trail.length), this.y + Math.cos(this.r)*(this.d-settings.meteor.trail.length));
            var i_r = 90 + this.r;
            vertex(this.px + Math.sin(i_r)*settings.meteor.trail.initial/2, this.py + Math.cos(i_r)*settings.meteor.trail.initial/2);
            vertex(this.px - Math.sin(i_r)*settings.meteor.trail.initial/2, this.py - Math.cos(i_r)*settings.meteor.trail.initial/2);
            endShape();
        }

        //Meteor body
        fill(settings.general.colors[this.c].fill[0],settings.general.colors[this.c].fill[1],settings.general.colors[this.c].fill[2]);
        //stroke(settings.general.colors[this.c].stroke[0],settings.general.colors[this.c].stroke[1],settings.general.colors[this.c].stroke[2]);
        ellipse(this.px, this.py, settings.meteor.size, settings.meteor.size);

        // View this.d
        /*
        stroke(0,255,0);
        line(this.x, this.y, this.px, this.py);
        /**/
        //Progression
        this.d += settings.meteor.speed;
        this.remove = (this.py > windowHeight + settings.meteor.trail.length*2);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noSmooth();
    setInterval(function(){
        settings.meteor.create("default"); //Can change this to a colour in settings.general.colours plus default
    }, 100);
}

function draw() {
    clear(); //Nice transparency

    //Meteor
    settings.meteor.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
