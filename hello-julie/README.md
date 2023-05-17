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

# Routing a React App
1. Install a third party package (i.e. react router)
2. `route.js` to configure the routes
3. For each route, crate a component files, export the component, import it in routes.js and configure the new route with a *path* property

# Routing in a Next.js app
File-system based routing mechanism: when a file is added to the pages folder in a project, it automatically becomes available as a route.
* `index.js` will map to the root of your domain (i.e. localhost:3000).
* Adding a new `pagename.js` file in the `pages` folder will create a new page  with route `.../pagename`

## Nested Routes
Create a folder under the pages folder with the parent page name (i.e., blog/first). 
`index.js` file within that folder is the root page (blog), and other children pages are named whatever the route is (first, second).

## Dynamic Routes
Ex: localhost:3000/blog/id
* Add a route in square brackets (i.e., [`blogId.js`])
* `useRouter` hook to extract the ID, must match the .js name

## Nested Dynamic Routes
Ex: localhost:300/blog/id/comment/id
* Same process as dynamic routes, but put a file instead of a new [`blogId.js'] with same file name, and an `index.js` file to replace the [`blogId.js'] file

## Catch All Routes
Ex: localhost:3000/docs/feature1/concept1
One URL for multiple variations and keeping the layout the same
* use `params` array to catch the additional URL elements
* single [] vs double [[]]: single does not show /docs but double does
