 export const checkValidData=(name,email,password)=>{
  const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isNameValid) return "Name is not valid";
  if(!isEmailValid) return "Email id is not valid";
  if(!isPasswordValid) return "Password id is not valid";


  return null;
}