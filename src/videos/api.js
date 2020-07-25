export const createVideo = (data) => {
  return fetch("/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteVideo = (id) => {
  fetch(`/videos/${id}`, {
    method: "DELETE",
  });
};

export const updateVideo = ({ id, data }) => {
  fetch(`/videos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const fetchVideos = async () => {
  const response = await fetch("/videos", { method: "GET" });
  return response.json();
};

export const fetchOneVideo = async (id) => {
  const response = await fetch(`/videos/${id}`, { method: "GET" });
  return response.json();
};

export const useVideos = () => ({
  createVideo,
  deleteVideo,
  updateVideo,
  fetchVideos,
  fetchOneVideo,
});
