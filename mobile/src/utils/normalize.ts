import { Dimensions, PixelRatio, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

let scale;

function font(size: number): string {
  if (screenHeight < screenWidth) {
    scale = screenWidth / 812;
  } else {
    scale = screenWidth / 375;
  }
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)).toString();
  }
  return (Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1).toString();
}

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: string | number): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: string | number): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 375, 812 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
const wp = (dimension: number): string => {
  return widthPercentageToDP(`${(dimension / 375) * 100}%`).toString();
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 375, 812 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
const hp = (dimension: number): string => {
  return heightPercentageToDP(`${(dimension / 812) * 100}%`).toString();
};

export { font, hp, wp, widthPercentageToDP, heightPercentageToDP };
