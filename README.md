Derby Lang FS
=============

Load [Derby Lang](https://github.com/psirenny/derby-lang) translations from the file system.

Installation
------------

    $ npm install derby-lang-fs

In *"/lib/server/index.js"*

    var langFs = require('derby-lang-fs');

    expressApp
      // after lang.init()
      .use(user.langFs())
      // before lang.build()

Options
-------

* directory — The directory containing the language files. (defaults to "locale")