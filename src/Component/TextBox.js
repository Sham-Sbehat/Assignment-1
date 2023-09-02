import './TextBox.css';

export default function TextBox(){
    let title="This is the Post Title";
    let body="This is the Post Body";
   return <div class='TextBox'>
    <h3>{title}</h3>
    <p>{body}</p>
    
    </div>
}