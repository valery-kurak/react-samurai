import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

let AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody"
                   validate={[required, maxLength50]} placeholder="Enter your message" />
        </div>
        <div><button>Send</button></div>
    </form>
}

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);