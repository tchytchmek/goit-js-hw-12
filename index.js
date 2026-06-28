import{S as d,a as p,i}from"./assets/vendor-DeILk6eB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new d(".gallery-item a",{captionsData:"title",captionDelay:250});function f(a){return a.map(e=>`<li class="gallery-item">
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
</li>`).join("")}function g(a){l.innerHTML=f(a),m.refresh()}function y(){l.innerHTML=""}function h(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}function L(a){return p.get("https://pixabay.com/api/",{params:{key:"56434957-1ee9963b6aa14410bfffd2ce8",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits)}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(a){a.preventDefault();const o=new FormData(u).get("search-text").trim();if(!o){i.error({message:"Please enter a search query.",position:"topRight",color:"red"});return}y(),h(),L(o).then(r=>{if(r.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}g(r)}).catch(r=>{console.log(r),i.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
