import { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import DButton from './DButton'
import { Color, Size } from '../Styles'

const DummyModal = ({
  visible,
  title,
  text,
  leftButtonText,
  leftButtonClick,
  rightButtonText,
  rightButtonClick,
}: {
  visible: boolean
  title: string
  text: string
  leftButtonText: string
  leftButtonClick?: () => {}
  rightButtonText: string
  rightButtonClick?: () => {}
}) => {
  const [modalVisible, setVisible] = useState(visible)

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          if (rightButtonClick) {
            rightButtonClick()
          }
          setVisible(!modalVisible)
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 32,
            paddingRight: 32,
            backgroundColor: '#000000CC',
          }}
        >
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              padding: 32,
              alignItems: 'center',
            }}
          >
            <Text style={[Color.text, Size.large]}>{title}</Text>
            <Text style={[Color.text, Size.regular, { marginTop: 32, lineHeight: 24 }]}>
              {text}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 32 }}>
              <DButton
                style={{ width: 128 }}
                onClick={() => {
                  if (leftButtonClick) {
                    leftButtonClick()
                  }
                }}
              >
                {leftButtonText}
              </DButton>
              <DButton
                style={{ marginLeft: 2, width: 128 }}
                onClick={() => {
                  if (rightButtonClick) {
                    rightButtonClick()
                  }
                  setVisible(!modalVisible)
                }}
              >
                {rightButtonText}
              </DButton>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable style={[{ backgroundColor: 'green' }]} onPress={() => setVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable> */}
    </>
  )
}

export default DummyModal
