import { generatePkceChallenge, generateCodeVerifier } from '../utils/uuid';

describe('utils', () => {
  describe('uuid', () => {
    describe('generatePkceChallenge', () => {
      it('should generate a pkce challenge', () => {
        // Arrange
        const codeVerifier = generateCodeVerifier(96);

        // Act
        const pkceChallenge = generatePkceChallenge('S256', codeVerifier);

        // Assert
        expect(pkceChallenge.length).toBeGreaterThan(0);
      });
    });
  });
});
