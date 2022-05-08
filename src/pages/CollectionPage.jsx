import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import CollectionItem from "../components/CollectionItem";
import { fetchCollections } from "../redux/shop/shopActions";
import Spinner from "../components/Spinner";

import styled from "styled-components";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.shop.collections);
  const isLoading = useSelector((state) => state.shop.isLoading);
  const error = useSelector((state) => state.shop.error);
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch, categoryName]);

  let selectedCollection = collections.filter(
    (collection) => collection.routeName === categoryName
  );
  selectedCollection = selectedCollection[0];

  return (
    <CollectionPageWrapper>
      {isLoading && !error && <Spinner />}
      {!isLoading && !error && selectedCollection && (
        <>
          <h2 className="title">{selectedCollection.title}</h2>
          <div className="items">
            {selectedCollection.items &&
              selectedCollection.items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
          </div>
        </>
      )}
      {error && !isLoading && !selectedCollection && <h1>{error}</h1>}
    </CollectionPageWrapper>
  );
};

export default CollectionPage;

const CollectionPageWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  .title {
    font-size: 38px;
    margin: 0 auto;
  }

  .items {
    width: 100%;
    padding: 10px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 25px;
  }
`;
