const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader"),o=document.querySelector(".error"),l=()=>{n.style.display="block"},r=()=>{n.style.display="none"},s=()=>{t.style.display="none"},a=()=>{o.style.display="block"},c=()=>{o.style.display="none"},i=e=>{l(),s(),c(),fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_67TlFlpRVkyxfyLzAYP00RgfrcB4U1jpjIGMVH5SZ1d1T8oBwh7IykQkX6nvZpvJ`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{if(e.length>0){const n=e[0],o=`<img src="${n.url}" alt="Cat Image" width = 500>`,l=`\n          <h2>${n.breeds[0].name}</h2>\n          <p>Description: ${n.breeds[0].description}</p>\n          <p>Temperament: ${n.breeds[0].temperament}</p>\n        `;t.innerHTML=o+l,t.style.display="block"}else console.log("No cat data found.")})).catch((e=>{console.log("Failure",e),a()})).finally((()=>{r()}))};l(),e.style.display="none",s(),c(),fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{const n=t.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join(" ");e.insertAdjacentHTML("beforeend",n)})).catch((e=>{console.log("Failure",e),a()})).finally((()=>{r(),e.style.display="block"})),e.addEventListener("change",(e=>{const t=e.target.value;i(t)}));
//# sourceMappingURL=index.0b68c739.js.map
