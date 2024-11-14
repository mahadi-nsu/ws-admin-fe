const isBrowser = typeof window !== 'undefined';

export const getHostName = (): string => {
  if (isBrowser) {
    const hostNames = window.location.hostname.split('.');
    hostNames.length > 2 && hostNames.shift(); // if subdomain, removing subdomain
    return hostNames.join('.');
  }
  return '';
};
