<h1 align="center">
    <a href="https://telaverge-cpu-monitering.vercel.app">
       <h2>CPU Process Monitering System</h2>
    </a>
</h1>

<p align="center">
  <i align="center">Instantly Monitor Target Machine CPU Processes and Detect Anamoly 🚀</i>
</p>

<p align="center">
    <img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/4bc14ecd-7620-4c5e-ae2d-7f374568c81f" alt="dashboard"/>
</p>
<p>
    <img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/2504727f-b1ca-45b9-bcd1-eee2586605dd" alt="dashboard"/>
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

Alternatively, instead of using the hosted version of the product, Amplication can be run locally for code generation purposes or contributions - if so, please refer to our [contributing](#contributing_anchor) section.

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
Running Amplication
</summary> <br />

> **Note**
> It is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, select `Codespaces` instead of `Local`. Click on either the `+`-sign or the `Create codespace on master`-button.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple applications and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

**BEFORE** you run the following steps make sure:
1. You have typescript installed locally on you machine ```npm install -g typescript```
2. You are using a supported node version (check `engines` `node` in the [package.json](./package.json))
3. You are using a supported npm version (check `engines` `npm` in the [package.json](./package.json))
4. You have `docker` installed and running on your machine


1. Clone the repository and install dependencies:
```shell
git clone https://github.com/amplication/amplication.git && cd amplication && npm install
```

2. Run the setup script, which takes care of installing dependencies, building packages, and setting up the workspace:
```shell
npm run setup:dev
```

3. Option 1: Running the required infrastructure - view infrastructure component logs


```shell
npm run docker:dev
```
3. Option 2: Running the required infrastructure - run the infrastructure components in background
```shell
npm run docker:dev -- -d
```

4. Apply database migrations
```shell
npm run db:migrate:deploy
```

5. To start developing, run one or more of the applications available under `serve:[application]` scripts of the package.json.

```shell
# running the server component
npm run serve:server

# running the client component
npm run serve:client

# running the data-service-generator component
npm run serve:dsg

# running the git-pull-request-service component
npm run serve:git

# running the plugin-api component
npm run serve:plugins
```

> **Note**
> In order to run the Amplication client properly, both the client and server need to be started by the `npm run serve:[application]` command, as well as an additional component for development on a specific component.

The development environment should now be set up. Additional information on the different application components can be found under packages/`[application]`/README.md file. Happy hacking! 👾
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

[//]: contributor-faces
