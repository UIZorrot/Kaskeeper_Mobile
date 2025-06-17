import { useEffect, useState } from 'react';
import Biometrics, { BiometryType } from 'react-native-biometrics';

type UseBiometricAuthResult = {
  isBiometryAvailable: boolean | null;
  biometryType: BiometryType | null;
  authenticate: () => Promise<boolean>;
};

export function useBiometricAuth(): UseBiometricAuthResult {
  const [isBiometryAvailable, setIsBiometryAvailable] = useState<boolean | null>(null);
  const [biometryType, setBiometryType] = useState<BiometryType | null>(null);
  const rnBiometrics = new Biometrics();

  const authenticate = async () => {

    try {
      if (isBiometryAvailable) {
        const result = await rnBiometrics.simplePrompt({
          promptMessage: '请进行指纹或面容验证',
          cancelButtonText: '取消',
        });
        return result.success
      } else {
        return false
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    async function init() {
      const { available, biometryType = null } = await rnBiometrics.isSensorAvailable();
      setIsBiometryAvailable(available);
      setBiometryType(biometryType);
      console.log('Biometry type:', {
        available, biometryType
      });
    }
    init()
  }, []);

  return {
    isBiometryAvailable,
    biometryType,
    authenticate,
  };
}