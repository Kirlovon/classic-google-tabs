![Poster](/assets/poster.webp)

This is a simple Userscript that reworks Google Search navigation tabs by applying the following changes:

- **Removes the "AI Mode" tab:** 
> Google added an “AI Mode” for search analysis - but placed it first, pushing down the classic “All” tab and breaking the familiar layout. This script removes the AI tab and restores the old experience.

- **Restores the "Maps" tab:** 
> The EU’s DMA law pushed Google to open access to competitors. In response, Google quietly removed the “Maps” tab from search navigation, making Maps harder to reach. This script restores the tab where it belongs.

<br>

## Installation

1. Install one of the extensions for running custom scripts:

    - [Tampermonkey](https://www.tampermonkey.net/) _(recommended)_
    - [Violentmonkey](https://violentmonkey.github.io/)
    - [Greasemonkey](https://www.greasespot.net/)
    - [Userscripts](https://github.com/quoid/userscripts)

2. Enable [userscripts in your browser](https://www.tampermonkey.net/faq.php#Q209).

3. Install the script by going to [this link](https://github.com/Kirlovon/classic-google-tabs/raw/main/classic-google-tabs.user.js). _(or download `classic-google-tabs.user.js`) and install manually)_

4. Enjoy!

> [!TIP]
> You can customize script features, by setting `REMOVE_AI_TAB` and `ADD_MAPS_TAB` variables to `true` or `false` in the script header.

<br>

## License

MIT _([LICENSE](/LICENSE) file)_