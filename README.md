<div align="center" >
  <h1>
    <img src="./src/assets/appIcon/AppIconRound.png" width="176px" height="176px" />
    <p>疯狂星期四 🎉</p>
  </h1>
</div>

[![GitHub](https://img.shields.io/github/license/shensven/Crazy-Thursday)](./LICENSE)
[![](https://img.shields.io/github/package-json/dependency-version/shensven/Crazy-Thursday/react-native)](./package.json)
[![](https://img.shields.io/github/package-json/dependency-version/shensven/Crazy-Thursday/react)](./package.json)
[![Test](https://github.com/shensven/Crazy-Thursday/actions/workflows/test.yml/badge.svg?branch=dev)](https://github.com/shensven/Crazy-Thursday/actions/workflows/test.yml)
[![Publish](https://github.com/shensven/Crazy-Thursday/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/shensven/Crazy-Thursday/actions/workflows/publish.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b2d87f19c07e48fc844c4c4ee85dd681)](https://www.codacy.com/gh/shensven/Crazy-Thursday/dashboard?utm_source=github.com&utm_medium=referral&utm_content=shensven/Crazy-Thursday&utm_campaign=Badge_Grade)

发给你的好友，让 TA 请你吃炸鸡！

|                         首页                         |                          详情                          |                        设置                         |
| :--------------------------------------------------: | :----------------------------------------------------: | :-------------------------------------------------: |
| ![Screenshot 1](src/assets/screenshots/ios-home.png) | ![Screenshot 2](src/assets/screenshots/ios-detail.png) | ![Screenshot 2](src/assets/screenshots/ios-cog.png) |

## 📦 分发方式

### iOS 版本

- iOS 正式版尚未发布，不过你可以通过 [TestFlight](https://testflight.apple.com/join/qomPElR8) 进行先行体验

### Android 版本

- <a href="https://play.google.com/store/apps/details?id=com.shensven.crazythursday"><img align='center' src="https://play.google.com/intl/en_us/badges/static/images/badges/zh-cn_badge_web_generic.png" width="160px"/></a>
- 通过 [GitHub Release](https://github.com/shensven/Crazy-Thursday/releases) 下载 apk 安装包

## 🔨 编译

### 简介

- 使用 [React Native](https://reactnative.dev) 编写
- 使用 [WhiteSource Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate) 保持依赖在同一个大版本下始终最新
- 使用 [Github Workflow](https://github.com/shensven/Readhub-RN/actions) 进行测试、持续集成和持续交付
- 项目启用了 [Hermes](https://hermesengine.dev)，因此推荐使用 [Flipper](https://fbflipper.com) 进行调试

### 先决条件

- [Node 14](https://nodejs.org) 或更高版本
- [yarn](https://yarnpkg.com/getting-started/install) 包管理器
- [Watchman](https://formulae.brew.sh/formula/watchman)
- [Xcode 10](https://developer.apple.com/xcode/resources)或更高版本
- [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
- [JDK 11](https://formulae.brew.sh/formula/openjdk@11) 或更高版本
- Android SDK
  - Build-Tools `31.0.0`
  - NDK `21.4.7075529`

### 起步

```sh
yarn install
cd ios && pod install
```

### 模拟器调试

```sh
yarn ios
```

```sh
yarn android
```

### 真机调试

```sh
npm install -g ios-deploy
```

```sh
yarn ios --device
```

```sh
yarn android
```

### 测试

```sh
yarn test
```

```sh
cd android
chmod +x gradlew
./gradlew test
```

### iOS 真机部署

```sh
yarn ios --configuration Release --device
```

### 打包 Android apk

```sh
cd android
./gradlew assembleRelease
```

### 生成开屏图

```sh
yarn react-native generate-bootsplash src/assets/splash/bootsplash.png \
  --background-color=EDE0DE \
  --logo-width=192 \
  --flavor=main
```

## ✍️ 贡献文案

前往 [issues](https://github.com/shensven/Crazy-Thursday/issues/new) 页面发布你的贡献文案，【标题】和【正文】随意

示例如下

![how-to-contribute.png](src/assets/issues/how-to-contribute.png)

## 👍 致谢

- [Nthily/KFC-Crazy-Thursday](https://github.com/Nthily/KFC-Crazy-Thursday) - 主要文案来源

## 📜 许可证合规性

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fshensven%2FCrazy-Thursday.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fshensven%2FCrazy-Thursday?ref=badge_large)
