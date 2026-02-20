async function fetchData(network) {
  try {
    const res = await fetch(`
https://backend.justicedatashop.com/storefront/get-product-via-storefront-url/nirvana?page=1&pageSize=50&network=${network}&type=EXPIRING`);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
