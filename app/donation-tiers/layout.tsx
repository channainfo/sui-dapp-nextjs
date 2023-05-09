'use client';

import { WalletProvider, SuiDevnetChain, SuiTestnetChain, SuietWallet, EthosWallet, SuiWallet, Chain } from "@suiet/wallet-kit"

export default function DonationTiersLayout({ children }: { children: React.ReactNode }) {
  const SUPPPORTED_CHAINS: Chain[] = [
    SuiDevnetChain,
    SuiTestnetChain,
  ]

  return (
    <WalletProvider
      chains={SUPPPORTED_CHAINS}
      defaultWallets={[SuietWallet, EthosWallet, SuiWallet]}>
      <div>{children}</div>
    </WalletProvider>
  )
}
