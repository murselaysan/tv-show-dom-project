//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

var newContainerDiv = document.createElement('div');
var newRowDiv = document.createElement('div');
var newColDiv = document.createElement('div');
var newCardDiv = document.createElement('div');
var cardImage = document.createElement('img');
var cardBody = document.createElement('div');
var h5Tag = document.createElement('h5');
var pElement = document.createElement('p');
var aElement= document.createElement('a');

newContainerDiv.setAttribute('class','container');
newRowDiv.setAttribute('class','row');
newColDiv.setAttribute('class','col');
newCardDiv.setAttribute('class','card');
cardImage.setAttribute('class','card-img-top');
cardBody.setAttribute('class','card-body');
h5Tag.setAttribute('class','card-title');
pElement.setAttribute('class','card-text');
aElement.setAttribute('class','btn btn-primary');

h5Tag.textContent = "Card title";
pElement.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
aElement.textContent = "Go Somewhere";


cardBody.appendChild(h5Tag);
cardBody.appendChild(pElement);
cardBody.appendChild(aElement);

newCardDiv.appendChild(cardImage);
newCardDiv.appendChild(cardBody);


newColDiv.appendChild(newCardDiv);

newRowDiv.appendChild(newColDiv);

newContainerDiv.appendChild(newRowDiv);

newCardDiv.style.width ="18rem"

cardImage.src = "http://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg";








document.body.appendChild(newContainerDiv);
