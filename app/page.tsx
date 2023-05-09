'use client';
import { Inter } from 'next/font/google'
import { Chain, EthosWallet, SuiDevnetChain, SuiTestnetChain, SuiWallet, SuietWallet, WalletProvider } from '@suiet/wallet-kit'
import AppHeader from './components/app_header';
import Charity from './components/charity';
import NavBar from './components/nav_bar/NavBar';

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

      <main className="">
        <NavBar />
        <div className='py-6'> Space </div>
        <AppHeader />

        <Charity />

      </main>
    </WalletProvider>

  )
}
