;
(function() {
  'use strict';

  var providers = {
    'ustream': {
      'video': 'http://www.ustream.tv/embed/15702667?wmode=direct&autoplay=true',
      'chat': 'http://www.ustream.tv/socialstream/15702667',
      'live_status_url': 'http://api.ustream.tv/json/channel/anarchyao/getValueOf/status'
    },
    'hitbox': {
      'video': 'http://hitbox.tv/#!/embed/anarchyao?autoplay=true',
      'chat': 'http://www.hitbox.tv/embedchat/anarchyao',
      'live_status_url': 'http://api.hitbox.tv/media/live/anarchyao'
    },
    'twitch': {
      'video': 'http://www.twitch.tv/anarchyao__tv/embed',
      'chat': 'http://www.twitch.tv/anarchyao__tv/chat'
    }
  };

  function setActive(provider) {
    document.querySelector('.streamToggle-active').classList.remove('streamToggle-active');
    document.querySelector('.streamToggle.' + provider).classList.add('streamToggle-active');
  }

  function setLive(provider, isLive) {
    cosnole.info(provider, isLive);
    if (isLive) {
      document.querySelector('.streamToggle.' + provider).classList.add('streamToggle-live');
    } else {
      document.querySelector('.streamToggle.' + provider).classList.remove('streamToggle-live');
    }
  }

  function updateLiveStatus(provider, ajaxData) {
    var isLive = false;

    console.info(provider, ajaxData);

    switch (provider) {
      case 'ustream':
        if (ajaxData['results'] === 'live') {
          isLive = true;
        }
        break;
      case 'hitbox':
        if (ajaxDaya['livestream'][0]['media_is_live']) {
          isLive = true;
        }
        break;
    }

    setLive(provider, isLive);
  }

  function setEmbed(provider) {
    provider = provider || 'ustream';

    document.getElementById('stream__embed').src = providers[provider].video;
    document.getElementById('stream__chat').src = providers[provider].chat;

    setActive(provider);
  }

  function switchEmbedToProviderInHash() {
    setEmbed(location.hash.substring(1));
  }

  function checkUstreamStatus() {
    $.get(providers['ustream'].live_status_url, function(data) {
      updateLiveStatus('ustream', data)
    });
  }

  function checkHitboxStatus() {
    $.get(providers['hitbox'].live_status_url, function(data) {
      updateLiveStatus('hitbox', data)
    });
  }

  function checkLiveStatus() {
    checkHitboxStatus();
    checkUstreamStatus();
  }

  function konami() {
    if (window.addEventListener) {
      var valid = false;
      var index = 0;
      var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

      window.addEventListener("keydown", function(e) {
        if (e.keyCode === konami[index]) {
          index++; // valid key at the valid point

          if (index == 10) { // all 10 keys were correct
            alert("Hyuna is a man. I still love her. – AnarchyAo");
          }
        } else {
          // incorrect code restart
          index = 0;
        }
      });
    }
  }

  $(document).ready(switchEmbedToProviderInHash);
  $(window).on('hashchange', switchEmbedToProviderInHash);

  $(document).ready(checkLiveStatus);
})();
