import { useState } from "react";
import Coin from "./Coin";
import { getRandomCoin } from "./helpers";

const HEADS_IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/c/cf/State_hood_quarter_Obv_Unc.JPG"
const TAILS_IMAGE_URL = "https://upload.wikimedia.org/wikipedia/en/1/1a/Miles_%22Tails%22_Prower_Sonic_and_All-Stars_Racing_Transformed.png"

function Flipper() {
  const [coin, setCoin] = useState();
  const [flipCounts, setFlipCounts] = useState({
    total: 0,
    heads: 0,
    tails: 0
  });

  function coinFlip() {
    const coinNum = getRandomCoin();

    setCoin((coinNum === 1) ? HEADS_IMAGE_URL : TAILS_IMAGE_URL);
    setFlipCounts(fC => {
      const newCounts = {...fC};
      newCounts.total++;
      newCounts.heads = (coinNum === 1) ? newCounts.heads + 1 : newCounts.heads;
      newCounts.tails = (coinNum !== 1) ? newCounts.tails + 1 : newCounts.tails;
      return newCounts;
    });
  }

  return (
    <div>
      {coin && <Coin url={coin}/>}
      <button onClick={coinFlip}> FLIP ME</button>
      <h5>Out of {flipCounts.total} flips, there have been {flipCounts.heads} heads and {flipCounts.tails} tails. </h5>
    </div>
  );
}

export default Flipper;
export {HEADS_IMAGE_URL, TAILS_IMAGE_URL};