/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
import { Dimensions, Keyboard, KeyboardAvoidingView, Linking, NativeModules, StyleSheet, TextInput, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';
import Clipboard from '@react-native-clipboard/clipboard';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appVersion = NativeModules.RNDeviceInfo.appVersion;

import {
  Alert,
  BackHandler,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';
import { ScanDataContext } from './App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import { useBiometricAuth } from './hooks/useBiometricAuth';

const Home = memo(({ navigation, route }: {
  navigation?: any,
  route?: any
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { scanData } = useContext(ScanDataContext);
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const canGoBack = useRef(false);
  const { hasPermission, requestPermission } = useCameraPermission()
  const { width, height } = useWindowDimensions();
  const keyboradHeight = useRef(0);
  const { isBiometryAvailable, biometryType, authenticate } = useBiometricAuth();

  useEffect(() => {
    // 当全局状态更新时，执行相关操作
    if (scanData) {
      console.log('从B接收到的参数:', scanData);
      executeNativeCallback(scanData.callbackId, 'success', {
        result: scanData.address,
      });
    }
  }, [scanData]);

  const htmlFilePath = Platform.OS === 'android'
    ? 'file:///android_asset/index.html'
    : 'Web.bundle/index.html';
  const webViewRef = useRef<WebView | null>(null);

  // 执行原生回调
  const executeNativeCallback = (callbackId: string, action: 'success' | 'fail', payload: any) => {
    const script = `
      window.NativeCallbacks.execute('${callbackId}', '${action}', ${JSON.stringify(payload)});
    `;
    webViewRef?.current?.injectJavaScript(script);
  };

  // 处理 WebView 发送的消息
  const handleMessage = async (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      const { callbackId, action, payload } = data || {};

      switch (action) {
        case 'updatePasswordToApp':
          // 更新密码到 App内存
          console.log('updatePasswordToApp', payload)
          await AsyncStorage.setItem('user-password', payload.password)
          break
        case 'openBiometricAuth':
          const password = await AsyncStorage.getItem('user-password')
          if (!password) return
          console.log('openBiometricAuth biometryType', biometryType)
          if (!isBiometryAvailable) {
            return
            executeNativeCallback(callbackId, 'fail', {
              success: false,
              message: 'Biometric authentication is not available',
            });
          }
          const isAuthenticated = await authenticate();
          executeNativeCallback(callbackId, isAuthenticated ? 'success' : 'fail', {
            success: isAuthenticated,
            password,
            message: isAuthenticated ? 'Biometric authentication successful' : 'Biometric authentication failed',
          })
          break;
        case 'openScan':
          let status;
          // 判断是ios / android
          console.log('Platform.OS', hasPermission);
          try {
            let status = false
            if (!hasPermission) {
              status = await requestPermission()
            }
            if (hasPermission || status) {
              navigation.navigate('Scan', { callbackId })
            }
            console.log('status', status);
            // if (Platform.OS === 'ios') {
            //   status = await requestPermission();
            // } else {
            //   status = await request(PERMISSIONS.ANDROID.CAMERA);
            // }
            // if (status === RESULTS.BLOCKED) {
            //   console.log('Camera permission blocked');
            //   return Alert.alert(
            //     'Permission Blocked',
            //     'You have permanently denied camera permission. Please go to settings to enable it.',
            //     [
            //       {
            //         text: 'Cancel',
            //         style: 'cancel',
            //       },
            //       {
            //         text: 'Open Settings',
            //         onPress: () => openSettings(),
            //       },
            //     ]
            //   );
            // }
            if (!hasPermission && !status) {
              return Alert.alert(
                'Permission Blocked',
                'You have permanently denied camera permission. Please go to settings to enable it.',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Open Settings',
                    onPress: () => openSettings(),
                  },
                ]
              );
            }
          } catch (error) {
            console.log('openScan', error)
          }
          break;
        case 'openBrowser':
          Linking.openURL(payload.url)
          break
        case 'openCopyText':
          console.log('openCopyText', payload.textToCopy)
          // 复制文字到粘贴板
          Clipboard.setString(payload.textToCopy)
          executeNativeCallback(callbackId, 'success', {})
          break
        case 'readPasteText':
          // 从粘贴板获取文字
          const text = await Clipboard.getString();
          console.log('readPasteText', text);
          executeNativeCallback(callbackId, 'success', {
            text,
          });
          break
        default:
          console.log('default', data);
          break;
      }
    } catch (error) {
      console.log('handleMessage', error);
    }
  };

  useEffect(() => {
    if (route.params) {
      executeNativeCallback(route.params.callbackId, 'success', {
        result: route.params.address,
      });
      // 处理返回时携带的参数
    }
  }, [route.params]);

  const [webViewHeight, setWebViewHeight] = useState(height);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        if (e.endCoordinates.height > 0) {
          keyboradHeight.current = e.endCoordinates.height
        } 
        console.log('键盘显示',height, keyboradHeight.current);
        setWebViewHeight(height - keyboradHeight.current);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        console.log('键盘隐藏', height);
        setWebViewHeight(height);
      }
    );
    const unsubscribe = NetInfo.addEventListener(state => {
      // ios 判断网络状态
      if (webViewRef.current && Platform.OS === 'ios') {
        console.log('网络状态变化', state, state.isWifiEnabled || state.isInternetReachable);
        const isConnected = state.isWifiEnabled || state.isInternetReachable
        webViewRef.current.injectJavaScript(`
          window.postMessage({
            type: 'networkStatus',
            isConnected: ${isConnected}
          });
        `);
      }
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
      unsubscribe();
    };
    
  }, []);
  useEffect(() => {
    const backAction = () => {
      // 阻止返回键操作
      if (isFocused && webViewRef && webViewRef.current) {
        if (!canGoBack.current) return false
        webViewRef.current.goBack(); // 尝试 WebView 返回
        return true; // 阻止默认返回行为
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [isFocused]);

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#FFFFFF',
    // flex: 1,
    height: webViewHeight, // webViewHeight,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };

  return <SafeAreaView style={backgroundStyle}>
    <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      barStyle={'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    {/* <KeyboardAvoidingView
      behavior={
        Platform.OS == "ios" ? "padding" : "height"
      }
      // enabled={false}
      style={{
        flex: 1
      }}
    > */}
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          key={'webView'}
          source={{
            uri: htmlFilePath,
            // uri: 'http://192.168.110.196:4300/#/account/unlock',
          }}
          onError={(error) => {
            console.log('onError', error);
          }}
          onLoadEnd={(e) => {
            // 注入 JavaScript 代码，将版本号传递给网页
            const script = `
          window.appVersion = '${appVersion}';
          console.log('App Version in WebView:', window.appVersion);
        `;
            webViewRef?.current?.injectJavaScript(script);
          }}
          renderError={(errorDomain, errorCode, errorDesc) => (
            <View>
              <Text>
                An error occurred while loading the web page: {errorDomain} {errorCode}
              </Text>
              <Text>{errorDesc || 'Unknown error'}</Text>
            </View>
          )}
          onMessage={e => handleMessage(e)}
          webviewDebuggingEnabled={true}
          javaScriptCanOpenWindowsAutomatically={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          scrollEnabled={false}
          bounces={false}
          onShouldStartLoadWithRequest={
            (event) => {
              console.log('onShouldStartLoadWithRequest', event);
              if ([
                'https://kaspa.org/crescendo-hard-fork-roadmap-10bps/',
                'https://kas.fyi/krc20-tokens',
                'https://kaspa.org/',
                'https://t.me/kaskeeper_official',
                'https://github.com/scalebit/KasKeeper_Dapp'
              ].includes(event.url)) {
                Linking.openURL(event.url)
                return false
              }
              return true;
            }
          }
          onNavigationStateChange={(navState) => {
            console.log('onNavigationStateChange', navState);
            // if (navState.url.startsWith('https:')) {
            //   return Linking.openURL(navState.url)
            // }
            canGoBack.current = navState.canGoBack; // 更新是否可以后退
          }}
          style={{ flex: 1 }}
        />
      {/* </TouchableWithoutFeedback> */}
    {/* </KeyboardAvoidingView> */}
  </SafeAreaView>;
});

export default Home;