const button = document.querySelector(".generate-button");

// function to get the data
function getData() {
  fetch(`https://meme-api.com/gimme/wholesomememes`)
    .then((response) => response.json())
    .then((data) => {
      const { url, author, title } = data;
      //    console.log(url,title,author);

      document.querySelector(".meme-title").innerText = `${title}`;
      document.querySelector(".author").innerText = `${author}`;
      document.querySelector(".meme-image").src = url;
    })

    .catch((err) => console.log(err));
}

// initil call on page reload
getData();

// setting the data
button.addEventListener(`click`, getData);
