import React from 'react';
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Footer(props: IProps) {
  return (
    <C.Footer>
      <p>
        Coded by <a href="https://github.com/santosesantos" target="_blank">Santos e Santos</a>.
      </p>
    </C.Footer>
  );
}