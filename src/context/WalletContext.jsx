import React, { createContext, useState } from "react";
import Trust from "../img/wallets/trust.svg";
import Rainbow from "../img/wallets/rainbow.jpg";
import Argent from "../img/wallets/argent.jpg";
import MetaMask from "../img/wallets/Meta Mask.jpg";
import GnosisSaveMultisig from "../img/wallets/Gnosis save multisig.jpg";
import Crypto from "../img/wallets/Crypto.com|defi wallet.jpg";
import Pillar from "../img/wallets/Pillar.jpg";
import ImToken from "../img/wallets/Im Token.jpg";
import Onto from "../img/wallets/ONTO.jpg";
import TokenPocket from "../img/wallets/TOKEN POCKET.jpg";
import Mathwallet from "../img/wallets/MathWallet.jpg";
import BitPay from "../img/wallets/Bit Pay.jpg";
import LedgerMile from "../img/wallets/Ledger Mile.jpg";
import Walleth from "../img/wallets/Walleth.jpg";
import Authereum from "../img/wallets/Authereum.jpg";
import Dharma from "../img/wallets/Dharma.jpg";
import inchWallet from "../img/wallets/1inch wallet.jpg";
import HuobiWallet from "../img/wallets/Huobi wallet.jpg";
import Eidoo from "../img/wallets/Eidoo.jpg";
import Etherscan from "../img/wallets/Etherscan.jpg";
import Uniswap from "../img/wallets/Uniswap.jpg";
import BinanceDex from "../img/wallets/Binance Dex.jpg";
import Opensea from "../img/wallets/Opensea.jpg";
import Compound from "../img/wallets/Compound.jpg";
import Zapper from "../img/wallets/Zapper.jpg";
import Aave from "../img/wallets/Aave.jpg";
import Zerion from "../img/wallets/Zerion.jpg";
import LocalCryptos from "../img/wallets/Local Cryptos.jpg";
import DeBank from "../img/wallets/De Bank.jpg";
import UnstoppableDomains from "../img/wallets/Unstoppable Domains.jpg";
import Rarible from "../img/wallets/Rarible.jpg";
import inchExchange from "../img/wallets/1inch Exchange.jpg";
import Yearn from "../img/wallets/Yearn.jpg";
import Nash from "../img/wallets/Nash.jpg";
import Curve from "../img/wallets/Curve.jpg";
import AdexNetwork from "../img/wallets/Adex Network.jpg";
import Dydx from "../img/wallets/dydx.jpg";
import Mycrypto from "../img/wallets/Mycrypto.jpg";
import Mykey from "../img/wallets/MyKey.jpg";
import Loopring from "../img/wallets/Loopring.jpg";
import TrustVault from "../img/wallets/Trust Vault.jpg";
import Atomic from "../img/wallets/Atomic.jpg";
import Coinnax98 from "../img/wallets/Coinnax98.jpg";
import Coolwallets from "../img/wallets/coolwallets.jpg";
import Alice from "../img/wallets/Alice.jpg";
import AlphaWallet from "../img/wallets/Alpha Wallet.jpg";
import Dcentwallet from "../img/wallets/DcentWallet.jpg";
import Zelcore from "../img/wallets/Zelcore.jpg";
import Coinnomi from "../img/wallets/coinnomi.jpg";
import Gridplus from "../img/wallets/GridPlus.jpg";
import CyBavoWallet from "../img/wallets/Cy Bavo wallet.jpg";
import Tokennary from "../img/wallets/Tokennary.jpg";
import Torus from "../img/wallets/Torus.jpg";
import Spatium from "../img/wallets/Spatium.jpg";
import Safepal from "../img/wallets/safepal.jpg";
import Infinito from "../img/wallets/Infinito.jpg";
import Wallet from "../img/wallets/wallet.io.jpg";
import InfinityWallet from "../img/wallets/infinity wallet.jpg";
import Ownbit from "../img/wallets/Ownbit.jpg";
import EasyPocket from "../img/wallets/Easy pocket.jpg";
import BridgeWallet from "../img/wallets/Bridge wallet.jpg";
import Sparkpoint from "../img/wallets/sparkpoint.jpg";
import Viawallet from "../img/wallets/ViaWallet.jpg";
import Bitkeep from "../img/wallets/Bitkeep.jpg";
import Vision from "../img/wallets/Vision.jpg";
import PeakdefiWallet from "../img/wallets/PEAKDEFI Wallet.jpg";
import UnstoppableWallet from "../img/wallets/Unstoppable wallet.jpg";
import HalloDefiWallet from "../img/wallets/Hallo Defi wallet.jpg";
import DokWallet from "../img/wallets/Dok wallet.jpg";
import At from "../img/wallets/AT.Wallet.jpg";
import MidasWallet from "../img/wallets/Midas wallet.jpg";
import Ellipal from "../img/wallets/Ellipal.jpg";
import Keyringpro from "../img/wallets/KEYRINGPRO.jpg";
import Aktionariat from "../img/wallets/Aktionariat.jpg";
import TalkenWallet from "../img/wallets/Talken wallet.jpg";
import XinfinXdcNetwork from "../img/wallets/Xinfin XDC network.jpg";
import FlareWallet from "../img/wallets/Flare Wallet.jpg";
import Kyberswap from "../img/wallets/kyberswap.jpg";
import AtokenWallet from "../img/wallets/AToken wallet.jpg";
import TongueWallet from "../img/wallets/Tongue wallet.jpg";
import Rwallet from "../img/wallets/Rwallet.jpg";
import Plasmapay from "../img/wallets/PlasmaPay.jpg";
import O3wallet from "../img/wallets/O3wallet.jpg";
import HashkeyWallet from "../img/wallets/HashKey wallet.jpg";
import JadeWallet from "../img/wallets/Jade wallet.jpg";
import GuardaWallet from "../img/wallets/Guarda Wallet.jpg";
import Defiant from "../img/wallets/Defiant.jpg";
import TrusteeWallet from "../img/wallets/Trustee wallet.jpg";
import Coinus from "../img/wallets/coinus.jpg";
import Cmorq from "../img/wallets/cmorq.jpg";
import Valora from "../img/wallets/Valora.jpg";
import Quiverx from "../img/wallets/QuiverX.jpg";
import CeloWallet from "../img/wallets/Celo Wallet.jpg";
import EncryptedLink from "../img/wallets/Encrypted link.jpg";
import OasisMap from "../img/wallets/Oasis map.jpg";
import Tokensets from "../img/wallets/Tokensets.jpg";
import Mantradao from "../img/wallets/MANTRADAO.jpg";
import Matcha from "../img/wallets/Matcha.jpg";
import DefiPrime from "../img/wallets/Defi Prime.jpg";
import Instadapp from "../img/wallets/instadApp.jpg";
import MaticNetwork from "../img/wallets/Matic Network.jpg";
import box from "../img/wallets/3box.jpg";
import Ddex from "../img/wallets/DDex.jpg";
import Totle from "../img/wallets/Totle.jpg";
import BambooRelay from "../img/wallets/Bamboo Relay.jpg";
import Synthetix from "../img/wallets/synthetix.jpg";
import DexBlue from "../img/wallets/dex.blue.jpg";
import Pooltogether from "../img/wallets/PoolTogether.jpg";
import Sablier from "../img/wallets/sablier.jpg";
import Dex from "../img/wallets/DEX.AG.jpg";
import EnsDomains from "../img/wallets/ENS Domains.jpg";
import IdleFinance from "../img/wallets/IDLE finance.jpg";
import Iearn from "../img/wallets/iearn.finance.jpg";
import Rcn from "../img/wallets/RCN.finance.jpg";
import Hegic from "../img/wallets/HEGIC.jpg";
import Kickback from "../img/wallets/Kickback.jpg";
import mph from "../img/wallets/88mph.jpg";
import Mooni from "../img/wallets/Mooni.jpg";
import Clovers from "../img/wallets/Clovers.jpg";
import Mintbase from "../img/wallets/Mintbase.jpg";
import Daostack from "../img/wallets/DAOstack.jpg";
import KnownOrigin from "../img/wallets/Known Origin.jpg";
import MyEtherWallet from "../img/wallets/My Ether Wallet.jpg";
import Affogarto from "../img/wallets/Affogarto.jpg";
import Stablepay from "../img/wallets/stablepay.jpg";
import DefiSaver from "../img/wallets/Defi saver.jpg";
import Thorchain from "../img/wallets/Thorchain.jpg";
import Bulksender from "../img/wallets/BulkSender.jpg";
import Betoken from "../img/wallets/Betoken.jpg";
import Linkdrop from "../img/wallets/Linkdrop.jpg";
import HelioWallet from "../img/wallets/Helio Wallet.jpg";
import Escaroo from "../img/wallets/Escaroo.jpg";
import Tokenmarket from "../img/wallets/TokenMarket.jpg";
import Mesa from "../img/wallets/Mesa.jpg";
import Mcdex from "../img/wallets/MCDEX.jpg";
import FurucomboX from "../img/wallets/Furucombo X.jpg";
import Melon from "../img/wallets/Melon.jpg";
import Chainsfr from "../img/wallets/Chainsfr.jpg";
import Aka3EmailiasAlias from "../img/wallets/AKA3 Emailias Alias.jpg";
import key2 from "../img/wallets/2key.jpg";
import Pitch from "../img/wallets/Pitch.jpg";
import Sushiswap from "../img/wallets/SushiSwap.jpg";
import Unagii from "../img/wallets/Unagii.jpg";
import CreamFinance from "../img/wallets/Cream Finance.jpg";
import Zksync from "../img/wallets/zksync.jpg";
import ShellExchange from "../img/wallets/Shell Exchange.jpg";
import IndexCoop from "../img/wallets/Index Coop.jpg";
import SwapX from "../img/wallets/Swap X.jpg";
import StarName from "../img/wallets/Star Name.jpg";
import Space from "../img/wallets/space.jpg";
import MaskBook from "../img/wallets/Mask Book.jpg";
import Snapshot from "../img/wallets/Snapshot.jpg";
import Invoice from "../img/wallets/Invoice.Build.jpg";
import Ankr from "../img/wallets/Ankr.jpg";
import Dodo from "../img/wallets/DODO.jpg";
import Zlot from "../img/wallets/zlot.jpg";
import TokamakNetwork from "../img/wallets/Tokamak network.jpg";
import ActusProtocol from "../img/wallets/Actus Protocol.jpg";
import AstroTools from "../img/wallets/Astro Tools.io.jpg";
import RubicExchange from "../img/wallets/Rubic Exchange.jpg";
import HarvestFinance from "../img/wallets/Harvest Finance.jpg";
import Octofi from "../img/wallets/Octofi.jpg";
import MushroomFinance from "../img/wallets/Mushroom Finance.jpg";
import BitfrostFinance from "../img/wallets/Bitfrost Finance.jpg";
import OrchidProtocol from "../img/wallets/Orchid Protocol.jpg";
import Lido from "../img/wallets/Lido.jpg";
import DatamineNetwork from "../img/wallets/DataMine Network.jpg";
import Streamr from "../img/wallets/streamr.jpg";
import DappRadar from "../img/wallets/Dapp Radar.jpg";
import SuperRare from "../img/wallets/Super Rare.jpg";
import Arbitrum from "../img/wallets/Arbitrum.jpg";
import ParaSwap from "../img/wallets/Para Swap.jpg";
import HoneySwap from "../img/wallets/Honey Swap.jpg";
import Fleek from "../img/wallets/Fleek.jpg";
import Definer from "../img/wallets/Definer.jpg";
import ProofOfHumanity from "../img/wallets/Proof of Humanity.jpg";
import LivepeerExplorer from "../img/wallets/Livepeer Explorer.jpg";
import SwapZone from "../img/wallets/Swap Zone.jpg";
import Axion from "../img/wallets/Axion.jpg";
import Plotx from "../img/wallets/PlotX.jpg";
import Daolunch from "../img/wallets/Daolunch.jpg";

export const WalletContext = createContext();

export const WalletProvider = (props) => {
  // const [currentWallet, setCurrentWallet] = useState(null);

  const [wallets, setWallets] = useState([
    { name: "Rainbow", src: Rainbow },
    {
      name: "trustwallet",
      src: Trust,
    },
    { name: "Argent", src: Argent },
    { name: "Meta Mask", src: MetaMask },
    { name: "Gnosis Save Multisig", src: GnosisSaveMultisig },
    { name: "Crypto", src: Crypto },
    { name: "Pillar", src: Pillar },
    { name: "Im Token", src: ImToken },
    { name: "Onto", src: Onto },
    { name: "Token Pocket", src: TokenPocket },
    { name: "Mathwallet", src: Mathwallet },
    { name: "Bit Pay", src: BitPay },
    { name: "Ledger Mile", src: LedgerMile },
    { name: "Walleth", src: Walleth },
    { name: "Authereum", src: Authereum },
    { name: "Dharma", src: Dharma },
    { name: "1inch Wallet", src: inchWallet },
    { name: "Huobi Wallet", src: HuobiWallet },
    { name: "Eidoo", src: Eidoo },
    { name: "Etherscan", src: Etherscan },
    { name: "Uniswap", src: Uniswap },
    { name: "Binance Dex", src: BinanceDex },
    { name: "Opensea", src: Opensea },
    { name: "Compound", src: Compound },
    { name: "Zapper", src: Zapper },
    { name: "Aave", src: Aave },
    { name: "Zerion", src: Zerion },
    { name: "Local Cryptos", src: LocalCryptos },
    { name: "De Bank", src: DeBank },
    { name: "Unstoppable Domains", src: UnstoppableDomains },
    { name: "Rarible", src: Rarible },
    { name: "1inch Exchange", src: inchExchange },
    { name: "Yearn", src: Yearn },
    { name: "Nash", src: Nash },
    { name: "Curve", src: Curve },
    { name: "Adex Network", src: AdexNetwork },
    { name: "Dydx", src: Dydx },
    { name: "Mycrypto", src: Mycrypto },
    { name: "Mykey", src: Mykey },
    { name: "Loopring", src: Loopring },
    { name: "Trust Vault", src: TrustVault },
    { name: "Atomic", src: Atomic },
    { name: "Coinnax98", src: Coinnax98 },
    { name: "Coolwallets", src: Coolwallets },
    { name: "Alice", src: Alice },
    { name: "Alpha Wallet", src: AlphaWallet },
    { name: "Dcentwallet", src: Dcentwallet },
    { name: "Zelcore", src: Zelcore },
    { name: "Coinnomi", src: Coinnomi },
    { name: "Gridplus", src: Gridplus },
    { name: "Cy Bavo Wallet", src: CyBavoWallet },
    { name: "Tokennary", src: Tokennary },
    { name: "Torus", src: Torus },
    { name: "Spatium", src: Spatium },
    { name: "Safepal", src: Safepal },
    { name: "Infinito", src: Infinito },
    { name: "Wallet", src: Wallet },
    { name: "Infinity Wallet", src: InfinityWallet },
    { name: "Ownbit", src: Ownbit },
    { name: "Easy Pocket", src: EasyPocket },
    { name: "Bridge Wallet", src: BridgeWallet },
    { name: "Sparkpoint", src: Sparkpoint },
    { name: "Viawallet", src: Viawallet },
    { name: "Bitkeep", src: Bitkeep },
    { name: "Vision", src: Vision },
    { name: "Peakdefi Wallet", src: PeakdefiWallet },
    { name: "Unstoppable Wallet", src: UnstoppableWallet },
    { name: "Hallo Defi Wallet", src: HalloDefiWallet },
    { name: "Dok Wallet", src: DokWallet },
    { name: "At", src: At },
    { name: "Midas Wallet", src: MidasWallet },
    { name: "Ellipal", src: Ellipal },
    { name: "Keyringpro", src: Keyringpro },
    { name: "Aktionariat", src: Aktionariat },
    { name: "Talken Wallet", src: TalkenWallet },
    { name: "Xinfin Xdc Network", src: XinfinXdcNetwork },
    { name: "Flare Wallet", src: FlareWallet },
    { name: "Kyberswap", src: Kyberswap },
    { name: "Atoken Wallet", src: AtokenWallet },
    { name: "Tongue Wallet", src: TongueWallet },
    { name: "Rwallet", src: Rwallet },
    { name: "Plasmapay", src: Plasmapay },
    { name: "O3wallet", src: O3wallet },
    { name: "Hashkey Wallet", src: HashkeyWallet },
    { name: "Jade Wallet", src: JadeWallet },
    { name: "Guarda Wallet", src: GuardaWallet },
    { name: "Defiant", src: Defiant },
    { name: "Trustee Wallet", src: TrusteeWallet },
    { name: "Coinus", src: Coinus },
    { name: "Cmorq", src: Cmorq },
    { name: "Valora", src: Valora },
    { name: "Quiverx", src: Quiverx },
    { name: "Celo Wallet", src: CeloWallet },
    { name: "Encrypted Link", src: EncryptedLink },
    { name: "Oasis Map", src: OasisMap },
    { name: "Tokensets", src: Tokensets },
    { name: "Mantradao", src: Mantradao },
    { name: "Matcha", src: Matcha },
    { name: "Defi Prime", src: DefiPrime },
    { name: "Instadapp", src: Instadapp },
    { name: "Matic Network", src: MaticNetwork },
    { name: "3box", src: box },
    { name: "Ddex", src: Ddex },
    { name: "Totle", src: Totle },
    { name: "Bamboo Relay", src: BambooRelay },
    { name: "Synthetix", src: Synthetix },
    { name: "DexBlue", src: DexBlue },
    { name: "Pooltogether", src: Pooltogether },
    { name: "Sablier", src: Sablier },
    { name: "Dex", src: Dex },
    { name: "Ens Domains", src: EnsDomains },
    { name: "Idle Finance", src: IdleFinance },
    { name: "Iearn", src: Iearn },
    { name: "Rcn", src: Rcn },
    { name: "Hegic", src: Hegic },
    { name: "Kickback", src: Kickback },
    { name: "88mph", src: mph },
    { name: "Mooni", src: Mooni },
    { name: "Clovers", src: Clovers },
    { name: "Mintbase", src: Mintbase },
    { name: "Daostack", src: Daostack },
    { name: "Known Origin", src: KnownOrigin },
    { name: "My Ether Wallet", src: MyEtherWallet },
    { name: "Affogarto", src: Affogarto },
    { name: "Stablepay", src: Stablepay },
    { name: "Defi Saver", src: DefiSaver },
    { name: "Thorchain", src: Thorchain },
    { name: "Bulksender", src: Bulksender },
    { name: "Betoken", src: Betoken },
    { name: "Linkdrop", src: Linkdrop },
    { name: "Helio Wallet", src: HelioWallet },
    { name: "Escaroo", src: Escaroo },
    { name: "Tokenmarket", src: Tokenmarket },
    { name: "Mesa", src: Mesa },
    { name: "Mcdex", src: Mcdex },
    { name: "Furucombo X", src: FurucomboX },
    { name: "Melon", src: Melon },
    { name: "Chainsfr", src: Chainsfr },
    { name: "Aka3 Emailias Alias", src: Aka3EmailiasAlias },
    { name: "2key", src: key2 },
    { name: "Pitch", src: Pitch },
    { name: "Sushiswap", src: Sushiswap },
    { name: "Unagii", src: Unagii },
    { name: "Cream Finance", src: CreamFinance },
    { name: "Zksync", src: Zksync },
    { name: "Shell Exchange", src: ShellExchange },
    { name: "Index Coop", src: IndexCoop },
    { name: "Swap X", src: SwapX },
    { name: "Star Name", src: StarName },
    { name: "Space", src: Space },
    { name: "Mask Book", src: MaskBook },
    { name: "Snapshot", src: Snapshot },
    { name: "Invoice", src: Invoice },
    { name: "Ankr", src: Ankr },
    { name: "Dodo", src: Dodo },
    { name: "Zlot", src: Zlot },
    { name: "Tokamak Network", src: TokamakNetwork },
    { name: "Actus Protocol", src: ActusProtocol },
    { name: "Astro Tools", src: AstroTools },
    { name: "Rubic Exchange", src: RubicExchange },
    { name: "Harvest Finance", src: HarvestFinance },
    { name: "Octofi", src: Octofi },
    { name: "Mushroom Finance", src: MushroomFinance },
    { name: "Bitfrost Finance", src: BitfrostFinance },
    { name: "Orchid Protocol", src: OrchidProtocol },
    { name: "Lido", src: Lido },
    { name: "Datamine Network", src: DatamineNetwork },
    { name: "Streamr", src: Streamr },
    { name: "Dapp Radar", src: DappRadar },
    { name: "Super Rare", src: SuperRare },
    { name: "Arbitrum", src: Arbitrum },
    { name: "Para Swap", src: ParaSwap },
    { name: "Honey Swap", src: HoneySwap },
    { name: "Fleek", src: Fleek },
    { name: "Definer", src: Definer },
    { name: "Proof Of Humanity", src: ProofOfHumanity },
    { name: "Livepeer Explorer", src: LivepeerExplorer },
    { name: "Swap Zone", src: SwapZone },
    { name: "Axion", src: Axion },
    { name: "Plotx", src: Plotx },
    { name: "Daolunch", src: Daolunch },
  ]);

  const [wallet, setWallet] = useState(null);

  const dispatchWalletEvent = (actionType, payload) => {
    switch (actionType) {
      case "SET_WALLET":
        setWallet(payload.wallet);
        return;
      default:
        return;
    }
  };

  return (
    <WalletContext.Provider value={{ wallets, setWallet, wallet }}>
      {props.children}
    </WalletContext.Provider>
  );
};
