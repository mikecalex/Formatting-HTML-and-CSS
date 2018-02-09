
let ingredients = [
  "1 1/2 pounds Brussels sprouts",
  "3 tablespoons good olive oil",
  "3/4 teaspoon kosher salt",
  "1/2 teaspoon freshly ground black pepper"
];

let directions = [
  "Preheat oven to 400 degrees F.",
  "Cut off the brown ends of the Brussels sprouts.",
  "Pull off any yellow outer leaves.",
  "Mix them in a bowl with the olive oil, salt and pepper.",
  "Pour them on a sheet pan and roast for 35 to 40 minutes.",
  "They should be until crisp on the outside and tender on the inside.",
  "Shake the pan from time to time to brown the sprouts evenly.",
  "Sprinkle with more kosher salt (I like these salty like French fries).",
  "Serve and enjoy!"
];

// Ingredients Button Making List Visible
let buttonOne = document.getElementsByTagName('button')[0];
buttonOne.addEventListener('click', () => {
  let unorderedList = document.getElementById('ingredient-list');
  ingredients.forEach(function(item){
    unorderedList.innerHTML += `<li>${item}</li>`;
  });
  buttonOne.style.visibility = "hidden";
});

// Direction Button Making Instructions Visible
let buttonTwo = document.getElementsByTagName('button')[1];
buttonTwo.addEventListener('click', () => {
  let unorderedLists = document.getElementById('direction-list');
  directions.forEach(function(item){
    unorderedLists.innerHTML += `<li>${item}</li>`;
  });
  buttonTwo.style.visibility = "hidden";
});

// Make image dissapear when it's clicked.
document.getElementById('Sprouts!').onclick = function(event) {
    document.getElementById('Sprouts!').style.visibility = "hidden";
};

// Change banner when clicked
let banner = document.getElementById('textbox');
banner.addEventListener('click', () => {
  let colors = [purple-banner, green-banner, gray-banner];
  let index = Math.floor(Math.random() * colors.length);
  let color = colors[index];
  banner.innerHTML = color;
});
