import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Hello",
    children: "Click me",
  },
};
