import EngineApp from "../Framework/engine.js"

var eng = new EngineApp()

function Boxes(title,content,IdContent,target){
    eng.componentsEngine.createComponent(IdContent,renderBoxes(title,content))
    eng.componentsEngine.renderComponent(target,IdContent)
}

function renderBoxes(title,content){
    return "<div></div>"
}

export default Boxes