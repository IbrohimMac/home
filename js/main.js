// AJAX
//  XMLHTTPREQUEST /////////////////////
// console.log(XMLHttpRequest);

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// f();

// FETCH ///////////////////////////
// let pr = fetch('https://jsonplaceholder.typicode.com/users');
// pr.then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log('Error', err);
//   });

// async function getData() {
//   try {
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log('Error', err);
//   }
// }

// getData();

// let url = 'https://example.com?';

// let query = new URLSearchParams({
//   page: 1,
//   limit: 10,
// });

// console.log(url + query);

// fetch(url + query)

// ERROR //////////////////////////
// let pr = fetch('https://jsonplaceholder.typicode.com/users');

// pr.then((res) => {
//   if (res.ok === false && (res.status !== 200 || res.status !== 201)) {
//     // console.log('Error');
//     throw new Error('Xatolik');
//   }
//   return res.json();
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   });

// POST REQUEST /////////////////////////////

// function customFetch(url, options) {
//   return new Promise(async (resolve, reject) => {
//     let res = await fetch(url, options);
//     if (res.status === 200 && res.ok === true) {
//       let data = await res.json();
//       resolve(data);
//     } else {
//       reject(new Error('Error'));
//     }
//   });
// }

// const sendData = async () => {
//   let post = {
//     title: 'LOREM',
//     body: 'lorem ipsum dolor',
//     userId: 5,
//   };
//   try {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(post),
//     });
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// sendData();

// USERS APP //////////////////////////////////////////////
const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
        <h2> ${user.name}</h2>
        <h2>Id: ${user.id}</h2>
        <p>Email: <a href="">${user.email}</a></p>
        <p>Website: <a href="">${user.website}</a></p>
        <p>Address: <a href="">${user.address}</a></p>
        <p>Phone: <a href="">${user.phone}</a></p>
       <div class="vmes">
       <button class="but1"><a class="first" href="/pages/todos.html" onclick="getTodos(${user.id})">Todos</a></button> 
       <button class="but1"><a class="first" href="/pages/todos.html" onclick="getTodos(${user.id})">Posts</a></button> 
       <button class="but1"><a class="first" href="/pages/todos.html" onclick="getTodos(${user.id})">Gallery</a></button> 

       </div>
       </div>
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}
