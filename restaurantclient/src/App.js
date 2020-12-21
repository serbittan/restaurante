import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import { FirebaseContext, firebase } from './firebase'
import { ProjectState } from './firebase'

import { Orders, Menu, NewMeal } from './components/pages'
import { Sidebar } from './components/ui'



function App() {
  return (
    <>
      <ProjectState>
        <Router>
          <div className="md:flex min-h-screen">
            <Sidebar />
          
            <div className="p-6 md:w-3/6 xl:w-4/6 ">
              <Switch>
                <Route exact path="/" component={Orders} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/new-meal" component={NewMeal} />
              </Switch>
            </div>
          </div>
        </Router>
      </ProjectState>
    </>
  )
}
      


export default App
