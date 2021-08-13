// Контекст позволяет передавать значение глубоко
// в дерево компонентов без явной передачи пропсов
// на каждом уровне. Создадим контекст для текущей
// UI-темы (со значением "light" по умолчанию).
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        // Компонент Provider используется для передачи текущей
        // UI-темы вниз по дереву. Любой компонент может использовать
        // этот контекст и не важно, как глубоко он находится.
        // В этом примере мы передаём "dark" в качестве значения контекста.
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// Компонент, который находится в середине,
// больше не должен явно передавать тему вниз.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // Определяем contextType, чтобы получить значение контекста.
    // React найдёт (выше по дереву) ближайший Provider-компонент,
    // предоставляющий этот контекст, и использует его значение.
    // В этом примере значение UI-темы будет "dark".
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
}