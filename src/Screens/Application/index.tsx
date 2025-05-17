import { useState } from 'react'
import DButton from '../../Components/DButton'
import DPage from '../../Components/DPage'
import DTextField from '../../Components/DTextField'
import { Text } from 'react-native'

const isValidName = (name: string) => {
  return name.length > 0
}

const isValidAge = (age: string) => {
  let valid = true
  try {
    const i = parseInt(age)
    if (isNaN(i) || i < 18) {
      valid = false
    }
  } catch (e) {
    valid = false
  }
  return valid
}

export default () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [valid, setValid] = useState<boolean>()
  const submit = () => {
    setValid(isValidName(name) && isValidAge(age))
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
      {valid && <Text style={{ color: 'green' }}>Valid submission</Text>}
      {valid === false && <Text style={{ color: 'red' }}>Invalid submission</Text>}
    </DPage>
  )
}
