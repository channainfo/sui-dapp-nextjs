'use client';
import { Inter } from 'next/font/google'
import { Chain, DefaultChains, EthosWallet, SuiDevnetChain, SuiTestnetChain, SuiWallet, SuietWallet, WalletProvider, useWallet } from '@suiet/wallet-kit'
import AppHeader from './components/app_header';
import Charity from './components/charity';

const inter = Inter({ subsets: ['latin'] })

const SUPPPORTED_CHAINS: Chain[] = [
  SuiDevnetChain,
  SuiTestnetChain,
]

export default function Home() {
  return (
    <WalletProvider
      chains={SUPPPORTED_CHAINS}
      defaultWallets={[SuietWallet, EthosWallet, SuiWallet]}>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AppHeader />

        <Charity />

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
        </div>
      </main>
    </WalletProvider>

  )
}
