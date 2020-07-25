import React, { useContext } from "react";
import { Flex, Divider, Stack } from "@chakra-ui/core";
import { VideosSummary } from "./summary/VideosSummary";
import { VideosList } from "./list/VideosList";
import { VideosAdd } from "./list/VideosAdd";
import { VideoIdContext } from "./OneVideoContext";
import { VideosDetails } from "./presentation/VideosDetails";
import { VideosUpdate } from "./presentation/VideosUpdate";

export const VideosMain = () => {
  const { videoId } = useContext(VideoIdContext);

  return (
    <Flex my={5}>
      <VideosSummary />
      <Divider
        orientation="vertical"
        borderColor="gray.300"
        borderWidth="3px"
      />
      <Stack ml={5} w="100%" spacing={8}>
        {videoId ? <VideosDetails id={videoId} /> : <VideosList />}
        <Divider />
        {videoId ? <VideosUpdate id={videoId} /> : <VideosAdd />}
      </Stack>
    </Flex>
  );
};
