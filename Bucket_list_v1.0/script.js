document.addEventListener("DOMContentLoaded", () => {
  let inp = document.getElementById("inp");
  let containor = document.getElementById("containor");
  let addBtn = document.getElementById("add");
  let list = JSON.parse(localStorage.getItem('task')) || [];

  function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'lst';

    const spn = document.createElement('span');
    spn.innerText = task.text;
    spn.style.textDecoration = task.done ? "line-through" : "none";

    const btn_con = document.createElement('div');
    btn_con.className = 'btn_con';

    const done_btn = document.createElement('button');
    done_btn.innerText = 'D';
    done_btn.className = 'don';
    done_btn.addEventListener('click', () => {
      task.done = !task.done;
      spn.style.textDecoration = task.done ? "line-through" : "none";
      localStorage.setItem('task', JSON.stringify(list));
    });

    const del_btn = document.createElement('button');
    del_btn.innerText = 'X';
    del_btn.className = 'del';
    del_btn.addEventListener('click', () => {
      li.remove();
      list = list.filter(t => t !== task);
      localStorage.setItem('task', JSON.stringify(list));
    });

    btn_con.append(done_btn, del_btn);
    li.append(spn, btn_con);
    containor.appendChild(li);
  }

  function renderAll() {
    containor.innerHTML = '';
    list.forEach(renderTask);
  }

  addBtn.addEventListener("click", () => {
    if (inp.value.trim()) {
      let task = { text: inp.value, done: false };
      list.push(task);
      localStorage.setItem('task', JSON.stringify(list));
      renderTask(task);
      inp.value = '';
    }
  });

  renderAll();
});
