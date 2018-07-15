import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { iOSColors } from 'react-native-typography';
import Tts from 'react-native-tts';

import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

Tts.setDefaultRate(0.4);
Tts.setDefaultLanguage('ja');
Tts.setDucking(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bodyLeft: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bodyRight: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
  },
});

export default class VocabItem extends Component {
  static propTypes = {
    lessonNo: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
  }

  componentWillUnmount() {
    Tts.stop();
  }

  render() {
    const { item, index, lessonNo } = this.props;

    const kanji = item.split(';')[0];
    const japanese = item.split(';')[1];
    const sound = item.split(';')[2];
    // const en = item.split(';')[3];

    return (
      <TouchableOpacity
        onPress={() => {
          // Tts.stop();
          Tts.speak(japanese.replace('～', ''));
          tracker.logEvent('user-action-press-speak', { item });
        }}
      >
        <View style={[styles.container, { backgroundColor: index % 2 ? iOSColors.customGray : 'white' }]}>
          <View style={styles.bodyLeft}>
            <Text style={styles.text}>{japanese}</Text>
            <Text style={[styles.text, { paddingTop: 12 }]}>{kanji !== japanese ? kanji : ''}</Text>
          </View>
          <View style={styles.bodyRight}>
            <Text style={styles.text}>{I18n.t(`minna.${sound}`)}</Text>
            <Text style={[styles.text, { paddingTop: 12, color: iOSColors.gray }]}>{index + 1}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
