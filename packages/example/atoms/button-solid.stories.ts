import type { Meta, StoryObj } from "@storybook/react"

import { ButtonSolid } from "./button"

const meta = {
  title: "Button/Solid",
  component: ButtonSolid,
  tags: ["autodocs"],
  argTypes: {
    as: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof ButtonSolid>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    children: "Solid",
  },
}
