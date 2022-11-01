import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import EditableListItem from "./components/EditableListItem";
import { Footer } from "./components/Footer";
import { ItemObjectType } from "./components/form/types";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { ThemeProvider } from "./components/ThemeProvider";

export const App: React.FC = () => {
    const [items, setItems] = useState<ItemObjectType[]>([]);

    const sortItems = (items: ItemObjectType[]) => {
        return items.sort((a, b) => Number(a.done) - Number(b.done) || b.createdAt - a.createdAt);
    };

    const handleSetItems = (callback: (prevItems: ItemObjectType[]) => ItemObjectType[]) => {
        setItems((prev) => sortItems(callback(prev)));
    };

    const fetchItems = async () => {
        const result = await fetch("http://localhost:3000/items").then((res) => res.json());
        handleSetItems(() => result);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header
                        handleAddItem={() => fetchItems()}
                        // onItemAdded={(newItem) => handleSetItems((prev) => [...prev, newItem])}
                    >
                        To Do app
                    </Header>
                    <List>
                        {items.map((item) => (
                            <EditableListItem
                                key={item.id}
                                item={item}
                                onItemEdit={(itemSubmitted) =>
                                    handleSetItems((prev) =>
                                        prev.map((obj) => (obj.id === itemSubmitted.id ? itemSubmitted : obj))
                                    )
                                }
                                onItemDelete={() => handleSetItems((prev) => prev.filter((obj) => obj.id !== item.id))}
                            />
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
