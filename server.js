const express = require('express');
const yelp = require('yelp-fusion');

const app = express();

app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/food', (req, res) => {
  yelp.accessToken('2GZoynVLCpPNmDo2fkK58w', '7VirYTmtmDVUuA3UQSe5NkQeRciYk09Yu4WkVlolgOY7YAjvCdHES0zpAMwePqOf').then(token => {
    const client = yelp.client(token.jsonBody.access_token);

    client.search({
      term:'Four Barrel Coffee',
      location: 'san francisco, ca'
    }).then(results => {
      res.json(results.jsonBody.businesses);
    });
  }).catch(e => {
    console.log(e);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

