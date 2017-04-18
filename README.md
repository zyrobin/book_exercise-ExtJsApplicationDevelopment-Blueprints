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

1. build `extproject` (this will automatically copy the build output to djangoproject)

# Notice

Comment out the unused mixin in sass/src/view/main/Main.scss (such as the `sencha generate app` created  extjs-tab-panel-ui and extjs-panel-ui)， this unused mixins will cause build process to throw error: [ERR] com.sencha.exceptions.ExBuild: PhantomJS sass build exited with code : 3. See: https://www.sencha.com/forum/showthread.php?330154-sencha-app-build-crashes-with-PhantomJS-sass-build-exited-with-code-3/page2

