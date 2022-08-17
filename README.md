<a id="readme-top"></a>

<br />

<div align="center">
  <a href="https://www.josephpalma.dev">
    <img src="client/public/jp-logo-black.ico" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">josephpalma.dev - v2</h1>
  <p align="center">
    <a href="https://www.josephpalma.dev" target="_blank">
      <img src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fwww.josephpalma.dev" alt="Website Status" />
    </a>
    <a href="https://www.josephpalma.dev" target="_blank">
      <img src="https://img.shields.io/badge/heroku-success-green" alt="Heroku Status" />
    </a>
    <a href="https://github.com/josephpalma/josephpalma.dev/LICENSE" target="_blank">
      <img src="https://img.shields.io/badge/license-MIT-green?color=yellow" alt="License" />
    </a>
    <a href="https://github.com/josephpalma/josephpalma.dev/commits/main" target="_blank">
      <img src="https://img.shields.io/github/last-commit/josephpalma/josephpalma.dev?color=blue" alt="Last commit" />
    </a>
  </p>
  <p align="center">
    The second iteration of my portfolio website built with <a target="_blank" href="https://reactjs.org/">React</a> and hosted with <a href="www.heroku.com" target="_blank">Heroku</a>
    <br />
    <p align="center">
    Previous iterations: <a href="https://josephpalma.github.io/essays/" target="_blank">v1</a>
    </p>
    <a href="https://www.josephpalma.dev"><strong>DEMO »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#🚨-forking-this-repository">Forking</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#color-reference">Color Reference</a></li>
      </ul>
    </li>
    <li>
      <a href="#🔨-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configure">Configure</a></li>
      </ul>
    </li>
    <li><a href="#🚀-build-and-run-for-production">Build and Run for Production</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## 🚨Forking This Repository

Yes, you may fork this repository. <strong><u>Please give proper credit</u></strong> by linking back to [josephpalma.dev](https://josephpalma.dev). Thank you!

Note that this project was not intented as a starter theme.

### Built With

* [![MaterialUI][MaterialUI]][MaterialUI-url] For theming and styles.
* [![React][React.js]][React-url] For a component based UI.
* [![Node][Node.js]][Node-url] Enables features like the email service.
* [![MongoDB][MongoDB]][MongoDB-url] Allows for easy JSON content management.

<br />

### Color Reference

| Color 🎨       | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black          | `#121212` &nbsp; <p style="background-color: #121212; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|
| White          | `#f7f7f7` &nbsp; <p style="background-color: #f7f7f7; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|
| Blue           | `#366194` &nbsp; <p style="background-color: #366194; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|
| Cobolt         | `#232c36` &nbsp; <p style="background-color: #232c36; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|
| Light Blue     | `#6B93CE` &nbsp; <p style="background-color: #6B93CE; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|
| Error          | `#B1161E` &nbsp; <p style="background-color: #B1161E; width: 10px; height: 10px; display: inline-flex; transform: translateY(9px);" />|

<br />
<br />

## 🔨 Getting Started

### Prerequisites

Install Node.js with the [installer](https://nodejs.org/en/download/), or from a linux command line:

Linux only
  ```sh
  sudo apt install nodejs
  ```

Once installed, verify by checking the installed version:
  ```sh
  node -v or node –version
  ```

<br />

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/josephpalma/professional-portfolio
   ```
2. Navigate to the /client directory
   ```sh
   cd professional-portfolio/client
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Repeat steps 2 and 3 for the /server directory
   ```sh
   cd .. && cd server && npm install
   ```
5. Start the development server
   ```sh
   cd .. && cd client && npm start
   ```

<br />

### Configure

1. Use your own data by replacing all endpoints in /client/src/assets/api.json with your own data sources. 

2. Generate a secure 160-bit WPA or higher API Key using [https://randomkeygen.com/](https://randomkeygen.com/)

3. Create your frontend <i>.env</i> and paste this code, replace key with your custom generated key:

    ```sh
    REACT_APP_cryptoKey=your custom generated key
    ```

4. Create your backend <i>.env</i> and paste this code, replacing with your own info:
    ```sh
    dbUri=mongodb+srv://your mongo db uri
    cryptoKey=your custom generated key
    emailService=your email service (note: gmail will not work here)
    emailUser=sendersemail@outlook.com
    emailPass=senders email password
    ```

<br />

## 🚀 Build and Run For Production

Generate a full static production build in /client

```
npm run build
```
The production build is now ready to be deployed from the /server directory as root.

Before you deploy, make sure to provide all the enviroment variables from the <a href="#configure-project">Configure Project</a> section to your hosting service.

<br />
<br />

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this portfolio better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<br />

<!-- CONTACT -->
## Contact

Joseph Palma - [Linked In](https://www.linkedin.com/in/joseph-palma-3681b5133/) - joepalma08@hotmail.com

<p align="left">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Node.js]: https://img.shields.io/badge/Node.js-35495E?style=flat&logo=node.js&logoColor=#339933
[Node-url]: https://nodejs.org/

[MaterialUI]: https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white
[MaterialUI-url]: https://mui.com/

[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white
[MongoDB-url]: https://www.mongodb.com/ 