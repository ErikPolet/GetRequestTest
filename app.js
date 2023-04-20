const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const itemList = document.getElementById("item-list");
      for (let i = 0; i < data.length; i++) {
        const item = document.createElement("li");
        const nameLink = document.createElement("p");
        // nameLink.href = data.history[i].url;
        nameLink.textContent = data[i].title;
        item.appendChild(nameLink);
        itemList.appendChild(item);
      }
    }
  };
  xhr.send();
  
