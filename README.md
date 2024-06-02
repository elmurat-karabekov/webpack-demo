# Webapack

- JS module bundler

## Avoid browser cashing

```js    
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
```
- Браузер кеширует подключенные файлы стилей CSS, скриптов JavaScript и картинок. Кеширование означает, что подключенные файлы браузер скачивает только при первом заходе пользователя на сайт. 

- При последующих заходах эти файлы уже не будут скачиваться опять, а возьмутся из кеша браузера.

- Однако, за скорость приходится платить неудобством при разработке. Дело в том, что если вы поменяется что-то в вашем коде и затем выложите изменения на хостинг - все пользователи, которые уже заходили на ваш сайт будут иметь старую кешированную копию кода.

## Webpack Loaders

- Для расширения возможностей Webpack также используются лоадеры. Они позволяют брать файлы определенного типа и производить с ними определенные операции.
- series of transformations (kind of like gulp `pipe()`) that are applied to src code
- preporcess files as you `import` / load them
- ex. `ts` => `js`, `images` => `data urls`

Webpack handling scss files
```
  scss-loader(*.scss) --> compile scss to css -->
  --> css-loader(res.css) --> compile css to commonJS -->
  --> style-loader(res) --> css-in-js strings --> inside <style>  in final bundle 
```

! LIFO - Last In First Out (last loader in [loaders] is exuecuted first)

Gulp alternative task for transforming ts to js:

```js 
    var gulp = require("gulp");
    var ts = require("gulp-typescript");
    var tsProject = ts.createProject("tsconfig.json");

    gulp.task("default", function () {
      return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
    });
```

## DevSever

`npm run start -- --env port=####` - run dev server on a port specified

## BEM

- methodology
- component development
- avoid name collisions (99% of time) 
`block__element_modifier` - bloated class names :(

## CSS modules (true encapsulation)

- alternative approach to BEM
- same class name, BUT different files! 
- gerate dynamic class names
- webpack (.class_name) ---> .KSHDkSA <-- class name content hashing

## Micro-frontend

- development approach
- where web app's frontend is divided into modules
- independent dev, test, deploy

## Monorepo

- single repo that contains multiple _distinct_ projects
- with well-defined relationships between them

## Module Federation

- multiple separate builds should form a single application
