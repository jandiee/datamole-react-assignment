import { PlusIcon } from "@radix-ui/react-icons";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RoundButton } from "../Button";

export default {
    title: "Button/Round Button",
    component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = ({ children, ...args }) => (
    <RoundButton {...args}>{children}</RoundButton>
);

export const Default = Template.bind({});
Default.args = {
    children: [<PlusIcon />],
    onClick: action("Round button clicked"),
};
