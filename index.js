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
  const div = document.createElement("div");

  const textName = document.createElement("h2");
  textName.innerText = freelancer.name;

  const textOccupation = document.createElement("h2");
  textOccupation.innerText = freelancer.occupation;

  const textRate = document.createElement("h2");
  textRate.innerText = freelancer.rate;
}
