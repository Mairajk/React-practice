import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from 'react';
import ToggleFunction from './components/toggle';

import moment from 'moment'

import pP1 from './images/pP1.jpg'
import pP2 from './images/pP2.jpg'
import pP3 from './images/pP3.jpg'
import pP4 from './images/pP4.jpg'
import pP5 from './images/pP5.jpg'
import pP6 from './images/pP6.jpg'
import pP7 from './images/pP7.jpg'

import pI1 from './images/pI1.jpg'
import pI2 from './images/pI2.jpg'
import pI3 from './images/pI3.jpg'
import pI4 from './images/pI4.jpg'
import pI5 from './images/pI5.jpg'
import pI6 from './images/pI6.jpg'
import pI7 from './images/pI7.jpg'

import fbLogo from './images/fb logo.png'
import profilePhoto from './images/dp.jpg'

import { TbThumbUp, TbGridDots } from "react-icons/tb";
import { RiShareForwardLine, RiFacebookCircleFill, RiMessengerFill } from "react-icons/ri";
import { VscComment, VscHome } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
// import { TiHome } from "react-icons/ti";
import { BsFillPeopleFill, BsFillGrid3X3GapFill, BsFillBellFill } from "react-icons/bs";
import { MdOutlineOndemandVideo, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";


import friendsLogo from './images/facebookLeftSideBarLogos/friendsLogo.png';
import savedLogo from './images/facebookLeftSideBarLogos/saveLogo.png';
import watchLogo from './images/facebookLeftSideBarLogos/watchLogo.png';
import groupsLogo from './images/facebookLeftSideBarLogos/groupsLogo.png';
import memoriesLogo from './images/facebookLeftSideBarLogos/memoriesLogo.png';
import pagesLogo from './images/facebookLeftSideBarLogos/pagesLogo.png';
import eventsLogo from './images/facebookLeftSideBarLogos/eventsLogo.png';
import mostRecentLogo from './images/facebookLeftSideBarLogos/mostRecentLogo.png';
import favoritesLogo from './images/facebookLeftSideBarLogos/favoriteLogo.png';

import sponserdImage1 from './images/facebookRightSideBarLogos/sponsored1.jpg'
import sponserdImage2 from './images/facebookRightSideBarLogos/sponsored2.jpg'

//==============================================================================================
//==============================================================================================
//==============================================================================================

let Nav = () => (
  <div className='navBar'>
    <div className='left'>
      <div>
        <img src={fbLogo} alt="" className='facebookLogo' />
        {/* <i className="facebookLogo leftLogo navLogo"><RiFacebookCircleFill /></i> */}
      </div>
      <div className='inputDiv'>
        <label htmlFor="search">
          <i className="searchLogo leftLogo navLogo"><BiSearchAlt2 /></i>
        </label>
        <input type="search" placeholder='Search Facebook' />
      </div>
    </div>

    <div className="center">
      {/* <div className='homeLogo'><i><TiHome/></i></div> */}
      <div><i className='homeLogo centerLogo navLogo'><VscHome /></i></div>
      <div><i className='friendsLogo centerLogo navLogo'><BsFillPeopleFill /></i></div>
      <div><i className='watchLogo centerLogo navLogo'><MdOutlineOndemandVideo /></i></div>
      <div><i className='groupsLogo centerLogo navLogo'><HiUserGroup /></i></div>
      <div><i className='gamingLogo centerLogo navLogo'><SiFacebookgaming /></i></div>
    </div>


    <div className="right">
      <ToggleFunction />
      <div><i className="menuLogo rightLogo navLogo"><TbGridDots /></i></div>
      {/* <div className="menuLogo rightLogo navLogo"><i><BsFillGrid3X3GapFill /></i></div> */}
      <div><i className="messengerLogo rightLogo navLogo"><RiMessengerFill /></i></div>
      <div><i className="bellLogo rightLogo navLogo"><BsFillBellFill /></i></div>
      <div> <img className="navProfilePhoto rightLogo navLogo " src={profilePhoto} alt="" /></div>
    </div>

  </div>
);


//=============================================================================

let SponsoredItems = (props) => (
  <div className="sponsoredItems">
    <img src={props.sponsoredImage} alt="" className='sponsoredImage' />
    <div className='sponsoredText'>
      <p className='sponsoredDiscription'>{props.sponseredDiscription}</p>
      <p className='sponsoredLink'>{props.sponseredlink}</p>
    </div>
  </div>
);

let SponsoredDiv = () => (

  <div className="sponsoredDiv">

    <h3 className='sponsoredHead'>Sponsored</h3>


    <SponsoredItems
      sponsoredImage={sponserdImage1}
      sponseredDiscription="High Quality Printed Tees"
      sponseredlink="emerce.pk"
    />

    <SponsoredItems
      sponsoredImage={sponserdImage2}
      sponseredDiscription="Bhook Lagi Hai? Tapmad ke Sath KFC Hojaye?"
      sponseredlink="tapmad.com"
    />

    <div className='rightSideBarDivider'></div>

  </div>

);

let FriendRequestItem = (props) => (
  <div className='friendRequestItem'>

    <img src={props.requestProfileImage} alt="" className="requestProfileImage" />

    <div className='requestInfo'>

      <p className="requestProfileName">{props.requestProfileName}</p>

      <div className='buttonDiv'>
        <button className='confirmButton'> Confirm </button>
        <button className='deleteButton'> Delete </button>
      </div>

    </div>

  </div>
);

let FriendRequestDiv = () => (
  <div className="FriendRequestDiv">
    <div className="friendReqDivHead">
      <h3 className='friendReqHead'>Friend requests</h3>
      <p className='seeAllButton'>See all</p>
    </div>
    <FriendRequestItem
      requestProfileImage={profilePhoto}
      requestProfileName="Sheikh Abdullah"
    />
    <div className="rightSideBarDivider"></div>
  </div>
);


// let ContactsItems = (props) => (
//   <div className='contactsInfo'>
//     <img src={props.contactsProfileImage} alt="" className="contactsProfileImage" />
//     <p className='contactsProfileName'>{props.contactsProfileName}</p>
//   </div>
// );


let RightSideBar = () => (
  <div className="rightSideBar">

    <SponsoredDiv />
    <FriendRequestDiv />

  </div>
);


//=============================================================================


let LeftSideBarItems = (props) => (
  <div className="leftSideBarItems">

    <img src={props.logo} className='sideBarLogo' alt="" />
    <p>{props.text}</p>

  </div>
);

let LeftSideBar = () => (
  <div className="leftSideBar">
    <LeftSideBarItems
      text="Mairaj Khan"
      logo={profilePhoto}
    />

    <LeftSideBarItems
      text="Friends"
      logo={friendsLogo}
    />

    <LeftSideBarItems
      text="Saved"
      logo={savedLogo}
    />

    <LeftSideBarItems
      text="Watch"
      logo={watchLogo}
    />

    <LeftSideBarItems
      text="Groups"
      logo={groupsLogo}
    />

    <LeftSideBarItems
      text="Memories"
      logo={memoriesLogo}
    />

    <LeftSideBarItems
      text="Pages"
      logo={pagesLogo}
    />

    <LeftSideBarItems
      text="Events"
      logo={eventsLogo}
    />

    <LeftSideBarItems
      text="Most Recent"
      logo={mostRecentLogo}
    />

    <LeftSideBarItems
      text="Favorites"
      logo={favoritesLogo}
    />
    {/* 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magni est laboriosam possimus aspernatur facilis. Quidem illo qui incidunt similique at nisi labore error explicabo, exercitationem accusamus cum nihil consequatur harum facere perspiciatis esse obcaecati voluptatibus nostrum odio vel temporibus provident repellat dolorem? Recusandae tenetur obcaecati voluptate at nostrum deleniti aut laborum eos vel, nesciunt distinctio facere consequatur libero labore consectetur ut non earum ratione dolorem magni sit quidem! Qui consequuntur repudiandae excepturi fuga deserunt ab, distinctio aut ad repellendus alias eum, ut cupiditate vel reiciendis. Ut illo molestias, explicabo harum consectetur non mollitia unde culpa nemo, provident dignissimos cupiditate adipisci soluta dolorem excepturi ipsam! Quae quasi quaerat labore nobis debitis porro impedit suscipit minus dolorum expedita ea, iusto quam ipsam earum dolore? Quos animi placeat nisi ex sit voluptate distinctio dolor aut maiores!
    </p> */}

  </div>
);



//=============================================================================


let Post = (props) => (
  <div className='post'>

    <div className="postHead">
      <img src={props.profilePhoto} alt="profilePhoto" className='profilePhoto' />
      <div className="nameDate">
        <p className='userName'>{props.userName}</p>
        <p className='postDate'>{moment(props.postDate).fromNow()}</p>
      </div>
    </div>

    <div className="postText">{props.postText}</div>

    <div className="postImage" >
      <img src={props.postImage} alt="" />
    </div>

    <div className='postFooter'>
      {/* <div> <FontAwesomeIcon icon={faThumbsUp} /> Like </div>
      <div> <FontAwesomeIcon icon={faComment} /> Comment</div>
      <div> <FontAwesomeIcon icon={faShare} /> Share</div> */}
      <div><i><TbThumbUp /></i><span className='iconText'>Like</span></div>
      <div><i><VscComment /></i><span className='iconText'>Comment</span></div>
      <div><i><RiShareForwardLine /></i><span className='iconText'>Share</span></div>


    </div>

  </div>
);


//=============================================================================


let PostDiv = () => (
  <div className='postDiv'>
    <Post
      userName="Alisa Henry"
      profilePhoto={pP1}
      postDate="21 Dec 2020"
      postText="Sunset does not darken the world, but it gives us hope of another bright day.
        It's we who lose hope and push ourselves into darkness."
      postImage={pI1}
    />

    <Post
      userName="William Roger"
      profilePhoto={pP2}
      postDate="11 Jan 2022"
      postText="What a peaceful view."
      postImage={pI2}
    />

    <Post
      userName="Alexendra Wilson"
      profilePhoto={pP3}
      postDate="8 Mar 2022"
      postText="New winter collection of 2022 coming soon."
      postImage={pI3}
    />

    <Post
      userName="Smith Dolton"
      profilePhoto={pP4}
      postDate="15 Jun 2022"
      postText="Art of Nature."
      postImage={pI4}
    />

    <Post
      userName=" Chiristopher Nicholas "
      profilePhoto={pP5}
      postDate="04 Aug 2022"
      // postText="When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object."
      postImage={pI5}
    />

    <Post
      userName="George Vince"
      profilePhoto={pP6}
      postDate="09 Oct 2021"
      postText="Nothing is beautiful than the beauty of nature, specially in rainy season."
      postImage={pI6}
    />

    <Post
      userName="Alisa Hank"
      profilePhoto={pP7}
      postDate="25 Oct 2021"
      postText="Let's go Dragoon !"
      postImage={pI7}
    />

  </div>

);


//=============================================================================


let Page = () => (

  <div className="page">


    {/* <h1> Facebook</h1> */}

    <div className="header">
      <Nav />
    </div>

    <div className="main">
      <LeftSideBar />
      <PostDiv />
      <RightSideBar />
    </div>

  </div>
)
ReactDOM.render(<Page />, document.querySelector('#root'));
