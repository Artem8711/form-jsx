const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App />);

function App() {
   const isLight = true;
   const name = `Karolina`;
   return (
      <>
         <ThemeButton isLightTheme={isLight} />
         <Greeting isGreeting={true} userName={name} />
         <Greeting isGreeting={false} userName={`Danya`} />
      </>
   );
}

function ThemeButton(prop) {
   const { isLightTheme } = prop;

   const buttonStyle = {
      color: isLightTheme ? `black` : `white`,
      backgroundColor: isLightTheme ? `white` : `black`,
   };

   return <button style={buttonStyle}>Swithc to {isLightTheme ? `dark` : `light`}</button>;
}

function Greeting(props) {
   const { userName, isGreeting } = props;

   return (
      <div>
         {isGreeting ? 'hello' : 'goodbye'} {userName}
      </div>
   );
}
