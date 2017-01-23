require('dotenv').config({ silent: true });

const app = require('dexpress');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

const alexaApp = new require('alexa-app').app('test');

alexaApp.launch((req, res) => {
  response.say('You launched the app!');
});

alexaApp.dictionary = { names: ['matt', 'joe', 'bob', 'bill', 'mary', 'jane', 'dawn'] };

alexaApp.intent(
  'nameIntent',
  {
    slots: {
      NAME: 'LITERAL'
    },
    utterances: [
      "my {name is|name's} {names|NAME}",
      'set my name to {names|NAME}'
    ]
  },
  (req, res) => {
    res.say('Success!');
  }
);

alexaApp.express(app);
