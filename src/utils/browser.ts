/* eslint-disable operator-linebreak */
export const isIos = (): boolean => {
  // const userAgent = window.navigator.userAgent.toLowerCase();

  const isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  // return /iphone|ipad|ipod/.test(userAgent);
  return isChrome;
};
