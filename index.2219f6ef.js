var t=document.querySelectorAll(".population"),e=[];t.forEach(function(t){var n=t.textContent;e.push(parseInt(n.replace(/,/g,"")))});var n=e.reduce(function(t,e){return t+e},0),o=n/e.length,r=document.querySelector(".total-population"),a=document.querySelector(".average-population");r.textContent=n.toLocaleString("en-US"),a.textContent="".concat(o.toLocaleString("en-US"));
//# sourceMappingURL=index.2219f6ef.js.map
