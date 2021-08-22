import React, {useState} from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';
import AppLoading from 'expo-app-loading';
//import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const { persistor, store } = ConfigureStore();

const getFonts = () => Font.loadAsync({
        'Fink-Heavy' : require('./assets/fonts/FinkHeavy.ttf'),
        'Varela-Round' : require('./assets/fonts/VarelaRound-Regular.ttf')
    });


export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded){
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Loading />}
                    persistor={persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }else {
        return (
            <AppLoading 
            startAsync={getFonts}
            onError={console.warn}
            onFinish={()=> setFontsLoaded(true)}
        />
        );
        
    }

    
}


