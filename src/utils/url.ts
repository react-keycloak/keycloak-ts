/**
 * Encode string in a format suitable for URL
 *
 * Ported from https://github.com/jerrybendy/url-search-params-polyfill
 * @see https://github.com/jerrybendy/url-search-params-polyfill/blob/fc69a9ed9b0425f93db2b842574044a615c86bc8/index.js#L240
 */
function encode(str: string) {
  const replace: Record<string, string> = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00',
  };

  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function (match) {
    return replace[match];
  });
}

/**
 * Decode an URL-suitable string into a string
 *
 * Ported from https://github.com/jerrybendy/url-search-params-polyfill
 * @see https://github.com/jerrybendy/url-search-params-polyfill/blob/fc69a9ed9b0425f93db2b842574044a615c86bc8/index.js#L255
 */
function decode(str: string) {
  return str
    .replace(/[ +]/g, '%20')
    .replace(/(%[a-f0-9]{2})+/gi, function (match) {
      return decodeURIComponent(match);
    });
}

export function formatQuerystringParameters(
  parametersMap: Map<string, unknown>
) {
  return Array.from(parametersMap.entries())
    .map(([key, value]) => `${encode(key)}=${encode(`${value}`)}`)
    .join('&');
}

export function extractQuerystringParameters(querystring: string) {
  return querystring
    .replace('?', '')
    .split('&')
    .map(segment => segment.split('='))
    .reduce((obj, [key, value]) => {
      obj[decode(key)] = decode(value);
      return obj;
    }, {} as Record<string, string>);
}
