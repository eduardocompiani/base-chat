// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBPYpDjIX5z1yZq54ZcRAxVzktyxSW0WAY',
    authDomain: 'chat-demo-4e777.firebaseapp.com',
    databaseURL: 'https://chat-demo-4e777.firebaseio.com',
    projectId: 'chat-demo-4e777',
    storageBucket: 'chat-demo-4e777.appspot.com',
    messagingSenderId: '508899864950'
  }
};
