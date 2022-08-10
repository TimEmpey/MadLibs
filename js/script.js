window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // gets value from form inputs
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const nounInput = document.getElementById("nounInput").value;


    //turns names to all caps
    

    // sets story variables from form
    document.querySelector("span#person1a").innerText = person1Input.toUpperCase();
    document.querySelector("span#person1b").innerText = person1Input.toUpperCase();
    document.querySelector("span#person1c").innerText = person1Input.toUpperCase();
    document.querySelector("span#person2a").innerText = person2Input.toUpperCase();
    document.querySelector("span#person2b").innerText = person2Input.toUpperCase();
    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;


    document.querySelector("div#story").removeAttribute("class");

    event.preventDefault();
  };
};