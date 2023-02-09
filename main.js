const monBar = document.querySelector("#chart-bar-mon");
const tueBar = document.querySelector("#chart-bar-tue");
const wedBar = document.querySelector("#chart-bar-wed");
const thuBar = document.querySelector("#chart-bar-thu");
const friBar = document.querySelector("#chart-bar-fri");
const satBar = document.querySelector("#chart-bar-sat");
const sunBar = document.querySelector("#chart-bar-sun");

const fetchData = async () => {
  const response = await fetch("./data.json");

  const fetchedData = await response.json();

  return fetchedData;
};

const generateData = async () => {
  const data = await fetchData();

  //build array of numbers

  const mon = data[0].amount;
  const tue = data[1].amount;
  const wed = data[2].amount;
  const thu = data[3].amount;
  const fri = data[4].amount;
  const sat = data[5].amount;
  const sun = data[6].amount;

  const arr = [mon, tue, wed, thu, fri, sat, sun];

  return arr;
};

const populateGraph = async () => {
  const arr = await generateData();

  //   console.log(date);

  //find largest number and index of that number

  const largestNumber = Math.max(...arr);
  const largestDay = arr.indexOf(largestNumber);

  //populate graph

  if (largestDay === 0) {
    monBar.style.height = "100%";
  } else {
    monBar.style.height = `${(arr[0] / largestNumber) * 100}%`;
  }
  if (largestDay === 1) {
    tueBar.style.height = "100%";
  } else {
    tueBar.style.height = `${(arr[1] / largestNumber) * 100}%`;
  }
  if (largestDay === 2) {
    wedBar.style.height = "100%";
  } else {
    wedBar.style.height = `${(arr[2] / largestNumber) * 100}%`;
  }
  if (largestDay === 3) {
    thuBar.style.height = "100%";
  } else {
    thuBar.style.height = `${(arr[3] / largestNumber) * 100}%`;
  }
  if (largestDay === 4) {
    friBar.style.height = "100%";
  } else {
    friBar.style.height = `${(arr[4] / largestNumber) * 100}%`;
  }
  if (largestDay === 5) {
    satBar.style.height = "100%";
  } else {
    satBar.style.height = `${(arr[5] / largestNumber) * 100}%`;
  }
  if (largestDay === 6) {
    sunBar.style.height = "100%";
  } else {
    sunBar.style.height = `${(arr[6] / largestNumber) * 100}%`;
  }

  // fill hover boxes with the number for the day

  monBar.lastElementChild.innerHTML = `$${arr[0]}`;
  tueBar.lastElementChild.innerHTML = `$${arr[1]}`;
  wedBar.lastElementChild.innerHTML = `$${arr[2]}`;
  thuBar.lastElementChild.innerHTML = `$${arr[3]}`;
  friBar.lastElementChild.innerHTML = `$${arr[4]}`;
  satBar.lastElementChild.innerHTML = `$${arr[5]}`;
  sunBar.lastElementChild.innerHTML = `$${arr[6]}`;

  //color present day with cyan color

  const day = new Date().getDay();

  if (day === 0) {
    sunBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 1) {
    monBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 2) {
    tueBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 3) {
    wedBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 4) {
    thuBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 5) {
    friBar.style.background = "hsl(186, 34%, 60%)";
  }
  if (day === 6) {
    satBar.style.background = "hsl(186, 34%, 60%)";
  }
};

populateGraph();

// const bars = document.querySelectorAll(".bar-overlay");

// bars.forEach((bar) => {
//   bar.addEventListener("mouseover", () => {
//     bar.style.opacity = "0.5";
//     bar.nextElementSibling.style.visibility = "visible";
//   });
// });
// bars.forEach((bar) => {
//   bar.addEventListener("mouseout", () => {
//     bar.style.opacity = "0";
//     bar.nextElementSibling.style.visibility = "hidden";
//   });
// });

// bars.forEach((bar) => {
//   bar.addEventListener("click", () => {
//     if (bar.classList.contains("active")) {
//       bar.classList.toggle("active");
//     } else {
//       bars.forEach((bar) => bar.classList.remove("active"));
//     }
//     bar.classList.add("active");
//     // bar.style.opacity = "0.5";
//     // bar.nextElementSibling.style.visibility = "visible";
//   });
// });
