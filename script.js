const loading = document.querySelector(".loading");
const container = document.querySelector(".container");

// function to fetch data and card display

const fetchData = async () => {
  try {
    container.innerHTML = `<h2 class="loading">Loading...</h2>`;
    const data = await fetch(`https://www.reddit.com/r/reactjs.json`);
    const response = await data.json();
    const cardData = response.data.children;
    container.innerHTML = "";

    cardData.forEach((cardData) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = ` <h3 class="title">
        ${cardData?.data?.title}

       
      </h3>
      <p class="self-text">
        ${htmlDecode(cardData?.data?.selftext_html)}
      </p>

     
      <p class="score">Score: <span>${cardData?.data?.score}</span></p>
      <a
        href="${cardData?.data?.url}"
        target="_blank"
        class="link"
        >Link</a> `;

      container.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// Function to decode HTML

function htmlDecode(input) {
  let e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length != 0 ? e.childNodes[0].textContent : "";
}
