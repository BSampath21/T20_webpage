fetchData();

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const tBody = document.getElementById("tBody");
    console.log(data);
    let tableData = "";
    data.map((post) => {
      tableData += `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        </tr>`;
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
