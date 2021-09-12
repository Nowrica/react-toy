export const Login = () => {
  const onClick = () => {
    console.log(1);
  }
  return (
    <div>
      <input type={'text'} id={'email'}/>
      <input type={'password'} id={'password'}/>
      <input type={'submit'} onClick={onClick}/>
    </div>
  );
}

