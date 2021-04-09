export default model => `
  <h3>Area measurement</h3>
  <p>${model.areaDisplay}</p>
  <p>${model.lengthDisplay} Perimeter</p>
  <ul class="tasks">
    <li><a href="#" class="js-zoomto zoomto">Center on this area</a></li>
    <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
  </ul>
`;
