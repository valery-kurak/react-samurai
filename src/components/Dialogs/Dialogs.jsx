import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} key={d.id}  name={d.name} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to='/login'></Navigate>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              { dialogsElements }
            </div>
            <div className={s.messages}>
              <div>{ messagesElements }</div>
            </div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div><button>Send</button></div>
    </form>
}

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;