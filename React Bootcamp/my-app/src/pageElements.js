const pageElements = [
  {
    /**
     * This can be div/section or any block level element.
     */
    htmlElementName: "div",
    innerHTML: "Hello World!",
    /**
     * The keys are what we set for HTMLElement.style[key]
     * eg: document.getElementById('myDiv').style.color = 'red'
     */
    style: {
      border: "1px solid blue",
      backgroundColor: "#edeff2",
      color: "#4d4d4d",
    },
  },
  {
    /**
     * This can be div/section or any block level element.
     */
    htmlElementName: "section",
    innerHTML: "Bye World!",
    /**
     * The keys are what we set for HTMLElement.style[key]
     * eg: document.getElementById('myDiv').style.color = 'red'
     */
    style: {
      border: "1px solid red",
      backgroundColor: "#edeff2",
      color: "#4d4d4d",
    },
  },
];

export default pageElements;
