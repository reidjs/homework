document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };


  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const addPlace = (place) => {
    const input = document.querySelector("input.favorite-input");
    const ul = document.getElementById("sf-places");
    // console.log(input.value);
    const li = document.createElement("LI");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
    // debugger
    // ul.append(input)

  }
  // --- your code here!
  const submitButton = document.querySelector("input.favorite-submit");
  // submitButton.preventDefault();
  submitButton.addEventListener("click", (e) => {

    e.preventDefault();
    addPlace();
  });

  // adding new photos

  // --- your code here!
  const showFormButton = document.querySelector("button.photo-show-button");

  showFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector(".photo-form-container");
    console.log(form);
    document.querySelector(".photo-form-container").className = "photo-form-container";
    const addPhotoButton = document.querySelector("input.photo-url-submit");
    const photoInput = document.querySelector("input.photo-url-input");
    addPhotoButton.addEventListener("click", (e) => {
      e.preventDefault();
      const ul = document.querySelector("ul.dog-photos");
      const li = document.createElement("LI");

      const newPhoto = document.createElement("IMG")
      newPhoto.src = photoInput.value
      li.append(newPhoto);
      ul.appendChild(li);
      // debugger
      // debugger
    });
  });



});
