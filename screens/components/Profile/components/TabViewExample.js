import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
    console.log("fires"),
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => {
    return (
        <View style={[styles.scene, { backgroundColor: 'green' }]} />
    )
};

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View>
            <TabView
                navigationState={{ index, routes }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        renderLabel={({ route, color }) => (
                            <Text style={{ color: 'black', margin: 8 }}>
                                {route.title}
                            </Text>
                        )}
                        style={{ backgroundColor: 'white' }}
                    />
                )}
                renderScene={renderScene}
                onIndexChange={setIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    scene: {
        flex: 1,
    },
});
