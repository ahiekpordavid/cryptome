import React from "react";

const Listings = () => {
  return (
    <div className="w-full md:py-[80px] py-[60px]">
      <div>
        <p className="text-center md:text-2xl text-xl font-semibold pb-5">Top Assets</p>
        <div  className="px-[20px] md:px-[100px]">
          <table className="md:text-xl text-sm font-medium ">
            <tr >
              <th className="text-gray-400">Name</th>
              <th className="text-gray-400">Last Price (USD)</th>
              <th className="text-gray-400">Change</th>
              {/* <th>Last 24h</th> */}
              <th className="text-gray-400 md:flex hidden">Action</th>
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
      
              <td>
                <button className="trade-btn md:flex hidden">Buy</button>
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
        
              <td>
                <button className="trade-btn md:flex hidden">Buy</button>
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
        
              <td>
                <button className="trade-btn md:flex hidden">Buy</button>
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
      
              <td>
                <button className="trade-btn md:flex hidden">Buy</button>
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
              <td>
                <button className="trade-btn md:flex hidden">Buy</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listings;
