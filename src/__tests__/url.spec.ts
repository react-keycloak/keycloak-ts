import {
  extractQuerystringParameters,
  formatQuerystringParameters,
} from '../utils/url';

describe('utils', () => {
  describe('url', () => {
    describe('extractQuerystringParameters', () => {
      it('should map a querystring - starting with "?"', () => {
        // Arrange
        const querystring = '?a=1&b=2';

        // Act
        const params = extractQuerystringParameters(querystring);

        // Assert
        expect(params).toEqual({
          a: '1',
          b: '2',
        });
      });

      it('should map a querystring - without "?"', () => {
        // Arrange
        const querystring = 'a=3&b=4';

        // Act
        const params = extractQuerystringParameters(querystring);

        // Assert
        expect(params).toEqual({
          a: '3',
          b: '4',
        });
      });

      it('should map a querystring - with special characters', () => {
        // Arrange
        const querystring =
          'url=http%3A%2F%2Fa.com%2F%3Fc%3D7%26d%3D8%23%21%2Fasd&sample=hello+world&extra=%2B';

        // Act
        const params = extractQuerystringParameters(querystring);

        // Assert
        expect(params).toEqual({
          url: 'http://a.com/?c=7&d=8#!/asd',
          sample: 'hello world',
          extra: '+',
        });
      });
    });

    describe('formatQuerystringParameters', () => {
      it('should format a Map into a Querystring - with a single parameter', () => {
        // Arrange
        const params = new Map<string, string>();
        params.set('url', 'http://sample.com/auth');

        // Act
        const qs = formatQuerystringParameters(params);

        // Assert
        expect(qs).toBe('url=http%3A%2F%2Fsample.com%2Fauth');
      });

      it('should format a Map into a Querystring - with multiple parameters', () => {
        // Arrange
        const params = new Map<string, string>();
        params.set('url', 'http://sample.com/auth');
        params.set('code', '123%456');

        // Act
        const qs = formatQuerystringParameters(params);

        // Assert
        expect(qs).toBe('url=http%3A%2F%2Fsample.com%2Fauth&code=123%25456');
      });

      it('should format a Map into a Querystring - with a special character', () => {
        // Arrange
        const params = new Map<string, string>();
        params.set('url', 'http://sample.com/auth');
        params.set('code', '123~456');

        // Act
        const qs = formatQuerystringParameters(params);

        // Assert
        expect(qs).toBe('url=http%3A%2F%2Fsample.com%2Fauth&code=123%7E456');
      });
    });
  });
});
