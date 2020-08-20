//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

const root = document.getElementById("root");
let content = root.innerHTML;

let tvEpisodes = getAllEpisodes();




tvEpisodes.map(tvEpisode => {

  let session = tvEpisode.season.toString().length===1 ? '0'+ tvEpisode.season : tvEpisode.season;
 

  let numbers = tvEpisode.number.toString().length===1 ? '0' + tvEpisode.number : tvEpisode.number;

  root.innerHTML += `
  
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4"
      <div class="card shadow-sm rounded" style="width: 18rem;">
        <img class="card-img-top" src="${tvEpisode.image.medium}" alt="${tvEpisode.name} image">
        <div class="card-body">
          <h5 class="card-title">${tvEpisode.name}-S${session}E${numbers}</h5>
          <p class="card-text">${tvEpisode.summary.substring(0,150)}...</p>
          <a href="${tvEpisode.url}" target="_blank" class="btn btn-primary">View Details</a>
        </div>
      </div>
    </div>
  
  `;
})




// function createCard(){
//   var newContainerDiv = document.createElement('div');
//   var newRowDiv = document.createElement('div');
//   var newColDiv = document.createElement('div');
//   var newCardDiv = document.createElement('div');
//   var cardImage = document.createElement('img');
//   var cardBody = document.createElement('div');
//   var h5Tag = document.createElement('h5');
//   var pElement = document.createElement('p');
//   var aElement= document.createElement('a');



//   newContainerDiv.setAttribute('class','container');
//   newRowDiv.setAttribute('class','row');
//   newColDiv.setAttribute('class','col');
//   newCardDiv.setAttribute('class','card');
//   cardImage.setAttribute('class','card-img-top');
//   cardBody.setAttribute('class','card-body');
//   h5Tag.setAttribute('class','card-title');
//   pElement.setAttribute('class','card-text');
//   aElement.setAttribute('class','btn btn-primary');

//   h5Tag.textContent = "Card title";
//   pElement.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
//   aElement.textContent = "Go Somewhere";


//   cardBody.appendChild(h5Tag);
//   cardBody.appendChild(pElement);
//   cardBody.appendChild(aElement);

//   newCardDiv.appendChild(cardImage);
//   newCardDiv.appendChild(cardBody);


//   newColDiv.appendChild(newCardDiv);

//   newRowDiv.appendChild(newColDiv);

//   newContainerDiv.appendChild(newRowDiv);

//   newCardDiv.style.width ="18rem"

//   cardImage.src = "http://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg";


//   document.body.appendChild(newContainerDiv);

// }




