/* .js files add interaction to your website */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var factList = ["1 in 3 women around the world experience violence.", 
                "The abortion rate is 37 per 1,000 people in countries that prohibit abortion altogether or allow it only in instances to save a woman’s life, and 34 per 1,000 people in countries that broadly allow for abortion.",
                "The World Health Organization (WHO) estimates that 25 million unsafe abortions take place each year, the vast majority of them in developing countries.",
                "Unsafe abortions are the third leading cause of maternal deaths worldwide and lead to an additional five million largely preventable disabilities, according to the WHO."];

var generatedFact = document.getElementById("generatedFact");
var generate = document.getElementById("generate");
var count = 0;

generate.addEventListener("click", displayFact);

var factNumber;

function displayFact() {
  return factList[factNumber];
}

generate.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*4);
  generatedFact.textContent = displayFact();
});
