
const Dashbord = () => {
  return (
    <>
      <div className="bg-white rounded-lg h-96 md:h-auto mx-3 my-2">
        <div className="flex flex-row md:flex-col-reverse">
          <div className="flex flex-row w-4/6 md:w-full justify-center">
            <button
              className="bg-gray-100 border font-semibold rounded-md px-2 py-1 mx-1 my-1"
              value="1"
            >
              1D
            </button>
            <button
              className="bg-gray-100 border font-semibold rounded-md px-2 py-1 mx-1 my-1"
              value="7"
            >
              1W
            </button>
            <button
              className="bg-gray-100 border font-semibold rounded-md px-2 py-1 mx-1 my-1 border-blue-500 text-blue-500"
              value="30"
            >
              1M
            </button>
            <button
              className="bg-gray-100 border font-semibold rounded-md px-2 py-1 mx-1 my-1"
              value="180"
            >
              6M
            </button>
            <button
              className="bg-gray-100 border font-semibold rounded-md px-2 py-1 mx-1 my-1"
              value="365"
            >
              1Y
            </button>
          </div>
          <div className="flex flex-row 2sm:flex-col justify-center">
            <select
              id="coinSelector"
              data-testid="coinSelector"
              className="px-2 mx-1 my-1 font-semibold text-sm bg-gray-100 rounded-md no-scrollbar"
            >
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bitcoin+Bitcoin"
              >
                Bitcoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ethereum+Ethereum"
              >
                Ethereum
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="tether+Tether"
              >
                Tether
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="binancecoin+BNB"
              >
                BNB
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="solana+Solana"
              >
                Solana
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="staked-ether+Lido Staked Ether"
              >
                Lido Staked Ether
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="usd-coin+USDC"
              >
                USDC
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ripple+XRP"
              >
                XRP
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="dogecoin+Dogecoin"
              >
                Dogecoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="the-open-network+Toncoin"
              >
                Toncoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="cardano+Cardano"
              >
                Cardano
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="avalanche-2+Avalanche"
              >
                Avalanche
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="shiba-inu+Shiba Inu"
              >
                Shiba Inu
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="tron+TRON"
              >
                TRON
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="wrapped-bitcoin+Wrapped Bitcoin"
              >
                Wrapped Bitcoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="chainlink+Chainlink"
              >
                Chainlink
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="polkadot+Polkadot"
              >
                Polkadot
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bitcoin-cash+Bitcoin Cash"
              >
                Bitcoin Cash
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="uniswap+Uniswap"
              >
                Uniswap
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="near+NEAR Protocol"
              >
                NEAR Protocol
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="wrapped-eeth+Wrapped eETH"
              >
                Wrapped eETH
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="litecoin+Litecoin"
              >
                Litecoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="matic-network+Polygon"
              >
                Polygon
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="leo-token+LEO Token"
              >
                LEO Token
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="dai+Dai"
              >
                Dai
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="pepe+Pepe"
              >
                Pepe
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="fetch-ai+Fetch.ai"
              >
                Fetch.ai
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="internet-computer+Internet Computer"
              >
                Internet Computer
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ethereum-classic+Ethereum Classic"
              >
                Ethereum Classic
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="renzo-restaked-eth+Renzo Restaked ETH"
              >
                Renzo Restaked ETH
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="kaspa+Kaspa"
              >
                Kaspa
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ethena-usde+Ethena USDe"
              >
                Ethena USDe
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="aptos+Aptos"
              >
                Aptos
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="render-token+Render"
              >
                Render
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="monero+Monero"
              >
                Monero
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="hedera-hashgraph+Hedera"
              >
                Hedera
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="stellar+Stellar"
              >
                Stellar
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="mantle+Mantle"
              >
                Mantle
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="cosmos+Cosmos Hub"
              >
                Cosmos Hub
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="arbitrum+Arbitrum"
              >
                Arbitrum
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="okb+OKB"
              >
                OKB
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="filecoin+Filecoin"
              >
                Filecoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="crypto-com-chain+Cronos"
              >
                Cronos
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="blockstack+Stacks"
              >
                Stacks
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="immutable-x+Immutable"
              >
                Immutable
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="first-digital-usd+First Digital USD"
              >
                First Digital USD
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="maker+Maker"
              >
                Maker
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="sui+Sui"
              >
                Sui
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="optimism+Optimism"
              >
                Optimism
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="the-graph+The Graph"
              >
                The Graph
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="vechain+VeChain"
              >
                VeChain
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bittensor+Bittensor"
              >
                Bittensor
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="injective-protocol+Injective"
              >
                Injective
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="dogwifcoin+dogwifhat"
              >
                dogwifhat
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="lido-dao+Lido DAO"
              >
                Lido DAO
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="rocket-pool-eth+Rocket Pool ETH"
              >
                Rocket Pool ETH
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="arweave+Arweave"
              >
                Arweave
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ondo-finance+Ondo"
              >
                Ondo
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="floki+FLOKI"
              >
                FLOKI
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="mantle-staked-ether+Mantle Staked Ether"
              >
                Mantle Staked Ether
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="notcoin+Notcoin"
              >
                Notcoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bitget-token+Bitget Token"
              >
                Bitget Token
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="fantom+Fantom"
              >
                Fantom
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="theta-token+Theta Network"
              >
                Theta Network
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="based-brett+Brett"
              >
                Brett
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="jasmycoin+JasmyCoin"
              >
                JasmyCoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bonk+Bonk"
              >
                Bonk
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="thorchain+THORChain"
              >
                THORChain
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="whitebit+WhiteBIT Coin"
              >
                WhiteBIT Coin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="aave+Aave"
              >
                Aave
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="celestia+Celestia"
              >
                Celestia
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="coredaoorg+Core"
              >
                Core
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="eos+EOS"
              >
                EOS
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="algorand+Algorand"
              >
                Algorand
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="pyth-network+Pyth Network"
              >
                Pyth Network
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="sei-network+Sei"
              >
                Sei
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="quant-network+Quant"
              >
                Quant
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="flare-networks+Flare"
              >
                Flare
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ethena+Ethena"
              >
                Ethena
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="kelp-dao-restaked-eth+Kelp DAO Restaked ETH"
              >
                Kelp DAO Restaked ETH
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="jupiter-exchange-solana+Jupiter"
              >
                Jupiter
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="gatechain-token+Gate"
              >
                Gate
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="gala+GALA"
              >
                GALA
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="flow+Flow"
              >
                Flow
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="starknet+Starknet"
              >
                Starknet
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="kucoin-shares+KuCoin"
              >
                KuCoin
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="beam-2+Beam"
              >
                Beam
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="zebec-protocol+Zebec Protocol"
              >
                Zebec Protocol
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="pendle+Pendle"
              >
                Pendle
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="axie-infinity+Axie Infinity"
              >
                Axie Infinity
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="dydx-chain+dYdX"
              >
                dYdX
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bitcoin-cash-sv+Bitcoin SV"
              >
                Bitcoin SV
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="tokenize-xchange+Tokenize Xchange"
              >
                Tokenize Xchange
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="bittorrent+BitTorrent"
              >
                BitTorrent
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="gnosis+Gnosis"
              >
                Gnosis
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ethereum-name-service+Ethereum Name Service"
              >
                Ethereum Name Service
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="ordinals+ORDI"
              >
                ORDI
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="singularitynet+SingularityNET"
              >
                SingularityNET
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="elrond-erd-2+MultiversX"
              >
                MultiversX
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1"
                value="neo+NEO"
              >
                NEO
              </option>
            </select>
            <select
              id="chartSelector"
              data-testid="chartSelector"
              className="px-2 mx-1 my-1 font-semibold text-sm bg-gray-100 rounded-md"
            >
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1 hover:bg-gray-200"
                value="Line Chart"
              >
                Line Chart
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1 hover:bg-gray-200"
                value="Bar Chart Vertical"
              >
                Bar Chart Vertical
              </option>
              <option
                className="bg-gray-100 text-gray-500 font-semibold my-1 hover:bg-gray-200"
                value="Bar Chart Horizontal"
              >
                Bar Chart Horizontal
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="mx-3 font-semibold">USD</p>
          <p className="mx-3 font-semibold">Bitcoin</p>
        </div>
        <div
          className="py-1 px-1 h-5/6 flex flex-col justify-center w-auto"
          data-testid="thediv"
        >
          <canvas
            className="style"
            role="img"
            height="624"
            width="1338"
            data-testid="line-chart"
          ></canvas>
        </div>
      </div>
    </>
  );
};
export default Dashbord;
