/** Загрузки файлов разного рода,
 * имитация клика по элементу input[type=file]
 */
export default class FileManager {
  /** Возвращает файл картинки и reader.result
   * @param {string} [MIME='image/jpeg,image/png,image/gif'] - тип файлов MIME
   * @returns {Promise} - Вернет объект {file, result}
   */
  uploadImage(MIME = 'image/jpeg,image/png') {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = MIME
    fileInput.click()

    return new Promise((resolve) => {
      fileInput.onchange = () => {
        const file = fileInput.files[0]
        this.readAsDataURL(file, (result) => {
          resolve({
            file,
            result,
          })
        })
      }
    })
  }

  /** Возвращает файлы картинок (можно выбрать несколько)
   * @param {string} [MIME='image/jpeg,image/png,image/gif'] - тип файлов MIME
   * @returns {Promise} - Вернет массив файлов
   */
  uploadImages(MIME = 'image/jpeg,image/png') {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = MIME
    fileInput.multiple = true
    fileInput.click()

    return new Promise((resolve) => {
      fileInput.onchange = () => {
        resolve([...fileInput.files])
      }
    })
  }

  /** Возвращает файл
   * @param {string} [MIME='image/jpeg,image/png,image/gif'] - тип файлов MIME
   * @returns {Promise} - Вернет File
   */
  uploadFile(MIME) {
    if (!MIME)
      MIME =
        'application/msword,application/vnd.ms-excel,' +
        'application/vnd.ms-powerpoint,text/plain,application/pdf,image/*'

    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = typeof MIME === 'string' ? MIME : MIME.join(',')
    fileInput.click()

    return new Promise((resolve) => {
      fileInput.onchange = () => {
        resolve(fileInput.files[0])
      }
    })
  }

  /** Функция возвращает формат файла по названию файла
   *@param {String} fileName - названия файла
   */
  getFormatFile(fileName) {
    const format = fileName.split('.').splice(-1, 1)[0].toLowerCase()
    return format
  }

  /** Функция возвращает имя файла по ссылке
   *@param {String} url - ссылка
   */
  getFileName(url) {
    return url.split(/\/\d+-/).splice(-1, 1)[0]
  }

  /** Функция возвращает url изображения
   *@param {File} image - файл изображения
   *@param {Function} callback - callback вернет reader.result
   */
  readAsDataURL(image, callback) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      callback(reader.result)
    }
  }

  asyncReadAsDataURL(image) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = () => {
        resolve(reader.result)
      }
    })
  }
}
