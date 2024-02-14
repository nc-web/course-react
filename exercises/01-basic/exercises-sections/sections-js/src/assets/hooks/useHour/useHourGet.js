
export const useHourGet = () => {
  const dateTemp = new Date()
  const hour = dateTemp.getHours()
  const minutes = dateTemp.getMinutes()
  const seconds = dateTemp.getSeconds()

  const hourMinutSecons = `${hour}:${minutes}::${seconds}`

  return hourMinutSecons
}
