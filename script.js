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


// LEVEL 100
const root = document.getElementById("root");
let content = root.innerHTML;

let tvEpisodes = getAllEpisodes();




tvEpisodes.map(tvEpisode => {

  let session = tvEpisode.season.toString().length===1 ? '0'+ tvEpisode.season : tvEpisode.season;


  let numbers = tvEpisode.number.toString().length===1 ? '0' + tvEpisode.number : tvEpisode.number;

  root.innerHTML += `
  
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 js-series-card"
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
// LEVEL 200 
function searchTitles() {
//define the variables;
  let input = document.getElementById("js-search-titles-input");
  let filter = input.value.toUpperCase();
  let card = document.getElementsByClassName("js-series-card");
  let counter = 0;
  // SEt up the loop
  for (let i = 0; i < card.length; i++) {
    let title = card[i].getElementsByClassName("card-title")[0];
    if (title) {
      let txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
        card[i].classList.add("js-filtered");
      } else {
        card[i].style.display = "none";
        card[i].classList.remove("js-filtered")
      }
    }       
  }
  document.getElementById("js-filtered-result").innerHTML = document.getElementsByClassName("js-filtered").length;
}
document.getElementById("js-total-result").innerHTML = getAllEpisodes().length;
document.getElementById("js-filtered-result").innerHTML = getAllEpisodes().length;


//LEVEL 300 
// var option = document.createElement ('option');
//     text = document.createTextNode (
//       `${episodeList[i].name} - S${season}E${episode}`
//       ` S${season}E${episode} - ${episodeList[i].name} `
//     );
//     option.setAttribute ('value', episodeList[i].name);
//     option.appendChild (text);
//     select.insertBefore (option, select.lastChild);

// const allEpisodes = getAllEpisodes ();
// selectBox.addEventListener ('change', function (e) {
//   if (e.target.value === 'default') {
//     makePageForEpisodes (allEpisodes);
//   } else search (e.target.value.toLowerCase ());
// });


let selectBox = document.getElementById("exampleFormControlSelect1");

selectBox.innerHTML = " "




tvEpisodes.map(tvEpisode => {
  let session = tvEpisode.season.toString().length===1 ? '0'+ tvEpisode.season : tvEpisode.season;


  let numbers = tvEpisode.number.toString().length===1 ? '0' + tvEpisode.number : tvEpisode.number;

  selectBox.innerHTML += `
  
  <option id="select">S${session}E${numbers}-${tvEpisode.name}</option>
  
  `;
})


selectBox.addEventListener('change', (event) => {
  const result = document.querySelector('#root');
  result.textContent = `${event.target.value}`;
});







// const searchBar = document.getElementById("inputMovie");

// searchBar.addEventListener("keyup", e => {
//   const searchString = e.target.value;

//   const filteredCharacters = tvEpisodes.filter(character => {
//     return (
//       character.name.includes(searchString)
//     );
//   });

// });


// function myFunction() {

//   let input = document.getElementById('inputMovie');

//   let inputValue = input.value.toUpperCase();

//   const root = document.getElementById("root");

  // const filteredCharacters = tvEpisodes.filter(character => {
  //   return (
  //     character.name.includes(inputValue)
  //     );
  // });
  // console.log(filteredCharacters);

  // tvEpisodes.map(tvEpisode => {
  //   let movieNames = tvEpisode.name.toUpperCase();
  //   if(movieNames.includes(inputValue)){
  //   root.style.display = "";
  //   }
  //   else{
  //     root.style.display = "none";
  //   }
  // }
  // )
// }




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




