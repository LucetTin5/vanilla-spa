/**
 *  @param {string} selector : CSS-selector
 *  @return {HTMLElement} DOMElement
 */

export const qs = (selector) => {
  return document.querySelector(selector);
};

/**
 *  @param {HTMLElement} target : target HTML Element, basically #root
 *  @param {string} content : DOM Content (HTML)
 */

export const insertHTML = (target, content) => {
  target.insertAdjacentElement("beforebegin", content);
  return;
};
