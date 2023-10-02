<div id="top"></div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">

<h3 align="center">Monkeytype clone backend integrating a CI/CD pipeline</h3>

  <p align="center">
    This repository consists of the backend for my try at making a clone of Monkeytype, the open source speed typing website. It integrates a CI/CD pipeline towards an App Service hosted on Azure.
    <br />
  </p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#deployment-architecture">Deployment Architecture</a></li>
    <li><a href="#pipeline">Pipeline</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About the project

This project is a simple API that is using a Backend as a Service (BaaS) platform so it isn't very code heavy, the challenging aspect was getting familliar with Parse Server and deploying an API to Azure while integrating a CI/CD pipeline to automate the process for future contributions.

### Built With

- [Express.js](https://expressjs.com/)
- [Parse Platform](https://parseplatform.org/)
- [Azure](https://azure.microsoft.com/en-us)
- [Github Actions](https://github.com/features/actions)

## Deployment Architecture

As my Azure student credits aren't infinite, and this is my first real tangible project hosted on Azure, I used a single node architecture. My app is hosted in a App Service instance, and it communicates with a Mongodb Atlas instance.

![My Azure architecture][assets/Monkeytype%20backend.drawio.png]

This deployment job was very instructive for me especially when it comes to networking and working with virtual networks and having to provide a static outbound IP Address for the app to be able to allow communication to pass through from that address to the Database. I hope to find a way to automate this whole process soon.

## Pipeline

- **Deployment**:
  Github Actions is used for listening to push events to the main branch, where we run build job that packages the application and sends it to Azure for deployment. Check out the workflow files in this repository.

- **Integration**:
  I am using the gitflow branches strategy and so I hope to write tests and automate their execution when cloud code options are introduced to the code base. For now the workflow file is in place but no tests are needed at the moment.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/HediKhemiri3001/monkeytype-clone-backend.svg?style=for-the-badge
[forks-url]: https://github.com/HediKhemiri3001/monkeytype-clone-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/HediKhemiri3001/monkeytype-clone-backend.svg?style=for-the-badge
[stars-url]: https://github.com/HediKhemiri3001/monkeytype-clone-backend/stargazers
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mohamed-hedi-khemiri/
