import React, { useContext } from "react";
import { List, ListItem, ListIcon, Tag, Link } from "@chakra-ui/core";
import { Title, LoadingText } from "../components/Title";
import { VideoIdContext } from "../OneVideoContext";
import { useFetchVideos, useDeleteVideo } from "../api.hooks";

export const VideosList = () => {
  const { setVideoId } = useContext(VideoIdContext);
  const { data: list, isFetching } = useFetchVideos();
  const [mutateDelete] = useDeleteVideo();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    try {
      await mutateDelete(parseInt(id, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const switchToPresentation = (event) => {
    const { id } = event.target.dataset;
    setVideoId(id);
  };

  console.log(list, isFetching);

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
              <Tag
                as="button"
                size="sm"
                ml={2}
                data-id={id}
                onClick={handleDelete}
              >
                Delete
              </Tag>
            </ListItem>
          ))}
      </List>
    </>
  );
};
