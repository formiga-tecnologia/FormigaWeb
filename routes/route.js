import EngineApp from "../Framework/engine.js"
import Homepage from "../pages/home.js"


var eng = new EngineApp()
var routeCreated = false
eng.renderEngine.pageDynamic ="dinamic"
class Routes{
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
        Homepage()
    }
}

export default Routes