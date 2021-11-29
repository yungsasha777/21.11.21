var xhttp = new XMLHttpRequest();
let result = 'empty';
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    fetchJson(JSON.parse(this.responseText));
  };
};
xhttp.open("GET", "https://raw.githubusercontent.com/yungsasha777/21.11.21/main/db.json", true);
xhttp.send();
function fetchJson(arg){
    result = arg;
};
console.log(result);
