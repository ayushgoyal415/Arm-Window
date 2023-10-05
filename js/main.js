const main_root = document.getElementById('main-root');

main_root.innerHTML += /* HTML */ `
  <form>
    <div class="top">
      <span>Add New User</span>
      <button>Save</button>
    </div>
    <div class="bottom"></div>
  </form>
`;

const bottom = main_root.querySelector('.bottom');

// Input
input_data.forEach(val => {
  bottom.innerHTML += /* HTML */ `
    <div>
      <label for=${val.id}>${val.label}<span>*</span></label>
      <input id=${val.id} type=${val.type} placeholder=${val.placeholder} />
    </div>
  `;
});

// Input (Multiple)
bottom.innerHTML += /* HTML */ `
  <div>
    <label for="tel">Office Tel <span>*</span></label
    ><br />
    <input id="tel" style="width: 10%" type="text" placeholder="Country" />
    <input id="tel" style="width: 10%" type="text" placeholder="City" />
    <input id="tel" style="width: 65%" type="text" placeholder="Office Tel" />
  </div>

  <div>
    <label for="mobile">Mobile <span>*</span></label
    ><br />
    <input style="width: 10%" type="text" placeholder="Country" />
    <input style="width: 10%" type="text" placeholder="City" />
    <input style="width: 65%" type="text" placeholder="Mobile" />
  </div>
`;

// Select
select_data.forEach(val => {
  let sel_opts = '';
  val.options.forEach(opt => {
    sel_opts += /* HTML */ ` <option value=${opt.value}>${opt.text}</option> `;
  });

  bottom.innerHTML += /* HTML */ `
    <div>
      <label for=${val.id}>${val.label}<span>*</span></label>
      <select id=${val.id} name=${val.name}>
        ${sel_opts}
      </select>
    </div>
  `;
});

// Checkbox
bottom.innerHTML += /* HTML */ `
  <br>
  <fieldset>
    <legend>Additional Information</legend>
  </fieldset>
`;

const set = bottom.querySelector('fieldset');
checkbox_data.forEach(val => {
  set.innerHTML += /* HTML */ `
    <label class="label" for=${val.id} tabindex="0"
      >${val.text}
      <input type="checkbox" name=${val.id} id=${val.id} />
      <div class="box"></div>
    </label>
  `;
});
bottom.querySelectorAll('.label').forEach(val => {
  val.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const checkbox = e.target.querySelector('input');
      checkbox.checked = !checkbox.checked;
    }
  });
});
