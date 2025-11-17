/* const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<App />);

function App() {
   return (
      <>
         <Header />
         <main title="hello">Hello React</main>
         <UserInfo />
         <NewsItem />
         <Footer />
      </>
   );
}

function UserInfo() {
   const user = {
      name: `Vika`,
      age: 20,
      imgSrc: `https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D`,
   };

   const userNameStyle = {
      color: user.age > 18 ? `green` : `red`,
      backgroundColor: user.age > 18 ? `red` : `green`,
   };

   return (
      <article className="userCard">
         <h2 style={userNameStyle}> {user.name}</h2>
         <img src={user.imgSrc} alt={user.name} />
      </article>
   );
}
function NewsItem() {
   const news = { title: `some news`, body: `lorem ipsum dolor sit amet`, isGood: true };

   const newsItemStyle = {
      backgroundColor: news.isGood ? `lightgreen` : `lightcoral`,
   };

   return (
      <article className="newsInfo" style={newsItemStyle}>
         <h2>{news.title}</h2>
         <p>{news.body}</p>
      </article>
   );
}

//class => className
function Header() {
   return (
      <header className="header">
         <h1>Page title</h1>
      </header>
   );
}
function Footer() {
   return (
      <footer>
         <p>F£Q</p>
         <p>About Us</p>
         <p>Home</p>
      </footer>
   );
} */
