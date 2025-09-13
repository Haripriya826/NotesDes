function saveNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (text) {
    const notes = getNotes();
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
    input.value = '';
  }
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

function renderNotes() {
  const noteList = document.getElementById('noteList');
  noteList.innerHTML = '';
  const notes = getNotes();

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = note;

    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.className = 'delete-btn';
    btn.onclick = () => deleteNote(index);

    li.appendChild(span);
    li.appendChild(btn);
    noteList.appendChild(li);
  });
}

// Load notes when page is opened
document.addEventListener('DOMContentLoaded', renderNotes);