import React, { useEffect } from "react";
import StorybookUIRoot from "./index";
import { useLocalSearchParams, useRouter } from "expo-router";
import { addons } from "@storybook/core/preview-api";
import { SET_CURRENT_STORY, STORY_RENDERED } from "@storybook/core/core-events";

type useExpoRouterStorybookProps = {};

export function ExpoRouterStorybook({}: useExpoRouterStorybookProps) {
  const router = useRouter();

  const { storyId } = useLocalSearchParams();

  useEffect(() => {
    const channel = addons.getChannel();

    const onRendered = (storyId: string) => {
      router.setParams({ storyId: storyId });
    };

    if (storyId && typeof storyId === "string") {
      channel.emit(SET_CURRENT_STORY, { storyId: storyId });
    }
    channel.on(STORY_RENDERED, onRendered);

    return () => {
      channel.off(STORY_RENDERED, onRendered);
    };
  }, [storyId]);

  return <StorybookUIRoot />;
}
