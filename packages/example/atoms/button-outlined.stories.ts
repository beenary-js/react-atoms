import type { Meta, StoryObj } from "@storybook/react"

import { ButtonOutlined } from "./button"

const meta = {
  title: "Button/Outlined",
  component: ButtonOutlined,
  tags: ["autodocs"],
  argTypes: {
    as: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof ButtonOutlined>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    children: "Outlined",
  },
}
