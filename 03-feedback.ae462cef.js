!function(){function e(e,t,n){var o,a=n||{},i=a.noTrailing,r=void 0!==i&&i,u=a.noLeading,c=void 0!==u&&u,l=a.debounceMode,d=void 0===l?void 0:l,v=!1,m=0;function s(){o&&clearTimeout(o)}function f(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var u=this,l=Date.now()-m;function f(){m=Date.now(),t.apply(u,a)}function g(){o=void 0}v||(c||!d||o||f(),s(),void 0===d&&l>e?c?(m=Date.now(),r||(o=setTimeout(d?g:f,e))):f():!0!==r&&(o=setTimeout(d?g:f,void 0===d?e-l:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;s(),v=!n},f}var t,n=document.querySelector(".feedback-form"),o=document.querySelector('[type="email"]'),a=document.querySelector('[name="message"]'),i="feedback-form-state",r={};n.addEventListener("input",e(500,(function(e){r.email=o.value,r.message=a.value,localStorage.setItem(i,JSON.stringify(r))}))),n.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(r)})),(t=JSON.parse(localStorage.getItem(i)))&&(o.value=t.email,a.value=t.message)}();
//# sourceMappingURL=03-feedback.ae462cef.js.map