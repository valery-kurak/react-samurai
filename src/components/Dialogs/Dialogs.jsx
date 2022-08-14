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

const Message = (props ) => {
  return <div className={s.message}>{props.message}</div>;
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id='1' name='Valery1' />
        <DialogItem id='2' name='Valery2' />
        <DialogItem id='3' name='Valery3' />
      </div>
      <div className={s.messages}>
        <Message message='Hi1' />
        <Message message='Hi2' />
        <Message message='Hi3' />
      </div>
    </div>
  )
}

export default Dialogs;