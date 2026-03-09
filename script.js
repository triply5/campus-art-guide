let currentIndex=0;

function openArt(i){

currentIndex=i;

document.getElementById("modal").style.display="block";

document.getElementById("title").innerText=artworks[i].title;

document.getElementById("image").src=artworks[i].image;

document.getElementById("desc").innerText=artworks[i].desc;

document.getElementById("likes").innerText=artworks[i].likes;

}

function closeArt(){

document.getElementById("modal").style.display="none";

}

function likeArt(){

artworks[currentIndex].likes++;

document.getElementById("likes").innerText=artworks[currentIndex].likes;

}

function showRanking(){

let sorted=[...artworks];

sorted.sort((a,b)=>b.likes-a.likes);

let html="";

for(let i=0;i<sorted.length;i++){

html+=`
<p>${i+1}. ${sorted[i].title} ❤️ ${sorted[i].likes}</p>
`;

}

document.getElementById("ranking").innerHTML=html;

}

if(document.getElementById("ranking")){
showRanking();
}

const urlParams = new URLSearchParams(window.location.search);
const artId = urlParams.get("art");

if(artId !== null){
openArt(artId);
}
