'use strict';

System.register('zacky/chat/main', ['flarum/extend', 'flarum/components/IndexPage'], function (_export, _context) {
  var extend, IndexPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage.default;
    }],
    execute: function () {

      app.initializers.add('zacky-chat', function () {
        extend(IndexPage.prototype, 'view', function (vdom) {
          vdom.children.push(m(
            'div',
            { 'class': 'container' },
            m('iframe', { src: 'https://discordapp.com/widget?id=163744951769890817&theme=light', width: '1070', height: '300', allowtransparency: 'true', frameborder: '0' })
          ));
        });
      });
    }
  };
});