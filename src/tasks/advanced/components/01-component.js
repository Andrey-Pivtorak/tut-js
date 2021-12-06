/**
 * Задача создать свой абстрактный компонент, который  будет уметь себя отображать через метод render/renderTo
 *
 */
class Component {
    /**
     * это корневой элемент компонента, всё остальные элементы должны добавляться в этот элемент
     */
    #element;

    constructor(props) {
        const {
            tag, /* tag - название тега, div, span, a, p и тп*/
            text, /* text - текст внутри элемента */
            className, /* className - css class элемента, должен добавляться к this.#element,
                        это строка с одним или несколькими классами, разделенными пробелом */
            attributes, /* attributes - атрибуты, { attrName: attrValue } */
            data, /* data - data атрибуты, надо их добавлять через element.dataset, { dataName: dataValue } */
            events, /* обработчики событий на элементе,
                    {
                        click(event) {
                            console.log('clicked');
                        }
                    } */
            children /* children - дочерные компоненты, должны быть добавлены в #element, массив Component'ов */
        } = props;

        this.props = props;
    }

    /**
     *
     * метод может принимать такой же набор свойств как и конструктор
     * если какое-то свойство из props отличается от this.props тогда надо перерисовать этот компонент
     * если ничего не поменялось - ничего не надо делать
     */
    update(props) {

    }

    render() {
        /* ваша логика тут */

        return this.#element;
    }

    renderTo(container) {
        //очистить контейнер и добавить туда
    }

    show() {

    }

    hide() {

    }

    destroy() {
        //удалить все обработчики событий из элемента и вызвать destroy на всех дочерних компонентах
    }
}