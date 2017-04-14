# Backend

`djangoproject` contains file for Django 1.10 project.

# Frontend

```bash
# create ext project
$ sencha -sdk /path/to/ext-6.2.1 generate app MyApp ./extproject/myapp

$ sencha generate app -ext -classic MyAppName ./MyAppPath

# watch app during development
$ cd extproject/myapp
$ sencha app watch
```

`extproject` contains Ext JS 6 project source files.

# Deployment

1. build `extproject`.
2. copy the build output to djangoproject.
