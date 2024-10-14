import * as React from 'react';

import { ExpoYoloViewProps } from './ExpoYolo.types';

export default function ExpoYoloView(props: ExpoYoloViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
