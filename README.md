# JWT Authentication

This is a basic example of how JWT authentication works. To create a random access and refresh token, run in a Node shell:

```js
require('crypto').randomBytes(64).toString('hex');
```

Now you can start the servers with:

```shell
yarn dev:auth
yarn dev:posts
```
