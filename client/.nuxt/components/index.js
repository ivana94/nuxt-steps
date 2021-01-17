export { default as Data } from '../../components/data.vue'
export { default as Intro } from '../../components/intro.vue'

export const LazyData = import('../../components/data.vue' /* webpackChunkName: "components/data" */).then(c => c.default || c)
export const LazyIntro = import('../../components/intro.vue' /* webpackChunkName: "components/intro" */).then(c => c.default || c)
