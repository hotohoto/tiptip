import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Colors } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <ScrollView centerContent>
            <View style={styles.section} >
              <Text style={styles.sectionText}>
                {'When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true. The default value is true.'}
              </Text>
              <Text style={styles.sectionText}>
                {'When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true. The default value is true.'}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name='send' size={30} color='white' />
          <Icon name='heart' size={30} color={Colors.impress} />
        </View>
      </View>
    )
  }
}
