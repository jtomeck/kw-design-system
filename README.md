This design system is meant to define Kitware's way of thinking about UI/UX to help improve consistency and understanding between designers and developers.

License - [MIT](https://github.com/jtomeck/kw-design-system/blob/master/LICENSE)

## Need help?
Have you found something wrong with the site? Have you run into a tricky UI/UX situation that you don't know how to handle?
* Contact the design team at [uiux@kitware.com](mailto:uiux@kitware.com)
* [Create an issue](https://github.com/jtomeck/kw-design-system/issues/new) with some constructive criticism

If it's something that does not exist and warrants a place in the Design System, we'll be sure to add it!

# For developers of this project

### Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

### Get started
* `bundle install` to install Ruby gems
* `npm ci` to clean install npm packages listed in `package-lock.json`
* `npm run dev` to compile the site and watch for changes

### Build your site
* `npm run build` to compile the site for production

### Deploy
The design system is currently being deployed to [Netlify](https://www.netlify.com/). The included `netlify.toml` file will tell netlify to use `npm run build` to build the site.

Here is a link to the site: https://kwuiux.netlify.app/

## Frameworks & Integrations
This site uses the following frameworks/integrations:

* [TailwindCSS](https://tailwindcss.com)
* [DaisyUI](https://daisyui.com)
* [Jekyll Search JS](https://github.com/daviddarnes/jekyll-search-js) by David Barnes
