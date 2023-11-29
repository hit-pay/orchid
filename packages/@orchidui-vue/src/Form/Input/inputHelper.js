// pick event listeners in $attrs. Example: { value: 1, onClick: () => {} } -> { onClick: () => {} }
export const pickEventListeners = (attrs, whiteList) => {
  const keys = Object.keys(attrs);
  const result = {};

  keys.forEach((key) => {
    if (!(key.startsWith("on") && typeof attrs[key] === "function")) {
      return;
    }

    if (whiteList?.length > 0 && !whiteList.includes(key)) {
      return;
    }

    result[key] = attrs[key];
  });

  return result;
};
