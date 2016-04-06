<?php

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\ConfigureClientView;

return function (Dispatcher $events) {
  $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
      if ($event->isForum()) {
          $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
          $event->addBootstrapper('zacky/chat/main');
        }
      });
};
