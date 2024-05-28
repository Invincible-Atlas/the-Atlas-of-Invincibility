function setTitle(id){
    console.log(id);
    if(id!==""){
        document.cookie = "title=" + document.getElementById(id).value + ";";
    }
    if(getCookie("title")!==""){
        document.querySelector("title").innerHTML = getCookie("title");
    }else{
        document.querySelector("title").innerHTML = "The Atlas of Invincibility";
    }
}
function setFav(id){
    console.log(id);
    
    
    
    if(id!==""){
        document.cookie =  "fav=" + document.getElementById(id).value + "; path=/"
    }
    if(getCookie("fav")!==""){
        document.getElementById("favicon").href = getCookie("fav");
    }
}
function getAllCookies(){
    document.getElementById("cookieGetOutput").innerHTML=document.cookie;
}
function tabPreset(index){  
    const presetList=[["Home | Schoology","https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico"],["fsafda","fasfd"]];

    document.cookie =  "fav=" + presetList[index][1] + ";";
    document.getElementById("favicon").innerHTML = getCookie("fav");
    document.cookie = "title=" + presetList[index][0] + ";";
    document.querySelector("title").innerHTML = getCookie("title");
}
function schoolPreset(){
    tabPreset(0);
}
setTitle("");
setFav("");
