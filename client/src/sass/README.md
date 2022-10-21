# SASS layout

To use sass, run `npm i` in the **client directory**

The sass directory holds the main styles for the entire project, global variables, and components styles.

So for each component, has it's own sass file, but will be stored in `/sass/components/`
And for each page sass file, will be in it's own folder along with it's js file.

---

## Imports

To use styles from other files into another sass file, use `@use` or `@import`

Ex: `@use 'sass/your_path.scss';`

Full Sass Docs with Demos: https://create-react-app.dev/docs/adding-a-sass-stylesheet

---

## Links

- Traversy Media - Sass Crash Course: https://www.youtube.com/watch?v=nu5mdN2JIwM&ab_channel=TraversyMedia
- Sass Code Structure: https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0
- Kevin Powell - No Extension Compilers Sass: https://www.youtube.com/watch?v=o4cECvhrBo8&ab_channel=KevinPowell
