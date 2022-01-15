import React, { useState, useEffect } from "react";
import "./App.css";

import ReactTooltip from "react-tooltip";

import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import StoriesSection from "./components/StoriesSection";
import Post from "./components/Post";
import Contact from "./components/MessengerContact";


function App() {
  //Creates contact area and distributes all the names
  let contacts = []
  let contactsName = [
    "Nilo Carlota",
    "Narciso Tereza",
    "Ondina Téo",
    "Ramiro Julieta",
    "Godofredo Luisinho",
    "Samanta Branca",
    "Teófilo Zacarias",
    "Dan Lúcio",
    "Teresinha Almir",
    "Pio Anselmo",
    "Zé Manel João",
    "Jéssica Soraya",
    "Diniz Jesus",
    "Teodora Zé Manel",
    "Isaque Inácio"
  ];
  
  for (let i = 0; i < 15; i++) {
    contacts.push(<Contact contactName={contactsName[i]} />);
  }

  //Lazy loading.
  const [ loadMore, setLoadMore ] = useState(false);
  const [ posts, setPosts] = useState([]);
  const post = [<Post />];

  const loadMorePosts = () => {
    for(let i = 0; i < 6; i++) {
      setPosts((posts) => [...posts, ...post]);
      console.log("Works");
    }
  }

  useEffect(() => {
    if(!loadMore) {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                setLoadMore(true);
            }
        })
        intersectionObserver.observe(document.querySelector('.load-watch'));
        return() => intersectionObserver.disconnect();
    }
}, [loadMore]);
  
  useEffect(() => {
    if(loadMore === true) {
      loadMorePosts();
      setLoadMore(false);
    }
  }, [loadMore]);

  return (
    <>
        <Header />
        <div className="margin-container">
          <div className="main container">
            <div className="navigation-area">
              <NavigationMenu />
            </div>
            <main className="facebook-feed">
              <div className="stories">
                <StoriesSection />
              </div>
              <div className="create-post">
                <div className="container">
                  <form className="input-area">
                    <div className="create-post--profile">
                      <img src="/profile-pic.png" alt="" />
                    </div>
                    <input type="text" placeholder="What's on your mind, Rafael?" />
                  </form>
                  <div className="post-options">
                    <div className="option">
                      <svg style={{fill: "#f4556f"}} viewBox="0 0 24 24" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 i2fa72qc rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                      <p>Live video</p>
                    </div>
                    <div className="option">
                      <svg style={{fill: "#58c472"}}  viewBox="0 0 24 24" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 n90h9ftp rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fillRule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                      <p>Photo/video</p>
                    </div>
                    <div className="option">
                      <svg style={{fill: "#f7c03e"}}  viewBox="0 0 24 24" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 ky11obwa rgmg9uty b73ngqbp"><g fillRule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fillRule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                      <p>Feeling/Activity</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="posts">
                {posts.map((item, index) => (
                  <>
                    <Post index={index} />
                  </>
                ))}
              </div>
              <div className="load-watch"></div>
            </main>
            <div className="messenger">
              <div className="messenger-fixed">
                <div className="messenger-header">
                  <h1>Contacts</h1>
                  <div className="messenger-icons">
                    <svg data-tip="New room" data-for="tip-bottom" viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv gl3lb2sf hhz5lgdu"><g fillRule="evenodd" transform="translate(-448 -544)"><path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path></g></svg>
                    <svg data-tip="Search by name or group" data-for="tip-bottom" viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv gl3lb2sf hhz5lgdu"><g fillRule="evenodd" transform="translate(-448 -544)"><g fillRule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg>
                    <svg data-tip="Options" data-for="tip-bottom" viewBox="0 0 20 20" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv jnigpg78 odw8uiq3"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                  </div>
                </div>
                <div className="contacts-wrapper">
                  {contacts}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReactTooltip id="tip-bottom" place="bottom" effect="solid" />
    </>
  );
}

export default App;
