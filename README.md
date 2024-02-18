<h1 align="center">
    <a href="https://telaverge-cpu-monitering.vercel.app">
       <h2>CPU Process Monitering System</h2>
    </a>
</h1>

<p align="center">
  <i align="center">Instantly Monitor Target Machine CPU Processes and Detect Anamoly 🚀</i>
</p>

<p>
    <img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/a8df2779-413b-4310-b900-3b55cd6ff61f" alt="dashboard"/>
</p>
<p align="center">
    <img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/27806ada-51a5-450d-8337-4de244950d4b" alt="dashboard"/>
</p>

## Introduction

Welcome to `CPMS`, your go-to solution for monitoring CPU processes and detecting anomalies in real-time. With CPMS, you can effortlessly monitor your target machine's CPU processes and ensure optimal performance. This README will guide you through the features, installation, and usage of CPMS.

<details open>
<summary>
 Features
</summary> <br 
             
*   **Real-time Monitoring:** CPMS provides real-time monitoring of CPU processes, allowing you to stay updated on system performance.
*   **Anomaly Detection:** Detect anomalies in CPU processes promptly and take necessary actions to maintain system stability.
*   **Dashboard Interface:** Access all functionalities through a user-friendly dashboard interface for seamless navigation and control.
    
</details>

## Usage 

### Once you've accessed the CPMS dashboard, you can perform the following actions:

*   **View CPU Processes:** Monitor CPU processes in real-time and observe their performance.   
*   **Detect Anomalies:** CPMS automatically detects anomalies in CPU processes and highlights them for your attention.   
*   **Manage Processes:** You can manage CPU processes directly from the dashboard, including starting, stopping, and prioritizing processes.

## Development

Alternatively, instead of using the hosted version of the product, CPMS can be run locally for monitoring purposes or contributions - if so, please refer to our how to run section.

### Tech Stack

###
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<details open>
<summary>
Running CPMS
</summary> <br />

> **Note**
> It is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, copy the `https` repo link.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple applications and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

**BEFORE** you run the following steps make sure:
1. You have typescript installed locally on you machine ```npm install -g typescript```
2. You are using a supported node version (check `engines` `node` in the [package.json](./package.json))
3. You are using a supported npm version (check `engines` `npm` in the [package.json](./package.json))
4. You have `python & pip` installed and running on your machine


### Frontend

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/Pranshu321/Monitoring-System.git && cd Monitoring-System/Frontend && npm install
```

2. Run the command to install dependencies and setting up the workspace
```bash
npm install
```

3. Hurray!! , Now just run the frontend
```bash
npm run dev
```

### Server

```bash
cd Server
```

2. Install the dependencies for server
```bash
pip install fastapi
pip install uvicorn
```

3. Run the server
```bash
uvicorn main:app --reload
```

</details>

## Resources

- **[Website](https://amplication.com)** overview of the product.
- **[Docs](https://docs.amplication.com)** for comprehensive documentation.
- **[Blog](https://amplication.com/blog)** for guides and technical comparisons.
- **[Roadmap](https://amplication.com/#roadmap)** to see what features will be added in the future.
- **[Discord](https://amplication.com/discord)** for support and discussions with the community and the team.
- **[GitHub](https://github.com/amplication/amplication)** for source code, project board, issues, and pull requests.
- **[Twitter](https://twitter.com/amplication)** for the latest updates on the product and published blogs.
- **[YouTube](https://www.youtube.com/c/Amplicationcom)** for guides and technical talks.

<a name="contributing_anchor"></a>
## Contributing

CPMS is an open-source project, and contributions are welcome! If you'd like to contribute, please follow these guidelines:

*   **Bug Reports:** If you encounter any bugs or issues, please submit a detailed bug report [here](https://github.com/Pranshu321/Monitoring-System/issues).
*   **Feature Requests:** Have an idea for a new feature or enhancement? Submit your feature request [here](https://github.com/Pranshu321/Monitoring-System/issues). 
*   **Pull Requests:** We welcome pull requests for bug fixes, enhancements, and new features. Please ensure that your code follows the project's coding standards and include relevant tests.


## Contributors

<!---
npx contributor-faces --exclude "*bot*" --limit 70 --repo "https://github.com/amplication/amplication"

change the height and width for each of the contributors from 80 to 50.
--->

[//]: contributor-faces
<a href="https://github.com/Pranshu321/Monitoring-System/graphs/contributors">
<img src="https://contrib.rocks/image?repo=Pranshu321/Monitoring-System" />


</a>
<a href="https://github.com/netosis"><img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/0f9395ed-c309-4128-9ea3-ea51998b31af" alt="photo" width="70px"/></a>

[//]: contributor-faces
