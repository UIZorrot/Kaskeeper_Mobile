import { useEffect } from "react"
import { Alert, Linking, Platform } from "react-native";
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
  IAUInstallStatus,
} from 'sp-react-native-in-app-updates';

const googlePlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.kaskeeper'; // 替换为你的应用包名
const iosAppStoreUrl = 'https://apps.apple.com/app/com.bitslab.kaskeeper'; // 替换为你的应用ID

const useUpdateApp = () => {
  useEffect(() => {
    const inAppUpdates = new SpInAppUpdates(false);
    inAppUpdates.checkNeedsUpdate().then((result: NeedsUpdateResponse) => {
      if (result.shouldUpdate) {
        // 弹窗提示
        Alert.alert(
          '更新提示',
          '有新版本可用，是否跳转到商店更新？',
          [
            {
              text: '暂不更新',
              style: 'cancel'
            },
            {
              text: '确定',
              onPress: () => {
                // 跳转到应用商店
                Linking.openURL(Platform.OS === 'android' ? googlePlayStoreUrl : iosAppStoreUrl);
              },
            },
          ],
        )
        // if (Platform.OS === 'android') {
        //   // Android: 使用 Google Play Store 链接
        //   inAppUpdates.showUpdateDialog({
        //     title: 'Update available',
        //     message: 'A new version of the app is available. Do you want to update?',
        //     buttonUpgradeText: 'Update',
        //     buttonCancelText: 'Cancel',
        //     playStoreUrl: googlePlayStoreUrl,
        //   });
        // } else if (Platform.OS === 'ios') {
        //   // iOS: 使用 App Store 链接
        //   inAppUpdates.showUpdateDialog({
        //     title: 'Update available',
        //     message: 'A new version of the app is available. Do you want to update?',
        //     buttonUpgradeText: 'Update',
        //     buttonCancelText: 'Cancel',
        //     appStoreUrl: iosAppStoreUrl,
        //   });
        // }
        // let updateOptions: StartUpdateOptions = {};
        // if (Platform.OS === 'android') {
        //   // android only, on iOS the user will be promped to go to your app store page
        //   updateOptions = {
        //     updateType: IAUUpdateKind.FLEXIBLE,
        //   };
        // } else if (Platform.OS === 'ios') {
        //   // iOS: 自定义更新提示
        //   updateOptions = {
        //     title: 'Update available',
        //     message: 'A new version of the app is available. Do you want to update?',
        //     buttonUpgradeText: 'Update',
        //     buttonCancelText: 'Cancel',
        //   };
        // }
        // inAppUpdates.startUpdate(updateOptions);
      }
    }).catch(error => {
      console.error('Error Update check :', error);
    }).finally(() => {
      console.log('finally Update check completed');
    })

    // 监听更新状态（仅限 Android）
    const statusUpdateListener = (status: { bytesDownloaded: any; totalBytesToDownload: any; status: any; }) => {
      if (status.status === IAUInstallStatus.DOWNLOADED) {
        inAppUpdates.installUpdate(); // 安装更新
      }
    };
    inAppUpdates.addStatusUpdateListener(statusUpdateListener);

    // 清理监听器
    return () => {
      inAppUpdates.removeStatusUpdateListener(statusUpdateListener);
    }
  }, [])
}

export default useUpdateApp;