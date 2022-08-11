/*
* 90's style spacer div. Creates a spacer based on the args.
* Author: Josh Comeau https://www.joshwcomeau.com/react/modern-spacer-gif/
* Arguemnts:
** @param (int) size (required) - spacer size. Default square spacer if no other args provided.
** @param (int) axis - horizontal or vertical
** @param (int) style - additional css styles
* Examples:
** Produces a 16px × 16px gap: <Spacer size={16} />
** Produces a 32px × 1px gap: <Spacer axis="horizontal" size={32} />
*/

import React from 'react';

function Spacer({
  size,
  axis,
  style = {},
}) {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
}

export default Spacer;
