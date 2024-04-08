<h1>DevTools⚙️</h1>

![Skjermbilde](https://github.com/stiantha/DevTools/assets/132207909/853631e0-b9c6-4338-9c68-4d7e66007ec8)

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
- [x] Structure and add data to MongoDB
- [x] Add error handling middleware


#### Frontend
- [x] Set up React components
- [x] Integrate with backend APIs
- [ ] Implement client-side form validation

#### Documentation
- [x] Write detailed README.md

#### Additional Features
- [ ] Implement search functionality

## :beginner: About
Collection of resources for developers.<br>
- **Features**
    - Markdown Format
    - Search Functionality
    - Resource Submission
    - Dark Mode

## :wrench: Development

#### :computer: Tech

- MongoDB
- Express.js
- React.js
- Node.js

#### :notebook: Pre-Requisites

- Node.js

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
