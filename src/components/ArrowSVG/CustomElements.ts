import styled from 'styled-components';

interface ArrowSVGProps {
  expand: boolean,
  hasChild: boolean
}

export const ArrowSVG = styled.svg<ArrowSVGProps>`
  width: 12px;
  height: auto;
  fill: ${props => props.hasChild ? 'black' : 'gray'};
  transition: transform 200ms ease-out 0s;
  transform: rotateZ(${props => props.expand ? '180deg' : '90deg'});
`;

// style={{width: 12, height: 'auto', fill: 'green', transform: 'rotateZ(90deg)'}} 

// style="width: 0.6875em;height: 0.6875em;display: block;fill: inherit;flex-shrink: 0;backface-visibility: hidden;transition: transform 200ms ease-out 0s;transform: rotateZ(159deg);opacity: 1;"

export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: transparent;

  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;