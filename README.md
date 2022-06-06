# Fusion Browser Extension

## How To Use

- You'll need Fusion version `2.8.0-browserExtension` to use it
### Go to Chrome Web Store 

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/heojonaoafggmjonoicpcknmamoepjha?color=06233f)](https://chrome.google.com/webstore/detail/arc-fusion/heojonaoafggmjonoicpcknmamoepjha)

### Load unpacked

1. In your Terminal, run `cd && git clone https://github.com/wapopartners/Fusion-Browser-Extension`
2. `cd Fusion-Browser-Extension && npm i && npm run build`
3. Go to your Chrome or Chromium-based browser (e.g., Brave) extension panel. Click the `Manage Extensions` button.
   ![Click manage extensions](./docs/click-extension-button.png)
4. Ensure you have toggled on 'Developer mode'
   ![Turn on developer mode in extensions page](./docs/toggle-on-dev-mode.png)
5. Press button 'Load unpacked' button
   ![Pick load unpacked](./docs/click-load-unpacked-button.png)
6. Choose 'build' folder in the Fusion-Browser-Extension folder. (If you do not see the build folder here, please run `cd && cd Fusion-Browser-Extension && npm i && npm run build`. The build command creates the build folder.)
   ![Pick created build folder](./docs/select-build-folder.png)
7. Now that the extension is loaded, you should see the icon in your extensions. 
  ![See extension](./docs/see-extension-loaded.png) NOTE: If you're a developer whose working on the extension, you can make a change then re-run `npm run build`. And, if you click the refresh button (circled in pink), you will see that change manifested.
8. To use the extension's user interface, the extension needs to be pinned to your top-menu. 
  ![Pin extension](./docs/pin-extension-to-see-in-menu.png) ![Pinned extension](./docs/see-extension-menu.png)
9. Go to a page with fusion 2.8 with message posting. Click the extension to see content shared from fusion engine, including distribution tag and engine version, that was not previously accessible on the window.Fusion object. You can also see window.Fusion data like global content.
  ![Show fusion data](./docs/Show-fusion-data.png)
