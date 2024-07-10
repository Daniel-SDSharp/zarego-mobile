# React Native Leadership Comparison App

## Description

A React Native application to compare leadership dimensions across various countries. The app allows users to select countries from a list and view detailed leadership data for the selected countries.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.22.x)
- React Native CLI
- Android Studio and/or Xcode (for iOS development)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-native-leadership-app.git
    cd react-native-leadership-app
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

#### Android

1. Start the Android emulator or connect an Android device.

2. Run the app:

    ```bash
    npm run android
    # or
    yarn android
    ```

#### iOS

1. Install CocoaPods dependencies:

    ```bash
    cd ios
    pod install
    cd ..
    ```

2. Start the iOS simulator or connect an iOS device.

3. Run the app:

    ```bash
    npm run ios
    # or
    yarn ios
    ```

## Usage

1. On the main screen, you will see a list of countries.
2. Select the countries you want to compare by tapping on them.
3. Tap on the "See Data" button to view the leadership data.
4. On the data screen, you can see the leadership dimensions for the selected countries.
5. Use the "Back" button to return to the list of countries.