console.log('...');

const getBeers = async () => {
    const url = '../data/carddata.json';
    const response = await fetch(url);
    const jsonresponse = await response.json();
    return jsonresponse;
}

console.log(getBeers());