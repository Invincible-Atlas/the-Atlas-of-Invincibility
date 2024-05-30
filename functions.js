/**
 * Returns a random integer between min and max
 * @param {number} min - the minimum integer that can be returned. inclusive
 * @param {number} max - the maximum integer that can be returned. inclusive
 */
function randInt(min,max){
    return(min+Math.round(Math.random()*((max+1)-min)));

}
/**
 * Searches for a specific cookie
 * @param {*} cname - the name of the cookie to get 
 * @returns The value of the cookie if it is found, or "" if it is not.
 */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function openAB(link,fav,title){
  var abWin = open();
  var frame = document.createElement("iframe");
  var titleEl = document.createElement("title");
  var favEl = document.createElement("link");
  frame.width = "100%";
  frame.height = "99%";
  frame.style.border = "none";
  frame.style.margin = "0px";
  frame.src = link;
  titleEl.innerHTML = title;
  favEl.rel = "icon";
  favEl.type = "image/x-icon";
  favEl.href = fav;
  abWin.document.body.appendChild(frame);
  abWin.document.head.appendChild(titleEl);
  abWin.document.head.appendChild(favEl)
}
function openGame(link){
  var currentUrl = window.location.href;
  var domain = currentUrl.split("/")[0];
  openAB(domain+link,getCookie("fav"),getCookie("title"))
}
