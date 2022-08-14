import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
}

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Valery1'},
    {id: 2, name: 'Valery2'},
    {id: 3, name: 'Valery3'}
  ];

  let messages = [
    {id: 1, message: 'Hi1'},
    {id: 2, message: 'Hi2'},
    {id: 3, message: 'Hi3'}
  ];

  let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
  let messagesElements = messages.map( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;