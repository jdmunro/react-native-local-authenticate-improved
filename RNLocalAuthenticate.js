import { NativeModules } from "react-native";

let { RNLocalAuthenticate } = NativeModules;

export default {
  hasHardware() {
    return new Promise(function (resolve) {
        RNLocalAuthenticate.HasHardware((hasHardware) => {
            resolve(hasHardware === 1 ? true : false)
        })
    });
  },
  isEnrolled() {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.IsEnrolled((isEnrolled) => {
        resolve(isEnrolled === 1 ? true : false)
      })
    });
  },
  supportedAuthenticationTypes() {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.SupportedAuthenticationTypes((supportedAuthenticationTypes) => {
        resolve(supportedAuthenticationTypes)
      })
    });
  },
  authenticate(reason) {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.Authenticate(reason, (authenticate) => {
        resolve(authenticate === 1 ? true : false)
      })
    });
  },
  cancelAuthenticate() {
    return new Promise(function (resolve, reject) {
      if (!RNLocalAuthenticate.CancelAuthenticate) {
        reject()
        return
      }

      RNLocalAuthenticate.CancelAuthenticate(() => {
        resolve()
      })
    });
  }
}
