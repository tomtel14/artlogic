var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var rows = response.rows;

    let output = '';
    for (let index = 0; index < rows.length; index++) {
      output += `
        <article class="question">
          <div class="question-title">
            <h4>${[index + 1]}. ${rows[index].title}</h4>
            <button type="button" class="question-btn">
              <i class="fa fa-caret-down"></i>
            </button>
          </div>
          <div class="question-text">
            <p>${rows[index].content}</p>
          </div>
        </article>
      `;
    }
    document.getElementById('questions-cont').innerHTML = output;

  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

const questionsCont = document.getElementById('questions-cont');

questionsCont.addEventListener('click', function (e) {
  if (e.target.className === 'question-title') {
    e.target.parentElement.classList.toggle('show-text');
  }
})



