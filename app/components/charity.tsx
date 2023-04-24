import { TransactionBlock } from "@mysten/sui.js"
import { useAccountBalance, useWallet } from "@suiet/wallet-kit"
import { ChangeEvent, useState } from "react"


// type WalletProp = {
//   wallet: WalletContextState
// }

const Charity = () => {
  const [fund, setFund] = useState("")
  const [submittable, setSubmittable] = useState(false)
  const [txnDigest, setTxnDigest] = useState('');

  const w = useWallet()
  const { balance } = useAccountBalance()

  const handleSetFund = (event: ChangeEvent<HTMLInputElement>) => {

    const fund = event.target.value
    setSubmittable(fund == "" ? false : true)

    setFund(fund);
  }

  const handleSendFund = () => {
    alert("Fund: " + fund)
    return false
  }

  const handleCreateAccount = () => {
    alert("Create a donor account");
    return false
  }

  const handleRunContract = async () => {
    if (!w.connected) {
      alert("please connect your wallet")
      return;
    }
    const transactionBlock = new TransactionBlock()
    const pckAdrress = process.env.SUI_PCK_ADDRESS || ""
    const target = `${pckAdrress}::charity::create_donor`;

    console.log(`target: ${target}`);

    transactionBlock.moveCall({
      target: `${pckAdrress}::charity::create_donor`,
      arguments: [
        // https://docs.sui.io/devnet/build/prog-trans-ts-sdk#constructing-inputs
        transactionBlock.pure("dojo")
      ]
    })
    console.log("sign and exec");
    try {
      const resData = await w.signAndExecuteTransactionBlock({ transactionBlock: transactionBlock })
      console.log('Response data: ', resData);

      const txbDigest = resData['digest']
      const explorer = `https://explorer.sui.io/txblock/${txbDigest}/?network=${w.chain?.name.toLowerCase()}`;
      setTxnDigest(explorer);
    }
    catch (e) {
      console.error('execution failed: ', e);
    }
  }

  const handleSignMessage = async () => {
    try {
      const wallet = w;
      const msg = `Please sign the message`;

      // convert string to Uint8Array
      const msgBytes = new TextEncoder().encode(msg)

      // call wallet's signMessage function
      const result = await wallet.signMessage({
        message: msgBytes
      })
      // verify signature with publicKey and SignedMessage (params are all included in result)
      const verifyResult = wallet.verifySignedMessage(result)
      if (!verifyResult) {
        console.log('signMessage succeed, but verify signedMessage failed')
      } else {
        console.log('signMessage succeed, and verify signedMessage succeed!')
      }
    } catch (e) {
      console.error('signMessage failed', e)
    }
  }

  return (
    <div>
      <h2>Charity</h2>
      {txnDigest == '' ? '' : <p>{txnDigest}</p>}
      {w.connected ? <div> Yes {w.address} </div> : <div> No {w.connected}</div>}
      <div> Wallet balance: SUI {String(balance)} </div>
      <input className="enabled:hover:border-gray-400 disabled:opacity-75 rounded-md p-2" value={fund} onChange={handleSetFund} />
      <button className={`rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2 ${submittable ? '' : 'bg-gray-50 text-gray-800'}`} onClick={handleSendFund} disabled={!submittable}> Send </button>
      <button className={`rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2`} onClick={handleCreateAccount}> Create Account </button>

      <br />

      <button className="rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2" onClick={handleRunContract}> Run Contract </button>
      <button className="rounded-md bg-green-600 hover:bg-green-800 text-white px-3 py-2 ml-2" onClick={handleSignMessage}> Sign Message </button>

    </div>
  )
}

export default Charity