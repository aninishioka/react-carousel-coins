function getRandomCoin() {
  const coinNum = Math.floor(Math.random() * 2);

  return coinNum;
}

export {getRandomCoin};