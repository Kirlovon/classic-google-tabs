![Poster](/assets/poster.webp)

This is a simple Userscript that reworks Google Search navigation tabs by applying the following changes:

- **Removes the "AI Mode" tab!** 
> Google added an “AI Mode” for search analysis - but placed it first, pushing down the classic “All” tab and breaking the familiar layout. This script removes the AI tab and restores the old experience.

- **Restores the "Maps" tab!** 
> The EU’s DMA law pushed Google to open access to competitors. In response, Google quietly removed the “Maps” tab from search navigation, making Maps harder to reach. This script restores the tab where it belongs.

- **Removes the "Short videos" tab!** _(Optionally)_ 
> Google added an "Short videos" tab with short media content. While you might find it useful, this script can remove the tab if desired (see [Instalation](#Installation)).

<br>

## Installation

1. Install one of the extensions for running custom scripts:

    - [Tampermonkey](https://www.tampermonkey.net/) _(recommended)_
    - [Violentmonkey](https://violentmonkey.github.io/)
    - [Greasemonkey](https://www.greasespot.net/)
    - [Userscripts](https://github.com/quoid/userscripts)

2. Enable [userscripts in your browser](https://www.tampermonkey.net/faq.php#Q209).

3. Install the script by clicking [this link](https://github.com/Kirlovon/classic-google-tabs/raw/main/classic-google-tabs.user.js). _(or download `classic-google-tabs.user.js`) and install manually)_

> [!TIP]
> You can customize script features by setting `REMOVE_AI_TAB`, `ADD_MAPS_TAB`, and `REMOVE_SHORT_VIDEOS_TAB` variables to `true` or `false` at the beginning of the script.

4. Enjoy!

<br>

## License

MIT _([LICENSE](/LICENSE) file)_