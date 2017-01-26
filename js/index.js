let message = require('./moduleOne.js');

document.getElementById('app').innerHTML = message.introText;


if (module.hot) {
    module.hot.accept();
}