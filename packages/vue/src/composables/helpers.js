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

export const getTextWithLink = (rawHtml) => {
  let tempDivElement = document.createElement("div");
  tempDivElement.innerHTML = rawHtml;
  let text = tempDivElement.textContent || tempDivElement.innerText || "";
  tempDivElement.remove();

  const replacer = (matched) => {
    let withProtocol = matched;
    if (!withProtocol.startsWith("https")) {
      withProtocol = "https://" + matched;
    }
    const newStr = `<a class="font-medium" target="_blank"  href="${withProtocol}"> ${matched}</a>`;
    return newStr;
  };

  const linkRegex = /(https?\:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;
  const modifiedStr = text.replace(linkRegex, replacer);
  return modifiedStr;
};
