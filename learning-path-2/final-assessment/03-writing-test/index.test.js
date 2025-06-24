import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Uji Dua Bilangan Positif
test('2 + 3 = 5', () => {
  const actual = sum(2, 3);
  const expected = 5;
  assert.equal(actual, expected);
});

// Uji Dua Bilangan Negatif
test('(-2) + (-5) = -7', () => {
  const actual = sum(-2, -5);
  const expected = -7;
  assert.equal(actual, expected);
});

// Uji Bilangan Positif dan Negatif (Memberikan Nilai Positif)
test('(-4) + 6 = 2', () => {
  const actual = sum(-4, 6);
  const expected = 2;
  assert.equal(actual, expected);
});

// Uji Bilangan Positif dan Negatif (Memberikan Nilai Negatif)
test('(-8) + 5 = -3', () => {
  const actual = sum(-8, 5);
  const expected = -3;
  assert.equal(actual, expected);
});

// Uji Bilangan Desimal
test('3.5 + (-1.7) = 1.8', () => {
  const actual = sum(3.5, -1.7);
  const expected = 1.8;
  assert.equal(actual, expected);
});

