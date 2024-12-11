fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    let list = document.getElementById("lista");
    let row = document.getElementById("libererie");
    let totaleLocal = document.getElementById("total");
    let storege = [];
    console.log(data);
    const selectitem = function () {
      list.innerHTML = "";
      storage = JSON.parse(localStorage.getItem("storage"));
      console.log(storage);
      storege.forEach((el, index) => {
        let newlist = document.createElement("li");
      });
    };
  });
