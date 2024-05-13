function setTitle(id){
    console.log(id);
    document.cookie="title=a;path=/"
    alert(document.cookie)
    
    if(id!==""){
        document.cookie =  "title=a" + "; path=/"
    }
    if(getCookie("title")!==""){
        document.getElementById("title").innerHTML = getCookie("title");
    }
}