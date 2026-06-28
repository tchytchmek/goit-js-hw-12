import{S,a as P,i as r}from"./assets/vendor-CmQh6lbe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function u(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(s){if(s.ep)return;s.ep=!0;const a=u(s);fetch(s.href,a)}})();const c=document.querySelector(".gallery"),g=document.querySelector(".loader"),f=document.querySelector(".load-more"),p=new S(".gallery-item a",{captionsData:"title",captionDelay:250});function h(t){return t.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img 
      class="gallery-image" 
      src="${e.webformatURL}" 
      alt="${e.tags}" 
      title="${e.tags}" 
      loading="lazy"
    />
  </a>
  
  <ul class="stats-list">
    <li class="stats-item">
      <span class="stats-label">Likes</span>
      <span class="stats-value">${e.likes}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Views</span>
      <span class="stats-value">${e.views}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Comments</span>
      <span class="stats-value">${e.comments}</span>
    </li>
    <li class="stats-item">
      <span class="stats-label">Downloads</span>
      <span class="stats-value">${e.downloads}</span>
    </li>
  </ul>
</li>`).join("")}function q(t){c.innerHTML=h(t),p.refresh()}function R(t){c.insertAdjacentHTML("beforeend",h(t)),p.refresh()}function $(){c.innerHTML=""}function y(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}function B(){f.classList.remove("is-hidden")}function d(){f.classList.add("is-hidden")}const E="56434957-1ee9963b6aa14410bfffd2ce8",A="https://pixabay.com/api/",I=15;async function w(t,e){return(await P.get(A,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:I}})).data}const M=15,b=document.querySelector(".form"),G=document.querySelector(".load-more");let o=1,n="",l=0;b.addEventListener("submit",H);G.addEventListener("click",O);async function H(t){if(t.preventDefault(),n=new FormData(b).get("search-text").trim(),o=1,l=0,!n){r.error({message:"Please enter a search query.",position:"topRight",color:"red"});return}$(),d(),y();try{const e=await w(n,o);if(l=e.totalHits,e.hits.length===0){r.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}q(e.hits),v()}catch(e){console.log(e),r.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}finally{L()}}async function O(){o+=1,d(),y();try{const{hits:t}=await w(n,o);R(t),_(),v()}catch(t){console.log(t),r.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}finally{L()}}function v(){if(o*M>=l){d(),r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}B()}function _(){const t=document.querySelector(".gallery-item");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
