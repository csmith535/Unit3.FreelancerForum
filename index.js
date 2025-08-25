/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Question 1
const randomFreelancer = () => {
  let randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  let randomOccupations =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  let randomPrice =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  let randomJoe = {
    name: randomName,
    occupation: randomOccupations,
    rate: randomPrice,
  };

  return randomJoe;
};

console.log(randomFreelancer());

// Question 2
const availableFreelancers = [];
for (let i = 0; i < NUM_FREELANCERS; ++i) {
  availableFreelancers[i] = randomFreelancer();
}

console.log(availableFreelancers);

// Question 3
const getAverageRate = () => {
  let rateSum = 0;
  for (let i = 0; i < availableFreelancers.length; ++i) {
    rateSum += availableFreelancers[i].rate;
  }
  let rateCalc = rateSum / availableFreelancers.length;
  return rateCalc;
};
console.log(getAverageRate());

// Question 4
const averageRate = getAverageRate(availableFreelancers);
console.log(averageRate);

// Question 5
function SingleFreelancer(freelancer) {
  const FLdiv = document.createElement("div");

  const textName = document.createElement("h3");
  textName.innerText = freelancer.name;

  const textOccupation = document.createElement("h3");
  textOccupation.innerText = freelancer.occupation;

  const textRate = document.createElement("h3");
  textRate.innerText = freelancer.rate;

  FLdiv.appendChild(textName);
  FLdiv.appendChild(textOccupation);
  FLdiv.appendChild(textRate);

  return FLdiv;
}

// Question 6
function freelancerArray(freelancers) {
  const article = document.createElement("table");
  freelancers.forEach((freelancer) => {
    article.appendChild(SingleFreelancer(freelancer));
  });
  return article;
}

// Question 7
function freelanceAverage(freelancers) {
  const $value = document.createElement("h2");
  $value.textContent = `Average Rate: $${getAverageRate(freelancers)}`;
  return $value;
}

// 93-123 AI help to practice table syntax
function FreelancerTable(freelancers) {
  const table = document.createElement("table");
  table.className = "freelancer-table";

  // Create table header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Rate</th>
    </tr>
  `;
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.rate}</td>
    `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancers For Fun</h1>
    <SingleFreelancer></SingleFreelancer>
    <Freelancers></Freelancers>
    <average></average>
    <div id="freelancer-table"></div>
  `;
  // $app
  //   .querySelector("SingleFreelancer")
  //   .replaceWith(SingleFreelancer(availableFreelancers[0]));
  // $app
  //   .querySelector("Freelancers")
  //   .replaceWith(freelancerArray(availableFreelancers));

  $app
    .querySelector("#freelancer-table")
    .replaceWith(FreelancerTable(availableFreelancers));

  $app
    .querySelector("average")
    .replaceWith(freelanceAverage(availableFreelancers));
}
render();
