import css from './Form.module.css'
const Form = () => {
  return (
    <div className={css.box}> 
    <form className={css.form}>
      <h3 className={css.name}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <input className={css.input} type="text" placeholder="Name*" />
      <input className={css.input} type="email" placeholder="Email*" />
      <input  className={css.input} type="text" placeholder="Booking day*" />
      <textarea className={css.textarea} name="" id="" placeholder="Comment"></textarea>
      <button  className={css.btn} type="submit">Send</button>
    </form>
    </div>
  );
};

export default Form;
