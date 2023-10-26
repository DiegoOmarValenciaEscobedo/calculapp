import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Platform.OS === 'android' ? Dimensions.get('window').height : Dimensions.get('window').height - Constants.statusBarHeight ;

export { deviceWidth, deviceHeight };
