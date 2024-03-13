<h1>DevTools⚙️</h1>

![screencapture-localhost-3000-2024-03-13-05_30_33](https://github.com/stiantha/DevTools/assets/132207909/ac91c6e0-409e-41f3-b242-013554e5ee40)

### :ledger: Index
- [Progress](#progress)
- [About](#beginner-about)
- [Development](#wrench-development)
  - [Tech](#computer-tech)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [File Structure](#file_folder-file-structure)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Documentation](#book-documentation)
    - [FAQ](#question-faq)
    - [Gallery](#camera-gallery)
    - [Credit/Acknowledgment](#star2-creditacknowledgment)
    - [License](#lock-license)
## Progress
#### Backend
- [x] Set up Express.js server
- [x] Create RESTful API endpoints
- [x] Set up MongoDB database
- [ ] Structure and add data to MongoDB
- [x] Add error handling middleware


#### Frontend
- [x] Set up React components
- [ ] Implement Redux for state management
- [ ] Integrate with backend APIs
- [ ] Implement client-side form validation
- [ ] Add authentication and authorization

#### Documentation
- [x] Write detailed README.md
- [ ] Document API endpoints and usage

#### Additional Features
- [ ] Implement real-time updates using WebSockets
- [ ] Implement search functionality

## :beginner: About
Collection of resources for developers.<br>
- **Features** 
    - User Management System
    - Add, edit, remove content
    - Save content to "Favorites"
    - Search Functionality
    - Resource Rating
    - Resource Comments
    - Resource Categories
    - User Profiles
    - Social Sharing
    - Resource Submission
    - Dark Mode

- **Resources** 
    - AI tools
    - VSCode extensions
    - Cheatsheets
    - Images
    - Source code
    - and more.

## :wrench: Development

#### :computer: Tech

- MongoDB
- Express.js
- React.js
- Node.js

#### :notebook: Pre-Requisites

- Node.js
- A text editor (like VSCode)

#### :file_folder: File Structure
The basic file structure for the project is as follows:
```bash
📦DevTools
┣ 📂client
┃ ┣ 📂public
┃ ┃ ┣ 📂pages
┃ ┃ ┃ ┣ 📜home.md
┃ ┃ ┃ ┣ 📜perplexity.ai
┃ ┃ ┃ ┣ 📜prettier.vscode
┃ ┃ ┃ ┗ 📜settings.md
┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┣ 📜favicon.png
┃ ┃ ┣ 📜index.html
┃ ┃ ┣ 📜manifest.json
┃ ┃ ┗ 📜robots.txt
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
┃ ┃ ┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┃ ┃ ┗ 📜Sidebar.tsx
┃ ┃ ┃ ┗ 📂pages
┃ ┃ ┃   ┣ 📜Home.tsx
┃ ┃ ┃   ┣ 📜links.tsx
┃ ┃ ┃   ┗ 📜pagedds.ts
┃ ┃ ┣ 📂static
┃ ┃ ┃ ┣ 📜favicon.png
┃ ┃ ┃ ┗ 📜logo.svg
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┣ 📜logo.svg
┃ ┃ ┣ 📜react-app-env.d.ts
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
┣ 📜LICENSE
┣ 📜project_structure
┗ 📜readme.md


```
## :zap: Usage
#### :electric_plug: Installation
```bash
$ git clone https://github.com/stiantha/DevTools.git
$ cd DevTools
```

#### :package: Commands
```bash
npm install
npm start
npm run build
npm run dev
```
## :book: Documentation

#### :question: FAQ

- **Q: How do I contribute to the project?**
  - A: You can contribute to the project in several ways:
    - Report bugs
    - Request features
    - Create a pull request

#### :camera: Gallery
Coming soon.

#### :star2: Credit/Acknowledgment
Created by Stian Tharaldsen.
#### :lock: License
This project is licensed under the terms of the MIT license.
- See the [LICENSE](LICENSE) file for details.
