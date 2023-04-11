const id = document.querySelector(".id");
const advice = document.querySelector(".advice");

function hello() {
const h = fetch("https://api.adviceslip.com/advice")
.then((res) => res.json())
.then(
(data) => (
(id.innerHTML = data.slip.id), (advice.innerHTML = data.slip.advice)
)
);
}

const button = document.querySelector(".dice");
button.addEventListener("click", () => {
hello();
});