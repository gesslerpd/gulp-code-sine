# gulp-code-sine

Gulp plugin to sine your code

See the [output](#output) section of this document for an example of plugin functionality.
 This plugin doesn't have a well defined purpose.
 I suppose it could be used as an easter egg for project production files.

## Contents

- [Install](#install)
- [Usage](#usage)
- [Output](#output)
- [Author](#author)
- [License](#license)

## Install

```bash
npm i --save-dev gulp-code-sine
```

## Usage

```javascript
var gulp = require('gulp');
var gulpCodeSine = require('gulp-code-sine');

gulp.task('default', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulpCodeSine())
        .pipe(gulp.dest('dist'));
});
```

using with options

```javascript
gulp.task('default', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulpCodeSine({
            amplitude: 5,
            period: 10
        }))
        .pipe(gulp.dest('dist'));
});
```

## Output

Before

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
	<p>Hello World</p>
</body>
</html>
```

After

```html
<!DOCTYPE html>
 <html lang="en">
   <head>
      <meta charset="UTF-8">
          <title>Document</title>
              </head>
                 <body>
                   <p>Hello World</p>
                    <p>Hello World</p>
                   <p>Hello World</p>
                 <p>Hello World</p>
              <p>Hello World</p>
          <p>Hello World</p>
      <p>Hello World</p>
   <p>Hello World</p>
 <p>Hello World</p>
<p>Hello World</p>
 <p>Hello World</p>
   <p>Hello World</p>
      <p>Hello World</p>
          <p>Hello World</p>
              <p>Hello World</p>
                 <p>Hello World</p>
                   <p>Hello World</p>
                    <p>Hello World</p>
                   <p>Hello World</p>
                 <p>Hello World</p>
              </body>
          </html>
```

## Author

**Peter Gessler**
- <https://github.com/gesslerpd>

## License

Open sourced under the [MIT license](LICENSE.md).
