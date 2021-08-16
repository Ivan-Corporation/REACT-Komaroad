//// Порталы позволяют перемещаться в пространственном континууме на огромные расстояния, к примеру в портал 2
//// была показана возможность поставить портал даже на луне
// Если коротко то в html файле у нас все рендерится через <div id="root"></div>
// Порталы же позволяют изменять структуру DOM за пределами root, т.е. корня нашего реакта
// Т.е. даже внутри нашего корня мы можем с помощью порталов изменять элементы, выходящие за
// заданные им компонентом рамки (вспомните пример с из RenderProps, где кот не мог выбежать за пределы своей компоненты)
// На примере все будет понятно:

return ReactDOM.createPortal(
    // любой React-компонент, который может быть отрендерен
    <div className='App-header'>
        <h2>{message}</h2>
        <button className="button" onClick={onClose}>
            Закрыть
        </button>
        <img src={portals} />
    </div>,
    // DOM-элемент
    document.body
);