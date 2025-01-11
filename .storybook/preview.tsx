import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    actions: { argTypesRegex: "^on.*" },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
