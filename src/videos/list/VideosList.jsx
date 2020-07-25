import React, { useContext } from "react";
import { List, ListItem, ListIcon, Link } from "@chakra-ui/core";
import { Title, LoadingText } from "../components/Title";
import { VideoIdContext } from "../OneVideoContext";
import { useFetchVideos } from "../api.hooks";
import { DeleteTag } from "./DeleteTag";

export const VideosList = () => {
  const { setVideoId } = useContext(VideoIdContext);
  const { data: list, isFetching } = useFetchVideos();

  const switchToPresentation = (event) => {
    const { id } = event.target.dataset;
    setVideoId(id);
  };

  return (
    <>
      <Title>
        My list {isFetching && <LoadingText>...is loading</LoadingText>}
      </Title>
      <List>
        {list &&
          list.map(({ title, id }) => (
            <ListItem key={id}>
              <ListIcon icon="chevron-right" color="green.500" size="24px" />
              <Link as="button" data-id={id} onClick={switchToPresentation}>
                {title}
              </Link>
              <DeleteTag id={id} />
            </ListItem>
          ))}
      </List>
    </>
  );
};
