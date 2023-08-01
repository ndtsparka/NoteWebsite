function addNote() {
    document.getElementById("noteForm").style.display = "block";
  }
  
function closeForm() {
document.getElementById("noteForm").style.display = "none";
}

let add_note = document.getElementById("save_note");
add_note.addEventListener("click", function(element) {

  let note_title = document.getElementById("title");
  let note_author = document.getElementById("author");
  let note_year = document.getElementById("year");
  let note_link = document.getElementById("link");
  let note_details = document.getElementById("note_details");
  
  let papers = localStorage.getItem("blank_paper");
  if (papers == null) {
    ppaagesObj = [];
  } else {
    ppaagesObj = JSON.parse(papers);
  }
  let myObj = {
    title: note_title.value,
    author: note_author.value,
    year: note_year.value,
    link: note_link.value,
    details: note_details.value

  }
  ppaagesObj.push(myObj);
  localStorage.setItem("blank_paper", JSON.stringify(ppaagesObj));
  note_author.value = "";
  note_title.value = "";
  note_year.value = "";
  note_link.value = "";
  note_details.value = "";

  present();
});

function present() {
  let ppaages = localStorage.getItem("blank_paper");
  if (ppaages == null) {
    ppaagesObj = [];
  } else {
    ppaagesObj = JSON.parse(ppaages);
  }
  let html = "";
  ppaagesObj.forEach(function(element, i) {
    html += `
        <div class="note">
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.author}</p>
            <p class="note-text"> ${element.year}</p>
            <p class="note-text"> ${element.link}</p>
            <p class="note-text"> ${element.details}</p>
            <button id="${i}"onclick="delNote(this.id)" class="button_template" style="font-size:24px"><i class="fa fa-trash-o"></i></button>    
        </div>
            `;
  });
  let ppaagesElm = document.getElementById("blank_paper");
  if (ppaagesObj.length != 0) {
    ppaagesElm.innerHTML = html;
  } 
  else {
    ppaagesElm.innerHTML = html;
  }
}

function delNote(i) {
        let ppaages = localStorage.getItem("blank_paper");
        if (ppaages == null) {
          ppaagesObj = [];
        } else {
          ppaagesObj = JSON.parse(ppaages);
        }

        ppaagesObj.splice(i, 1);
        localStorage.setItem("blank_paper", JSON.stringify(ppaagesObj));
        present();
    }
  

present();