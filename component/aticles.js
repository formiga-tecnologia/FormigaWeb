import EngineApp from "../Framework/engine.js"

var eng = new EngineApp()

function articles(content,IdContent){
    eng.componentsEngine.createComponent(IdContent,renderArticle(content,IdContent))
    eng.componentsEngine.renderComponent("dinamic",IdContent)
}

function renderArticle(content,Id){
    return "<article id="+Id+">"+content+"</article>"
}

export default articles