import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useRouter } from "next/router";

const CustomConnectBtn = ({ type, text }) => {
  const router = useRouter();

  const handleClick = (page) => {
    router.push(page);
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        // redirect when connected
        account !== undefined && type === "doc"
          ? router.push("/doctors-patients")
          : account !== undefined && type === "pat"
          ? router.push("/profile")
          : null;
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="border  hover:bg-[#00b4b6] border-[#00b4b6]  [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]"
                  >
                    {text || "Connect Wallet"}
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className="bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-[#00b4b6] hover:border hover:border-[#00b4b6] hover:bg-transparent [ transition-colors duration-500 ]  text-[color:var(--text-color)] px-4 py-[7px] rounded-[7px]"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectBtn;
