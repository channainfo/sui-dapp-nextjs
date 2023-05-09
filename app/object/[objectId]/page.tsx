'use client';

import { JsonRpcProvider } from "@mysten/sui.js";
import { useWallet } from "@suiet/wallet-kit";
import { useEffect } from "react";

const ObjectPage = ({ params }: { params: { objectId: string } }) => {

  let w = useWallet()

  useEffect(() => {
    let provider = new JsonRpcProvider()
    let txn = provider.getObject({
      id: params.objectId,
      options: {
        showType: true,
        showContent: true
      }
    }).then((response) => {
      console.log("response")
      console.log(response)
    })
  }, [params.objectId])


  const handleClick = async () => {
    let provider = new JsonRpcProvider()

    console.log(`objectId: ${params.objectId}`)

    let txn = await provider.getObject({
      id: params.objectId,
      options: {
        showType: true,
        showContent: true
      }
    })

    console.log("transaction")
    console.log(txn)
  }

  return (
    <div>
      Object Page {params.objectId}
      <br />
      Owner: {w.address}

      <br />
      <button onClick={handleClick}> Refresh </button>

    </div>
  )
}

export default ObjectPage;