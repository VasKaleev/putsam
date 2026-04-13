import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Textarea } from '../common/FormsControls/FormsControls';
import { Textarea } from '../../common/FormsControls/FormsControls';
// import { maxLengthCreator, required } from '../../redux/utils/validators/validators';
import { maxLengthCreator, required } from '../../../redux/utils/validators/validators';
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter you message"
        />
      </div>
      <div>
        <button>Send222</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
// export default AddMessageFormRedux;
