const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");let o=null;t.addEventListener("click",(function(){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.c8c8dd8d.js.map
