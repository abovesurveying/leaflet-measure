export default model => `
  <a class="${model.className}-toggle js-toggle" href="#" title="Measure distances and areas">Measure</a>
  <div class="${model.className}-interaction js-interaction">
    <div class="js-startprompt startprompt">
      <h3>Create measurement</h3>
      <ul class="tasks">
        <a href="#" class="js-start-area start">Measure area</a>
        <a href="#" class="js-start-line start">Measure distance</a>
      </ul>
    </div>
    <div class="js-measuringprompt">
      <h3>Measure distances and areas</h3>
      <p class="js-starthelp">Start creating a measurement by adding points to the map</p>
      <div class="js-results results"></div>
      <ul class="js-measuretasks tasks">
        <li><a href="#" class="js-cancel cancel">Cancel</a></li>
        <li><a href="#" class="js-finish finish">Finish measurement</a></li>
      </ul>
    </div>
  </div>
`;
