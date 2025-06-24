function fibonacci(n) {
  function fib(i) {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return fib(i - 1) + fib(i - 2);
  }

  function buildFinonacciArray(current) {
    if (current < 0) return [];
    const arr = buildFinonacciArray(current - 1);
    arr.push(fib(current));
    return arr;
  }
  return buildFinonacciArray(n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
