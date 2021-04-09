import { numberFormat } from '../utils';

export default model => {
  const length =
    model.pointCount <= 1
      ? ''
      : `
    <div class="group">
      <p><span class="heading">Path distance</span> ${model.lengthDisplay}</p>
    </div>
  `;

  const area =
    model.pointCount <= 2
      ? ''
      : `
    <div class="group">
      <p><span class="heading">Area</span> ${model.areaDisplay}</p>
    </div>
  `;

  return `
    <div class="group">
      <p class="lastpoint heading">Last point</p>
      <p>${model.lastCoord.dms.y} <span class="coorddivider">/</span> ${model.lastCoord.dms.x}</p>
      <p>${numberFormat(
        model.lastCoord.dd.y,
        6
      )} <span class="coorddivider">/</span> ${numberFormat(model.lastCoord.dd.x, 6)}</p>
    </div>
    ${length}
    ${area}
  `;
};
