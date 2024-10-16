export function parity(num) {
  let result
  if (isNaN(num)) {
    result = `Число ${num} не является валидным числом!`
}else if (num % 2 === 0) {
    result = `Число ${num} четное`
  } else {

    result = `Число ${num} нечетное!`;
  }
  return result;
}
