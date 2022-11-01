import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../Input";

export default {
    title: "Form/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithValue = Template.bind({});
WithValue.args = {
    value: "Lorem ipsum",
};
