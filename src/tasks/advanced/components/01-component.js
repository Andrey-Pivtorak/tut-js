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
			tag /* tag - название тега, div, span, a, p и тп*/,
			text /* text - текст внутри элемента */,
			className /* className - css class элемента, должен добавляться к this.#element,
                        это строка с одним или несколькими классами, разделенными пробелом */,
			attributes /* attributes - атрибуты, { attrName: attrValue } */,
			data /* data - data атрибуты, надо их добавлять через element.dataset, { dataName: dataValue } */,
			events /* обработчики событий на элементе,
                    {
                        click(event) {
                            console.log('clicked');
                        }
                    } */,
			children /* children - дочерные компоненты, должны быть добавлены в #element, массив Component'ов */,
		} = props;

		this.props = props;
	}

	/**
	 *
	 * метод может принимать такой же набор свойств как и конструктор
	 * если какое-то свойство из props отличается от this.props тогда надо перерисовать этот компонент
	 * если ничего не поменялось - ничего не надо делать
	 */
	update(props) {}

	render() {
		/* ваша логика тут */

		// document.body.append(userPosts);

		return this.#element;
	}

	renderTo(container) {
		//очистить контейнер и добавить туда
	}

	show() {}

	hide() {}

	destroy() {
		//удалить все обработчики событий из элемента и вызвать destroy на всех дочерних компонентах
	}

	// 	function destroy () {
	//   // Убирает элемент и его дочерние элементы
	//   $elem.parentNode.removeChild($elem);
	// }
}

const propsIn = functionsLibrary.createHtmlElement({
	tag: 'div',
	classNames: ['figure2'],
	attributes: {
		style:
			'width: 800px; height: 100px; border: 1px solid #000; background: green; color: white; margin: 0px 0px 20px 0px;	overflow: auto;',
	},
	transferData: ``,
	children: [
		{
			tag: 'p',
			classNames: [],
			attributes: {
				style: 'color: white; background: black; hover: blue;',
			},
			transferData: ``,
		},
		{
			tag: 'div',
			classNames: [],
			attributes: {
				style:
					'height: 20px; margin-bottom: 5px; border: 2px solid red; background: blue; color: white; text-align: center; cursor: pointer;',
			},
			transferData: `This is a second childElement!`,
		},
	],
});

const el = new Component(propsIn);
el.render();
