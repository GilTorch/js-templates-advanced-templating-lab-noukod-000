let recipe={name:"",description:"",ingredients:new Array(6).fill("<input type='text' name='ingredients'/>")}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper("displayIngredient",function(){
  return new Handlebars.SafeString("<li name='ingredients'>"+this.name+"</li>")
})
Handlebars.registerPartial("recipeDetailsPartial",document.getElementById("recipe-details-partial").innerHTML);
//
// Handlebars.registerPartial("recipeFormPartial",document.getElementById("recipe-form-partials").innerHTML);

renderTemplate(document.getElementById("recipe-form-template").innerHTML,document.getElementById("main"),recipe);

}

function renderTemplate(template,root,content){
  root.innerHTML=Handlebars.compile(template)(content)
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
