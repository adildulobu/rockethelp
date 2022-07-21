import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function RegisterButton({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      variant="outline"
      borderColor="green.700"
      borderWidth={2}
      h={14}
      fontSize="sm"
      rounded="sm"
      {...rest}
    >
      <Heading color="green.700" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}