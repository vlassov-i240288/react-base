import './Message.css';


function Message(props) {
 return (
       <h2 className="heading__h2">{props.message}</h2>
 );
}

export default Message;