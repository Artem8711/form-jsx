const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App />);

function App() {
   const isLight = true;
   return (
      <>
         <ThemeButton isLightTheme={isLight} />
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
