import { NuxtAxiosInstance } from '@nuxtjs/axios'
// https://typescript.nuxtjs.org/cookbook/store/
// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }
