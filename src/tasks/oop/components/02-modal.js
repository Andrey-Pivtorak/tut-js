/**
 * данный компонент должен работать как модальный диалог
 */
class Modal extends Component {
	show() {
		return new Promise((resolve, reject) => {
			const value = 'llll';
			resolve(value);
		})
	}

}
