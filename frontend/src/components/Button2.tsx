import { FC } from 'react';

export interface Button2Props {
  name: string;
  clases: number;
}

const Button2: FC<Button2Props> = ({ name, clases }) => {
  return (
    <div>
      {name} {clases}
    </div>
  );
};

export default Button2;
