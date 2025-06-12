import { useEffect } from "react"
import { Platform } from "react-native";
import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
  IAUInstallStatus,
} from 'sp-react-native-in-app-updates';

const useUpdateApp = () => {
  useEffect(() => {
    const inAppUpdates = new SpInAppUpdates(false);
    inAppUpdates.checkNeedsUpdate().then((result: NeedsUpdateResponse) => {
      if (result.shouldUpdate) {
        let updateOptions: StartUpdateOptions = {};
        if (Platform.OS === 'android') {
          // android only, on iOS the user will be promped to go to your app store page
          updateOptions = {
            updateType: IAUUpdateKind.FLEXIBLE,
          };
        } else if (Platform.OS === 'ios') {
          // iOS: 自定义更新提示
          updateOptions = {
            title: 'Update available',
            message: 'A new version of the app is available. Do you want to update?',
            buttonUpgradeText: 'Update',
            buttonCancelText: 'Cancel',
          };
        }
        inAppUpdates.startUpdate(updateOptions);
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