import Container from "../component/container.js"
import article from "../component/aticles.js"
import Boxes from "../component/Boxes.js"

var ContentValue =""

function Home(){
    ContentValue =  "<div class='mini-article'>Então descubra como nós podemos te ajudar no desenvolvimento de seus projetos e como contibuimos para o avanço tecnologico.<br><div class='btgray'>Entre no formigueiro</div>"
    Container("teste","<h1>Descubra o gigante mundo de desenvolvimento da formiga</h1><br>"+ContentValue+"</div>","<img src='../img/cup-of-coffee-1280537_1920.jpg' width='100%' height='100%'>")
    article("<h1>Criação e desenvolvimento de varias soluções</h1><h4>Nós temos diveras soluções para sua empresa ou pequeno negocio</h4>","IDart1")   
    article("<div id='session1'></div>","art2")
    Boxes("Sites completos","Construimos sites completos, desde sites de uma unica pagina e paginas completas com varias paginas.","Id","session1")
    Boxes("a","a","I2d","session1")
    Boxes("a","a","Id3","session1")
}

export default Home
