import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, useColorScheme, Image, BackHandler, Alert, Linking } from 'react-native';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import { ScanDataContext } from './App';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const frameImage = require('./assets/images/frame.png');

const styles = {
  camera: {
    flex: 1,
  },
  frameContainer: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -80,
    marginTop: -100,
    // backgroundColor: 'white',
  },
  frameImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -80,
    marginTop: -100,
    width: 160,
    height: 160,
    shadowColor: 'rgb(0,0,0)', // 设置阴影颜色
    shadowOffset: {
      width: 200,
      height: 200,
    },
    // shadowOpacity: 0.2, // 设置阴影透明度
    shadowRadius: 10000, // 设置阴影半径
    elevation: 100, // 增强 Android 上的阴影效果
  },
};
function QRScanner({
  navigation,
  route
}: {
  navigation: any,
  route: any
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const { setScanData } = useContext(ScanDataContext);
  const [codeResult, setCodeResult] = useState<any>('');
  const [isDisplay, setIsDisplay] = useState(false);
  const insets = useSafeAreaInsets();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    // paddingTop: insets.top || 10,
  };

  useFocusEffect(() => {
    // 添加导航头返回按钮监听
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // 阻止默认行为（如果需要）
      // e.preventDefault();
      console.log('导航头返回按钮被点击');
      setIsDisplay(false)
    });
    return () => {
      // 在组件卸载时移除监听
      unsubscribe();
    };
  })

  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr'], // 指定扫描的二维码类型
    onCodeScanned: (codes) => {
      if (codeResult) return
      if (codes.length > 0) {
        setCodeResult(codes[0].value)
        setIsDisplay(false)
        // 返回到上一个屏幕
        setScanData({
          address: codes[0].value,
          callbackId: route.params.callbackId
        })
        navigation.goBack()
      }
    },
  });
  
  useEffect(() => {
    const backAction = () => {
      console.log('BackHandler', 'hardwareBackPress');
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (device == null) return <Text>No camera device found</Text>;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Camera
        style={{
          // StyleSheet.absoluteFill
          // flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: isDisplay ? 'flex' : 'none'
        }}
        resizeMode='cover'
        device={device}
        isActive={true}
        codeScanner={codeScanner}
        onInitialized={() => {
          console.log('Camera is ready!');
        }}
        onStarted={() => {
          console.log('Camera is onStarted!');
        }}
        onPreviewStarted={
          () => {
            console.log('Camera is onPreviewStarted!');
            setIsDisplay(true)
          }
        }
      >
      </Camera>
      <Image source={frameImage} style={styles.frameImage} />
    </SafeAreaView>
  );
}

export default QRScanner;