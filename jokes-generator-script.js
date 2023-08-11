const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

const getJoke = async () => {
  try {
    const response = await fetch(jokeUrl);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return {
        setup: "What happens when we cannot load jokes?",
        punchline: "Jokes on us &#128577",
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return {
      setup: "What happens when we cannot load jokes?",
      punchline: "Jokes on us &#128577",
    };
  }
};

(async () => {
  const data = await getJoke();

  const jokeContainer = document.createElement("div");
  jokeContainer.style.color = "#FCF6F5FF"
  jokeContainer.style.backgroundColor = "#89ABE3FF";
  jokeContainer.style.borderRadius = "10px";
  jokeContainer.style.padding = "2px";
  jokeContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  jokeContainer.style.textAlign = "center";

  const headerElement = document.createElement("h2");
  headerElement.innerHTML = "Joke Time";

  const jokeBox = document.createElement("div");  
  jokeBox.style.padding = "5px";

  const setupElement = document.createElement("p");
  setupElement.style.margin = "10px 0";
  setupElement.style.fontSize = "1.2rem";
  setupElement.innerHTML = data.setup;

  const punchlineElement = document.createElement("p");
  punchlineElement.style.margin = "10px 0";
  punchlineElement.style.fontSize = "1.2rem";
  punchlineElement.innerHTML = data.punchline;

  jokeContainer.appendChild(headerElement);
  jokeContainer.appendChild(jokeBox);
  jokeBox.appendChild(setupElement);
  jokeBox.appendChild(punchlineElement);

  document.body.appendChild(jokeContainer);
})();
