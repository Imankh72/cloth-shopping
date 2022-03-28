import CollectionOverview from "../components/CollectionOverview";

import styled from "styled-components";

const ShopPage = () => {
  return (
    <ShopPageWrapper>
      <CollectionOverview />
    </ShopPageWrapper>
  );
};

export default ShopPage;

const ShopPageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
