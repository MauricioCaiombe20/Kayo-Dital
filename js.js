/* quando clicar no icone de menu e X abrir e fechar*/
const nav= document.querySelector('#header nav')
const toggle=document.querySelectorAll('nav .toggle')

for( const element of toggle){
    element.addEventListener('click', function() {
       nav.classList.toggle('show')
    })
}
/*quando clicar em um link do menu fechar*/
const links = document.querySelectorAll('nav ul li a')
for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
/*quando clicar em um link do menu fim*/
/* mudar o header da pagina scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
// scroll é maior que a altura do header
header.classList.add('scroll')
    } else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})
