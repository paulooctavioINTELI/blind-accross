import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoYoloViewProps } from './ExpoYolo.types';

const NativeView: React.ComponentType<ExpoYoloViewProps> =
  requireNativeViewManager('ExpoYolo');

export default function ExpoYoloView(props: ExpoYoloViewProps) {
  return <NativeView {...props} />;
}
