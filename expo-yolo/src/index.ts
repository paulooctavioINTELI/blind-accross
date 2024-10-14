import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoYolo.web.ts
// and on native platforms to ExpoYolo.ts
import ExpoYoloModule from './ExpoYoloModule';
import ExpoYoloView from './ExpoYoloView';
import { ChangeEventPayload, ExpoYoloViewProps } from './ExpoYolo.types';

// Get the native constant value.
export const PI = ExpoYoloModule.PI;

export function hello(): string {
  return ExpoYoloModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoYoloModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoYoloModule ?? NativeModulesProxy.ExpoYolo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoYoloView, ExpoYoloViewProps, ChangeEventPayload };
