let header = document.querySelector('header');
let section = document.querySelector('section');

// create a variable to store URL
let requestURL = "https://li-kuo.github.io/JSONLee/iscream.json";

// create a new XHR object
let request = new XMLHttpRequest();

// open a new request
request.open('GET', requestURL);

// set up the request to accept json
request.responseType = 'json';

// send the requestURL
request.send();

//add an event handler that listens for onload event of JSON file
request.onload = function(){
  let iScreamInc = request.response;
  console.log(iScreamInc);
  populateHeader(iScreamInc);
  topFlavours(iScreamInc);
}

// set up populateHeader
function populateHeader(jsonObj) {
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ', Established: ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// set up topFlavours
function topFlavours(jsonObj){
  let topFlavours = jsonObj['topFlavours'];

  for (let i = 0; i < topFlavours.length; i++){
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');

    img.setAttribute('src', 'https://li-kuo.github.io/JSONLee/images/' + topFlavours[i].image);
    img.setAttribute('alt', topFlavours[i].image);

    h2.textContent = topFlavours[i].name;
    p1.textContent = 'Calories: ' + topFlavours[i].calories;
    p2.textContent = 'Type: ' + topFlavours[i].type;

    let ingredients = topFlavours[i].ingredients;

    for (let j = 0; j < ingredients.length; j++){
      let listItem = document.createElement('li');
      listItem.textContent = ingredients[j];
      list.appendChild(listItem);
    }

    //append each
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);

    section.appendChild(article);



  }
















}
