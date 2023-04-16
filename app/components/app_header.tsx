import { ConnectButton, useWallet } from "@suiet/wallet-kit";
import WalletInfo from "./wallet_info";


const AppHeader = () => {

  let wallet = useWallet()

  return (
    <div>
      {
        wallet.connected ? <WalletInfo wallet={wallet} /> : <ConnectButton />
      }
      <div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default AppHeader;