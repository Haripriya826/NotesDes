function saveNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;

    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.className = 'delete-btn';
    btn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById('noteList').appendChild(li);
    input.value = '';
  }
}
