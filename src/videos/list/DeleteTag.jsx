import React from "react";
import { Tag } from "@chakra-ui/core";
import { useDeleteVideo } from "../api.hooks";

export const DeleteTag = ({ id }) => {
  const [mutateDelete] = useDeleteVideo();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    try {
      await mutateDelete(parseInt(id, 10));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Tag as="button" size="sm" ml={2} data-id={id} onClick={handleDelete}>
      Delete
    </Tag>
  );
};
