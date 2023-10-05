const header_root = document.getElementById('header-root');

header_root.innerHTML = /* HTML */ `
  <div class="left-section"></div>

  <div class="middle-section">Welcome, Ayush Jain</div>

  <div class="right-section">
    <button class="notification">
      <i class="fa fa-bell-o fa-lg"></i>
      <p class="tooltip">4 new Notifications</p>
      <div class="badge">4</div>
    </button>
    <button class="user">
      <p class="tooltip">Ayush Jain</p>
      AJ
    </button>
  </div>
`;

left_section_data.forEach(val => {
  header_root.querySelector('.left-section').innerHTML += /* HTML */ `
    <button>
      <i class="fa-solid fa-${val.icon} fa-lg"></i>
      <p class="tooltip">${val.tip}</p>
    </button>
  `;
});
