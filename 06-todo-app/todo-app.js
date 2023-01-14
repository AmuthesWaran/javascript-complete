const ps = document.querySelectorAll('p')

ps.forEach(function (p){
   if(p.innerHTML.includes('the')){
    p.remove()
    
   }
})