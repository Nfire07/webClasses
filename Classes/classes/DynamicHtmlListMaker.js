class DynamicHtmlListMaker {
  static concatListToElement(parent, childName, count, props = {}) {
    if(count==0){
      return;
    }
    for (let i = 0; i < count; i++) {
      const child = document.createElement(childName);

      if (props.style) {
        Object.assign(child.style, props.style);
      }

      if (props.class !== undefined){
        child.className = props.class || {};
      }
      if (props.idList !== undefined){
        child.id = props.idList[i] || "";
      }

      if(props.listText !== undefined){
        child.innerText = props.listText[i] || "";
      }
      else if (props.text !== undefined) {
        child.innerText = props.text;
      } 
      else if (props.html !== undefined) {
        child.innerHTML = props.html;
      } 

      parent.appendChild(child);
    }
  }
}
