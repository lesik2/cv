document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById('burger-menu').addEventListener('click',()=>{
    document.getElementById('header').classList.toggle('open');
  })
})
document.getElementById('burger-menu').addEventListener('click',(event)=>{
  event._isClickWithinMenu=true;
})
document.body.addEventListener('click',(event)=>{
  if( event._isClickWithinMenu) return;
  document.getElementById('header').classList.remove('open');
})