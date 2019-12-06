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

(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);
