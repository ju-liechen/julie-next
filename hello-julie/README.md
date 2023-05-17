This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# File Structure of a Next.js app
**`package.json` :** dependencies and scripts for the project.
* `react` and `react-dom` build the UI.
* `script` how the app runs.
* `es-lint` for keeping code clean and identifying problems.

**`package-lock.json` :** consistent dependencies.

**`.next` folder :** runs the app. Git ignored.

**`node_modules` folder :** installs all the dependencies. Git ignored.

**`styles` folder :** grouping of `css` files.

**`public` folder :** holds all public resources for the app (images, logos, etc.).

**`pages` folder :** resposnible for entire router features of application.
* `index.js` : modify the UI of the page.
* `_app.js` : define layout of application.
* `api` folder : define api's for the application.
* Workflow = `app.js` -> Component which is defined in `index.js` -> show the page defined in the Component.