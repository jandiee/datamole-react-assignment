import { Pencil1Icon } from "@radix-ui/react-icons";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RectangleButton } from "../Button";

export default {
    title: "Button/Rectangle Button",
    component: RectangleButton,
} as ComponentMeta<typeof RectangleButton>;

const Template: ComponentStory<typeof RectangleButton> = ({ children, ...args }) => (
    <RectangleButton {...args}>{children}</RectangleButton>
);

export const Default = Template.bind({});
Default.args = {
    children: [<Pencil1Icon />],
    onClick: action("Rectangle button clicked"),
};
