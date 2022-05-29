<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Web Issues][web-issues-shield]][web-issues-url]
[![API Issues][api-issues-shield]][api-issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <!-- <a href="https://github.com/nsttt/localtracker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center">LocalTracker</h1>

  <p align="center">
    A media tracking app that fills all your media-tracking needs.
    <br />
    <a href="https://github.com/nsttt/localtracker/projects"><strong>Help with Development ! »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nsttt/localtracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/nsttt/localtracker/issues">Request Feature</a>
    ·
    <a href="https://github.com/Nsttt/localtracker/projects/3">Roadmap</a>
  </p>
</div>

# WE'RE CURRENTLY REWRITING THE APP TO GO. THIS README IS CURRENTLY OUTDATED WITH THE PREVIOUS VERSION.
## About The Project

<!-- [![Localtracker Screen Shot][product-screenshot]]() -->

**LocalTracker** aims to solve a personal problem. Media trackers. If you're like me, you probably own **one** or **many** accounts on famous tracker DBs for series, anime, music, books etc... Honestly, it's not the best solution, and I haven't found any service that merges all of those topics together. Therefor, **I'll do it myself.** 

The app consists of a **Lerna monorepo** containing a **Backend**, **Frontend**, and if successfull, a **mobile app** of some sort.

Some key factors:
* The project aims to be self-hosted and fully open-source.
* The project plans to use some of said DBs public APIs, though, if any of those DBs dislikes this, I'll remove them, message [me](https://twitter.com/nstlopez) if you're one of them.
* The stack on plan right now is **Apollo-Express + Type-GraphQL + TypeORM** for the backed. And **React** for our frontend. More info below.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributions

Localtracker is open to contributions, but I recommend creating an issue or replying in a comment to let me know what you are working on first that way we don't overwrite each other.

Please read CONTRIBUTING.md for details on this project.

<p align="right">(<a href="#top">back to top</a>)</p>

## Packages Overview
### Prerequisites

At the moment the whole project relies on **yarn workspaces**. So, in order for it to work you'll have to install `yarn`.
  ```sh
  npm install yarn@latest -g
  ```

  Afterwards take a look at the _root_ directory `package.json` for scripts. The project uses **Lerna**, so you should be able to launch and work from the _root_ directory.

### API

This package contain the whole backend used for the project.

Currently the backend uses the following packages.
- Apollo-express
- Type-graphql
- SQLite
- Type-ORM

For more info on scripts and related refer to the package [README.md](./packages/api/README.md).

### WEB

At the moment the whole web package is in early testing. Not sure if we will stick with our current setup, so take this as a grain of salt.

Currently the frontend uses the following packages.
- Next.JS
- Material-UI 5
- Apollo-client
- Zustand

For more info on scripts and related refer to the package [README.md](./packages/web/README.md).

<p align="right">(<a href="#top">back to top</a>)</p>

## Branches

- **staging** -> All pull requests should be made to this branch.
- **production** -> This would be the branch that has all the approved and tested changes. **Don't touch this branch.**

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

Refer to [Roadmap](https://github.com/Nsttt/localtracker/projects/3).

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

- [@nstlopez](https://twitter.com/nstlopez) on Twitter.
- By [mail](mailto:nestor@nstlopez.com).

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

Currently empty, I'll fill this when we start using 3rd party APIs and such.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/nsttt/localtracker?style=for-the-badge
[contributors-url]: https://github.com/nsttt/localtracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nsttt/localtracker?style=for-the-badge
[forks-url]: https://github.com/nsttt/localtracker/network/members
[stars-shield]: https://img.shields.io/github/stars/nsttt/localtracker?style=for-the-badge
[stars-url]: https://github.com/nsttt/localtracker/stargazers
[api-issues-shield]: https://img.shields.io/github/issues/nsttt/localtracker/api?style=for-the-badge
[api-issues-url]: https://github.com/nsttt/localtracker/issues?q=is%3Aopen+is%3Aissue+label%3Aapi
[web-issues-shield]: https://img.shields.io/github/issues/nsttt/localtracker/web?style=for-the-badge
[web-issues-url]: https://github.com/nsttt/localtracker/issues?q=is%3Aopen+is%3Aissue+label%3Aweb
[license-shield]: https://img.shields.io/github/license/nsttt/localtracker?style=for-the-badge
[license-url]: https://github.com/nsttt/localtracker/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png