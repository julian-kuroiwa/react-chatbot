import React, {Fragment, Component} from 'react';
import { Field, reduxForm } from 'redux-form'

import * as S from './styled';

import Avatar from '../../Avatar/Avatar';
import Balloon from '../../Balloon/Balloon';
// import Radio from '../../Radio/Radio';

export class MessageListContainer extends Component {
	render() {
		const {checked} = this.props;

		return <Fragment>
			<S.MessageListContainer user={this.props.user}>
				<Avatar user={this.props.user} />
				<Balloon message={this.props.text} />
			</S.MessageListContainer>
			<S.MessageListContainerOptions>
				{this.props.options ? this.props.options.map((element, index) => <label key={index}><Field name={element.name} component='input' type="radio" value={element.value} checked={checked} onChange={this.props.optionHandler} /> {element.label}</label>) : ''}
			</S.MessageListContainerOptions>
		</Fragment>
	}
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(MessageListContainer)
