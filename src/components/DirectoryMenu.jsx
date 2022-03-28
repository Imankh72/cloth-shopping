import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

import styled from "styled-components";

const DirectoryMenu = () => {
  const collections = useSelector((state) => state.directory);

  return (
    <DirectoryMenuWrapper>
      {collections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenuWrapper>
  );
};

export default DirectoryMenu;

const DirectoryMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
`;
