export const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
};

const mapTextNodes = (children) =>
  children.map((child) => (typeof child === "string" ? hString(child) : child));

export const h = (tag, props = {}, children = []) => {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
};

export const hString = (str) => ({ type: DOM_TYPES.TEXT, value: str });

export const hFragment = (vNodes) => ({
  type: DOM_TYPES.FRAGMENT,
  children: mapTextNodes(withoutNulls(vNodes)),
});

export const lipsum = (n) => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat.`;

  return hFragment(Array(n).fill(h("p", {}, [text])));
};
