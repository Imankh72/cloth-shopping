import styled from "styled-components";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionWrapper>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </CollectionWrapper>
  );
};

export default CollectionPreview;

const CollectionWrapper = styled.div``;
