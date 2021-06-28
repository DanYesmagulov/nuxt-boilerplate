/**
 * форматер даты
 * @param {Date} date
 */
export default function (date) {
  return (
    date.toISOString().split('T')[0] + ' ' + date.toTimeString().split(' ')[0]
  )
}
