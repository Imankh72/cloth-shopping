import CollectionItem from "./CollectionItem";

import styled from "styled-components";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionWrapper>
      <h1 className="title">{title.toUpperCase()}</h1>
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
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;
