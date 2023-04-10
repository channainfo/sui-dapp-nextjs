# Getting Started

SUI Dapp Nextjs exmple app for your SUI blockchain journey.


## Nextjs

### Server component only

To prevent this sort of unintended client usage of server code, we can use the server-only package to give other developers a build-time error if they ever accidentally import one of these modules into a Client Component.

```js
 import "server-only";

 export async function getData() {
  let resp = await fetch("https://external-service.com/data", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return resp.json();
}
```

Ref: <https://beta.nextjs.org/docs/rendering/server-and-client-components#keeping-server-only-code-out-of-client-components-poisoning>
