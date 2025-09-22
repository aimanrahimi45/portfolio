/// <reference types="react-scripts" />

declare module '*.glb';
declare module '*.png';

// Extend JSX namespace for meshline components
declare namespace JSX {
  interface IntrinsicElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}
