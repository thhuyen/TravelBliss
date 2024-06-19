const useSessionStorage = () => {
  const setSessionStorageWithExpiry = (
    key: string,
    value: any,
    expiryInSeconds: number
  ) => {
    const expiryTime = new Date().getTime() + expiryInSeconds * 1000;
    sessionStorage.setItem(key, JSON.stringify({ value, expiry: expiryTime }));
  };

  const getSessionStorageWithExpiry = (key: string) => {
    const item = sessionStorage.getItem(key);

    if (!item) {
      return null;
    }

    const itemParse = JSON.parse(item);
    const now = new Date();

    if (now.getTime() > itemParse.expiry) {
      sessionStorage.removeItem(key);
      return null;
    }

    return itemParse.value;
  };

  return {
    setSessionStorageWithExpiry,
    getSessionStorageWithExpiry,
  };
};

export default useSessionStorage;
