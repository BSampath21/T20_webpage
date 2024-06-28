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
