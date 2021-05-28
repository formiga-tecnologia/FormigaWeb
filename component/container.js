import EngineApp from "../Framework/engine.js"

let Eng = new EngineApp()

function Container(containerName,title,content){
    Eng.componentsEngine.createComponent(containerName,renderContainer(title,content))
    Eng.componentsEngine.renderComponent("dinamic",containerName)
}

function renderContainer(title,content){
    return "<div class='flexcont'>"+
    "<div class='squareContent'>"+title+"</div>"+
    "<div class='squareContent LargeContent'>"+content+"</div>"+
    "</div><br><div class='separator'></div>"
}

export default Container