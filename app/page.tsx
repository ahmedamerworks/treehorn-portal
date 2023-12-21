import FormSlide from "./_components/form-slide/FormSlide";
import LoginForm from "./_components/login-form/LoginForm";

export default function Home() {
  return (
    // make a cool daisy ui form page
    <>
      <div className="flex items-center justify-center min-h-[60vh] bg-inherit">
        <LoginForm />
        <div className=""></div>
      </div>
    </>
  );
}
