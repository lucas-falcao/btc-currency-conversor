export { default as FooterComponent } from '../..\\components\\FooterComponent.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyFooterComponent = import('../..\\components\\FooterComponent.vue' /* webpackChunkName: "components_FooterComponent" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
