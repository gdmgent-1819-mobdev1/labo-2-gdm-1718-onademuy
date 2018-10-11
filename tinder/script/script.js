let url='https://randomuser.me/api/';

let people = [];
let crosses = [];
let hearts = [];

let picture = document.querySelector("#p_picture"),
    name = document.querySelector("#p_name"),
    age = document.querySelector("#p_age");

function updateUser(){
  fetch(url)
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data.results);
    picture.src = data.results[0].picture.large;
    name.innerText = data.results[0].name.last + " " + data.results[0].name.first; 
    age.innerText = data.results[0].dob.age;
    localStorage.setItem("people", JSON.stringify(people));
  })
  .catch(function(error){
    console.log(error);
  });
}

function dislikePerson() {
  console.log('clicked');
    //adds the item to the first in the array
    crosses.push(people[0]);
    console.log(crosses);
    //removes the first item of an array
    people.shift();
    //removes the first item of an array from the console
    localStorage.removeItem("people");

    updateUser();
}
// Buttons en updaten
let btnX = document.getElementById("btn_cross");
btnX.addEventListener("click", dislikePerson);

let btnV = document.getElementById("btn_heart");
btnV.addEventListener("click", function(){
  
   //adds the item to the first in the array
   hearts.push(people[0]);
   console.log(hearts);
   //removes the first item of an array
   people.shift();
   //removes the first item of an array from the console
   localStorage.removeItem("people");

   updateUser();
});

window.onload = updateUser;