import { useQuery, useMutation, queryCache } from "react-query";
import {
  fetchVideos,
  fetchOneVideo,
  createVideo,
  deleteVideo,
  updateVideo,
} from "./api";

export const useFetchVideos = () => {
  return useQuery("videos", fetchVideos);
};

export const useFetchOneVideo = (id) => {
  return useQuery(["videos", id], () => fetchOneVideo(id));
};

export const useCreateVideo = () => {
  return useMutation((data) => createVideo(data), {
    onMutate: (data) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      queryCache.cancelQueries("videos");
      // Snapshot the previous value
      const previousList = queryCache.getQueryData("videos");
      // Optimistically update to the new value
      queryCache.setQueryData("videos", (old) => [
        ...old,
        { id: "temp", ...data },
      ]);
      // Return the snapshotted value
      return () => queryCache.setQueryData("videos", previousList);
    },
    onError: (error, values, rollback) => rollback(),
    onSuccess: () => queryCache.invalidateQueries("videos"),
  });
};

export const useDeleteVideo = () => {
  return useMutation((id) => deleteVideo(id), {
    onSuccess: () => queryCache.invalidateQueries("videos"),
  });
};

export const useUpdateVideo = () => {
  return useMutation(({ id, data }) => updateVideo({ id, data }), {
    onMutate: ({ id, data }) => {
      queryCache.cancelQueries(["videos", id]);
      const previousVideo = queryCache.getQueryData(["videos", id]);
      queryCache.setQueryData(["videos", id], () => ({ id, ...data }));
      return () => queryCache.setQueryData(["videos", id], previousVideo);
    },
    onError: (error, values, rollback) => rollback(),
    onSuccess: (data) =>
      console.log("success", data) && queryCache.invalidateQueries(["videos"]),
  });
};
