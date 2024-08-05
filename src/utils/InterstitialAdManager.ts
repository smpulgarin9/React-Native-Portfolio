import { InterstitialAd, AdEventType } from "react-native-google-mobile-ads";
import { TestIds } from "react-native-google-mobile-ads";

class InterstitialAdManager {
  private interstitial: InterstitialAd;
  private loaded: boolean = false;

  constructor() {
    this.interstitial = InterstitialAd.createForAdRequest(
      TestIds.INTERSTITIAL,
      {
        keywords: ["game"],
      }
    );

    this.initialize();
  }

  private initialize() {
    this.interstitial.addAdEventListener(AdEventType.LOADED, () => {
      this.loaded = true;
    });

    this.interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      this.loaded = false;
      this.load();
    });

    this.load();
  }

  private load() {
    this.interstitial.load();
  }

  public isLoaded(): boolean {
    return this.loaded;
  }

  public show() {
    if (this.isLoaded()) {
      this.interstitial.show();
    }
  }
}

export default new InterstitialAdManager();
