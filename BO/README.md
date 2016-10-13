A REMPLIR
=


Require
-

node, npm, ruby and python

Project installation
-


```
npm install
```
```
bower install
```


Run the server
-
```
gulp
```

In the app folder, gulp task copy, compile and concat all files to the build folder.
Also, gulp run a server, which mean that you can use the url to see the website on your phone too ! :)

Production task
-
```
gulp --production
```

Note
-

Vous retrouvez le dossier build en zip que je commit si jamais le gulp ne se lance pas correctement. :(

Lancer un "gulp" donnera les fichiers JS et CSS en version développement. Pour plus de performance il
faudra lancer la version "gulp --production" pour avoir les fichiers concat.

