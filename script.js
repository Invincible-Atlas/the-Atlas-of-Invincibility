function setTitle(id){
    console.log(id);
    
    alert(document.cookie)
    
    if(id!==""){
        document.cookie =  "title=" + document.getElementById(id).value + "; path=/"
    }
    if(getCookie("title")!==""){
        document.getElementById("title").innerHTML = getCookie("title");
    }
}