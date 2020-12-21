import { NativeModules } from "react-native";

let { RNLocalAuthenticate } = NativeModules;

class LocalAuthenticate {
  static HasHardware() {
    return new Promise(function (resolve) {
        RNLocalAuthenticate.HasHardware((hasHardware) => {
            resolve(hasHardware === 1 ? true : false)
        })
    });
  }

  static IsEnrolled() {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.IsEnrolled((isEnrolled) => {
        resolve(isEnrolled === 1 ? true : false)
      })
    });
  }

  static SupportedAuthenticationTypes() {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.SupportedAuthenticationTypes((supportedAuthenticationTypes) => {
        resolve(supportedAuthenticationTypes)
      })
    });
  }
  
  static Authenticate(reason) {
    return new Promise(function (resolve) {
      RNLocalAuthenticate.Authenticate(reason, (authenticate) => {
        resolve(authenticate === 1 ? true : false)
      })
    });
  }

  static CancelAuthenticate() {
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

export default LocalAuthenticate
