// Parte de Declaração:
let nome=document.querySelector('#idNome')
let rm=document.querySelector('#idRM')
let periodo=document.querySelector('#idPeriodo')
let curso=document.querySelector('#idCurso')
let inst=document.querySelector('#idInstituicao')
let disc=document.querySelector('#idDisciplina')

nome.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#nome')
    exibir.innerHTML=`${nome.value}`
})
rm.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#rm')
    exibir.innerHTML=`${rm.value}`
})
periodo.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#periodo')
    exibir.innerHTML=`${periodo.value}`
})
curso.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#curso')
    exibir.innerHTML=`${curso.value}`
})
inst.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#inst')
    exibir.innerHTML=`${inst.value}`
})
disc.addEventListener('keyup',(e)=>{
    let exibir=document.querySelector('#dis')
    exibir.innerHTML=`${disc.value}`
})
//Botoes de estilização:
const esportivo=document.getElementById('esp')
const classico=document.getElementById('clas')
const moderno=document.getElementById('mod')
const declaracao=document.getElementById('declaracao')
const box1=document.querySelector('.box1')
const bts=document.querySelector('.bts')
const nomes=document.querySelector('#idNome')
const mat=document.querySelector('#idRM')
const periodos=document.querySelector('#idPeriodo')
const cursos=document.querySelector('#idCurso')
const insti=document.querySelector('#idInstituicao')
const disci=document.querySelector('#idDisciplina')
const decs=document.querySelector('.dec')
const listas=document.querySelector('.lista')
const githubb=document.querySelector('.github')


esportivo.addEventListener('click',()=>{
    declaracao.style.backgroundColor="rgb(0, 255, 128)"
    declaracao.style.fontFamily="League Script"
    decs.style.fontFamily='Arial'
    listas.style.fontFamily='Arial'
    githubb.style.fontFamily='Arial'
    esportivo.style.backgroundColor="gray"
    classico.style.backgroundColor="darkblue"
    moderno.style.backgroundColor="#2692ab"
    bts.style.backgroundColor="black"
    bts.style.color="white"
    box1.style.backgroundColor="black"   
    box1.style.color="white"   
    nomes.style.backgroundColor="rgb(0, 255, 128)"    
    mat.style.backgroundColor="rgb(0, 255, 128)"    
    periodos.style.backgroundColor="rgb(0, 255, 128)"   
    cursos.style.backgroundColor="rgb(0, 255, 128)"
    insti.style.backgroundColor="rgb(0, 255, 128)"
    disci.style.backgroundColor="rgb(0, 255, 128)"   
})
classico.addEventListener('click',()=>{
    declaracao.style.backgroundColor="darkblue"
    declaracao.style.fontFamily="Sue Ellen Francisco"
    decs.style.fontFamily='Arial'
    listas.style.fontFamily='Arial'
    githubb.style.fontFamily='Arial'
    decs.style.color="white"
    listas.style.color="white"
    githubb.style.color="white"
    classico.style.backgroundColor="gray"
    esportivo.style.backgroundColor="rgb(0, 255, 128)"
    moderno.style.backgroundColor="#2692ab"
    bts.style.backgroundColor="#93ffc0"
    bts.style.color="darkblue"
    box1.style.backgroundColor="#93ffc0"   
    box1.style.color="darkblue"      
})
moderno.addEventListener('click',()=>{
    declaracao.style.backgroundColor="black"
    declaracao.style.fontFamily="Arial"
    listas.style.fontFamily='Arial'
    githubb.style.fontFamily='Arial'
    decs.style.color="white"
    listas.style.color="white"
    githubb.style.color="white"
    classico.style.backgroundColor="darkblue"
    moderno.style.backgroundColor="gray"
    esportivo.style.backgroundColor="rgb(0, 255, 128)"
    bts.style.backgroundColor="white"
    bts.style.color="#2692ab"
    box1.style.backgroundColor="white"      
    box1.style.height="220%"   
    box1.style.color="#2692ab"   
    nomes.style.backgroundColor="#53b0c5"    
    mat.style.backgroundColor="#53b0c5"    
    periodos.style.backgroundColor="#53b0c5"   
    cursos.style.backgroundColor="#53b0c5"
    insti.style.backgroundColor="#53b0c5"
    disci.style.backgroundColor="#53b0c5"   
})

