export default model => {
  const save = !model.showSave
    ? ''
    : `<li><a href="#" class="js-savemarkup savemarkup">Save to scan</a></li>`;

  return `
    <h3>Area measurement</h3>
    <p>${model.areaDisplay}</p>
    <p>${model.lengthDisplay} Perimeter</p>
    <ul class="tasks">
      <li><a href="#" class="js-zoomto zoomto">Center on this area</a></li>
      <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
      ${save}
    </ul>
  `;
};
