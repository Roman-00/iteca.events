declare module '*.svg' {
    import Vue, { VueElementConstructor } from 'vue';

    const content: VueElementConstructor<Vue>;

    export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
