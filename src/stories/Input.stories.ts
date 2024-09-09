import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../UI/Forms/Input/Input";
// import { InputInterface } from "../interfaces/Input.interface";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {},
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Extra_small: Story = {
  args: {
    type: "email",
    optional: "",
    quiet: true,
    disabled: false,
    label: "Email",
    infoIconText: "Hint in default input",
    placeholder: "Input...",
    helperText: "",
    size: "extra_small",
    isInvalid: false,
    positionLeft: true,
  },
};

export const Medium: Story = {
  args: {
    type: "email",
    optional: "required",
    quiet: false,
    disabled: false,
    label: "Email",
    infoIconText: "Hint in default input",
    placeholder: "Input...",
    helperText: "Some additional text",
    size: "medium",
    isInvalid: false,
    positionLeft: false,
  },
};

export const Large: Story = {
  args: {
    type: "email",
    optional: "",
    quiet: false,
    disabled: false,
    label: "Email",
    infoIconText: "",
    placeholder: "Input...",
    helperText: "Some additional text",
    size: "large",
    isInvalid: true,
    positionLeft: false,
  },
};

export const Extra_large: Story = {
  args: {
    type: "email",
    optional: "required",
    quiet: false,
    disabled: true,
    label: "Email",
    infoIconText: "Hint in default input",
    placeholder: "Input...",
    helperText: "Some additional text",
    size: "extra_large",
    isInvalid: false,
    positionLeft: false,
  },
};
export const Medium_left: Story = {
  args: {
    type: "email",
    optional: "required",
    quiet: false,
    disabled: false,
    label: "Email",
    infoIconText: "Hint in default input",
    placeholder: "Input...",
    helperText: "",
    size: "medium",
    isInvalid: false,
    positionLeft: true,
  },
};
