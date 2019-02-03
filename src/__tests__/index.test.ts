import * as index from '../index';

describe('Tests', () => {
  describe('Hello world', () => {
    it('should be return Hello World', () => {
      expect(index.hello()).toBe('Hello World');
    });
  });
});
