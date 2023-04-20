import {faker} from '@faker-js/faker';

class DataGenerator {
  static generateString(length: number): string {
    return faker.random.alphaNumeric(length);
  }
  static generateStringOfNumbers(digitsCount: number): string {
    return faker.random.numeric(digitsCount);
  }
}

export {DataGenerator};
