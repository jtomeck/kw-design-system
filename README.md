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
* Clone this repository and `cd` into the directory
* `bundle install` to install Ruby gems
* `npm ci` to clean install npm packages listed in `package-lock.json`
* `npm run dev` to compile the site and watch for changes

### Build your site
* `npm run build` to compile the site for production

### Deploy
The design system is currently being deployed to [Netlify](https://www.netlify.com/). The included `netlify.toml` file will tell netlify to use `npm run build` to build the site.

Here is a link to the site: https://kwuiux.netlify.app/

# Adding content to collection pages
To edit the content of the collection pages, you must add it to the frontmatter. Content editing is meant to be very strict and lock you into certain content structures. You might feel that this is unnecessarily complex, but there are some very good reasons for this complexity:

1. Adding complex layouts and HTML structures to markdown pages is a pain
2. It's easier to write out the content in the frontmatter rather than write custom HTML for each page.
3. Limiting the amount of custom HTML and styling a user can do to the content ensures consistency across the site

## Content types and how to use them

### Guildelines content types
#### Standard
Use this section type for just normal blocks of text, such as paragraph, unordered lists and numbered lists. You may also use images.

Here is an example of the frontmatter for the standard content section:
```
# Page Content
sections:
    - type: standard
      heading: This is a test heading
      content:
        - subheading: This is a sample subheading
          text:
            - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna. Etiam sed lectus iaculis, dignissim diam elementum, feugiat ante. Suspendisse pellentesque id urna et consectetur. Cras neque nisi, gravida quis vulputate non, interdum vel diam. Pellentesque fermentum molestie ligula, ac vestibulum turpis. Morbi ac rhoncus ex. Ut pulvinar lacinia nunc vehicula condimentum. Suspendisse auctor sit amet mauris quis congue.
            - <h6>This is the label for the UL</h6>
            - ul:
                - This is a bulleted list
                - This is a bulleted list
                - This is a bulleted list
            - <h6>This is the label for the OL</h6>
            - ol:
                - This is a numbered list
                - This is a numbered list
                - This is a numbered list
            - Sed feugiat commodo lectus ut hendrerit. Curabitur vel leo fringilla, faucibus lacus sit amet, rhoncus velit. Etiam congue eros eu ex fringilla imperdiet. Suspendisse a tempus mauris. Morbi sagittis nulla purus, et condimentum enim tempor vel. Mauris sed condimentum ex. In placerat tempus erat a efficitur. Ut lobortis mauris est, eget porta est pellentesque vitae. Maecenas consectetur dolor felis. Vivamus eu facilisis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          image:
            - url: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
              align: right
```
***Please Note** that you are only allowed one subheading and one image per content block. If you want additional, just start a new content block.

This will get you something that looks like this:

---

#### List
Use this section type for complex lists. This will show up in a grid and give you the ability to add a subheading, text and image.

The frontmatter for a list section might look like this:
```
# Page Content
sections:
    - type: list
      heading: This is a sample heading
      content:
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
```

---

#### Grid
This is basically the same as the list section, without the numbering.

The frontmatter for a grid section might look like this:
```
# Page Content
sections:
    - type: grid
      heading: This is a sample heading
      content:
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
        - subheading: This is a sample subheading
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et enim id tellus lacinia convallis dictum sit amet arcu. In quis bibendum urna.
          image: https://fakeimg.pl/1024x600/?retina=1&text=Screenshot&font=noto
```

---

### Case Study content types

#### Standard
This will produce a block of text with a title and text:
```
process:
    - title: Lorem Ipsum
      content:
        - type: standard
          title: Lorem Ipsum
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ultricies leo facilisis varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget lobortis augue, a maximus turpis. Vestibulum ultrices lacus at placerat pretium. Mauris viverra urna vel porta lacinia.
```

---

#### Text with Image
This will produce a block of text with an image on either the left or right (notice the `img-align` property):
```
process:
    - title: Lorem Ipsum
      content:
        - type: text-image
          title: Lorem Ipsum
          text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ultricies leo facilisis varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget lobortis augue, a maximus turpis. Vestibulum ultrices lacus at placerat pretium. Mauris viverra urna vel porta lacinia.
          image: https://fakeimg.pl/1024x600/?retina=1&text=ResearchImg&font=noto
          img-align: right
```

---

#### Image only
This will produce a block containing as many images as you specify. If the `grid` property exists, it will list the image in a 2 column grid:
```
process:
  - title: Lorem Ipsum
    content:
      - type: image-only
          grid: true
          images:
            - url: https://fakeimg.pl/1024x600/?retina=1&text=Wireframe&font=noto
            - url: https://fakeimg.pl/1024x600/?retina=1&text=Wireframe&font=noto
```

## Frameworks & Integrations
This site uses the following frameworks/integrations:

* [TailwindCSS](https://tailwindcss.com)
* [DaisyUI](https://daisyui.com)
* [Jekyll Search JS](https://github.com/daviddarnes/jekyll-search-js) by David Barnes
