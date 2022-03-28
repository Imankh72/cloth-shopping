import CollectionPreview from "../components/CollectionPreview";
import { useSelector } from "react-redux";

import styled from "styled-components";

const ShopPage = () => {
  const collections = useSelector((state) => state.collection);

  return (
    <ShopPageWrapper>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </ShopPageWrapper>
  );
};

export default ShopPage;

const ShopPageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
