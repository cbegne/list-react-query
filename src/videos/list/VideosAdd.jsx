import React from "react";
import { Button } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { Title } from "../components/Title";
import { VideosForm } from "../components/VideoForm";
import { useCreateVideo } from "../api.hooks";

export const VideosAdd = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const [mutate] = useCreateVideo();

  const onSubmit = async (data) => {
    try {
      await mutate(data);
      reset({});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Title>Add a new video</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VideosForm register={register} title="" content="" link="" />
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};
