const Authing = require('../dist/authing-js-sdk.js');

const secret = 'b41a29583618d8e9de201d5e80db7056';
const clientId = '5a97ede6f8635a00018551a1';

const auth = new Authing({
  clientId,
  secret
});

auth.then((validAuth) => {
  validAuth.userPatch({
    ids: '5c0a3565583d9d00019d2960,5c08fa74583d9d00019d245e'
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error.response.data.errors[0].message);
  });
});
