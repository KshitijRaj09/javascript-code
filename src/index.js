// import "./styles.css";

// // document.getElementById("app").innerHTML = `
// // <h1>Hello Vanilla!</h1>
// // <div>
// //   We use the same configuration as Parcel to bundle this sandbox, you can find more
// //   info about Parcel
// //   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// // </div>
// // `;

// const div = document.querySelectorAll("div");

// div.forEach((d) => {
//   d.addEventListener("click", clickHandler);
// });

// function clickHandler(event) {
//   let element = event.target;
//   let p;
//   div.forEach((d) => {
//     if (d === element) {
//       // p = document.createElement("p");
//       // p.innerText = `P tag inside ${event.target.innerText}`;
//       // event.target.appendChild(p);

//       d.classList.add("addClass");
//     } else {
//       // let parent = p.parentNode;
//       // parent.remove(p);
//       d.classList.remove("addClass");
//     }
//   });
// }

// // function maxChar(str) {
// //   let maxChar = {};
// //   let max = 0;
// //   let maxValue = "";
// //   for (let characters of str) {
// //     if (!maxChar[characters]) {
// //       maxChar[characters] = 1;
// //     } else {
// //       maxChar[characters] += 1;
// //     }
// //   }
// //   console.log(maxChar);
// //   for (let char in maxChar) {
// //     if (max < maxChar[char]) {
// //       max = maxChar[char];
// //       maxValue = char;
// //     }
// //   }
// //   let arr = [maxValue, max];
// //   return arr;
// // }

// // console.log(maxChar("abcccccccd"));
// // console.log(maxChar("apple 1231111"));

// // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// // function chunk(arr, size) {
// //   let chunked = [];

// //   for (let a of arr) {
// //     let lastElement = chunked[chunked.length - 1];
// //     if (!lastElement || lastElement.length === 2) {
// //       chunked.push([a]);
// //     } else chunked.push(a);
// //   }
// //   return chunked;
// // }

// // console.log(chunk([1, 3, 2, 5], 2));

// const arr = [1, 4, 2, 7, 6];

// //let a1 = arr.splice(-1,0, 8);

// const arr2 = ["Hello", "World"];

// const arr3 = [...arr2, ...arr]; //spread operator

// const arr4 = arr2.concat(arr);
// // arr2.push({ name: "Kshitij" }); //We can push items in constant array but we cannot initilize entry new values

// // arr2.splice(0);

// console.log(arr4);

// let arr = [{
//   name:'Kshitij',
//   age: 25,
// },
// {
//   name:'Raj',
//   age:'22'},
//   {
//     name:'Kamal',
//     age:'24'
//   }
// ]

// let arr2 = [{
//   name:'Kshitij',
//   age: 25,
// },
// {
//   name:'Raj',
//   age:'22'},
//   {
//     name:'Kamal',
//     age:'24'
//   }
// ]

// let newArr = arr.find(ar=>{
//   return ar.name==="Raj"
// })

// console.log(newArr)

// newArr.name="Singh"

// //console.log(arr);

// let newMap = arr.map(ar=>{
//   return ar
// })

// console.log(newMap)

// newMap.name="Singh"

// console.log(arr2)

// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar"
// };

// // Get the keys of the object
// const keys = Object.entries(employees);

// console.log(keys);

// Initialize an object
// const user = {
//   username: 'AzureDiamond',
//   password: 'hunter2'
// };

// // Seal the object
// Object.seal(user);

// user.password = '*******';
// user.active = true;

// console.log(user);

// Initialize an object
const name = {
  firstName: "Philip",
  lastName: "Fry"
};

// Initialize another object
// const details = {
//   job: 'Delivery Boy',
//   employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(details);
// console.log(Object.getPrototypeOf(details))

const newName = Object.create(name);

console.log(newName);
