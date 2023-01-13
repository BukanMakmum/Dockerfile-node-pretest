# Dockerfile node.js
Menyiapkan Dockerfile untuk supaya bisa dilakukan build aplikasi Node.js menjadi image docker (Ubuntu 22.10)

1. build image
```
$ docker build -t pretest-image .
```

2. run image:
```
$ docker run pretest-image
```

3. run container:
```
$ docker run --name MyContainer -it pretest-image bash
```
4. uji melalui terminal:
```
curl -v localhost:3000
```
atau uji melalui browser, akses:
```
http://localhost:3000
```
Screenshots 
(https://bit.ly/3CJ9dG6)
