'use client';

import RpcFactory from "@/app/model/rpc";
import { Ed25519Keypair, PRIVATE_KEY_SIZE, RawSigner, TransactionBlock, fromB64 } from "@mysten/sui.js";
import { useWallet } from "@suiet/wallet-kit";
import { useState } from "react";


const NewDonationTier = () => {
  const [name, setName] = useState("")
  const [value, setValue] = useState("");

  const { address } = useWallet();

  const handleSubmit = async () => {
    console.log(`name is: ${name}, value is: ${value}`);

    let provider = RpcFactory.provider();
    let keystore = process.env.SUI_ADMIN_KEYSTORE!
    const raw = fromB64(keystore);

    if (raw[0] !== 0 || raw.length !== PRIVATE_KEY_SIZE + 1) {
      throw new Error("Invalid Key")
    }
    let secretKey = raw.slice(1)

    let keypair = Ed25519Keypair.fromSecretKey(secretKey);

    const signer = new RawSigner(keypair, provider);

    const tx = new TransactionBlock();
    // 0xaaf7075991885411f5b409b5dbe84f4c4a4fb57c480bbd52873a674c0a34a151" --module "charity" --function "add_donation_tier"

    tx.moveCall({
      target: `${process.env.SUI_PCK_ADDRESS}::charity::add_donation_tier`,
      arguments: [
        tx.pure(`${process.env.SUI_ADMIN_CAP}`),
        tx.pure(`${process.env.SUI_SHARED_TIERS}`),
        tx.pure(name),
        tx.pure(parseInt(value))
      ],
    });
    const result = await signer.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });

    console.log(`https://explorer.sui.io/txblock/${result.digest}?network=${process.env.SUI_NET}`)
    console.log(result)

  }

  return (
    <div>
      <p>{address}</p>
      <div className="m-4">
        <input placeholder="Name" value={name} onChange={(e: any) => { setName(e.target.value) }} className="rounded border black hover:bg-gray-300 p-2" />
      </div>

      <div className="m-4">
        <input placeholder="Value" value={value} onChange={(e: any) => { setValue(e.target.value) }} className="rounded border black hover:bg-gray-300 p-2" />
      </div>

      <button onClick={handleSubmit} className="rounded border px-4 py-2 hover:bg-gray-300"> Add tier </button>
    </div>
  )
}

export default NewDonationTier;