const footer_root = document.getElementById('footer-root');

footer_root.innerHTML = /* HTML */ `
  <div class="bottom">
    <p style="color: lightGray; font-size: 17px; margin-bottom: 20px">
      Activate Windows <sup style="font-size: 14px">&reg;</sup>
    </p>
    <p style="color: rgb(167, 141, 95)">
      Go to Settings to Activate Windows
    </p>
    <p style="color: rgb(167, 141, 95)">
      Your current windows expires in &nbsp;
      <span style="color: orange; font-size: 20px">28</span>&nbsp; days
    </p>
  </div>
`;
