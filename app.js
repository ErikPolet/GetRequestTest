const xhr = new XMLHttpRequest();
xhr.open("GET", "http://46.44.182.25:65445/api/json/v2/history");
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const itemList = document.getElementById("item-list");
      for (let i = 0; i < data.history.length; i++) {
        const item = document.createElement("li");
        const nameLink = document.createElement("p");
        // nameLink.href = data.history[i].url;
        nameLink.textContent = data.history[i].source;
        item.appendChild(nameLink);
        itemList.appendChild(item);
      }
    }
  };
  xhr.send();
  