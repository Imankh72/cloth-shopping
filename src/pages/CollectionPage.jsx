import { useSelector } from "react-redux";
import { useParams } from "react-router";

import styled from "styled-components";

const CollectionPage = () => {
  const { id } = useParams();
  const collections = useSelector((state) => state.collection);
  const selectedCollection = collections.find(
    (collection) => collection.id === +id
  );

  return (
    <CollectionPageWrapper>
      <h2>Collection</h2>
    </CollectionPageWrapper>
  );
};

export default CollectionPage;

const CollectionPageWrapper = styled.div``;
