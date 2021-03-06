// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/*
  disqusLoader.js v1.0
  A JavaScript plugin for lazy-loading Disqus comments widget.
  -
  By Osvaldas Valutis, www.osvaldas.info
  Available for use under the MIT License
*/
!function(t,e,n){"use strict";var o=function(t,e){var n,o;return function(){var i=this,r=arguments,d=+new Date;n&&d<n+t?(clearTimeout(o),o=setTimeout(function(){n=d,e.apply(i,r)},t)):(n=d,e.apply(i,r))}},i=!1,r=!1,d=!1,s=!1,a="unloaded",u=!1,l=function(){if(!u||!e.body.contains(u)||"loaded"==u.disqusLoaderStatus)return!0;var n,o,i=t.pageYOffset,l=(n=u,o=n.getBoundingClientRect(),{top:o.top+e.body.scrollTop,left:o.left+e.body.scrollLeft}).top;if(l-i>t.innerHeight*r||i-l-u.offsetHeight-t.innerHeight*r>0)return!0;var c,f,p,y=e.getElementById("disqus_thread");y&&y.removeAttribute("id"),u.setAttribute("id","disqus_thread"),u.disqusLoaderStatus="loaded","loaded"==a?DISQUS.reset({reload:!0,config:d}):(t.disqus_config=d,"unloaded"==a&&(a="loading",c=s,f=function(){a="loaded"},(p=e.createElement("script")).src=c,p.async=!0,p.setAttribute("data-timestamp",+new Date),p.addEventListener("load",function(){"function"==typeof f&&f()}),(e.head||e.body).appendChild(p)))};t.addEventListener("scroll",o(i,l)),t.addEventListener("resize",o(i,l)),t.disqusLoader=function(t,n){n=function(t,e){var n,o={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}({laziness:1,throttle:250,scriptUrl:!1,disqusConfig:!1},n),r=n.laziness+1,i=n.throttle,d=n.disqusConfig,s=!1===s?n.scriptUrl:s,(u="string"==typeof t?e.querySelector(t):"number"==typeof t.length?t[0]:t)&&(u.disqusLoaderStatus="unloaded"),l()}}(window,document);
