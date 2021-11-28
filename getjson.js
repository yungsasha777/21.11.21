var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://raw.githubusercontent.com/yungsasha777/21.11.21/main/db.json", true);
xhttp.send();
