import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage'

app.initializers.add('zacky-chat', function() {
  extend(IndexPage.prototype, 'view', function(vdom) {
    vdom.children.push(<div class="container"><iframe src="https://discordapp.com/widget?id=163744951769890817&amp;theme=light" width="1070" height="300" allowtransparency="true" frameborder="0"></iframe></div>);
  });
});
