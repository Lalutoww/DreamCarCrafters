export default function separateNumbers(input) {
   const number = typeof input === 'string' ? parseFloat(input) : input;

   if (isNaN(number)) {
      return null;
   }

   return number.toLocaleString('en-US');
}
