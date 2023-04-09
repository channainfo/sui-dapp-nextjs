import { WalletContextState } from "@suiet/wallet-kit";
import { AppProps } from "next/app";

type WalletProps = {
  wallet: WalletContextState;
}

const WalletInfo = ({ wallet }: WalletProps) => {
  return (
    <div>Connected: {wallet.address}</div>
  )
}

export default WalletInfo;