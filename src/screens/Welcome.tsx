import React, {useRef, useState} from 'react';
import {Dimensions, Image, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Text, useTheme} from 'react-native-paper';
import PagerView from 'react-native-pager-view';
import color from 'color';
import useWelcome from '../utils/useWelcome';

const Welcome: React.FC = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const insets = useSafeAreaInsets();

  const {colors} = useTheme();

  const navigation = useNavigation();

  const {trueWelcome} = useWelcome();

  const pageRef = useRef<PagerView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === 0) {
      pageRef.current?.setPage(1);
    } else {
      navigation.goBack();
      trueWelcome();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <PagerView
        ref={pageRef}
        initialPage={0}
        style={{height: screenHeight}}
        onPageSelected={evt => setCurrentIndex(evt.nativeEvent.position)}>
        <View style={{paddingHorizontal: 16, paddingTop: screenHeight / 8}}>
          <Text style={{color: colors.onBackground, fontSize: 32, fontWeight: 'bold'}}>疯狂星期四 🎉</Text>
          <Text
            style={{
              color: color(colors.onBackground).alpha(0.9).toString(),
              fontSize: 15,
              lineHeight: 15 * 1.7,
              marginTop: 20,
              marginHorizontal: 2,
              textAlign: Platform.OS === 'ios' ? 'justify' : 'left',
            }}>
            是一个由社区驱动的 App，所有的文案集托管在 GitHub 平台，唯一的网络请求活动仅用于获取最新文案集。
          </Text>
        </View>
        <View style={{paddingHorizontal: 16, paddingTop: screenHeight / 8}}>
          <Text style={{color: colors.onBackground, fontSize: 32, fontWeight: 'bold'}}>所有文案已就绪！</Text>
          <Text
            style={{
              color: color(colors.onBackground).alpha(0.9).toString(),
              fontSize: 15,
              lineHeight: 15 * 1.7,
              marginHorizontal: 2,
              marginTop: 20,
              textAlign: Platform.OS === 'ios' ? 'justify' : 'left',
            }}>
            你可以随时前往【设置】页面
          </Text>
          <Text
            style={{
              color: color(colors.onBackground).alpha(0.9).toString(),
              fontSize: 15,
              lineHeight: 15 * 1.7,
              marginHorizontal: 2,
              textAlign: Platform.OS === 'ios' ? 'justify' : 'left',
            }}>
            轻点【更新文案数据库】以手动获取最新文案集
          </Text>
          {Platform.OS === 'ios' && (
            <Image
              source={require('./assets/guide/guide-ios.png')}
              style={{width: screenWidth - 32, height: (screenWidth - 32) * 0.75, marginTop: 8}}
            />
          )}
          {Platform.OS === 'android' && (
            <Image
              source={require('./assets/guide/guide-android.png')}
              style={{width: screenWidth - 32, height: (screenWidth - 32) * 0.75, marginTop: 8}}
            />
          )}
          <Text
            style={{
              color: color(colors.onBackground).alpha(0.9).toString(),
              fontSize: 12,
              lineHeight: 12 * 1.7,
              marginHorizontal: 2,
              marginTop: 16,
              textAlign: Platform.OS === 'ios' ? 'justify' : 'left',
            }}>
            *更新文案集，需下载大约 1 MB 的数据
          </Text>
        </View>
      </PagerView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          marginHorizontal: 16,
          marginTop: 16,
          marginBottom: screenHeight / 16 + insets.bottom,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              width: 16,
              height: 4,
              backgroundColor: currentIndex === 0 ? colors.primary : color(colors.onBackground).alpha(0.12).toString(),
              borderRadius: 2,
              marginHorizontal: 4,
            }}
          />
          <View
            style={{
              width: 16,
              height: 4,
              backgroundColor: currentIndex === 1 ? colors.primary : color(colors.onBackground).alpha(0.12).toString(),
              borderRadius: 2,
              marginHorizontal: 4,
            }}
          />
        </View>
        <Button
          mode="contained"
          labelStyle={{fontSize: 15, fontWeight: 'bold', lineHeight: 32}}
          style={{marginTop: 16}}
          onPress={() => next()}>
          {currentIndex === 0 ? '下一步' : '好'}
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
