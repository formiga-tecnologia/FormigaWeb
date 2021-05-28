import EngineApp from "../Framework/engine.js";

let eng = new EngineApp()
function menu(Title){
    eng.componentsEngine.createComponent("menu",renderMenu(Title))
    eng.componentsEngine.renderComponent("menuId","menu")
    console.log("teste")
}

function renderMenu(Title){
    return "<div class='menuFixed'><nav class='navbar navbar-expand-lg bg-dark'>"+
    "<div class='container-fluid'>"+
      "<a class='navbar-brand' href='#'><img src='img/51281553.png' height='80vh' width='80vh'></a>"+
      "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>"+
       "<span class='navbar-toggler-icon'></span>"+
      "</button>"+
      "<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>"+
        "<div class='navbar-nav'>"+
          "<a class='nav-link active' aria-current='page' href='#'>Home</a>"+
          "<a class='nav-link' href='#'>Features</a>"+
          "<a class='nav-link' href='#'>Pricing</a>"+
          "<a class='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</nav>"+
  "</div>"
}

export default menu