
'use client';
import { JsonRpcProvider } from "@mysten/sui.js";

import { useWallet } from "@suiet/wallet-kit";

import { Chain, EthosWallet, SuiDevnetChain, SuiTestnetChain, SuiWallet, SuietWallet, WalletProvider } from '@suiet/wallet-kit';
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const [ownObjects, setOwnObjects] = useState<any[]>([])

  const w = useWallet()

  const handleClick = async () => {
    let provider = new JsonRpcProvider()
    console.log("Clicked");

    const objects = await provider.getOwnedObjects({
      owner: w.address!,
    });

    console.log(objects['data'])
    setOwnObjects(objects['data'])
  }

  const SUPPPORTED_CHAINS: Chain[] = [
    SuiDevnetChain,
    SuiTestnetChain,
  ]

  return (
    <div>
      <p>Address: {w.address}</p>
      <ul>

        {ownObjects.map((object) => {
          return (
            <li key={object.data.digest} className="p-4">
              <Link className="rounded-md bg-green-600 hover:bg-green-800 text-white p-2 m-2" href={`/object/${object.data.objectId}`} key={object.data.digest}>{object.data.objectId}</Link>
            </li>
          )
        })}
      </ul>
      <button className="rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2" onClick={handleClick}>Retrive</button>
    </div>
  )
}

export default ProfilePage;