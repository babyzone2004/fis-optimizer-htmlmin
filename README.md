
# fis-optimizer-htmlmin

> Minify HTML with fis



## Getting Started
This plugin requires fis

If you haven't used [fis](https://github.com/fex-team/fis) before, be sure to check out the [Getting Started](http://fis.baidu.com/docs/beginning/getting-started.html) guide, as it explains how to create a [fis-conf.js](http://fis.baidu.com/docs/api/fis-conf.html) as well as install and use fis plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install fis-optimizer-htmlmin -g
```

## Htmlmin task
_Run this task with the `fis release -o` command._

Minifies HTML using [html-minifier](https://github.com/kangax/html-minifier). Bugs regarding the output should be reported [here](https://github.com/kangax/html-minifier/issues/new).

### Options

See the html-minifier [options](https://github.com/kangax/html-minifier#options-quick-reference).

### Default Options
```javascript
removeComments: true,
collapseWhitespace: true,
minifyJS: true
```

#### Example config

```javascript
fis.config.merge({
	modules: {
		optimizer: {
			html: "htmlmin"
		}
	},
	settings: {
		optimizer: {
			"htmlmin": {
				minifyJS: false
			}
		}
	}
})
```
