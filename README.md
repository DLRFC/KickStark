<p align="center">
    <h1 align="center">
        KickStark
    </h1>
    <h3>
        a crowdfunding platform to support web3 ecosystem development
    </h3>
</p>

| KickStart connects ecosystem grant providers and individual contributors to independent builders seeking development funding. Pledged funds are automatically released to builders as they deliver on their established goals. Building with KickStart exposes promising new projects to greater community support and enables trustless cooperation to drive ecosystem growth. Builders are required to define their project with detailed deliverables and connect their GitHub repository to provide progress accountability. Contributors can support multiple projects and track the progress and activity of each via a personalized dashboard. If a project fails to deliver a phase of expected improvements, remaining funds will be returned to contributors. |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Function of Cairo Contract:

1. Project set-up (project owner, token addr, token supply, token price, max number of contributors, max contribution amount, number of project stages)
2. Project is started by project owner
3. Whitelisted contributors contribute to the project fund contract
4. For every project stage, validator checks whether milestone has reached, and if yes, then transfer the proper amount to the project team’s fund contract.
5. If at any stage, project milestone is not reached, then remaining amount in the fund contract is transferred to the contributors’ fund

## Flow Diagram

![Flow_Diagram](https://user-images.githubusercontent.com/92670642/200136714-85992e54-ac8c-49e0-a46d-771a13fb578c.png)

This is a [Next.js](https://nextjs.org/) project built with React and TailwindCSS.

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/DLRFC/KickStark
```

And install the dependencies:

```bash
cd KickStark && yarn
```

## 📜 Usage

copy the `.env.example` file as `.env`
and add your environment variables.

### Start the app

Run the following command to run a local web app:

```bash
yarn dev
```
