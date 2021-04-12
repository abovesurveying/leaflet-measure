export default model => {
  const save = !model.showSave
    ? ''
    : `<li><a href="#" class="js-savemarkup savemarkup">Save</a></li>`;

  return `
    <h3>Linear measurement</h3>
    <p>${model.lengthDisplay}</p>
    <ul class="tasks">
      <li><a href="#" class="js-zoomto zoomto">Center on this line</a></li>
      <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
      ${save}
    </ul>
  `;
};
