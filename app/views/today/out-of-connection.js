import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { iOSColors } from 'react-native-typography';
import Ionicons from 'react-native-vector-icons/Ionicons';

import I18n from '../../utils/i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    color: iOSColors.black,
    backgroundColor: 'transparent',
    lineHeight: 50,
  },
});

const OutOfConnection = () => (
  <View style={styles.container}>
    <Ionicons name="ios-construct-outline" size={30} color={iOSColors.black} />
    <Text style={styles.text}>{I18n.t('app.today.out_of_connection')}</Text>
  </View>
);

export default OutOfConnection;
