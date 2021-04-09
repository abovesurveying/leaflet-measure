export default model => `
  <h3>Linear measurement</h3>
  <p>${model.lengthDisplay}</p>
  <ul class="tasks">
    <li><a href="#" class="js-zoomto zoomto">Center on this line</a></li>
    <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
  </ul>
`;
