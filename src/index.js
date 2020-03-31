const array = ["blue", "red", "black", "white", "green"];
const app = document.getElementById("app");

const filtered = array.filter((item) => {
  return item[0] === 'b';
});

app.insertAdjacentHTML("beforeend", filtered.join(', '));
