export const preventEventIfNotNumberInput = (event, options = {}) => {
  const { isAmountInput } = options

  const acceptedCharacters = []

  if (isAmountInput) {
    acceptedCharacters.push(['.'])
  }

  if (
    (event.key >= '0' && event.key <= '9') ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'Tab' ||
    event.key === 'Backspace' ||
    (typeof event.key === 'string' &&
      event.key.startsWith('F') &&
      event.key.length > 1 &&
      !isNaN(event.key.substring(1))) ||
    event.metaKey ||
    acceptedCharacters.includes(event.key)
  ) {
    return
  }

  event.preventDefault()
}
