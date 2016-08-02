function e(elementType, text, attribute, styles){
   var el = document.createElement(elementType);
   el.textContent = text;

   for(var i = 0; i < attribute.length; i++){
      var attr = attribute[i];
      el.setAttribute(attr[0], attr[1]);
   }
   for(var j = 0; j < styles.length; j++){
      var style = styles[j];
      el.style[style[0]] = style[1]
      //el.setAttribute(style[0], style[1]);
   }
   return el;
}

var a = e("a", "link to google", [['href', "http://www.google.com"], ['target', '_blank']], [['color, "red"']]);
document.body.appendChild(a);
