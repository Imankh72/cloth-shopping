import { useDispatch, useSelector } from "react-redux";
import CollectionPreview from "../components/CollectionPreview";
import { useEffect } from "react";
import { fetchCollections } from "../redux/shop/shopActions";

import styled from "styled-components";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.shop.isLoading);
  const error = useSelector((state) => state.shop.error);
  console.log(error, isLoading, collections);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <CollectionOverviewWrapper>
      {isLoading && !error && <h1>Loading...</h1>}

      {!isLoading &&
        !error &&
        collections &&
        collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      {!isLoading && error && <h1>{error}</h1>}
    </CollectionOverviewWrapper>
  );
};

export default CollectionOverview;

const CollectionOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
