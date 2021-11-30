import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import component
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";

// import pages
import Dashboard from "./components/pages/Dashboard";
// import Contact from "./components/pages/contactfolder/Contact";
import Invoice from "./components/pages/invoicefolder/Invoice";
import Tickets from "./components/pages/ticketsfolder/Tickets";
import Document from "./components/pages/documentfolder/Document";
import Setting from "./components/pages/settingfolder/Setting";
import Chat from "./components/pages/chatfolder/Chat";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import TermsOfUse from "./components/TermsOfUse";
import UploadForm from "./components/UploadForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import InvoicePage from "./components/pages/invoicefolder/InvoicePage";

// import css
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import '../node_modules/react-tabs/style/react-tabs.css';

// import js
import "./js/main.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <TetantLayout exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard}></TetantLayout>
          {/* <TetantLayout path={`${process.env.PUBLIC_URL}/contact`} component={Contact}></TetantLayout> */}
          <TetantLayout path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/tickets`} component={Tickets}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/document`} component={Document}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/setting`} component={Setting}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/chat`} component={Chat}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/termsofuse`} component={TermsOfUse}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/privacypolicy`} component={PrivacyPolicy}></TetantLayout>
          <TetantLayout path={`${process.env.PUBLIC_URL}/invoicepage`} component={InvoicePage}></TetantLayout>
          {/* Signin Signup Forgot */}
          <Comonpage path={`${process.env.PUBLIC_URL}/signin`} component={Signin}></Comonpage>
          <Comonpage path={`${process.env.PUBLIC_URL}/signup`} component={Signup}></Comonpage>
          <Comonpage path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot}></Comonpage>
          <Comonpage path={`${process.env.PUBLIC_URL}/uploadform`} component={UploadForm}></Comonpage>
        </Switch>
      </Router>
    </>
  );
}

export default App;

const TetantLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div id="root-dashboard" className="wrapper">
          <Header/>
          <LeftSidebar />
          <div className="content_page left_content right_content">
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};
const Comonpage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div id="root-dashboard" className="wrapper p-3">
          <Header/>
          <LeftSidebar />
          <div className="content_page m-0 left_content right_content p-0">
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};

// 
// const ClientDashLayout = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={matchProps => (
//         <div id="root-dashboard" className="wrapper">
//         <ClientSideBar />
//         <div className="content_page left_content right_content">
//             <ClientHeader />
//               <Component {...matchProps} />
//             <Footer/>
//         </div>
//         </div>
//       )}
//     />
//   );
// };
// 
// const EmployeeDashLayout = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={matchProps => (
//         <div id="root-dashboard" className="wrapper">
//         <EmployeSideBar />
//         <div className="content_page left_content right_content">
//             <EmployeeHeader />
//               <Component {...matchProps} />
//             <Footer/>
//         </div>
//         </div>
//       )}
//     />
//   );
// };