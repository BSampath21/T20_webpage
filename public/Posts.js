fetchData();

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
}

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
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.name = userIdToName[userId] || "Unknown";
  }
}

async function updateData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("response:", data);

    const posts = data.map(
      (post) => new Post(post.userId, post.title, post.body)
    );
    console.log("Posts:", posts);

    return posts;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function fun() {
  try {
    const posts = await updateData();
    console.log("Fetched Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

fun();
