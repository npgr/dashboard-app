/** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled';
import { FiSettings } from 'react-icons/fi';
import { IconButton, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw, { styled } from 'twin.macro';

const Container2 = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1000;
`;
const Container = tw.div`fixed right-4 bottom-4`;
const StyledIcon = tw(
  IconButton
)`text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-100 text-white`;

const StyledIcon2 = styled(IconButton)`
  ${tw`text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-100 text-white`};
  background-color: blue !important;
`;

const StyledIcon3 = styled(IconButton)(({ colore }: { colore: string }) => [
  tw`text-2xl p-3 hover:drop-shadow-xl hover:bg-gray-300 text-white`,
  `background-color: ${colore} !important;
  margin-bottom: 0.5rem;`,
]);

export const Settings = () => {
  return (
    <Container>
      <Button
        variant="contained"
        className="text-secondary bg-primary hover:bg-blue-400 hover:text-white hover:pl-5"
      >
        Contained
      </Button>
      <Tooltip title="Settings" placement="bottom-end">
        <StyledIcon3
          colore="blue"
          className="text-3xl hover:bg-light-gray text-primary"
        >
          <FiSettings />
        </StyledIcon3>
      </Tooltip>
    </Container>
  );
};
