# gulp-code-sine

Gulp plugin to sine your code

## Contents

- [Install](#install)
- [Usage](#usage)
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

## Author

**Peter Gessler**
- <https://github.com/gesslerpd>

## License

Open sourced under the [MIT license](LICENSE.md).
