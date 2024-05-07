// You can see here we are "try catch" the getter and setter for the cookie here, because it will throw error when
// server side rendering (Maybe we will use it?)
//
export const getCookie = (name) => {
  let cookies = {};

  try {
    document.cookie.split(";").forEach(function (element) {
      let [key, value] = element.split("=");

      cookies[key.trim()] = value;
    });
  } catch (error) {
    console.log(error);
  }

  return cookies[name] ?? "";
};

export const setCookie = (name, value, hours = 9600) => {
  let date = new Date();

  // We follow the 400 days rule in internal.
  //
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  try {
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;domain=.${
      window.location.hostname
    };Secure;SameSite=Lax`;
  } catch (error) {
    console.log(error);
  }
};

export const preventEventIfNotNumberInput = (event, options = {}) => {
  const { isAmountInput } = options;

  const acceptedCharacters = [];

  if (isAmountInput) {
    acceptedCharacters.push(["."]);
  }

  if (
    (event.key >= "0" && event.key <= "9") ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "Tab" ||
    event.key === "Backspace" ||
    (event.key.startsWith("F") &&
      event.key.length > 1 &&
      !isNaN(event.key.substring(1))) ||
    event.metaKey ||
    acceptedCharacters.includes(event.key)
  ) {
    return;
  }

  event.preventDefault();
};


export const getTextWithAction = (text, callback) => {

  const ocLink = text.match(/oc-emit/);
  const ocEndLink = text.match(/oc-end-emit/);

  if (ocLink && ocEndLink) {
    let fullText =
      text.substring(ocLink.index, ocEndLink.index) + "oc-end-emit";
    let onlyLink = text
      .substring(ocLink.index, ocEndLink.index)
      .replace("[", "")
      .replace("]", "")
      .replace("oc-emit", "");
    // Switch to oc-emit[preview-to|desktop|desktop-preview]oc-end-emit to see the change
    let htmlLink = `<span class="underline font-medium">${onlyLink.split("|")[2].replace("-", " ")}</span>`;
    if(callback){
      callback(fullText, onlyLink.split('|'))
    }
    return text.replace(fullText, htmlLink);
  } else {
    return text;
  }
};


export const getTextWithLink = (rawHtml, callback) => {
  let tempDivElement = document.createElement("div");
  tempDivElement.innerHTML = rawHtml;
  let text = tempDivElement.textContent || tempDivElement.innerText || "";
  tempDivElement.remove();

  // oc-link[category-page|product-categories.index]oc-end-link
  // oc-link[here|https://hitpayapp.com]oc-end-link

  const ocLink = text.match(/oc-link/);
  const ocEndLink = text.match(/oc-end-link/);

  if (ocLink && ocEndLink) {
    let fullText =
      text.substring(ocLink.index, ocEndLink.index) + "oc-end-link";
    let onlyLink = text
      .substring(ocLink.index, ocEndLink.index)
      .replace("[", "")
      .replace("]", "")
      .replace("oc-link", "");

    let htmlLink = `<a target="_blank" class="text-oc-accent-1" href="${onlyLink.split("|")[1]}">${onlyLink.split("|")[0].replace("-", " ")}</a>`;
    return text.replace(fullText, htmlLink);
  } else {
    return getTextWithAction(text, callback);
  }
};
