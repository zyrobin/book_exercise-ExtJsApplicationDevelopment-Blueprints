# Backend

`djangoproject` contains file for Django 1.9 project.

# Frontend

```bash
# create ext project
$ sencha -sdk /path/to/ext-6.2.1 generate app MyApp ./extproject/myapp

# watch app during development
$ cd extproject/myapp
$ sencha app watch
```

`extproject` contains Ext JS 6 project source files.

# Deployment

```bash
$ cd extproject/my-workspace/architecture-cms/

# build `extproject` (this will automatically copy the build output to djangoproject)
$ sencha app build
```

# Notice

## build process to throw error: [ERR] com.sencha.exceptions.ExBuild: PhantomJS sass build exited with code : 3

Comment out the unused mixin in sass/src/view/main/Main.scss (such as the `sencha generate app` created  extjs-tab-panel-ui and extjs-panel-ui)， this unused mixins will cause. See: https://www.sencha.com/forum/showthread.php?330154-sencha-app-build-crashes-with-PhantomJS-sass-build-exited-with-code-3/page2

## Microloader looking for "/.js" after building app

If run the index.html in the project directory (not the one in the "build/..." directory) there are no warnings in the console. 

This issure is related to a missing/incorrect "requires" config.

First of all, make sure that ext-all-debug.js is not used (nor any of its variations) when loading the uncompressed version of your application. This can usually done by looking for the mentioning of ext-all-debug.js in the "js"-section of your app.json and removing/commenting it.

Now load the uncompressed version of your application. Since ext-all-debug.js is not included, every required Ext-file will be loaded individually. If you failed to require a class, Ext will now load it synchronously at run time and let you know about it by showing a warning in your console: �Synchronously loading �Ext.some.Class�; consider adding Ext.require('Ext.some.Class') above Ext.onReady�. There's your missing requirement, require it where appropriate and the error will be gone. See: https://www.sencha.com/forum/showthread.php?297367-Microloader-looking-for-quot-js-quot-after-building-app/page2
