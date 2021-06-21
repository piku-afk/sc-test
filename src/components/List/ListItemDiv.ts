import styled from "styled-components";

export const ListItemDiv = styled.div`
  display: flex;
  align-items: baseline;

  & > div:last-child {
    /* flex-grow: 1; */

    & > div {
      padding: 4px;
      text-transform: capitalize;
    }
  }
`;