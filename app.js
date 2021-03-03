const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrats = presidents.filter((president) => president.party === "D");
console.log(democrats);
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTermR = presidents.filter(function (name) {
  if (name.terms === 1 && name.party === "R") {
    return true;
  } else {
    return false;
  }
});
const oneTermRepublican = presidents.filter(
  (president) => president.terms === 1 && president.party === "R"
);
console.log(oneTermR);
//3) return only the last three presidents
//on... the list, right???
const index = presidents.length - 3;
const lastThreeOnList = [...presidents.slice(index)];
console.log(lastThreeOnList);

// or last/recent three to serve??
const lastThreeRecent = [...presidents.slice(0, 3)];
console.log(lastThreeRecent);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermDemocrats = presidents.filter(
  (president) => president.terms === 2 && president.party === "D"
);
console.log(twoTermDemocrats);
//wait why would I need to slice?? does this need to be a new array or smth???

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const lyndonJohnson = presidents.filter(function (johnson) {
  if (johnson.name === "Lyndon Johnson" && johnson.terms === 2) {
    alert("LBJ served two terms");
  } else {
    alert("LBJ was one and done. L");
  }
});
console.log(lyndonJohnson);
