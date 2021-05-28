import EngineApp from "../Framework/engine.js"
import Container from "../component/container.js"
import article from "../component/aticles.js"
import Boxes from "../component/Boxes.js"

var eng = new EngineApp()
var routeCreated = false
eng.renderEngine.pageDynamic ="dinamic"
class Routes{
    ContentValue =""
    routesCreated(){
        if(routeCreated == false){
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/index.html#Home",this.Home)
        }
        this.routesCreated =true
        eng.routesEngine.runRoute("http://127.0.0.1:5500/index.html","http://127.0.0.1:5500/index.html#Home")
        eng.routesEngine.whenUpdate(eng.routesEngine.runRoute("http://127.0.0.1:5500/index.html","http://127.0.0.1:5500/index.html#Home"))
    }
    Home(){
        eng.renderEngine.clearPage()
        this.ContentValue =  "<div class='mini-article'>Então descubra como nós podemos te ajudar no desenvolvimento de seus projetos e como contibuimos para o avanço tecnologico.<br><div class='btgray'>Entre no formigueiro</div>"
        Container("teste","<h1>Descubra o gigante mundo de desenvolvimento da formiga</h1><br>"+this.ContentValue+"</div>","<img src='../img/cup-of-coffee-1280537_1920.jpg' width='100%' height='100%'>")
        article("<h1>Criação e desenvolvimento de varias soluções</h1><h4>Nós temos diveras soluções para sua empresa ou pequeno negocio</h4>","IDart1")
        Boxes("a","a","Id","IDart1")
    }
}

export default Routes