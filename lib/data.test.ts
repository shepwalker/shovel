import fetch from './data';
import dns from 'dns/promises';

describe('fetch function', () => {
  it('should properly compile and return complete data for a domain', async () => {
    const mockDomain = 'example.com';

    // Mock DNS response
    jest.spyOn(dns, 'resolveTxt').mockResolvedValue([['v=spf1 include:_spf.google.com ~all']]);

    // Call the function
    const result = await fetch(mockDomain);

    // Validate the result
    expect(result).toHaveProperty('domain', mockDomain);
    expect(result.data).toBeInstanceOf(Array);
    expect(result.notes).toBeInstanceOf(Array);
  });
});
