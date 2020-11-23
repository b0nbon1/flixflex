import AsyncStorage from '@react-native-async-storage/async-storage';

type Key = '@user_Type' | '@theme_Type';

export const storeData = async (key: Key, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key: Key): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    return null;
  }
};
