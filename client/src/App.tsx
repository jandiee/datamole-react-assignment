import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { ItemObjectType } from "./components/form/types";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { ThemeProvider } from "./components/ThemeProvider";

export const App: React.FC = () => {
    const [items, setItems] = useState<ItemObjectType[]>([]);

    useEffect(() => {
        (async () => {
            const result = await fetch("http://localhost:3000/items").then((res) => res.json());
            setItems(result);
        })();
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdded={(newItem) => setItems((prev) => [...prev, newItem])}>To Do app</Header>
                    <List>
                        {items.map((item) => (
                            <ListItem key={item.id} label={item.title} handleEdit={() => {}} handleRemoval={() => {}} />
                        ))}
                    </List>
                    <Footer
                        todoItems={items.filter((item) => !item.done).length}
                        doneItems={items.filter((item) => item.done).length}
                    />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
