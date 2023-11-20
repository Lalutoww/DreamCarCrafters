export default function separateNumbers(input) {
    // Convert the input to a number (if it's a string)
    const number = typeof input === 'string' ? parseFloat(input) : input;

    // Check if the conversion was successful
    if (isNaN(number)) {
        console.error('Invalid price.');
        return null; // Or handle the error in your own way
    }

    // Using toLocaleString to add dots as thousand separators
    return number.toLocaleString('en-US');
}