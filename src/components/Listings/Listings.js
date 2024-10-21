import React from "react";

const Listings = () => {
  return (
    <div className="w-full py-[80px]">
      <div>
        <p className="text-center text-2xl font-semibold pb-5">Top Assets</p>
        <div  className=" px-[100px]">
          <table className="text-xl font-medium ">
            <tr >
              <th className="text-gray-400">Name</th>
              <th className="text-gray-400">Last Price (USD)</th>
              <th className="text-gray-400">Change</th>
              {/* <th>Last 24h</th> */}
              <th className="text-gray-400">Action</th>
            </tr>
            <tr className="tr">
              <td className="flex items-center justify-center gap-5">
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025"
                  alt="BTC"
                  width="20"
                />
                BTC
              </td>
              <td>68127.49</td>
              <td className="negative-change">-0.73%</td>
              {/* <td>
                <img src="chart-btc.png" alt="BTC Chart" width="50" />
              </td> */}
              <td>
                <button className="trade-btn">Buy</button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center gap-5">
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025"
                  alt="ETH"
                  width="20"
                />
                ETH
              </td>
              <td>2694.10</td>
              <td className="negative-change">-0.42%</td>
              {/* <td>
                <img src="chart-eth.png" alt="ETH Chart" width="50" />
              </td> */}
              <td>
                <button className="trade-btn">Buy</button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center gap-5">
                <img
                  src="https://cryptologos.cc/logos/tron-trx-logo.png?v=025"
                  alt="TRX"
                  width="20"
                />
                TRX
              </td>
              <td>0.157735</td>
              <td className="positive-change">+0.72%</td>
              {/* <td>
                <img src="chart-trx.png" alt="TRX Chart" width="50" />
              </td> */}
              <td>
                <button className="trade-btn">Buy</button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center gap-5">
                <img
                  src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025"
                  alt="DOGE"
                  width="20"
                />
                DOGE
              </td>
              <td>0.144557</td>
              <td className="positive-change">+4.42%</td>
              {/* <td>
                <img src="chart-doge.png" alt="DOGE Chart" width="50" />
              </td> */}
              <td>
                <button className="trade-btn">Buy</button>
              </td>
            </tr>
            <tr>
              <td className="flex items-center justify-center gap-5">
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png?v=025"
                  alt="SOL"
                  width="20"
                />
                SOL
              </td>
              <td>165.1946</td>
              <td className="positive-change">+3.20%</td>
              {/* <td>
                <img src="chart-sol.png" alt="SOL Chart" width="50" />
              </td> */}
              <td>
                <button className="trade-btn">Buy</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listings;
