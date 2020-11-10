
import { AppRegistry, Platform, UIManager } from 'react-native';
import App from './src/Views/App';

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('footballfanquiz', () => App);
