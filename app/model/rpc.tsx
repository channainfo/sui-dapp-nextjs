import { Connection, testnetConnection, devnetConnection, JsonRpcProvider } from "@mysten/sui.js";

interface Net {
  [key: string]: Connection
}


class RpcFactory {
  static provider(): JsonRpcProvider {
    let networks: Net = {
      "testnet": testnetConnection,
      "devnet": devnetConnection,
    }

    let net = process.env.SUI_NET ?? 'devnet'
    let connection = networks[net];

    let provider = new JsonRpcProvider(connection)

    return provider;
  }
}

export default RpcFactory;
