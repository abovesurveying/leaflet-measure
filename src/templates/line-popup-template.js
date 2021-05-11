export default model => {
  const save = !model.showSave
    ? ''
    : `<li><a href="#" class="js-savemarkup savemarkup">Save</a></li>`;

  return `
    <h3>Linear measurement</h3>
    <p>${model.lengthDisplay}</p>
    <ul class="tasks">
      <li><a href="#" class="js-zoomto zoomto">Center on this area</a></li>
      <li><a href="#" class="js-punchlist addToPunchList" objectType="5">Add to punch list</a></li>
    </ul>
    <ul class="tasks">
      <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
      ${save}
    </ul>
  `;
};
