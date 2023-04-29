import {faker} from '@faker-js/faker';

export function generateString(length: number): string {
  return faker.random.alphaNumeric(length);
}
export function generateName(): string {
  return faker.name.firstName();
}
export function generateNumber(digitsCount: number): number {
  return parseInt(faker.random.numeric(digitsCount));
}
export function generateStringNumber(digitsCount: number): string {
  return faker.random.numeric(digitsCount);
}
