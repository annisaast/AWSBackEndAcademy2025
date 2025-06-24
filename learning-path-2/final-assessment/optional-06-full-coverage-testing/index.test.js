import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Kasus Normal: Kedua Parameter Bilangan Positif
test('mengembalikan hasil penjumlahan dua bilangan positif', () => {
  const actual = sum(2, 3);
  const expected = 5;
  assert.equal(actual, expected);
});

// Kasus Error: Salah Satu Parameter Bukan Bilangan
test('mengembalikan 0 jika salah satu parameter bukan bilangan', () => {
  const actual = sum(2, '3');
  const expected = 0;
  assert.equal(actual, expected);
});

// Kasus Error: Salah Satu Parameter Bilangan Negatif
test('mengembalikan 0 jika salah satu parameter bilangan negatif', () => {
  const actual = sum(-2, 3);
  const expected = 0;
  assert.equal(actual, expected);
});
