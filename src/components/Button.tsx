import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

function Button(props: ButtonProps) {
  return <button className="button" {...props}></button>;
}

export default Button;
