const sidebar_root = document.getElementById('sidebar-root');

sidebar_root.innerHTML = /* HTML */ `
  <div class="title">
    <button>
      <img src="../resources/win-orange.png" alt="logo" />
    </button>
    <p>ARM Operating System</p>
  </div>
  <div class="options"></div>
`;

sidebar_data.forEach(val => {
  const item = document.createElement('button');

  item.innerHTML += /* HTML */ `
    <i class="icon-left fa-regular ${val.icon_left}"></i>
    ${val.name}
  `;

  if (val.icon_right) {
    item.innerHTML += /* HTML */ `
      <i class="icon-right fa-solid fa-angle-down"></i>
    `;
  }

  sidebar_root.querySelector('.options').appendChild(item);
});

sidebar_root.querySelectorAll('.options button').forEach(val => {
  val.addEventListener('click', function (e) {
    const right_icon = e.currentTarget.querySelector('.icon-right');
    if (right_icon) {
      right_icon.classList.contains('fa-angle-down')
        ? right_icon.classList.replace('fa-angle-down', 'fa-angle-up')
        : right_icon.classList.replace('fa-angle-up', 'fa-angle-down');
    }
  });
});
