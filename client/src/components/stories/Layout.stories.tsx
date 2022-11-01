import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "../Footer";
import { Header } from "../Header";

import { Layout } from "../Layout";
import { List } from "../List";

export default {
    title: "Layout",
    component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = ({ children, ...args }) => <Layout {...args}>{children}</Layout>;

export const Default = Template.bind({});
Default.args = {};

export const WithHeader = Template.bind({});
WithHeader.args = {
    children: [<Header handleAddItem={action("Header button clicked")}>Header</Header>],
};

export const WithHeaderListAndFooter = Template.bind({});
WithHeaderListAndFooter.args = {
    children: [<Header handleAddItem={action("Header button clicked")}>Header</Header>, <List />, <Footer />],
};
