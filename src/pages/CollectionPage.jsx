import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../components/CollectionItem";

import styled from "styled-components";

const CollectionPage = () => {
  const { categoryName } = useParams();
  const collections = useSelector((state) => state.shop.collections);
  const selectedCollection = collections.find(
    (collection) => collection.routeName === categoryName
  );

  const { title, items } = selectedCollection;

  return (
    <CollectionPageWrapper>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
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
