import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Projects: 'projects',
          Detail: 'detail',
        },
      },
      Login: 'login'
    }
  }
};
