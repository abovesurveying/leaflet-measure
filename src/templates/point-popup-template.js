import { numberFormat } from '../utils';

export default model => `
  <h3>Point location</h3>
  <p>${model.lastCoord.dms.y} <span class="coorddivider">/</span> ${model.lastCoord.dms.x}</p>
  <p>${numberFormat(model.lastCoord.dd.y, 6)} <span class="coorddivider">/</span> ${numberFormat(
  model.lastCoord.dd.x,
  6
)}</p>
  <ul class="tasks">
    <li><a href="#" class="js-zoomto zoomto">Center on this location</a></li>
    <li><a href="#" class="js-deletemarkup deletemarkup">Delete</a></li>
  </ul>
`;
