import React from "react";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/core";

export const VideosForm = ({ register, title, link, content }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        type="text"
        name="title"
        ref={register({ required: true })}
        defaultValue={title}
      ></Input>
      <FormLabel htmlFor="link">Link</FormLabel>
      <Input
        type="text"
        name="link"
        ref={register({ required: true })}
        defaultValue={link}
      ></Input>
      <FormLabel htmlFor="content">Content</FormLabel>
      <Textarea
        size="md"
        name="content"
        ref={register({ required: true })}
        defaultValue={content}
        minHeight="120px"
      ></Textarea>
    </FormControl>
  );
};
