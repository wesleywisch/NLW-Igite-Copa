import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
  type?: 'Primary' | 'Secondary';
}

export function Button({ title, type = 'Primary', ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase 
        w='full'
        h={14}
        rounded='sm'
        fontSize='md'
        textTransform='uppercase'
        bg={type === 'Secondary' ? 'red.500' : 'yellow.500'}
        _pressed={{
          bg: type === 'Secondary' ? 'red.600' : 'yellow.600'
        }} 
        _loading={{
          _spinner: { color: 'black' }
        }}
        {...rest}
      >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={type === 'Secondary' ? 'white' : 'black'}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}