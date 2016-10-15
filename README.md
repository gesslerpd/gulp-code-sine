# gulp-code-sine

Gulp plugin to sine your code

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

gulp.src('src/**/*.js')
  .pipe(gulpCodeSine())
  .pipe(gulp.dest('dist'));
```

or with streams

```javascript
gulp.src('src/**/*.js', { buffer: false })
  .pipe(gulpCodeSine())
  .pipe(gulp.dest('dist'));
```

using options

```javascript
gulp.src('src/**/*.js')
  .pipe(gulpCodeSine({
      amplitude: 5,
      period: 10
  }))
  .pipe(gulp.dest('dist'));
```
## Output

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

outputs

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
