import EngineApp from "../Framework/engine.js"

var eng = new EngineApp()

function Boxes(img,title,content,IdContent,target){
    eng.componentsEngine.createComponent(IdContent,renderBoxes(img,title,content))
    eng.componentsEngine.renderComponent(target,IdContent)
}

function renderBoxes(img,title,content){
    return "<div class='boxes'>"+
    "<img src='"+img+"' height='120vh' width='120vh'>"+
    "<br><div class='boxes-title'>"+title+"</div>"+
    "<div class='boxes-text'>"+content+"</div>"+
    "</div>"
}

export default Boxes