import { useState } from 'react'
import DButton from '../../Components/DButton'
import DPage from '../../Components/DPage'
import DTextField from '../../Components/DTextField'
import { Text } from 'react-native'

export default () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [valid, setValid] = useState<boolean>()
  const submit = () => {
    let valid = false
    try {
      const i = parseInt(age)
      if (i >= 18) {
        valid = true
      }
    } catch (e) {}
    setValid(valid)
  }
  return (
    <DPage>
      <DTextField
        placeholder={'Name'}
        value={name}
        onChange={name => {
          setName(name)
        }}
      />
      <DTextField
        placeholder={'Age'}
        value={age}
        onChange={age => {
          setAge(age)
        }}
        style={{ marginTop: 16 }}
      />
      <DButton style={{ marginTop: 16 }} onClick={submit}>
        Submit
      </DButton>
      {valid && (
        <Text style={{ color: 'green' }} t>
          Valid submission
        </Text>
      )}
      {valid === false && <Text style={{ color: 'red' }}>Invalid submission</Text>}
    </DPage>
  )
}
