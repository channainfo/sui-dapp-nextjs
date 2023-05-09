
'use client';
import { Connection, JsonRpcProvider, devnetConnection, testnetConnection } from "@mysten/sui.js";

import { useWallet } from "@suiet/wallet-kit";

import { Chain, EthosWallet, SuiDevnetChain, SuiTestnetChain, SuiWallet, SuietWallet, WalletProvider } from '@suiet/wallet-kit';
import Link from "next/link";
import { useState } from "react";


interface Net {
  [key: string]: Connection
}

interface ObjResp {
  id: string
}

const DonationTiersPage = () => {
  const [tiers, setTiers] = useState<any[]>([])

  const w = useWallet()

  const handleClick = async () => {

    let networks: Net = {
      "testnet": testnetConnection,
      "devnet": devnetConnection,
    }

    let net = process.env.SUI_NET ?? 'devnet'
    let connection = networks[net];

    let provider = new JsonRpcProvider(connection)
    console.log("Clicked");

    const object: any = await provider.getObject({
      id: process.env.SUI_SHARED_TIERS ?? "",
      options: {
        "showContent": true
      }
    });

    let tiers: any = object["data"]["content"]["fields"].tiers.map((tier: any) => {
      let item = tier.fields;
      return item;
    })
    console.log("----------------------------------");
    console.log(object);
    console.log(tiers);
    setTiers(tiers);
  }

  return (
    <div>
      <p>Address: {w.address}</p>
      <ul>

        {tiers.map((tier) => {
          return (
            <li key={tier.id.id} className="p-4">
              <Link className="rounded-md bg-green-600 hover:bg-green-800 text-white p-2 m-2" href={`/object/${tier.id.id}`} >
                Name: {tier.name} - Value: {tier.value} - Count:{tier.items_count}
              </Link>
            </li>
          )
        })}
      </ul>
      <button className="rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2" onClick={handleClick}> Retries Tiers</button>
      <Link href={"/donation-tiers/new"} className="rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2"> New Donation </Link>
    </div>
  )
}

export default DonationTiersPage;