import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/axios'

// Плагин для подключения $axios в store ввида typescript
// https://typescript.nuxtjs.org/cookbook/store/
const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
