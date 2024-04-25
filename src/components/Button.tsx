import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
