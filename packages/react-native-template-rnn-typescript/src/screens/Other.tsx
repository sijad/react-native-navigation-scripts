import React, { useCallback } from 'react';
import { Options, Navigation } from 'react-native-navigation';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import { ScreenProps } from '../types';
import { getIcon } from '../commons';

interface OtherProps extends ScreenProps {}

export function Other({ componentId }: OtherProps) {
  const handlePopScreen = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.sectionContainer}>
        <Button title="GO BACK" onPress={handlePopScreen} />
      </View>
    </SafeAreaView>
  );
}

Other.options = (): Options => ({
  topBar: {
    title: {
      text: 'Other Screen',
    },
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});