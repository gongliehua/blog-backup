var ele = document.currentScript;
var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        var text = "<div style='margin: 4px 0;'>" + data.content + " —" + data.from + "</div>";
        ele.outerHTML = text;
    }
};
xmlhttp.open("GET", "http://say.strval.com/", true);
xmlhttp.send();

console.log("http://strval.com");
console.log("http://say.strval.com");
console.log("http://mirrors.strval.com");
console.log("http://www.status.cx");
console.log("http://www.sha1.cn");
console.log("http://www.cloudbuf.com");
console.log("test");
