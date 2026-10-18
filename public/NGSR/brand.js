'use strict';
const notice=document.getElementById('brand-status');let timer;
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const value=button.dataset.copy;try{if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(value);notice.textContent=value+' copied';}catch{notice.textContent='Colour code: '+value+' — select and copy it manually.';}clearTimeout(timer);timer=setTimeout(()=>notice.textContent='',5000);}));
