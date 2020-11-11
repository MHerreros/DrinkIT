window.onload = function() {

updateData();
var img = "";
function updateData() {

  fetch('http://localhost:8080/info').then((res) => {
    return res.json()

  }).then((data) => {
		document.getElementById('drink').innerHTML = data.text;
		if (img != data.link){
			document.getElementById('loading').src = data.link;
			img = data.link;
		}
		});
		setTimeout(updateData, 1000);
  }
};
