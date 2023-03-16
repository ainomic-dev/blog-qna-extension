const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;

  // create a div element
  const divElement = document.createElement("div");
  divElement.id = "summary-container";
  // insert h2 for "Summary"
  const summaryH2 = document.createElement("h2");
  summaryH2.textContent = `Summary`;
  
  // insert p for summary content
  const summaryContentP = document.createElement("p");
  summaryContentP.textContent = `Coming soon...`;
  
  divElement.appendChild(summaryH2);
  divElement.appendChild(summaryContentP);

  // Support for API reference docs
  const heading = article.querySelector("h1").parentNode;
  
  heading.insertAdjacentElement("afterend", divElement);
}