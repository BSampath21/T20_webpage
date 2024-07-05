/*fetchData();

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
    const tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    data.forEach((post) => {
      const newRow = `
                        <trow>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.body}</td>
                        </trow>
                    `;
      tBody.innerHTML += newRow;
    });
  } catch (error) {
    console.error("Error :", error);
  }
}*/

const userIdToName = {
  1: "Athota Srilatha",
  2: "Bandaru Sampath Kumar",
  3: "Gollakaram Ganga Bhavani",
  4: "Gowtham Meka",
  5: "Mayuraj Ranawat",
  6: "Narendiran K",
  7: "Pratham Madhunapanthula",
  8: "Riya Reddy",
  9: "Shaik Sameer",
  10: "Suriyan K",
  11: "Vaishnavi Panta",
  12: "Yateesh Tangudu",
};

class Post {
  constructor(userId, title, body) {
    this.title = title;
    this.body = body;
    this.name = userIdToName[userId] || "Unknown";
  }
}

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("API Response:", data);

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';

    data.forEach(post => {
      const { userId, title, body } = post;
      const postObj = new Post(userId, title, body);
      const row = `
        <tr>
          <td>${postObj.name}</td>
          <td>${postObj.title}</td>
          <td>${postObj.body}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const updateButton = document.getElementById("updateButton");
updateButton.addEventListener('click', fetchData);

fetchData();

