showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTitle = document.getElementById('addTitle');
    let addDesc = document.getElementById('addDesc');

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addDesc.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addDesc.value = "";
    // console.log(notesObj);
    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html == `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${index+1}</h5>
                        <p class="card-text">${element}</p>
                        <a href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-danger">Delete Note</a>
                    </div>
                </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" above to add anotes.`
    }
};

function deletenode(index) {
    let notes = localStorage.getItem("notes"); 

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowercase();
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementbytagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})