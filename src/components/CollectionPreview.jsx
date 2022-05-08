import CollectionItem from "./CollectionItem";
import { useNavigate } from "react-router";

import styled from "styled-components";

const CollectionPreview = ({ title, routeName, items }) => {
  const navigate = useNavigate();

  return (
    <CollectionWrapper>
      <h1 className="title" onClick={() => navigate(routeName)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionWrapper>
  );
};

export default CollectionPreview;

const CollectionWrapper = styled.div`
  margin-bottom: 30px;

  .title {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (max-width: 992px) {
    .preview {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      row-gap: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .preview {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;
