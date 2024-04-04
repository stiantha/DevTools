# [DevTools](https://github.com/stiantha/DevTools)

Comprehensive collection of resources for web developers.

### Features

```json
- Content Management with Preview
- Light / Dark
- Window Tabs
- Collapsible Sidemenu
- Integrated API
- Integrated Markdown Syntax
```

### Technology Stack

```ruby
- Backend: Express.js server, MongoDB database
- Frontend: React components
- Hosting: Vercel frontend & Heroku backend
```

### Progress

The project is ongoing. Tasks include implementing

```ruby
- Form validation
- Search functionality
- UI improvements
- Add more data
- Configure light mode for new elements
```

### Project Structure

The project consists of client and server directories.
The `client` directory holds frontend code, including `.env` files.
The `server` directory contains backend code.

```shell
-‍‍┣ 📂client‍‍‍‍‍‍‍‍‍‍
-┃ ┣ 📂public
-┃ ┃ ┣ 📜corrections.css
-┃ ┃ ┣ 📜favicon.ico
-┃ ┃ ┣ 📜favicon.png
-┃ ┃ ┣ 📜index.html
-┃ ┃ ┣ 📜manifest.json
-┃ ┃ ┣ 📜robots.txt
-┃ ┃ ┗ 📜tips.txt
┃ ┣ 📂src
┃ ┃ ┣ 📂app
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜globals.d.ts
┃ ┃ ┃ ┃ ┣ 📜MDContainer.tsx
┃ ┃ ┃ ┃ ┗ 📜particles.tsx
┃ ┃ ┃ ┣ 📂hooks
┃ ┃ ┃ ┃ ┗ 📜usePageTracking.tsx
┃ ┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┃ ┣ 📜App.tsx
┃ ┃ ┃ ┃ ┣ 📜AppButtons.tsx
┃ ┃ ┃ ┃ ┣ 📜AppTree.tsx
┃ ┃ ┃ ┃ ┣ 📜CategoryContext.tsx
┃ ┃ ┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┃ ┃ ┗ 📜Sidebar.tsx
┃ ┃ ┃ ┗ 📂pages
┃ ┃ ┃   ┣ 📜aceTheme.js
┃ ┃ ┃   ┣ 📜Admin.tsx
┃ ┃ ┃   ┣ 📜Category.tsx
┃ ┃ ┃   ┣ 📜Home.tsx
┃ ┃ ┃   ┣ 📜links.tsx
┃ ┃ ┃   ┗ 📜pages.ts
┃ ┃ ┣ 📂static
┃ ┃ ┃ ┣ 📜devicons.svg
┃ ┃ ┃ ┣ 📜favicon.png
┃ ┃ ┃ ┗ 📜logo.svg
┃ ┃ ┣ 📜declarations.d.ts
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┣ 📜logo.svg
┃ ┃ ┣ 📜react-app-env.d.ts
┃ ┃ ┣ 📜react-markdown-it.d.ts
┃ ┃ ┣ 📜reportWebVitals.ts
┃ ┃ ┗ 📜setupTests.ts
┃ ┣ 📜.env.development
┃ ┣ 📜.env.production
┃ ┣ 📜.gitignore
┃ ┣ 📜package.json
┃ ┗ 📜tsconfig.json
┣ 📂server
┃ ┣ 📂controllers
┃ ┃ ┗ 📜resourceController.js
┃ ┣ 📂helpers
┃ ┃ ┗ 📜openBrowser.js
┃ ┣ 📂models
┃ ┃ ┗ 📜resourceModel.js
┃ ┣ 📂routes
┃ ┃ ┗ 📜resourceRoutes.js
┃ ┣ 📜.env
┃ ┣ 📜.gitignore
┃ ┣ 📜package.json
┃ ┗ 📜server.js
┣ 📜.gitignore
┣ 📜LICENSE
┣ 📜package.json
┣ 📜project_structure
┣ 📜readme.md
┣ 📜start.bat
┗ 📜todo.md
```
