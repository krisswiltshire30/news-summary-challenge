const Guardian = require('guardian-js');

const api = new Guardian(apiKey, false);

api.content.search('football', {
  tag: 'sports'
});
