
// LEVEL 100
const root = document.getElementById("root");
let content = root.innerHTML;

//let tvEpisodes = getAllEpisodes();

 fetch("https://api.tvmaze.com/shows/82/episodes")
.then(response => response.json())
.then(function (tvEpisodes){
  tvEpisodes.map(tvEpisode => {

    let session = tvEpisode.season.toString().length===1 ? '0'+ tvEpisode.season : tvEpisode.season;
  
  
    let numbers = tvEpisode.number.toString().length===1 ? '0' + tvEpisode.number : tvEpisode.number;
  
    root.innerHTML += `
    
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4 js-series-card border movies-card"
        <div class="card shadow-sm rounded" style="width: 18rem;">
          <img class="card-img-top rounded-top"  src="${tvEpisode.image.medium}" alt="${tvEpisode.name} image">
          <div class="card-body">
            <h5 class="card-title">${tvEpisode.name}-S${session}E${numbers}</h5>
            <p class="card-text">${tvEpisode.summary.substring(0,150)}...</p>
            <a href="${tvEpisode.url}" target="_blank" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    
    `;
  })
})




// LEVEL 200 
// Search box
function searchTitles(keyword) {
//define the variables;
  let input = document.getElementById("js-search-titles-input");
  //let filter = input.value.toUpperCase();
  let filter = keyword.toUpperCase();
  let card = document.getElementsByClassName("js-series-card");
  
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
//Select Box

let selectBox = document.getElementById("exampleFormControlSelect1");

fetch("https://api.tvmaze.com/shows/82/episodes")
.then(response => response.json())
.then(function (tvEpisodes){

tvEpisodes.map(tvEpisode => {
  let session = tvEpisode.season.toString().length===1 ? '0'+ tvEpisode.season : tvEpisode.season;


  let numbers = tvEpisode.number.toString().length===1 ? '0' + tvEpisode.number : tvEpisode.number;

  selectBox.innerHTML += `
  
  <option id="select" value="${tvEpisode.name}">S${session}E${numbers}-${tvEpisode.name}</option>
  
  `;
})
})
selectBox.addEventListener('change', (event) => {
  searchTitles(event.target.value);
  // let card = document.getElementsByClassName("js-series-card");
  // const result = document.querySelector('#root')
  // result.textContent = `${event.target.value}`;
});






