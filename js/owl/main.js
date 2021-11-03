const btnAssistir = document.querySelector(".btn-assistir");
const btnInfo = document.querySelector(".btn-info");
const containerHeader = document.querySelector(".container-header");
const containerVideo = document.querySelector(".container-play");
const toggle = false;
let height = 1150;

function toggleModeVideo(){
    containerVideo.classList.toggle("hidden");
    if(containerVideo.classList.contains("hidden")){
        btnAssistir.innerHTML = "Assistir"
    }else{
        btnAssistir.innerHTML = "Fechar Vídeo"
    }
}
function fazAlgo(){
    criaElemento();
    
}

function apagaElemento(div){
    setTimeout(() => {
        while(height >= 10){
            div.style.height = height + 'px';
            height -= 20;
            console.log(height);
        }  
    }, 100);
    
    div.innerHTML = '';
    div.classList.remove("info");
    height = 1150;
}
function criaElemento(){
    const div = document.createElement("div");
    div.classList.add("info");
    containerHeader.appendChild(div);
    
    if(div.classList.contains("info")){
        div.innerHTML = `<p class="letra">Nasci aqui 13 anos atrás<br>
    E minha história agora eu vou contar<br>
    Eu sou Nissim, Nissim Ourfali<br>
    Sou um menino que estuda e vai no Netzah<br>
    Duas irmãs e um irmãozinho<br>
    Minha família é um show!<br>
    <br><br>
    E os meus pais são demais<br>
    Como eles não tem<br>
    Quando a gente viaja é irado, é 10!<br>
    Mas o melhor é quando vamos pra Baleia<br>
    Eu sou o Nissim Ourfali<br>
    Jogo basquete e vou pra Vila Boim<br>
    Em casa é só videogame, PC e TV<br>
    Mas não bagunço não e sou bom aluno<br>
    Eu sou Nissim Ourfali<br>
    E esse é o meu Bar Mitzvah!<br>
    <br><br>
    Gosto de Friends, de Big Bang<br>
    E pra escutar, pop e um sertanejo<br>
    Dizem que sou bem-humorado, inteligente e também desligado<br>
    <br><br>
    Fui pra Israel e curti demais<br>
    Doei um Sefer Torá<br>
    <br><br>
    E os meus pais são demais<br>
    Como eles não tem<br>
    Quando a gente viaja é irado, é 10!<br>
    Mas o melhor é quando vamos pra Baleia<br>
    Eu sou o Nissim Ourfali<br>
    <br><br>
    Em Israel fomos lá pro norte<br>
    Teve caiaque, kinnerete tirolesa<br>
    A motolânciae também teve a colheita<br>
    Eu sou Nissim Ourfali<br>
    E esse é o meu Bar mitzvah!<br>
    <br><br>
    Ni ninini nini nini ninini ni<br>
    Ni ninini nini nini ninini Nissim<br>
    <br><br>
    E os meus pais são demais<br>
    Como eles não tem<br>
    Quando a gente viaja é irado, é 10!<br>
    Mas o melhor é quando vamos pra Baleia<br>
    Eu sou o Nissim Ourfali<br>
    <br><br>
    E os meus pais são demais<br>
    Como eles não tem<br>
    Quando a gente viaja é irado, é 10!<br>
    Mas o melhor é quando vamos pra Baleia<br>
    Eu sou o Nissim Ourfali<br>
    Jogo basquete e vou pra Vila Boim<br>
    Em casa é só videogame, PC e TV<br>
    Mas não bagunço não e sou bom aluno<br>
    Eu sou Nissim Ourfali<br>
    Eu sou Nissim Ourfali</p>`;

    div.addEventListener('click', ()=>apagaElemento(div))
    }else{
        console.log("Não contém nada na div ainda")
    }
    
}

btnAssistir.addEventListener("click", toggleModeVideo);
btnInfo.addEventListener("click", fazAlgo)