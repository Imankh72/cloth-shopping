import { useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const data = [
  {
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "Jacket",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const DirectoryMenu = () => {
  const [collections, setCollections] = useState(data);

  return (
    <DirectoryMenuWrapper>
      {collections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenuWrapper>
  );
};

export default DirectoryMenu;

const DirectoryMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
`;
