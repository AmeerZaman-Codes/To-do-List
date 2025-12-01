const inputBox = document.getElementById("list");
const listButton = document.getElementById("add");
let lists = document.getElementById("lists");

function addListItem() {
  const inputBoxValue = inputBox.value.trim();

  //   If its comes zero return the code
  if (inputBox.value === "") 
    return;

  // Create Element

  const li = document.createElement("li");
  li.innerHTML = ` ${inputBoxValue}
    <button class="delete-btn">
      <span class="material-symbols-outlined">close</span>
    </button>`;
  lists.appendChild(li);
  inputBox.value = "";

  //   Delete Button
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

listButton.addEventListener("click", addListItem);

inputBox.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addListItem();
    }
});