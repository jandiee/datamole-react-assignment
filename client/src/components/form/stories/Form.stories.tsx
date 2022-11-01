import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form } from "../Form";

export default {
    title: "Form/Form",
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialValue: "",
    handleCancel: action("Form cancelled"),
    handleSubmit: async () => action("Submitted")(),
};
