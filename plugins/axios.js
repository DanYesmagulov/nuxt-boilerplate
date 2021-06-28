// PLUGIN: https://axios.nuxtjs.org/extend

export default function ({ $axios }) {
  $axios.onError((error) => {
    console.log(error.response.status)
    console.debug('Ошибка запроса', error.response?.data?.errors)

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(error.response?.data?.errors)
  })
}
