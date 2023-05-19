import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/variables.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import {
  WagmiConfig,
  createConfig,
  configureChains,
  Chain,
  chain,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export default function App({ Component, pageProps }) {
  const celoChain = {
    id: 44787,
    name: "Celo Testnet",
    network: "avalanche",
    nativeCurrency: {
      decimals: 18,
      name: "Celo Alfajores Testnet",
      symbol: "CELO",
    },
    rpcUrls: {
      default: "https://alfajores-forno.celo-testnet.org",
    },
    blockExplorers: {
      default: { name: "CeloExplorer", url: "https://docs.celo.org/" },
      snowtrace: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: false,
  };

  const { publicClient, chains } = configureChains(
    [celoChain],
    [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  // const wagmiClient = createConfig({
  //   autoConnect: true,
  //   connectors,
  //   provider,
  // });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolModes theme={midnightTheme()}>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
