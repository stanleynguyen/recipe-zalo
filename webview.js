const path = require('path');

module.exports = Franz => {
  const getMessages = function getMessages() {
    const unreadMsgs = document.querySelectorAll(
      '.item-message.truncate.unread',
    );
    let count = 0;

    unreadMsgs.forEach(elem => {
      if (!elem.classList.contains('mute')) {
        count += 1;
      }
    });

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'style.css'));

  Franz.loop(getMessages);
};
