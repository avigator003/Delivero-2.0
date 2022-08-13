import { View, Text, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Review from './Review';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Photos from './Photos';


const renderScene = SceneMap({
    reviews: Review,
    photos: Photos,
});



const ReviewAndOrders = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);



    const [routes] = useState([
        { key: 'reviews', title: 'Reviews' },
        { key: 'photos', title: 'Photos' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={(index) => setIndex(index)}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />

    )
}

const renderTabBar = (props) => {
    return (
        <TabBar
            {...props}
            renderLabel={({ focused, route }) => {
                return (
                    <Text className='font-semibold text-sm text-black'>
                        {route.title}
                    </Text>
                );
            }}

            indicatorStyle={{
                backgroundColor: "black",
            }}
            style={{
                marginLeft: 10,
                width: 140,
                display: "flex",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
                elevation: 0,
                shadowOffset: { width: 0, height: 20 }, // change this for more shadow
                shadowOpacity: 0.4,
                shadowRadius: 6,
                borderBottomColor: "gray",

            }}
        />
    )
}
export default ReviewAndOrders