import {Plugin, Cordova} from './plugin';

export interface LaunchNavigatorOptions {

  /**
   * name of the navigation app to use for directions. Specify using launchnavigator.APP constants. If not specified, defaults to User Selection.
   */
  app?: string;

  /**
   * nickname to display in app for destination. e.g. "Bob's House".
   */
  destinationName?: string;

  /**
   * Start point of the navigation
   */
  start?: string|number[];

  /**
   * nickname to display in app for start . e.g. "My House".
   */
  startName?: string;

  /**
   * Transportation mode for navigation: "driving", "walking" or "transit". Defaults to "driving" if not specified.
   */
  transportMode?: string;

  /**
   * If true, debug log output will be generated by the plugin. Defaults to false.
   */
  enableDebug?: boolean;

  /**
   * a key/value map of extra app-specific parameters. For example, to tell Google Maps on Android to display Satellite view in "maps" launch mode: `{"t": "k"}`
   */
  extras?: any;

  /**
   * (Android only) mode in which to open Google Maps app: "maps" or "turn-by-turn". Defaults to "maps" if not specified. Specify using launchnavigator.LAUNCH_MODE constants.
   */
  launchMode?: string;

  /**
   * text to display in the native picker which enables user to select which navigation app to launch. Defaults to "Select app for navigation" if not specified.
   */
  appSelectionDialogHeader?: string;

  /**
   * text to display for the cancel button in the native picker which enables user to select which navigation app to launch. Defaults to "Cancel" if not specified.
   */
  appSelectionCancelButton?: string;

  successCallback?: Function;

  errorCallback?: Function;
}

/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```js
 * import {LaunchNavigator, LaunchNavigatorOptions} from 'ionic-native';
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * LaunchNavigator.navigate("Toronto, ON", options)
 *   .then(
 *     success => console.log("Launched navigator"),
 *     error => console.log("Error launching navigator", error)
 *   );
 * ```
 */
@Plugin({
  plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
  pluginRef: 'launchnavigator',
  repo: 'https://github.com/dpa99c/phonegap-launch-navigator.git'
})
export class LaunchNavigator {

  /**
   * Launches navigator app
   * @param destination {string|number[]} Location name or coordinates (as string or array)
   * @param options {LaunchNavigatorOptions}
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static navigate(
    destination: string|number[],
    options?: LaunchNavigatorOptions
  ): Promise<any> { return; }

  /**
   * Determines if the given app is installed and available on the current device.
   * @param app {string}
   */
  @Cordova()
  static isAppAvailable(app: string): Promise<any> {return; }

  /**
   * Returns a list indicating which apps are installed and available on the current device.
   */
  @Cordova()
  static availableApps(): Promise<string[]> {return; }

  /**
   * Returns the display name of the specified app.
   * @param app {string}
   */
  @Cordova({sync: true})
  static getAppDisplayName(app: string): string {return; }

  /**
   * Returns list of supported apps on a given platform.
   * @param platform {string}
   */
  @Cordova({sync: true})
  static getAppsForPlatform(platform: string): string[] {return; }

  /**
   * Indicates if an app on a given platform supports specification of transport mode.
   * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
   * @param platform {string}
   */
  @Cordova({sync: true})
  static supportsTransportMode(app: string, platform: string): boolean {return; }

  /**
   * Returns the list of transport modes supported by an app on a given platform.
   * @param app {string}
   * @param platform {string}
   */
  @Cordova({sync: true})
  static getTransportModes(app: string, platform: string): string[] {return; }

  /**
   * Indicates if an app on a given platform supports specification of launch mode.
   * Note that currently only Google Maps on Android does.
   * @param app {string}
   * @param platform {string}
   */
  @Cordova({sync: true})
  static supportsLaunchMode(app: string, platform: string): boolean {return; }

  /**
   * Indicates if an app on a given platform supports specification of start location.
   * @param app {string}
   * @param platform {string}
   */
  @Cordova({sync: true})
  static supportsStart(app: string, platform: string): boolean {return; }

  @Cordova({sync: true})
  static supportsStartName(app: string, platform: string): boolean {return; }

  @Cordova({sync: true})
  static supportsDestName(app: string, platform: string): boolean {return; }

  @Cordova({sync: true})
  static userSelect(destination: string|number[], options: LaunchNavigatorOptions): void { }

  static APP: any = {
    USER_SELECT: 'user_select',
    APPLE_MAPS: 'apple_maps',
    GOOGLE_MAPS: 'google_maps',
    WAZE: 'waze',
    CITYMAPPER: 'citymapper',
    NAVIGON: 'navigon',
    TRANSIT_APP: 'transit_app',
    YANDEX: 'yandex',
    UBER: 'uber',
    TOMTOM: 'tomtom',
    BING_MAPS: 'bing_maps',
    SYGIC: 'sygic',
    HERE_MAPS: 'here_maps',
    MOOVIT: 'moovit'
  };

  static TRANSPORT_MODE: any = {
    DRIVING: 'driving',
    WALKING: 'walking',
    BICYCLING: 'bicycling',
    TRANSIT: 'transit'
  };
}
