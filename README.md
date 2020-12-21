<h1 align="center">

  <p align="center">
    <a href="https://www.npmjs.com/package/react-native-local-authenticate-improved-improved"><img src="http://img.shields.io/npm/v/react-native-local-authenticate-improved-improved.svg?style=flat" /></a>
    <a href="https://github.com/jdmunro/react-native-local-authenticate-improved/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
    <a href="https://github.com/jdmunro/react-native-local-authenticate-improved#License"><img src="https://img.shields.io/npm/l/react-native-local-authenticate-improved.svg?style=flat" /></a>
  </p>

    ReactNative: Local Authenticate [FaceID/TouchID] (Android/iOS)

ℹ️ This is a fork of [prscX/react-native-local-authenticate](https://github.com/prscX/react-native-local-authenticate) with some specific tweaks and may be removed ℹ️

</h1>

## Differences from [prscX/react-native-local-authenticate](https://github.com/prscX/react-native-local-authenticate)

- More idiomatic naming convention
- Fixed resolve types (resolves with boolean instead of integers)
- TypeScript types

These improvements may be contributed to the original project at some point, and this fork can then be removed.

## 📖 Getting started

`$ npm install react-native-local-authenticate-improved --save`

## **RN60 >= RNLA V1 >**

> RN60 above please use `react-native-local-authenticate-improved` V1 and above

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

    - Add the following to your `Podfile` -> `ios/Podfile` and run pod update:

```
  use_native_modules!

  pod 'RNLocalAuthenticate', :path => '../node_modules/react-native-local-authenticate-improved/ios'
```

- **Android**

Please add below permission to your app `AndroidManifest`

```
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.USE_BIOMETRIC"/>
```

## **RN60 < RNLA V1 <**

> RN60 below please use `react-native-local-authenticate-improved` V.0.\*

`$ react-native link react-native-local-authenticate-improved`

- **Android**

  - Please add below script in your `build.gradle`

```
buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
        ...
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven { url "https://maven.google.com" }
        ...
    }
}
```

> **Note**
>
> - Android SDK 27 > is supported

## 💬 Usage

```
import LocalAuthenticate from 'react-native-local-authenticate-improved'

LocalAuthenticate.hasHardware().then((hasHardware) => {
})

LocalAuthenticate.isEnrolled().then((isEnrolled) => {
})

LocalAuthenticate.supportedAuthenticationTypes().then((isEnrolled) => {
})

LocalAuthenticate.authenticate('reason').then((isEnrolled) => {
})

```

## 💡 Props

- **General(iOS & Android)**

| Prop                  | Type   | Default | Note                                           |
| --------------------- | ------ | ------- | ---------------------------------------------- |
| `hasHardware:Promise` | `bool` |         | Used to check for hardware capability          |
| `isEnrolled:Promise`  | `bool` |         | Used to check enrolled for FaceID/TouchID      |
| `authenticate`        | `bool` |         | Used to authenticate user using FaceId/TouchID |

- **Android**

| Prop                 | Type | Default | Note                                  |
| -------------------- | ---- | ------- | ------------------------------------- |
| `cancelAuthenticate` | ``   | true    | Used to cancel ongoing authentication |

- **iOS**

| Prop                           | Type    | Default | Note                                         |
| ------------------------------ | ------- | ------- | -------------------------------------------- |
| `supportedAuthenticationTypes` | `array` |         | Used to check supported authentication types |

## ✨ Credits

- [Expo: Local Authentication](https://docs.expo.io/versions/latest/sdk/local-authentication/)

## 🤔 How to contribute

Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/jdmunro/react-native-local-authenticate-improved/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 📜 License

This library is provided under the Apache 2 License.

RNAppTour @ [prscX](https://github.com/prscX)
