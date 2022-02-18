import React from 'react'
import './projects.css';



import Projectitem from './project-item';



class Projects extends React.Component {


  state = {
    sections: [
      {
        info: 'This is a Movie library app where you can search for any movies. This App is created with React and for state management I have used React hooks. I used TMDB Api for getting all the movies.',
        linkUrl: 'https://movie-search-react-2022.netlify.app/',
      title: 'The Movie Finder',

      id: 1,
    },
    {
      info: 'This is just a small project to get used to some of the basics of React.',
      linkUrl: 'https://molla2021.github.io/monsters-rolodex/',
    title: '  Monsters Rolodex',
     
      id: 2,     
    },
    {
      info: 'This is just a small project to get used to some of the basics of React.',
      linkUrl: 'https://molla2021.github.io/react-hooks/',
    title: '  CRUD App with Hooks',
    
      id: 3,
    }
    , {
      info: 'This is just a small project to get used to some of the basics of React.',
      linkUrl: 'https://molla2021.github.io/my-react-app/',
    title: '  Expense Tracker',
 
        id: 4,
      }
      , {
        info: ' “An E commerce platform made using React JS, Redux, Firebase (authentication), Firestore, Stripe API (temporarily creating dummy payment gateway) :) "',
        linkUrl: '',
        title: 'Work in Progres',
        id: 5,
      }
    ]

  }



  render() {
    return (
      <div className='projects-page' id='projects' >

        <h1 className='te'>  <span role="img" aria-label="cd"  > 💿 Projects 🚀</span>  </h1>

        <hr />


        <div className='directory-project'>


          {

            this.state.sections.map(({ title, linkUrl, info, id }) => (
              <Projectitem key={id} title={title} linkUrl={linkUrl} info={info} />
            ))
          }

        </div>

        <div className='gitwork' >
          <hr />
          <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>

          <button
            className=' buttun  grow  pointer bg-black tc br2 Center white'

            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/molla2021');
            }}
          > <i className="cib-github"></i>
            {' '}Github</button>
          <hr />

        </div>

      </div>

    )
  }
}
export default Projects;
