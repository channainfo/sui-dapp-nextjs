import { WalletContextState } from "@suiet/wallet-kit";

type WalletProps = {
  wallet: WalletContextState,
}

const WalletInfo = ({ wallet }: WalletProps) => {
  return (
    <div>Connected: {wallet.address} ({wallet.chain?.name} - {wallet.chain?.rpcUrl})</div>
  )
}

export default WalletInfo;