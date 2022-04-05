window.onload = () => {
  let input = document.querySelector("#inputContainer > input");
  let buttonForm = document.querySelector("#submitFormBtn");
  buttonForm.addEventListener("click", (event) => {
    event.preventDefault();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    for (let singleInput of input) {
      console.log(
        `${capitalizeFirstLetter(singleInput.id)}: ${singleInput.value}`
      );
    }
  });
};
