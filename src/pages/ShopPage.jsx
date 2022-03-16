import { useState } from "react";
import { shopData } from "../data/shopData";

import styled from "styled-components";
import CollectionPreview from "../components/CollectionPreview";

const ShopPage = () => {
  const [collections, setCollections] = useState(shopData);

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
